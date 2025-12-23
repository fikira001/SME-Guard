import { GoogleGenerativeAI } from "@google/generative-ai";

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

// Initialize Gemini
let genAI = null;
if (API_KEY) {
    genAI = new GoogleGenerativeAI(API_KEY);
}

const LOCAL_RESPONSES = [
    {
        keywords: ["phishing", "email", "link", "clicks", "fake", "spam"],
        text: "**Phishing Defense 101**:\n1. **Verify Sender**: Check the email address carefully (e.g., `gmail.com` vs `gtbank.com`).\n2. **Don't Rush**: Scammers create false urgency (\"Act now!\").\n3. **Hover Links**: Check the actual URL before clicking.\n\n*Action*: Forward suspicious emails to IT or report them."
    },
    {
        keywords: ["password", "login", "credential", "hack", "access", "strong"],
        text: "**Password Best Practices**:\n- Length: 12+ characters.\n- Complexity: Mix letters, numbers, symbols.\n- **Crucial**: Enable Multi-Factor Authentication (MFA/2FA) on all accounts."
    },
    {
        keywords: ["wifi", "network", "internet", "public", "connection"],
        text: "**Network Security**:\n- Avoid public Wi-Fi for business transactions.\n- Use a VPN if you must connect remotely.\n- Ensure your office Wi-Fi has a strong password (WPA2/WPA3)."
    },
    {
        keywords: ["scam", "fraud", "money", "bank", "alert", "transfer"],
        text: "**Financial Safety**:\n- Banks never ask for PINs/OTPs via phone/SMS.\n- Verify all payment requests by calling the vendor on a known number (Voice Verification).\n- Be skeptical of \"too good to be true\" offers."
    },
    {
        keywords: ["company", "business", "sme", "advice", "do", "secure", "start", "help", "guide"],
        text: "**Securing Your Business**:\n1. **Train Employees**: They are your first line of defense.\n2. **Update Software**: Keep Windows/Antivirus updated.\n3. **Backup Data**: Use cloud backups (Google Drive/OneDrive) to protect against Ransomware.\n4. **Control Access**: Only give employees access to files they strictly need."
    },
    {
        keywords: ["hello", "hi", "hey", "greeting", "morning", "afternoon"],
        text: "Hello! I am your SME-Guard Security Assistant.\n\nI can help you with:\n- Identifying **Phishing**\n- Creating **Strong Passwords**\n- Securing your **Business**\n\nWhat topic interests you?"
    }
];

function getLocalResponse(query, context) {
    const lowerQuery = query.toLowerCase();

    // Check for specific keywords
    for (const item of LOCAL_RESPONSES) {
        if (item.keywords.some(k => lowerQuery.includes(k))) {
            return item.text + "\n\n*(⚡ Verified Security Response)*";
        }
    }

    // Generic fallback for unknown queries
    return `**I'm here to help!**\n\nTry asking about:\n- **Phishing** red flags\n- **Password** security\n- How to secure your **Business**\n- **Banking** safety\n\n*(⚡ Instant Expert Answer)*`;
}

export async function generateQuizQuestions(content) {
    if (!genAI) {
        console.warn("Gemini API Key missing. Using fallback questions.");
        return null;
    }

    // Attempt multiple models for robustness
    const modelsToTry = ["gemini-1.5-flash-8b", "gemini-1.5-flash", "gemini-pro"];

    for (const modelName of modelsToTry) {
        try {
            console.log(`Attempting quiz generation with model: ${modelName}`);
            const model = genAI.getGenerativeModel({ model: modelName });
            const prompt = `
            Generate 5 unique multiple-choice cybersecurity questions based on: "${content.substring(0, 1000)}..."
            
            Format: JSON Array only.
            [{"q":"?","options":["A","B","C","D"],"correct":0}]
            `;

            const result = await model.generateContent(prompt);
            const response = await result.response;
            const text = response.text();

            const jsonStr = text.replace(/```json/g, '').replace(/```/g, '').trim();
            return JSON.parse(jsonStr);

        } catch (error) {
            console.warn(`Failed with ${modelName}:`, error.message);
        }
    }

    return null;
}

export async function chatWithSecurityBot(userMessage, context = "") {
    if (!genAI) {
        return getLocalResponse(userMessage, context);
    }

    // Aggressive retry usage to ensure "Live" feel
    // 1. Flash 8b (Fast/New)
    // 2. Flash (Standard)
    // 3. Pro (Legacy/Strong)
    const modelsToTry = ["gemini-1.5-flash-8b", "gemini-1.5-flash", "gemini-pro"];

    for (const modelName of modelsToTry) {
        try {
            const model = genAI.getGenerativeModel({ model: modelName });

            const history = [
                {
                    role: "user",
                    parts: [{
                        text: `
                You are "SME-Guard Bot", an AI cybersecurity expert.
                Context: ${context}
                Guidelines:
                1. Professional, concise (under 100 words).
                2. Use **Markdown** for emphasis.
                3. Reference Nigerian context (banks/laws).
                ` }]
                },
                {
                    role: "model",
                    parts: [{ text: "Hello. I am ready to help secure your business." }]
                }
            ];

            const chat = model.startChat({
                history: history,
                generationConfig: { maxOutputTokens: 250 },
            });

            const result = await chat.sendMessage(userMessage);
            const response = await result.response;
            return response.text();

        } catch (error) {
            console.warn(`Chat model ${modelName} failed:`, error.message);
            // Proceed to next model
        }
    }

    // Fallback if ALL clouds fail
    return getLocalResponse(userMessage, context);
}
