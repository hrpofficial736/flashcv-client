import { createClient } from "@supabase/supabase-js";

export const supabaseClient = createClient(
  import.meta.env.VITE_SUPABASE_PROJECT_URI,
  import.meta.env.VITE_SUPABASE_ANON_KEY,
);
