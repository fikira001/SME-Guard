
import { GoogleGenerativeAI } from "@google/generative-ai";

const API_KEY = process.env.VITE_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(API_KEY);

async function test() {
    console.log("Testing gemini-2.0-flash...");
    try {
        const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
        const result = await model.generateContent("Hello?");
        console.log("Success:", result.response.text());
    } catch (error) {
        console.error("Error:", error.message);
    }
}

test();
