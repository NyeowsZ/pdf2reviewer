"use server";
import axios from "axios";
import "dotenv/config";

export const handleLLM = async (prompt: string) => {
  const apiKey = process.env.GEMINI_API_KEY;
  const model = process.env.GEMINI_AI_MODEL;

  const response = await axios.post(
    `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent`,
    {
      contents: [{ parts: [{ text: prompt }] }],
      generationConfig: { thinkingConfig: { thinkingLevel: "minimal" } },
    },
    {
      headers: {
        "x-goog-api-key": apiKey,
        "Content-Type": "application/json",
      },
    },
  );

  const res = response.data.candidates[0].content;

  if (res.parts[1]?.text) {
    return res.parts[1].text;
  } else {
    return res.parts[0].text;
  }
};
