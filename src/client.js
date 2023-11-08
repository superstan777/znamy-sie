import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  process.env.REACT_APP_SUPABASE_API_KEY,
  process.env.REACT_APP_SUPABASE_PASSWORD
);
