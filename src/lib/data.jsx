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
        questions: [
            { q: "What is the 'Principle of Least Privilege'?", options: ["Giving everyone admin access", "Giving staff only the access they need to do their job", "Restricting internet access completely", "Only managers have computers"], correct: 1 },
            { q: "An employee has resigned. When should you revoke their email access?", options: ["At the end of the month", "After they leave the building", "Immediately", "When they ask you to"], correct: 2 },
            { q: "Which of these is a sign of a potential insider threat?", options: ["Working normal hours", "Downloading large amounts of data at 2 AM", "Taking a lunch break", "Asking for a raise"], correct: 1 },
            { q: "Why is a 'Clean Desk Policy' important?", options: ["It looks professional", "It prevents cleaners from stealing", "It prevents sensitive info (like passwords) from being seen by unauthorized people", "It saves paper"], correct: 2 },
            { q: "Who should have access to the company's main bank account?", options: ["Everyone", "The Social Media Manager", "Only authorized finance staff and owners", "The IT intern"], correct: 2 },
            { q: "What is 'Shadow IT'?", options: ["Working in the dark", "Employees using unauthorized software/apps for work", "IT staff wearing black", "A backup server"], correct: 1 },
            { q: "A colleague asks to borrow your login because theirs isn't working. What do you do?", options: ["Give it to them", "Type it in for them", "Refuse and tell them to contact IT", "Write it on a post-it"], correct: 2 },
            { q: "Why should you monitor user activity logs?", options: ["To spy on employees", "To detect unusual behavior or unauthorized access", "To see who works the hardest", "To check internet history"], correct: 1 },
            { q: "What is the risk of shared accounts (e.g., one 'admin' login for everyone)?", options: ["It saves money", "You can't trace who did what", "It is faster", "It is more secure"], correct: 1 },
            { q: "How can you prevent data theft by departing employees?", options: ["Search their bags", "Disable USB ports and monitor transfers", "Ask them nicely", "You can't"], correct: 1 }
        ]
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
        questions: [
            { q: "What is the primary goal of Ransomware?", options: ["To steal passwords", "To encrypt files and demand payment", "To slow down the internet", "To display ads"], correct: 1 },
            { q: "What is the '3-2-1' backup rule?", options: ["3 copies, 2 formats, 1 offsite", "3 passwords, 2 users, 1 admin", "3 backups, 2 days, 1 week", "3 computers, 2 servers, 1 cloud"], correct: 0 },
            { q: "If your computer is infected with ransomware, what is the FIRST thing you should do?", options: ["Pay the ransom", "Disconnect it from the network/internet", "Restart it", "Call the police"], correct: 1 },
            { q: "Why is paying the ransom a bad idea?", options: ["It is too expensive", "It is illegal", "There is no guarantee you will get your files back", "Bitcoin is hard to buy"], correct: 2 },
            { q: "How does ransomware commonly infect a system?", options: ["Through the power cable", "Phishing emails with malicious attachments", "Leaving the computer on", "Using a wireless mouse"], correct: 1 },
            { q: "What is an 'Offline Backup'?", options: ["A backup stored on the internet", "A backup not connected to the network (e.g., external drive in a drawer)", "A failed backup", "A paper copy"], correct: 1 },
            { q: "Why are cloud backups useful against ransomware?", options: ["They are cheaper", "They are usually immune to local infections if configured correctly", "They are faster", "They don't need internet"], correct: 1 },
            { q: "What file extension is suspicious in an email attachment?", options: [".pdf", ".docx", ".exe or .vbs", ".jpg"], correct: 2 },
            { q: "Can ransomware spread to other computers on the same Wi-Fi?", options: ["No", "Yes, it can travel across the network", "Only if they are the same brand", "Only via Bluetooth"], correct: 1 },
            { q: "What is the best way to prevent ransomware?", options: ["Antivirus, Backups, and Staff Training", "Buying a Mac", "Using a VPN", "Turning off the internet"], correct: 0 }
        ]
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
        questions: [
            { q: "Why is Public Wi-Fi dangerous?", options: ["It is slow", "Hackers can intercept unencrypted traffic", "It costs money", "It blocks VPNs"], correct: 1 },
            { q: "What tool encrypts your internet connection?", options: ["GPS", "VPN", "ISP", "DNS"], correct: 1 },
            { q: "What should you change immediately on a new home router?", options: ["The color", "The default admin password", "The antenna position", "The power cable"], correct: 1 },
            { q: "Why should you use a separate 'Guest Network' for smart home devices?", options: ["To speed up the internet", "To isolate them from your work computer in case they are hacked", "To stop guests from downloading movies", "It looks professional"], correct: 1 },
            { q: "Is it safe to let family members use your work laptop?", options: ["Yes, for homework", "No, they might accidentally download malware", "Only on weekends", "Yes, if they are careful"], correct: 1 },
            { q: "What does WPA2/WPA3 refer to?", options: ["Wi-Fi Speed", "Wi-Fi Security Protocols", "Router Brands", "Internet Providers"], correct: 1 },
            { q: "When working remotely, where should you save company files?", options: ["On your personal desktop", "On a USB drive", "On the company's secure cloud/server", "In your email drafts"], correct: 2 },
            { q: "What is 'Shoulder Surfing'?", options: ["Swimming technique", "Someone looking at your screen to steal info", "Surfing the web at work", "A yoga pose"], correct: 1 },
            { q: "Why is a screen privacy filter useful?", options: ["It reduces glare", "It prevents people sitting next to you from reading your screen", "It protects the glass", "It looks cool"], correct: 1 },
            { q: "If you lose your work laptop, what should you do?", options: ["Buy a new one", "Report it to IT immediately for remote wiping", "Wait a few days to see if it turns up", "Post about it on Facebook"], correct: 1 }
        ]
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
        questions: [
            { q: "What is 'Oversharing'?", options: ["Sharing too much food", "Posting sensitive personal/work info online", "Sharing files securely", "Talking too much"], correct: 1 },
            { q: "Why is posting a photo of your boarding pass dangerous?", options: ["People will be jealous", "The barcode contains personal data", "It is illegal", "Airlines don't like it"], correct: 1 },
            { q: "How can hackers use your LinkedIn profile?", options: ["To endorse your skills", "To craft targeted phishing emails (Spear Phishing)", "To offer you a job", "To network"], correct: 1 },
            { q: "Is it safe to post 'Going on vacation for 2 weeks!' publicly?", options: ["Yes", "No, it tells burglars your home/office is empty", "Only on Instagram", "Only if you tag friends"], correct: 1 },
            { q: "What should you check before accepting a friend request?", options: ["Their profile picture", "If you actually know them and if the profile looks real", "How many friends they have", "Their posts"], correct: 1 },
            { q: "Why shouldn't you post photos of your work ID badge?", options: ["It's ugly", "Criminals can copy it to fake an ID", "It belongs to the company", "It has a bad photo"], correct: 1 },
            { q: "What is 'Spear Phishing'?", options: ["Fishing with a spear", "Phishing targeted at a specific person using their personal info", "Phishing for whales", "Random email spam"], correct: 1 },
            { q: "Can your birthday be used against you?", options: ["No", "Yes, it is often used in security questions or PINs", "Only if you are famous", "Only by banks"], correct: 1 },
            { q: "What is a 'Sock Puppet' account?", options: ["A fake account used for spying or manipulation", "A puppet show", "A verified account", "A bot"], correct: 0 },
            { q: "What should you do if you see a fake profile impersonating your CEO?", options: ["Add them", "Report it to the platform and your IT team", "Ignore it", "Message them"], correct: 1 }
        ]
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
        questions: [
            { q: "What is the main reason to update software?", options: ["New emojis", "Security patches for vulnerabilities", "Better colors", "It's required by law"], correct: 1 },
            { q: "What happens if you click 'Remind me later' on updates?", options: ["Nothing", "You remain vulnerable to known attacks", "The computer gets faster", "The update deletes itself"], correct: 1 },
            { q: "What is a 'Patch'?", options: ["A piece of cloth", "Code that fixes a security bug", "A virus", "A password"], correct: 1 },
            { q: "Why are 'Unsupported' operating systems (like Windows 7) dangerous?", options: ["They are old", "They no longer receive security updates", "They are slow", "They don't run games"], correct: 1 },
            { q: "Which software needs updating?", options: ["Only Windows", "Only Antivirus", "OS, Browsers, and all Applications", "Only Games"], correct: 2 },
            { q: "What is 'Automatic Updates'?", options: ["A setting that installs updates without you needing to check", "A robot", "A virus", "A manual process"], correct: 0 },
            { q: "How often should you update your antivirus?", options: ["Once a year", "Never", "Daily/Automatically", "When you get a virus"], correct: 2 },
            { q: "Can a PDF reader have security holes?", options: ["No", "Yes, and they need updates too", "Only if you pay for it", "Only on Mac"], correct: 1 },
            { q: "What is the safest setting for updates?", options: ["Never check", "Check but let me choose", "Install updates automatically", "Disable Windows Update"], correct: 2 },
            { q: "Why do hackers love it when you don't update?", options: ["It's easier to exploit known vulnerabilities", "They like old software", "It saves them time", "They don't care"], correct: 0 }
        ]
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
        questions: [
            { q: "What is 'Tailgating' in physical security?", options: ["Driving close to a car", "Following an authorized person through a door", "A party", "Waiting in line"], correct: 1 },
            { q: "What should you do if you see a stranger in the office without a badge?", options: ["Ignore them", "Politely ask if they need help or report to security", "Hide", "Take a photo"], correct: 1 },
            { q: "Why should you shred documents?", options: ["To make confetti", "To prevent 'Dumpster Diving' for sensitive info", "To save space", "It's fun"], correct: 1 },
            { q: "What is the shortcut to lock a Windows PC?", options: ["Ctrl + C", "Windows Key + L", "Alt + F4", "Esc"], correct: 1 },
            { q: "Where is the worst place to leave a password?", options: ["In your head", "In a password manager", "On a sticky note on the monitor", "In a safe"], correct: 2 },
            { q: "A delivery person asks you to hold the secure door open. What do you do?", options: ["Hold it open to be polite", "Ask them to use the intercom/reception", "Let them in", "Ignore them"], correct: 1 },
            { q: "What is a 'Clean Desk Policy'?", options: ["Cleaning your desk daily", "Clearing all sensitive documents/media from the desk when away", "Using sanitizer", "No food allowed"], correct: 1 },
            { q: "Why are server rooms usually locked?", options: ["To keep them cool", "To prevent unauthorized physical access", "To hide the cables", "To reduce noise"], correct: 1 },
            { q: "Can a visitor be left alone in the office?", options: ["Yes, if they look nice", "No, they should always be escorted", "Only in the kitchen", "Yes, for 5 minutes"], correct: 1 },
            { q: "What is 'Dumpster Diving'?", options: ["Swimming in trash", "Looking through trash for sensitive information", "Recycling", "A sport"], correct: 1 }
        ]
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
        questions: [
            { q: "What is the first step in Incident Response?", options: ["Panic", "Containment (Disconnecting)", "Formatting", "Tweeting"], correct: 1 },
            { q: "Why is 'Containment' important?", options: ["To save electricity", "To stop the attack from spreading", "To hide the evidence", "To punish the computer"], correct: 1 },
            { q: "Who should you notify if customer data is stolen in Nigeria?", options: ["Nobody", "NITDA and the affected customers", "The police only", "Your neighbors"], correct: 1 },
            { q: "What is an 'Incident Response Plan'?", options: ["A fire drill", "A documented set of instructions on what to do during a cyberattack", "A backup plan", "A meeting"], correct: 1 },
            { q: "Why should you document everything during an incident?", options: ["For legal reasons and learning", "To write a book", "To blame someone", "It's not needed"], correct: 0 },
            { q: "What is 'Eradication'?", options: ["Deleting files", "Removing the threat/malware from the system", "Buying new computers", "Firing staff"], correct: 1 },
            { q: "Should you try to hack the attacker back?", options: ["Yes, revenge", "No, it is illegal and dangerous", "Only if you are angry", "Yes, if you know who it is"], correct: 1 },
            { q: "Why is communication important during a breach?", options: ["To gossip", "To manage reputation and inform stakeholders", "To scare people", "To ask for money"], correct: 1 },
            { q: "What is a 'Post-Incident Review'?", options: ["A party", "Analyzing what happened to prevent it from happening again", "Forgetting about it", "Deleting logs"], correct: 1 },
            { q: "When should you create an Incident Response Plan?", options: ["After a hack", "Right now (Before an incident)", "Never", "When you have free time"], correct: 1 }
        ]
    }
];
