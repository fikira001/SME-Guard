
import { GoogleGenerativeAI } from "@google/generative-ai";

const API_KEY = process.env.VITE_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(API_KEY);

async function check(name) {
    try {
        const model = genAI.getGenerativeModel({ model: name });
        const result = await model.generateContent("Hit");
        console.log(`SUCCESS: ${name}`);
        return true;
    } catch (e) {
        console.log(`FAILED: ${name} - ${e.message.substring(0, 50)}`);
        return false;
    }
}

async function run() {
    await check("gemini-1.5-flash-8b");
    await check("gemini-1.5-flash-001");
    // await check("gemini-1.5-pro"); // Avoid pro for now (quota)
}

run();
