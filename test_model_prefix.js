
import { GoogleGenerativeAI } from "@google/generative-ai";

const API_KEY = process.env.VITE_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(API_KEY);

async function test() {
    console.log("Testing with prefix 'models/gemini-2.0-flash'...");
    try {
        const model = genAI.getGenerativeModel({ model: "models/gemini-2.0-flash" });
        const result = await model.generateContent("Hello?");
        console.log("Success with prefix:", result.response.text());
    } catch (error) {
        console.error("Error with prefix:", error.message);
    }

    console.log("Testing 'gemini-1.5-flash'...");
    try {
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
        const result = await model.generateContent("Hello?");
        console.log("Success with 1.5-flash:", result.response.text());
    } catch (error) {
        console.error("Error with 1.5-flash:", error.message);
    }
}

test();
