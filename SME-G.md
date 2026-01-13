# SME-Guard Software Analysis

## 1. Project Overview
**SME-Guard** is a gamified cybersecurity awareness and training platform designed specifically for Small and Medium Enterprises (SMEs), with a focus on the Nigerian market. It aims to educate business owners and employees on how to identify, prevent, and respond to cyber threats.

The application combines interactive learning modules with an AI-powered assistant to provide a comprehensive security training experience.

## 2. Technical Architecture
*   **Frontend Framework**: React 19 (via Vite 7)
*   **Styling**: Tailwind CSS
*   **Backend/Authentication**: Firebase
*   **AI Integration**: Google Gemini API (`@google/generative-ai`)
*   **Routing**: React Router v6
*   **Icons**: Lucide React

## 3. Key Features

### 📚 Interactive Learning Modules
The core of the application consists of 12 detailed modules covering various security topics:
*   **Phishing & Fraud**: BEC, Smishing, Vishing, and identifying fake websites.
*   **Password Security**: MFA, Passkeys, and credential stuffing defense.
*   **Device Security**: Mobile MDM, POS terminal security, and public Wi-Fi safety.
*   **Advanced Topics**: Ransomware, Insider Threats, Supply Chain Security, and Data Privacy (NDPR/GDPR).

### 🤖 AI Security Bot ("SME-Guard Assistant")
A persistent chatbot available throughout the application (implemented in `src/components/Chatbot/SecurityBot.jsx`).
*   **Function**: Answers user queries about security in real-time.
*   **Context-Aware**: Uses current user context (Name, Business Name, XP) to personalize responses.
*   **Hybrid Engine**:
    *   **Online**: Uses Google Gemini (Flash-8b, Flash, Pro models) for dynamic, complex answers.
    *   **Offline/Fallback**: Uses a pre-defined local JSON database (`LOCAL_RESPONSES`) for common keywords like "phishing", "password", etc., ensuring functionality even without internet or API access.
*   **Quiz Generation**: Can dynamically generate quizzes based on chat history.

### 🎮 Gamification
*   **XP System**: Users earn Experience Points (XP) for completing modules.
*   **Leaderboard**: Tracks progress against other users.
*   **Badges**: Visual rewards for milestones.

### 🇳🇬 Localized Content
The content is tailored to the Nigerian context, referencing:
*   NDPR (Nigeria Data Protection Regulation).
*   NITDA (National Information Technology Development Agency).
*   Local banking scams (GTBank examples, BVN issues).

## 4. Diagnosis: Why the Gemini API is Not Working

The "SME-Guard Assistant" is currently functioning in **Offline Mode** (fallback) because the application cannot authenticate with the Google Gemini API.

### Root Cause
The application attempts to load the API key from an environment variable in `src/services/aiService.js`:

```javascript
const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
```

**The Issue**: The `.env` file (or `.env.local`) which should contain this key is **missing** from the project root. Without this file, `API_KEY` is `undefined`, and the AI service initializes in null/offline mode:

```javascript
if (!genAI) {
    console.warn("Gemini API Key missing. Using fallback questions.");
    return null; // or uses local responses
}
```

### Solution
To enable the full AI capabilities, you must create a file named `.env` in the root directory (`C:\Users\Fikira\Antigravity\sme-guard\.env`) with the following content:

```env
VITE_GEMINI_API_KEY=your_actual_api_key_here
```

*Note: You will need to obtain a valid API key from Google AI Studio.*
