# Technology Stack: SME-Guard

This document outlines the technologies used to build **SME-Guard**, a gamified cybersecurity awareness platform for Nigerian SMEs.

## 1. Frontend Framework
*   **React (v18+)**: The core library for building the user interface. We used React because it allows us to build reusable components (like the Navbar, Quiz, and Module Cards) and manage the state of the application efficiently.
*   **Vite**: The build tool and development server. It replaces the older "Create React App" and provides instant server start times and very fast hot module replacement (HMR), making development much quicker.

## 2. Styling & UI
*   **Tailwind CSS**: A utility-first CSS framework. Instead of writing separate `.css` files, we use classes like `flex`, `text-center`, `bg-green-500` directly in our JSX. This allows for rapid UI development and easy responsiveness (mobile-friendly designs).
*   **Lucide React**: A library for icons. We use it for all the visuals like the Shield, Lock, Trophy, and User icons. It's lightweight and customizable.

## 3. Backend & Database (Serverless)
*   **Firebase**: We use Google's Firebase as a "Backend-as-a-Service" (BaaS). This means we didn't need to write a custom Node.js or Python server.
    *   **Firebase Authentication**: Handles all user management (Sign Up, Login, Logout). It securely stores passwords and manages user sessions.
    *   **Cloud Firestore**: A NoSQL real-time database. We use it to store:
        *   **User Profiles**: Name, Business Name, Email.
        *   **Progress**: XP (Experience Points), Completed Modules, Badges.
        *   **Leaderboard**: Global rankings of all users.
    *   **Real-time Updates**: We use Firestore's `onSnapshot` feature to instantly update the user's XP and Dashboard without needing to refresh the page.

## 4. Routing & Navigation
*   **React Router (v6)**: Handles navigation between pages (e.g., going from `/dashboard` to `/modules/1`) without reloading the browser. It enables the "Single Page Application" (SPA) feel.

## 5. State Management
*   **Context API**: Built-in React feature used to share data globally across the app.
    *   `AuthContext`: Stores the current logged-in user and their profile data.
    *   `DataContext`: Stores the list of modules and handles the logic for completing a module and awarding XP.
    *   `ThemeContext`: Manages the Dark/Light mode preference.

## 6. Deployment
*   **Netlify**: The hosting platform. It serves our static frontend files globally.
*   **Git/GitHub**: Version control to track changes and collaborate.

## Summary of How It Works
1.  **User Visits Site**: Netlify serves the React app.
2.  **User Logs In**: React calls Firebase Auth to verify credentials.
3.  **Data Fetching**: `AuthContext` listens to Firestore for the user's profile and XP.
4.  **Interaction**: When a user finishes a quiz, `DataContext` updates the Firestore database.
5.  **Real-time UI**: Because of the Firestore listener, the XP in the Navbar updates instantly across all open tabs.
