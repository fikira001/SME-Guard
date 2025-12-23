
import { GoogleGenerativeAI } from "@google/generative-ai";

const API_KEY = process.env.VITE_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(API_KEY);

async function test() {
    console.log("Testing gemini-pro on v1beta (default)...");
    try {
        const model = genAI.getGenerativeModel({ model: "gemini-pro" });
        const result = await model.generateContent("Hello?");
        console.log("Success with gemini-pro:", result.response.text());
    } catch (error) {
        console.error("Error with gemini-pro:", error.message);
    }
}

test();
