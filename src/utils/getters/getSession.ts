// import { supabaseClient } from "../../services/supabaseClient";

// export default async function getSession(param: string) {
//   const {
//     data: { session },
//   } = await supabaseClient.auth.getSession();
//   if (session) {
//    const userEmail = (await supabaseClient.auth.getUser()).data.user?.email;
//    if (userEmail?.split("@")[0] === param) return true;
//    else false;
//   }
//   return false;
// }
