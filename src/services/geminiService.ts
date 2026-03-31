import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || "" });

export const generatePoolAdvice = async (query: string) => {
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: `The user is asking about pool maintenance: "${query}". Provide a professional, high-end advice snippet for a luxury pool cleaning company website. Keep it concise and focused on water clarity and equipment longevity.`,
    config: {
      systemInstruction: "You are a luxury pool maintenance expert. Your tone is professional, sophisticated, and reassuring.",
    },
  });
  return response.text;
};
