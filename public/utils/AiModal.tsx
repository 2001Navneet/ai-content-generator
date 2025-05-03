// geminiChat.js
import { GoogleGenerativeAI } from "@google/generative-ai";

// Get the API key from environment variables
const apiKey = process.env.NEXT_PUBLIC_GOOGLE_GEMINI_API_KEY;

if (!apiKey) {
  throw new Error(
    "NEXT_PUBLIC_GOOGLE_GEMINI_API_KEY is not defined in environment variables."
  );
}

// Initialize the Gemini API
const genAI = new GoogleGenerativeAI(apiKey);

async function main() {
  try {
    // Load the Gemini 1.5 Flash model
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    // Start a chat session (optional history)
    const chat = await model.startChat({
      history: [
        {
          role: "user",
          parts: [{ text: "What is AI?" }],
        },
        {
          role: "model",
          parts: [
            {
              text: "AI stands for Artificial Intelligence, which refers to machines that can mimic human intelligence.",
            },
          ],
        },
      ],
    });

    // Send a new user message
    const result = await chat.sendMessage("Can you give a real-life use case?");
    const response = result.response;
    const text = response.text();

    // Output the response
    console.log("Gemini says:", text);
  } catch (err) {
    console.error("Error with Gemini API:", err);
  }
}

// Run the chat
main();
