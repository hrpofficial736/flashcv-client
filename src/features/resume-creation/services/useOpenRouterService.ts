import axios from "axios";

export default function useOpenRouterService() {
  return { generateText };
}

const generateText = async (text: string, type: "personal" | "job") => {
  let content: string = "";
  if (type === "personal")
    content = `Generate a description in 1st person like an intro not more than 20 words for this job title : ${text}`;
  else
    content = `Generate a description for the job responsibilities in 1st person not more than 20 words for this job title : ${text}`;
  try {
    const response = await axios.post(
      import.meta.env.VITE_OPENROUTER_URI,
      {
        model: "mistralai/mistral-small-24b-instruct-2501:free",
        messages: [{ role: "user", content: content }],
      },
      {
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_OPENROUTER_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );
    if (response?.status === 429) {
      console.log("You've hit the free limit. Try again later.");
    }
    return response.data.choices[0].message.content;
  } catch (error) {
    console.log("Error: ", error);
  }
};
