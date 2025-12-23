
import { GoogleGenerativeAI } from "@google/generative-ai";

const API_KEY = process.env.VITE_GEMINI_API_KEY;

if (!API_KEY) {
    console.error("API Key missing");
    process.exit(1);
}

const genAI = new GoogleGenerativeAI(API_KEY);

async function test() {
    console.log("Testing gemini-2.0-flash...");
    try {
        const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
        const result = await model.generateContent("Hello, are you working?");
        console.log("Success:", result.response.text());
    } catch (error) {
        console.error("Error with gemini-2.0-flash:", error.message);

        console.log("\nTrying gemini-1.5-flash as backup...");
        try {
            const modelBackup = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
            const resultBackup = await modelBackup.generateContent("Hello?");
            console.log("Success with 1.5-flash:", resultBackup.response.text());
        } catch (e2) {
            console.error("Error with 1.5-flash:", e2.message);
        }
    }
}

test();
