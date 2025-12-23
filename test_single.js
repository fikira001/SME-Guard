
import { GoogleGenerativeAI } from "@google/generative-ai";

const API_KEY = process.env.VITE_GEMINI_API_KEY;

async function test() {
    console.log("Testing SINGLE request to gemini-1.5-flash...");
    const genAI = new GoogleGenerativeAI(API_KEY);
    try {
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
        const result = await model.generateContent("Hello?");
        console.log("SUCCESS:", result.response.text());
    } catch (error) {
        console.error("FAILED:", error.message);
        console.error("Full Error:", JSON.stringify(error, null, 2));
    }
}

test();
