CREATE TYPE public.app_role AS ENUM ('client', 'scenographer', 'admin');
CREATE TABLE public.profiles (
 id uuid PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
 full_name text NOT NULL CHECK (length(trim(full_name)) BETWEEN 2 AND 120),
 email text NOT NULL,
 phone text,
 avatar_url text,
 created_at timestamptz NOT NULL DEFAULT now()
);
GRANT SELECT ON public.profiles TO authenticated;
GRANT UPDATE (full_name, phone, avatar_url) ON public.profiles TO authenticated;
GRANT ALL ON public.profiles TO service_role;
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
CREATE POLICY profiles_read_own ON public.profiles FOR SELECT TO authenticated USING (id = auth.uid());
CREATE POLICY profiles_update_own ON public.profiles FOR UPDATE TO authenticated USING (id = auth.uid()) WITH CHECK (id = auth.uid());
CREATE TABLE public.user_roles (
 id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
 user_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE UNIQUE,
 role public.app_role NOT NULL
);
GRANT SELECT ON public.user_roles TO authenticated;
GRANT ALL ON public.user_roles TO service_role;
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;
CREATE POLICY roles_read_own ON public.user_roles FOR SELECT TO authenticated USING (user_id = auth.uid());
CREATE FUNCTION public.has_role(_user_id uuid, _role public.app_role) RETURNS boolean LANGUAGE sql STABLE SECURITY DEFINER SET search_path = public AS $$ SELECT EXISTS(SELECT 1 FROM public.user_roles WHERE user_id = _user_id AND role = _role) $$;
REVOKE ALL ON FUNCTION public.has_role(uuid, public.app_role) FROM PUBLIC;
GRANT EXECUTE ON FUNCTION public.has_role(uuid, public.app_role) TO authenticated, service_role;
CREATE TABLE public.scenographer_profiles (
 user_id uuid PRIMARY KEY REFERENCES public.profiles(id) ON DELETE CASCADE,
 biography text NOT NULL DEFAULT '',
 specialties text[] NOT NULL DEFAULT '{}',
 skills text[] NOT NULL DEFAULT '{}',
 approval_status text NOT NULL DEFAULT 'pending' CHECK (approval_status IN ('pending', 'approved', 'rejected')),
 availability text NOT NULL DEFAULT 'available' CHECK (availability IN ('available','busy','unavailable'))
);
GRANT SELECT ON public.scenographer_profiles TO authenticated;
GRANT UPDATE (biography, specialties, skills, availability) ON public.scenographer_profiles TO authenticated;
GRANT ALL ON public.scenographer_profiles TO service_role;
ALTER TABLE public.scenographer_profiles ENABLE ROW LEVEL SECURITY;
CREATE POLICY scenographers_read_own ON public.scenographer_profiles FOR SELECT TO authenticated USING (user_id = auth.uid());
CREATE POLICY scenographers_update_own ON public.scenographer_profiles FOR UPDATE TO authenticated USING (user_id = auth.uid()) WITH CHECK (user_id = auth.uid());
CREATE FUNCTION public.handle_registration() RETURNS trigger LANGUAGE plpgsql SECURITY DEFINER SET search_path = public AS $$
DECLARE account_type text := NEW.raw_user_meta_data->>'account_type';
BEGIN
 IF account_type IS NULL THEN RETURN NEW; END IF;
 IF account_type NOT IN ('client', 'scenographer') THEN RAISE EXCEPTION 'Registration account type must be client or scenographer'; END IF;
 IF length(trim(coalesce(NEW.raw_user_meta_data->>'full_name',''))) < 2 THEN RAISE EXCEPTION 'Full name is required'; END IF;
 IF account_type = 'scenographer' AND (length(trim(coalesce(NEW.raw_user_meta_data->>'phone',''))) = 0 OR length(trim(coalesce(NEW.raw_user_meta_data->>'specialty',''))) = 0 OR length(trim(coalesce(NEW.raw_user_meta_data->>'biography',''))) = 0 OR length(trim(coalesce(NEW.raw_user_meta_data->>'skills',''))) = 0) THEN RAISE EXCEPTION 'Professional registration details are required'; END IF;
 INSERT INTO public.profiles (id, full_name, email, phone) VALUES (NEW.id, trim(NEW.raw_user_meta_data->>'full_name'), NEW.email, nullif(trim(NEW.raw_user_meta_data->>'phone'),''));
 INSERT INTO public.user_roles (user_id, role) VALUES (NEW.id, account_type::public.app_role);
 IF account_type = 'scenographer' THEN
 INSERT INTO public.scenographer_profiles(user_id, biography, specialties, skills) VALUES (NEW.id, NEW.raw_user_meta_data->>'biography', ARRAY[NEW.raw_user_meta_data->>'specialty'], string_to_array(NEW.raw_user_meta_data->>'skills', ','));
 END IF;
 RETURN NEW;
END $$;
REVOKE ALL ON FUNCTION public.handle_registration() FROM PUBLIC;
CREATE TRIGGER on_app_user_registered AFTER INSERT ON auth.users FOR EACH ROW EXECUTE FUNCTION public.handle_registration();