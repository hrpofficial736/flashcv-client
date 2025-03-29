import { LoginUser, NewUser } from "../exports/interfaces/exports";
import {generateCodeChallenge, generateCodeVerifier} from "../../../utils/helpers/authCodeHelpers";

export default function useCustomAuth() {
  const signInWithProvider = async (
    provider: "google" | "twitter",

  ): Promise<boolean> => {
    const codeVerifier = generateCodeVerifier();
    localStorage.setItem("twitter_code_verifier", codeVerifier);
    const challenge = await generateCodeChallenge(codeVerifier);
    const twitterState = crypto.randomUUID();
    localStorage.setItem("twitter_oauth_state", twitterState);
    try {
      if (provider === "google") {
        const googleAuthUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${
          import.meta.env.VITE_GOOGLE_CLIENT_ID
        }&redirect_uri=${
          import.meta.env.VITE_GOOGLE_REDIRECT_URI
        }&response_type=token&scope=email%20profile`;
        window.location.href = googleAuthUrl;
        return true;
      }
      const twitterAuthUrl = `https://twitter.com/i/oauth2/authorize?response_type=code&client_id=${encodeURIComponent(
        import.meta.env.VITE_TWITTER_CLIENT_ID
      )}&redirect_uri=${encodeURIComponent(
        import.meta.env.VITE_TWITTER_REDIRECT_URI
      )}&scope=${encodeURIComponent(
        "tweet.read users.read users.email"
      )}&state=${twitterState}&code_challenge=${challenge}&code_challenge_method=S256`;
      window.location.href = twitterAuthUrl;
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  };

  // const logInWithEmailPassword = async (
  //   userInfo: LoginUser
  // ): Promise<boolean> => {
  //   const response = await signIn?.create({
  //     identifier: userInfo.email,
  //     password: userInfo.password,
  //   });
  //   console.log(response);

  //   return true;
  // };

  // const registerWithEmailPassword = async (
  //   userInfo: NewUser
  // ): Promise<boolean> => {
  //   const response = await signUp?.create({
  //     emailAddress: userInfo.email,
  //     firstName: userInfo.name.split(" ")[0],
  //     lastName: userInfo.name.split(" ")[1],
  //     password: userInfo.password,
  //   });
  //   console.log(response);

  //   return true;
  // };

  // const logOut = async () => {
  //   await signOut();
  // };

  return {
    signInWithProvider,
  };
}
