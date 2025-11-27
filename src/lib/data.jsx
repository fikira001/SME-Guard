import React from 'react';
import {
    Shield, Lock, BookOpen, ChevronRight,
    User, LogOut, CheckCircle, AlertTriangle,
    Trophy, Star, BarChart, Smartphone, Wifi, Mail,
    Layout, Home, FileText, Menu, X, Instagram, Twitter, Linkedin
} from 'lucide-react';

export const MODULES_DATA = [
    {
        id: 1,
        title: "Phishing & Fake Alerts",
        description: "Identify fake bank alerts and malicious emails common in Nigeria.",
        icon: <Mail className="w-6 h-6 text-blue-500" />,
        xpReward: 100,
        resource: {
            title: "Spotting the 'Fake Alert'",
            content: `Phishing is the most common attack in Nigeria. Scammers send emails pretending to be from GTBank, Zenith, or FIRS. 
      
      KEY SIGNS OF A FAKE ALERT:
      1. Generic Greetings: 'Dear Customer' instead of your name.
      2. Urgency: 'Your account will be blocked in 24 hours.'
      3. Suspicious Links: Hover over links. If it says 'gtb-secure-login.com' instead of 'gtbank.com', it is fake.
      4. SMS Alerts: Always check your actual bank app balance. Never trust an SMS credit alert alone before releasing goods.`
        },
        questions: [
            { q: "You receive an SMS crediting your account for goods, but your bank app doesn't show it. What do you do?", options: ["Release the goods immediately", "Wait for the app to reflect the balance", "Call the customer's bank", "Reply to the SMS"], correct: 1 },
            { q: "An email from 'FIRS-Support' asks you to click a link to update your Tax ID or face a fine. What is this?", options: ["A legitimate request", "A Phishing attempt", "A system error", "A network update"], correct: 1 },
            { q: "What is the safest way to visit your bank's website?", options: ["Click a link in an email", "Search on Google and click the first ad", "Type the URL directly into the browser", "Use a link sent via WhatsApp"], correct: 2 },
            { q: "Which of these is a strong indicator of a phishing email?", options: ["It uses your correct name", "It comes from a public domain like @gmail.com", "It has a professional logo", "It is written in formal English"], correct: 1 },
            { q: "You accidentally clicked a phishing link. What is your first step?", options: ["Ignore it", "Disconnect from internet and change passwords", "Reply to the email apologizing", "Delete the browser history"], correct: 1 },
            { q: "What does 'BEC' stand for in cybersecurity?", options: ["Bank Email Code", "Business Email Compromise", "Basic Encryption Code", "Binary Email Check"], correct: 1 },
            { q: "A vendor emails you changing their account number for payment urgently. What should you do?", options: ["Pay immediately", "Call the vendor on a known number to verify", "Reply to the email to confirm", "Ignore the invoice"], correct: 1 },
            { q: "True or False: HTTPS guarantees a website is legitimate.", options: ["True", "False"], correct: 1 },
            { q: "Which information should you NEVER share via email?", options: ["Your business address", "Your BVN and PIN", "Your product catalog", "Your office phone number"], correct: 1 },
            { q: "What is 'Social Engineering'?", options: ["Building social media apps", "Manipulating people into giving up confidential info", "Organizing office parties", "Networking events"], correct: 1 },
        ]
    },
    {
        id: 2,
        title: "Password Security",
        description: "Stop using '123456'. Learn to secure your business accounts.",
        icon: <Lock className="w-6 h-6 text-red-500" />,
        xpReward: 100,
        resource: {
            title: "The Power of Passphrases",
            content: `Many Nigerian SMEs use weak passwords like 'password123' or their company name.
      
      BEST PRACTICES:
      1. Length beats Complexity: 'Horse-Battery-Staple-Correct' is harder to crack than 'P@ssw0rd1'.
      2. Unique Passwords: Never use the same password for your CAC portal and your Instagram.
      3. 2FA (Two-Factor Authentication): Always enable OTP or Authenticator apps (Google Authenticator) for banking and email.`
        },
        questions: [
            { q: "Which password is the strongest?", options: ["Lagos2023", "P@ssword", "Correct-Horse-Battery-Staple-Blue", "Admin123"], correct: 2 },
            { q: "Why is reusing passwords dangerous?", options: ["It is hard to remember", "If one site is breached, hackers get access to all", "It confuses the computer", "It expires faster"], correct: 1 },
            { q: "What is 2FA?", options: ["Two-Factor Authentication", "Two-Fast Access", "To-For Action", "Two-File Access"], correct: 0 },
            { q: "Where should you store your passwords?", options: ["On a sticky note", "In a 'Passwords' word document", "In a Password Manager", "In your email drafts"], correct: 2 },
            { q: "How often should you force employees to change passwords?", options: ["Every week", "Only when compromised", "Every 90 days (standard practice)", "Never"], correct: 2 },
            { q: "Is 'Mypassword123' a good password?", options: ["Yes, it has numbers", "No, it is too common", "Yes, it has capital letters", "No, it needs symbols"], correct: 1 },
            { q: "What is a 'Brute Force' attack?", options: ["Physically breaking the server", "Guessing passwords using trial and error software", "Stealing the computer", "Forcing an employee to login"], correct: 1 },
            { q: "What is the best way to share a password with a colleague?", options: ["WhatsApp", "Email", "Don't share it; create a separate account for them", "Write it on paper"], correct: 2 },
            { q: "Can a strong password protect you from Phishing?", options: ["Yes", "No, if you give it away, it doesn't matter how strong it is", "Only if it has symbols", "Only on mobile"], correct: 1 },
            { q: "Which of these is a bad password habit?", options: ["Using a phrase", "Using a password manager", "Sharing passwords with interns", "Enabling MFA"], correct: 2 },
        ]
    },
    {
        id: 3,
        title: "Mobile & POS Security",
        description: "Securing Point of Sale terminals and business phones.",
        icon: <Smartphone className="w-6 h-6 text-green-500" />,
        xpReward: 100,
        resource: {
            title: "Mobile Security for SMEs",
            content: `Your phone is now your office. 
      
      POS SAFETY:
      - Never leave your POS terminal unattended.
      - Check for 'skimmers' (strange attachments) on the card slot.
      - Ensure your staff doesn't photograph customer cards.
      
      PHONE SAFETY:
      - Install an antivirus.
      - Don't install apps from unknown sources (APK files).`
        },
        questions: [
            { q: "Why should you not root or jailbreak your business phone?", options: ["It voids warranty", "It removes security sandboxes", "It makes the battery die", "It deletes photos"], correct: 1 },
            { q: "You find a USB drive in your office lobby. What do you do?", options: ["Plug it in to see who owns it", "Give it to IT/Security", "Throw it away", "Format it"], correct: 1 },
            { q: "What is 'Juice Jacking'?", options: ["Stealing battery power", "Data theft via public USB charging stations", "Spilling juice on a phone", "Overcharging a device"], correct: 1 },
            { q: "Is it safe to do business banking on public Wi-Fi?", options: ["Yes, always", "No, hackers can intercept data", "Only if using Incognito mode", "Yes, if the Wi-Fi has a password"], correct: 1 },
            { q: "What should you do before selling an old work phone?", options: ["Delete photos", "Factory Reset", "Remove SIM card", "All of the above"], correct: 3 },
            { q: "Should you allow staff to install games on the company POS device?", options: ["Yes, for break time", "No, it introduces vulnerabilities", "Only educational games", "If they pay for data"], correct: 1 },
            { q: "What is a SIM Swap attack?", options: ["Trading SIMs with a friend", "Attackers tricking the carrier to transfer your number to their SIM", "Buying a dual SIM phone", "Upgrading to 4G"], correct: 1 },
            { q: "How do you prevent SIM Swap?", options: ["Don't use a phone", "Set a PIN on your SIM card via settings", "Only use WiFi", "Use a feature phone"], correct: 1 },
            { q: "Why are screen locks important?", options: ["They look cool", "They prevent unauthorized access if lost", "They save battery", "They stop dust"], correct: 1 },
            { q: "Can Bluetooth be a security risk?", options: ["No", "Yes, 'Bluebugging' can access your data", "Only for speakers", "Only on Android"], correct: 1 },
        ]
    },
    {
        id: 4,
        title: "Insider Threats",
        description: "Protecting data from employee negligence or malice.",
        icon: <User className="w-6 h-6 text-purple-500" />,
        xpReward: 100,
        resource: {
            title: "The Enemy Within",
            content: "Not all hackers are strangers. Disgruntled employees or careless staff cause 40% of breaches. Implement 'Least Privilege' - staff should only access files they need for their job, nothing more."
        },
        questions: Array(10).fill({ q: "Sample Question: What is the principle of Least Privilege?", options: ["Give access to everything", "Give access only to what is needed", "Give access to managers only", "Give no access"], correct: 1 })
    },
    {
        id: 5,
        title: "Ransomware Defense",
        description: "What to do when your files get locked.",
        icon: <AlertTriangle className="w-6 h-6 text-orange-500" />,
        xpReward: 100,
        resource: {
            title: "Ransomware: The Digital Kidnapping",
            content: "Ransomware encrypts your files and demands payment (usually crypto). The best defense is BACKUPS. Follow the 3-2-1 rule: 3 copies of data, 2 different media, 1 offsite."
        },
        questions: Array(10).fill({ q: "What is the best defense against Ransomware?", options: ["Antivirus", "Paying the ransom", "Regular Backups", "Shutting down the PC"], correct: 2 })
    },
    {
        id: 6,
        title: "Safe Remote Work",
        description: "Working from home securely.",
        icon: <Wifi className="w-6 h-6 text-cyan-500" />,
        xpReward: 100,
        resource: { title: "VPNs and Home Wi-Fi", content: "Always use a VPN when accessing company data from home. Change your home router's default password." },
        questions: Array(10).fill({ q: "What does a VPN do?", options: ["Speeds up internet", "Encrypts your internet connection", "Blocks ads", "Downloads files"], correct: 1 })
    },
    {
        id: 7,
        title: "Social Media Risks",
        description: "Oversharing can lead to hacks.",
        icon: <CheckCircle className="w-6 h-6 text-pink-500" />,
        xpReward: 100,
        resource: { title: "Oversharing is Dangerous", content: "Don't post photos of your server room or ID cards on LinkedIn. Hackers use this info to craft attacks." },
        questions: Array(10).fill({ q: "Is it safe to post a picture of your work ID card?", options: ["Yes", "No", "Only on Instagram", "Only if you blur the face"], correct: 1 })
    },
    {
        id: 8,
        title: "Software Updates",
        description: "Why 'Remind Me Later' is a bad idea.",
        icon: <Shield className="w-6 h-6 text-indigo-500" />,
        xpReward: 100,
        resource: { title: "Patching is Critical", content: "Updates often contain security patches for holes that hackers have found. Update Windows and Apps immediately." },
        questions: Array(10).fill({ q: "What is a 'Zero-Day' vulnerability?", options: ["A bug known for 0 days (new)", "A bug fixed in 0 days", "A virus that lasts 0 days", "No risk"], correct: 0 })
    },
    {
        id: 9,
        title: "Physical Security",
        description: "Clean desk policy and secure trash.",
        icon: <Lock className="w-6 h-6 text-gray-500" />,
        xpReward: 100,
        resource: { title: "Dumpster Diving", content: "Hackers dig through trash for invoices and memos. Shred sensitive documents before throwing them away." },
        questions: Array(10).fill({ q: "What is 'Tailgating'?", options: ["Driving too close", "Following someone into a secure area without a badge", "Partying in the parking lot", "Sharing a password"], correct: 1 })
    },
    {
        id: 10,
        title: "Incident Response",
        description: "What to do when you get hacked.",
        icon: <AlertTriangle className="w-6 h-6 text-red-600" />,
        xpReward: 100,
        resource: { title: "Don't Panic, Plan.", content: "Have a plan. 1. Isolate the infected machine. 2. Contact IT. 3. Notify customers if data was stolen (NDPR compliance)." },
        questions: Array(10).fill({ q: "What is the first step if you suspect a malware infection?", options: ["Email the CEO", "Disconnect the device from the network", "Turn off the monitor", "Run a speed test"], correct: 1 })
    }
];
