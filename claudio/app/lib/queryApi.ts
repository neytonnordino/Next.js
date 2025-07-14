import { error } from "console";
import openai from "./chatgpt";

const query = async (prompt: string, id: string, model: string) => {
  const res = await openai.chat.completions
    .create({
      model,
      messages: [
        { role: "system", content: "You are ChatGPT, a helpful assistant." },
        { role: "user", content: prompt },
      ],
      temperature: 0.9,
      top_p: 1,
      max_completion_tokens: 1000,
      frequency_penalty: 0,
      presence_penalty: 0,
    })
    .then((res) => res.choices[0].message.content)
    .catch(
      (error) =>
        `Claudio was unable to find an answer fot that! (Error: ${error?.message})`
    );
  return res;
};

export default query