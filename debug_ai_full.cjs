
const { GoogleGenerativeAI } = require("@google/generative-ai");

const API_KEY = process.env.VITE_GEMINI_API_KEY;

async function testModel(name) {
    console.log(`\n--- Testing ${name} ---`);
    const genAI = new GoogleGenerativeAI(API_KEY);
    try {
        const model = genAI.getGenerativeModel({ model: name });
        const result = await model.generateContent("Hello?");
        console.log(`SUCCESS [${name}]:`, result.response.text().substring(0, 50) + "...");
        return true;
    } catch (e) {
        console.error(`FAILED [${name}]:`, e.message);
        // Check for specific error details
        if (e.message.includes("404")) console.error("  -> 404 Not Found (Model/Version mismatch?)");
        if (e.message.includes("429")) console.error("  -> 429 Quota Exceeded");
        return false;
    }
}

async function run() {
    if (!API_KEY) {
        console.error("No API KEY!");
        return;
    }

    // Test common models
    await testModel("gemini-1.5-flash");
    await testModel("gemini-1.5-flash-latest");
    await testModel("gemini-pro");
    await testModel("gemini-2.0-flash");

    // Test with explicit usage of fetch (REST) to see if v1beta is hardcoded
    console.log("\n--- Testing REST API (v1beta vs v1) ---");
    const models = ["gemini-pro", "gemini-1.5-flash"];

    for (const m of models) {
        // Try v1beta
        try {
            const r = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${m}:generateContent?key=${API_KEY}`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ contents: [{ parts: [{ text: "Hi" }] }] })
            });
            const d = await r.json();
            if (d.error) console.error(`REST v1beta [${m}]:`, d.error.message);
            else console.log(`REST v1beta [${m}]: SUCCESS`);
        } catch (e) { console.error("Fetch Error:", e); }

        // Try v1 (Stable) - primarily for gemini-pro
        try {
            const r = await fetch(`https://generativelanguage.googleapis.com/v1/models/${m}:generateContent?key=${API_KEY}`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ contents: [{ parts: [{ text: "Hi" }] }] })
            });
            const d = await r.json();
            if (d.error) console.error(`REST v1 [${m}]:`, d.error.message);
            else console.log(`REST v1 [${m}]: SUCCESS`);
        } catch (e) { console.error("Fetch Error:", e); }
    }
}

run();
