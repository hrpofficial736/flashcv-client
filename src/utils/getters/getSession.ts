import { supabaseClient } from "../../services/supabaseClient";

export default async function getSession() {
  const {
    data: { session },
  } = await supabaseClient.auth.getSession();
  if (session) return true;
  return false;
}
