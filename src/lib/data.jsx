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
        xpReward: 150,
        resource: {
            title: "Spotting the 'Fake Alert' & Phishing Scams",
            content: `Phishing is the #1 cyber crime in Nigeria. Scammers don't hack computers; they hack **people**. They send emails or SMS messages pretending to be from trusted institutions like GTBank, Zenith Bank, or the FIRS to steal your login credentials.

### 🚩 The "Urgency" Trap
Scammers always want you to act FAST so you don't think.
*   **The Threat**: "Your account will be blocked in 24 hours!"
*   **The Prize**: "You have won N500,000! Claim now!"
*   **The Reality**: No bank will ever threaten you via SMS. If it feels urgent, it's a scam.

### 🔍 Anatomy of a Fake Alert
1.  **Generic Greetings**: "Dear Customer" instead of "Dear Chinedu". Real banks know your name.
2.  **Suspicious Links**: Always hover over the link before clicking.
    *   ❌ **Fake**: \`gtb-secure-verify-ng.com\`
    *   ✅ **Real**: \`gtbank.com\`
3.  **The "Credit Alert" Scam**: You receive an SMS saying your account has been credited, but your balance hasn't changed.
    *   **Rule**: NEVER release goods based on an SMS. Open your bank app and confirm the money is actually there.

### 🛡️ How to Protect Your Business
*   **Verify**: If a vendor emails you saying "We have changed our account number", DO NOT pay. Call them on a number you know to verify. This is called **Business Email Compromise (BEC)**.
*   **Don't Click**: Navigate to the website directly by typing the URL.
*   **Report**: Forward suspicious emails to \`report@yourbank.com\`.`,
            keyTakeaways: [
                "Never trust SMS alerts alone; verify via your bank app.",
                "Check the sender's email address carefully (e.g., @gmail.com vs @gtbank.com).",
                "Call vendors to verify invoice payment changes."
            ]
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
        xpReward: 150,
        resource: {
            title: "The Power of Passphrases & MFA",
            content: `Using weak passwords like "password123" or "companyname2024" is like leaving your office door unlocked. Hackers use software that can guess millions of passwords per second.

### 🔐 The "Sentence Method"
Don't try to remember random characters like \`Xj9#m2!\`. Instead, use a **Passphrase**.
*   **Weak**: \`P@ssw0rd1\` (Computers guess this in seconds).
*   **Strong**: \`I-Love-Eating-Jollof-Rice-On-Sundays\` (Computers would take trillions of years to guess this).
*   **Why?**: Length is more important than complexity.

### 🛡️ Two-Factor Authentication (2FA)
This is the single most important setting to enable. It requires a second step (like a code on your phone) to log in.
*   **Enable it on**: Email (Gmail/Outlook), Social Media, and Banking Apps.
*   **Avoid SMS 2FA**: Hackers can perform a **SIM Swap** to steal your phone number.
*   **Use an App**: Use **Google Authenticator** or **Microsoft Authenticator**. These generate codes on your phone that don't rely on your SIM card.

### 🧠 Password Managers
Stop writing passwords in a notebook. Use a Password Manager (like Bitwarden or Google Password Manager) to generate and save unique passwords for every site.`,
            keyTakeaways: [
                "Use a unique password for every account.",
                "Enable 2FA on all business accounts immediately.",
                "Use a Password Manager to remember your complex passwords."
            ]
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
        xpReward: 150,
        resource: {
            title: "Mobile Security for SMEs",
            content: `Your phone is now your mobile office. If it's lost or hacked, your business is at risk.

### 🟢 Secure Your WhatsApp
Hackers hijack WhatsApp accounts to ask your contacts for money.
1.  Go to **Settings** > **Account** > **Two-Step Verification**.
2.  Set a 6-digit PIN.
3.  Now, even if someone steals your SIM, they cannot open your WhatsApp without this PIN.

### 💳 POS Terminal Security
*   **Physical Security**: Never leave your POS terminal unattended. Attackers can swap it or install a "skimmer" to steal card details.
*   **Network**: Connect POS terminals to a secure, private Wi-Fi network, not the free guest Wi-Fi.
*   **Staff Training**: Ensure staff check the terminal daily for any tampering or strange attachments.

### 📱 App Safety
*   **Official Stores Only**: Never install apps from unknown sources (APK files via WhatsApp/Telegram). They often contain malware that steals banking OTPs.
*   **Permissions**: Why does a flashlight app need access to your Contacts? Deny unnecessary permissions.`,
            keyTakeaways: [
                "Enable Two-Step Verification on WhatsApp immediately.",
                "Never install apps from outside the official App Store/Play Store.",
                "Physically secure your POS terminals."
            ]
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
        xpReward: 120,
        resource: {
            title: "The Enemy Within: Insider Threats",
            content: `Not all hackers are strangers in hoodies. Disgruntled employees or careless staff cause 40% of data breaches.

### 🛡️ The Principle of Least Privilege
*   **Definition**: Staff should only have access to the files/systems they absolutely need to do their job.
*   **Example**: A cashier does not need access to the company's payroll files. A social media manager doesn't need access to the bank account.
*   **Offboarding**: When an employee leaves, revoke their access (email, slack, database) **IMMEDIATELY**.

### 🚩 The "Disgruntled Employee"
Watch out for signs of unhappiness or financial distress. An employee who feels wronged might steal customer lists or delete files before leaving.
*   **Action**: Monitor for large data downloads (e.g., copying 500 files to a USB) during the notice period.

### 🧹 Clean Desk Policy
Don't leave passwords on sticky notes under keyboards. It's the first place an "insider" will look.`,
            keyTakeaways: [
                "Limit employee access to only what is necessary.",
                "Revoke access immediately when an employee leaves.",
                "Monitor for unusual data activity."
            ]
        },
        questions: Array(10).fill({ q: "What is the principle of Least Privilege?", options: ["Give access to everything", "Give access only to what is needed", "Give access to managers only", "Give no access"], correct: 1 })
    },
    {
        id: 5,
        title: "Ransomware Defense",
        description: "What to do when your files get locked.",
        icon: <AlertTriangle className="w-6 h-6 text-orange-500" />,
        xpReward: 150,
        resource: {
            title: "Ransomware: The Digital Kidnapping",
            content: `Ransomware is malware that encrypts your files and demands payment (usually Bitcoin) to unlock them. It often enters via a phishing email attachment (e.g., "Invoice_Attached.pdf.exe").

### 🛑 The 3-2-1 Backup Rule
This is your only 100% guarantee against ransomware.
*   **3** copies of your data (1 Primary + 2 Backups).
*   **2** different media types (e.g., Cloud + External Hard Drive).
*   **1** copy offsite (Cloud Storage like Google Drive or OneDrive).
*   **Why?**: If your office burns down or gets infected, the Cloud copy is safe.

### 🚨 If You Get Hit
1.  **Disconnect**: Unplug the infected computer from the network immediately to stop the spread to other PCs.
2.  **Don't Pay**: Paying encourages them, and 40% of victims who pay NEVER get their data back.
3.  **Restore**: Wipe the machine and restore from your clean backup.`,
            keyTakeaways: [
                "Regular backups are the only 100% cure for ransomware.",
                "Never pay the ransom.",
                "Disconnect infected devices immediately."
            ]
        },
        questions: Array(10).fill({ q: "What is the best defense against Ransomware?", options: ["Antivirus", "Paying the ransom", "Regular Backups", "Shutting down the PC"], correct: 2 })
    },
    {
        id: 6,
        title: "Safe Remote Work",
        description: "Working from home securely.",
        icon: <Wifi className="w-6 h-6 text-cyan-500" />,
        xpReward: 120,
        resource: {
            title: "Securing the Home Office",
            content: `Remote work opens up new risks. Home Wi-Fi is usually less secure than office networks.

### ☕ The "Coffee Shop" Hacker
Public Wi-Fi (at cafes, airports, hotels) is dangerous. Hackers can sit nearby and intercept everything you send over the network.
*   **Solution**: Use a **VPN (Virtual Private Network)**. It creates a secure, encrypted tunnel for your data, making you invisible to the hacker.

### 🏠 Securing Home Wi-Fi
*   **Change Default Password**: Don't use the password that came with the router.
*   **Encryption**: Ensure your router uses WPA2 or WPA3 encryption.
*   **Guest Network**: Put smart devices (TVs, Fridges) on a separate "Guest Network" so if they get hacked, your work laptop is safe.`,
            keyTakeaways: [
                "Always use a VPN on public Wi-Fi.",
                "Secure your home router with a strong password.",
                "Keep work devices separate from personal family devices."
            ]
        },
        questions: Array(10).fill({ q: "What does a VPN do?", options: ["Speeds up internet", "Encrypts your internet connection", "Blocks ads", "Downloads files"], correct: 1 })
    },
    {
        id: 7,
        title: "Social Media Risks",
        description: "Oversharing can lead to hacks.",
        icon: <CheckCircle className="w-6 h-6 text-pink-500" />,
        xpReward: 100,
        resource: {
            title: "Oversharing is Dangerous",
            content: `Hackers love Social Media. They use the info you post to guess your passwords or craft convincing phishing emails.

### 🚫 The "LinkedIn Lure"
Hackers look at your LinkedIn to see who your boss is, who your vendors are, and what software you use. Then they send you a fake email pretending to be your boss.
*   **Tip**: Don't list every specific software you use (e.g., "Expert in Oracle v12.1"). It tells hackers exactly what vulnerabilities to exploit.

### 📸 "Sharenting" Risks
*   **ID Cards**: Never post photos of your work ID or badge. It can be copied to gain physical entry.
*   **Vacation Plans**: Posting "Off to Dubai for 2 weeks!" tells thieves your office/home is empty.
*   **Boarding Passes**: The barcode contains sensitive personal data.`,
            keyTakeaways: [
                "Think before you post.",
                "Never post photos of sensitive documents or ID cards.",
                "Be careful accepting friend requests from strangers."
            ]
        },
        questions: Array(10).fill({ q: "Is it safe to post a picture of your work ID card?", options: ["Yes", "No", "Only on Instagram", "Only if you blur the face"], correct: 1 })
    },
    {
        id: 8,
        title: "Software Updates",
        description: "Why 'Remind Me Later' is a bad idea.",
        icon: <Shield className="w-6 h-6 text-indigo-500" />,
        xpReward: 100,
        resource: {
            title: "Patching is Critical",
            content: `Software updates are not just about new features. They often contain **Security Patches** for holes that hackers have discovered.

### ⚡ The Race Against Time
*   **Zero-Day Vulnerability**: This is a hole that hackers found before the software company did.
*   **Patch Tuesday**: Companies like Microsoft release fixes regularly.
*   **The Risk**: Once a patch is released, hackers know exactly where the hole is. If you don't update immediately, they will attack you.
*   **Rule**: Enable "Automatic Updates" for Windows, macOS, and your Antivirus. Don't click "Remind me tomorrow".`,
            keyTakeaways: [
                "Enable automatic updates.",
                "Don't ignore 'Update Available' notifications.",
                "Update your browser and plugins regularly."
            ]
        },
        questions: Array(10).fill({ q: "What is a 'Zero-Day' vulnerability?", options: ["A bug known for 0 days (new)", "A bug fixed in 0 days", "A virus that lasts 0 days", "No risk"], correct: 0 })
    },
    {
        id: 9,
        title: "Physical Security",
        description: "Clean desk policy and secure trash.",
        icon: <Lock className="w-6 h-6 text-gray-500" />,
        xpReward: 100,
        resource: {
            title: "Physical Security & Dumpster Diving",
            content: `Cybersecurity isn't just digital. If someone can walk into your office and steal a laptop, your firewalls don't matter.

### 🕵️ The "Fake Delivery Guy"
Attackers often dress up as delivery drivers or repairmen to get into offices.
*   **Tailgating**: Following an employee through a secure door without swiping a badge.
*   **Action**: Always ask for ID. Don't hold the door open for strangers.

### 🗑️ Dumpster Diving
*   Hackers dig through company trash to find invoices, memos, or sticky notes with passwords.
*   **Solution**: Shred ALL business documents before throwing them away.

### 🧹 Clean Desk Policy
*   Don't leave sensitive files on your desk when you go to lunch.
*   Lock your computer screen (Windows Key + L) every time you walk away.`,
            keyTakeaways: [
                "Shred sensitive documents.",
                "Lock your screen when stepping away.",
                "Don't leave passwords on sticky notes."
            ]
        },
        questions: Array(10).fill({ q: "What is 'Tailgating'?", options: ["Driving too close", "Following someone into a secure area without a badge", "Partying in the parking lot", "Sharing a password"], correct: 1 })
    },
    {
        id: 10,
        title: "Incident Response",
        description: "What to do when you get hacked.",
        icon: <AlertTriangle className="w-6 h-6 text-red-600" />,
        xpReward: 150,
        resource: {
            title: "Don't Panic, Plan.",
            content: `It's not a matter of *if*, but *when*. How you respond to a hack determines if your business survives.

### ⏱️ The Golden Hour
The first hour after a breach is critical.
1.  **Containment**: Stop the bleeding. Disconnect infected devices from the network (unplug the ethernet cable, turn off Wi-Fi).
2.  **Assessment**: What was stolen? Customer data? Bank details?
3.  **Eradication**: Remove the malware. This might require professional help or wiping systems.
4.  **Notification**: Under Nigerian Data Protection Regulation (NDPR), you may need to notify the NITDA and your customers if their data was stolen.

### 📝 Have a Plan
Don't wait until you are hacked to find the phone number of your IT support. Write it down now.`,
            keyTakeaways: [
                "Have an Incident Response Plan before you need it.",
                "Know who to call (IT Support, Legal).",
                "Be transparent with customers if their data is at risk."
            ]
        },
        questions: Array(10).fill({ q: "What is the first step if you suspect a malware infection?", options: ["Email the CEO", "Disconnect the device from the network", "Turn off the monitor", "Run a speed test"], correct: 1 })
    }
];
