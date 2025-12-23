import React from 'react';
import {
    Shield, Lock, BookOpen, ChevronRight,
    User, LogOut, CheckCircle, AlertTriangle,
    Trophy, Star, BarChart, Smartphone, Wifi, Mail,
    Layout, Home, FileText, Menu, X, Instagram, Twitter, Linkedin,
    Globe, Truck
} from 'lucide-react';

export const MODULES_DATA = [
    {
        id: 1,
        title: "Phishing & Fraud Prevention",
        description: "Identify and prevent Business Email Compromise, Smishing, and Vishing.",
        icon: <Mail className="w-6 h-6 text-blue-500" />,
        xpReward: 150,
        resource: {
            title: "Advanced Phishing Defense Strategies",
            content: `Phishing has evolved beyond simple email scams into sophisticated targeted attacks.
            
### 1. The Threat Landscape
*   **Spear Phishing**: Highly targeted attacks using personal details (e.g., specific vendors, recent milestones) to trick victims.
*   **Whaling**: Attacks targeting C-Suite executives (CEO, CFO) to authorize fraudulent wire transfers.
*   **Smishing & Vishing**: Fraud via SMS (fake bank alerts) and Voice calls (impersonating bank staff).

### 2. Business Email Compromise (BEC)
BEC is a global scourge costing SMEs billions. Attackers compromise legitimate business email accounts to conduct unauthorized transfers.
*   **Red Flag**: A vendor suddenly emailing to say their "account details have changed".
*   **Defense Protocol**: **NEVER** authorize payment changes via email alone. Use a secondary channel (Phone Call to a known number) to verify.

### 3. Identifying Fake Websites (Clone Phishing)
Attackers clone legitimate sites (e.g., \`gtbank-login-secure.com\`).
*   **Technical Check**: Inspect the Top-Level Domain (TLD). Legitimate banks use \`.com\` or \`.ng\`. Be wary of \`.xyz\`, \`.info\` links in SMS.
*   **HTTPS Fallacy**: A "padlock" icon only means the connection is encrypted, NOT that the site is legitimate. Phishing sites use HTTPS too.`,
            keyTakeaways: [
                "Verify vendor account changes via Phone Call (Voice Verification).",
                "Be skeptical of 'Urgent' SMS alerts requesting logins.",
                "HTTPS does not guarantee site legitimacy."
            ]
        },
        questions: [
            { q: "What distinguishes 'Spear Phishing' from generic phishing?", options: ["It targets a specific individual using personalized info", "It is faster", "It uses SMS only", "It targets whales only"], correct: 0 },
            { q: "You receive an email from your CEO asking for an urgent wire transfer while they are on vacation. What do you do?", options: ["Send the money immediately", "Call the CEO to verify", "Reply to the email asking for confirmation", "Ignore it"], correct: 1 },
            { q: "What is 'Smishing'?", options: ["Phishing via Social Media", "Phishing via SMS/Text Message", "Phishing via Email", "Smiling while phishing"], correct: 1 },
            { q: "True or False: If a website has a padlock icon (HTTPS), it is definitely legitimate.", options: ["True", "False"], correct: 1 },
            { q: "A vendor emails saying their bank account has changed. What is the standard protocol?", options: ["Update the invoice and pay", "Reply to ask why", "Call the vendor on a known number to verify", "Wait 30 days"], correct: 2 },
            { q: "Which of these is a 'Whaling' attack target?", options: ["Intern", "Customer Service Rep", "Chief Financial Officer (CFO)", "Janitor"], correct: 2 },
            { q: "What does BEC stand for?", options: ["Bank Email Code", "Business Email Compromise", "Basic Encryption Code", "Binary Email Check"], correct: 1 },
            { q: "You see a URL 'GTBank-Secure-Login.xyz'. Is this safe?", options: ["Yes", "No, it is likely a clone phishing site", "Only on mobile", "Only if it has a logo"], correct: 1 },
            { q: "What is 'Vishing'?", options: ["Video Phishing", "Voice Phishing (Phone Calls)", "Visual Phishing", "Virtual Phishing"], correct: 1 },
            { q: "The most effective defense against BEC is:", options: ["Antivirus", "Firewalls", "Process checks (Dual verification)", "Strong passwords"], correct: 2 }
        ]
    },
    {
        id: 2,
        title: "Password & Identity Security",
        description: "Passkeys, MFA, and defending against Credential Stuffing.",
        icon: <Lock className="w-6 h-6 text-red-500" />,
        xpReward: 150,
        resource: {
            title: "Identity Security: Beyond Passwords",
            content: `The era of simple passwords is over. Modern identity security relies on multiple layers of proof.

### 1. The Password Problem
*   **Credential Stuffing**: Attackers take usernames/passwords leaked from one site (e.g., LinkedIn) and try them on others (e.g., Banking). This is why **Password Reuse** is dangerous.
*   **Entropy**: Length beats complexity. "Correct-Horse-Battery-Staple" (Passphrase) is harder to crack than "Tr0ub4dor&3".

### 2. Multi-Factor Authentication (MFA)
*   **SMS 2FA vs Authenticator Apps**: SMS can be intercepted via SIM Swap. Prefer **Authenticator Apps** (Google/Microsoft Auth) or Hardware Keys (YubiKey).
*   **Biometrics**: FaceID and Fingerprint scanners are secure local authentication methods.

### 3. The Future: Passkeys
Passkeys replace passwords with cryptographic key pairs stored on your device.
*   **How it works**: Your phone unlocks the account using Biometrics. No password is ever sent to the server.
*   **Benefit**: Immune to Phishing (because there is no password to steal).`,
            keyTakeaways: [
                "Stop reusing passwords to prevent Credential Stuffing.",
                "Migrate from SMS 2FA to Authenticator Apps where possible.",
                "Adopt Passkeys for phishing-resistant logins."
            ]
        },
        questions: [
            { q: "What is 'Credential Stuffing'?", options: ["Typing passwords too fast", "Using leaked credentials from one site to access others", "Creating too many accounts", "Sharing passwords"], correct: 1 },
            { q: "Why is SMS 2FA considered less secure than Authenticator Apps?", options: ["It requires signal", "It is vulnerable to SIM Swap attacks", "It costs money", "It is slow"], correct: 1 },
            { q: "What is the main advantage of a 'Passkey'?", options: ["It is shorter", "It is immune to phishing attacks", "It is easy to share", "It works offline"], correct: 1 },
            { q: "Which password is strongest?", options: ["P@ssw0rd1", "Lagos2024!", "Correct-Horse-Battery-Staple", "Admin#123"], correct: 2 },
            { q: "What is the primary rule of password hygiene?", options: ["Change it every week", "Never reuse passwords across accounts", "Write it on a sticky note", "Share it with IT only"], correct: 1 },
            { q: "What does MFA stand for?", options: ["Multi-Factor Authentication", "My First Access", "Master File Access", "Main Factor Authorization"], correct: 0 },
            { q: "Is 'Biometric' authentication (FaceID) secure?", options: ["No", "Yes, it verifies physical presence", "Only for weak accounts", "Only on Android"], correct: 1 },
            { q: "How do Password Managers help security?", options: ["They auto-type", "They generate and store unique, complex passwords for every site", "They prevent viruses", "They make internet faster"], correct: 1 },
            { q: "What is a 'Brute Force' attack?", options: ["Physical break-in", "Guessing every possible password combination", "Stealing the server", "Social Engineering"], correct: 1 },
            { q: "If you receive a 2FA code you didn't request, what should you do?", options: ["Approve it", "Ignore it", "Change your password immediately", "Share it with someone"], correct: 2 }
        ]
    },
    {
        id: 3,
        title: "Mobile & POS Security",
        description: "Securing endpoints, MDM, and Safe Payments.",
        icon: <Smartphone className="w-6 h-6 text-green-500" />,
        xpReward: 150,
        resource: {
            title: "Securing Mobile & Payment Infrastructure",
            content: `Mobile devices are the new perimeter. Protecting them is as critical as protecting the server room.

### 1. Mobile Device Management (MDM)
For businesses with multiple staff, MDM software allows you to:
*   **Remote Wipe**: Erase data if a phone is lost/stolen.
*   **Enforce Policies**: Require screen locks and prevent app installation (Sideloading).

### 2. POS Terminal Security
*   **Skimmers**: Malicious hardware attached to card readers to steal data. Inspect terminals daily for loose parts.
*   **Network Segmentation**: POS systems should be on a separate Wi-Fi network (VLAN) from the Guest Wi-Fi.

### 3. App Security
*   **Juice Jacking**: Fake public charging stations that steal data. Use a "USB Condom" or charge via AC adapter only.
*   **Permissions**: Why does a Flashlight app need your Contacts? Deny unnecessary permissions.`,
            keyTakeaways: [
                "Use MDM to remotely wipe lost corporate devices.",
                "Inspect POS terminals for Skimmers daily.",
                "Avoid public USB charging stations (Juice Jacking)."
            ]
        },
        questions: [
            { q: "What is 'Juice Jacking'?", options: ["Stealing battery power", "Data theft via public USB charging ports", "Overcharging a device", "Spilling juice on a phone"], correct: 1 },
            { q: "Why should POS systems be on a separate network?", options: ["To speed up transactions", "To isolate them from guest Wi-Fi threats", "To save data", "To block ads"], correct: 1 },
            { q: "What is the purpose of MDM software?", options: ["To track employee location", "To manage and secure mobile devices remotely", "To install games", "To boost battery life"], correct: 1 },
            { q: "What is 'Sideloading'?", options: ["Charging sideways", "Installing apps from unofficial sources", "Sharing data", "Loading slowly"], correct: 1 },
            { q: "You find a USB drive in the parking lot. What do you do?", options: ["Plug it in to see who owns it", "Give it to IT / Destroy it", "Take it home", "Format it and keep it"], correct: 1 },
            { q: "Why are card skimmers dangerous?", options: ["They scratch cards", "They steal card data physically from the POS", "They block transactions", "They assist payment"], correct: 1 },
            { q: "What should you do before selling an old work phone?", options: ["Delete photos", "Factory Reset / Wipe Data", "Remove SIM", "Sign out of email"], correct: 1 },
            { q: "Is 'Rooting' or 'Jailbreaking' safe for work devices?", options: ["Yes", "No, it bypasses security sandboxes", "Only for developers", "Only on iPhone"], correct: 1 },
            { q: "Bluebugging attacks which wireless protocol?", options: ["Wi-Fi", "Bluetooth", "NFC", "4G"], correct: 1 },
            { q: "The most basic protection for a mobile device is:", options: ["Antivirus", "Screen Lock (PIN/Biometric)", "Phone Case", "Screen protector"], correct: 1 }
        ]
    },
    {
        id: 4,
        title: "Insider Threat Mitigation",
        description: "Zero Trust, Principle of Least Privilege, and Offboarding.",
        icon: <User className="w-6 h-6 text-purple-500" />,
        xpReward: 120,
        resource: {
            title: "Managing Internal Risks",
            content: `Trust, but verify. Insider threats (accidental or malicious) are hard to detect because the user is "authorized".

### 1. Principle of Least Privilege (PoLP)
Users should only have access to the data they need for their *prop* job.
*   **Example**: A Graphic Designer does not need access to the Payroll Database.

### 2. Zero Trust Architecture
"Never Trust, Always Verify."
*   Verify every request as if it originates from an open network.
*   Assume the breach has already happened.

### 3. Offboarding Protocols
The most dangerous time is when an employee leaves.
*   **Immediate Revocation**: Disable email and cloud access *before* the exit interview.
*   **Shadow IT**: Ensure you know about all the SaaS tools (Canva, Trello, Dropbox) the employee used on company time.`,
            keyTakeaways: [
                "Implement Least Privilege Access Control.",
                "Revoke access immediately upon employee exit.",
                "Monitor for 'Shadow IT' usage."
            ]
        },
        questions: [
            { q: "What is the 'Principle of Least Privilege'?", options: ["Giving everyone admin access", "Giving users only the access needed for their job", "Trusting no one", "Giving access based on seniority"], correct: 1 },
            { q: "What is 'Shadow IT'?", options: ["Hacking tools", "Unapproved software/hardware used by employees", "Dark mode", "IT working at night"], correct: 1 },
            { q: "When should a departing employee's access be revoked?", options: ["After 2 weeks notice", "Immediately upon termination/resignation", "At the end of the month", "When they request it"], correct: 1 },
            { q: "What is the core philosophy of 'Zero Trust'?", options: ["Trust everyone inside the network", "Never Trust, Always Verify", "Trust only managers", "Verification is optional"], correct: 1 },
            { q: "Which is a sign of a potential malicious insider?", options: ["Working late regularly", "Downloading large amounts of data before resignation", "Taking sick leave", "Asking for a raise"], correct: 1 },
            { q: "Why is shared admin accounts a bad idea?", options: ["It saves money", "You cannot audit who did what (Non-repudiation)", "It is faster", "It is easier"], correct: 1 },
            { q: "What is a 'Clean Desk Policy'?", options: ["Cleaning the office daily", "Securing sensitive documents when unattended", "No food at desk", "Digital cleanup"], correct: 1 },
            { q: "Access Reviews should be conducted:", options: ["Never", "Once a year", "Regularly (Quarterly)", "Only after a breach"], correct: 2 },
            { q: "An employee asks for your password to 'fix something'. You:", options: ["Give it to them", "Type it in for them", "Refuse and report it", "Send it via email"], correct: 2 },
            { q: "Social Engineering often relies on:", options: ["Technical hacks", "Human manipulation", "Software bugs", "Viruses"], correct: 1 }
        ]
    },
    {
        id: 5,
        title: "Ransomware & Backups",
        description: "Double Extortion, Kill Switches, and 3-2-1 Backup Rule.",
        icon: <AlertTriangle className="w-6 h-6 text-orange-500" />,
        xpReward: 150,
        resource: {
            title: "Advanced Ransomware Defense",
            content: `Ransomware is no longer just about encryption.

### 1. Double Extortion
Modern gangs steal your data *before* encrypting it. Even if you restore from backup, they threaten to leak your customers' private data unless you pay.
*   **Defense**: Data Encryption at Rest (so stolen data is useless).

### 2. The Kill Switch (Isolation)
If a computer is infected:
*   **Step 1**: Disconnect from Wi-Fi / Unplug Ethernet immediately.
*   **Step 2**: Do NOT reboot (it might trigger the encryption).
*   **Step 3**: Call IT.

### 3. The 3-2-1 Backup Rule
*   **3** Copies of data.
*   **2** Different Media (Cloud + Local Drive).
*   **1** Offsite / Offline (Air-gapped).
*   *Air-gapped backups cannot be infected by ransomware spreading on the network.*`,
            keyTakeaways: [
                "Assume Double Extortion: Protect data confidentiality, not just availability.",
                "Disconnect infected devices immediately to stop spread.",
                "Maintain an Air-Gapped (Offline) Backup."
            ]
        },
        questions: [
            { q: "What is 'Double Extortion' ransomware?", options: ["It encrypts files twice", "It steals data AND encrypts it, threatening to leak it", "It asks for double the money", "It attacks two computers"], correct: 1 },
            { q: "What is the first thing to do if you suspect ransomware?", options: ["Pay the ransom", "Disconnect from the network (Wi-Fi/Cable)", "Reboot", "Email the attacker"], correct: 1 },
            { q: "What is the '3-2-1' backup rule?", options: ["3 copies, 2 media types, 1 offline/offsite", "3 servers, 2 clouds, 1 drive", "3 people, 2 keys, 1 password", "3 days, 2 weeks, 1 month"], correct: 0 },
            { q: "Why is an 'Air-gapped' backup important?", options: ["It is cheaper", "It is physically disconnected, so malware can't reach it", "It is faster", "It is in the cloud"], correct: 1 },
            { q: "Should you pay the ransom?", options: ["Always", "Never (Payment guarantees nothing)", "Only if cheap", "Only in Bitcoin"], correct: 1 },
            { q: "Ransomware usually enters a network via:", options: ["Magic", "Phishing Emails & Unpatched Software", "USB only", "Wi-Fi only"], correct: 1 },
            { q: "What is 'Encryption at Rest'?", options: ["Encrypting data when not in use", "Encrypting data while sending", "Sleeping encryption", "Backup encryption"], correct: 0 },
            { q: "Does paying the ransom guarantee data recovery?", options: ["Yes", "No", "Most of the time", "Yes, legally binding"], correct: 1 },
            { q: "Lateral Movement refers to:", options: ["Moving the computer", "Attacker moving from one infected computer to others in the network", "Wi-Fi signals", "Backup process"], correct: 1 },
            { q: "How can you prevent automated ransomware spread?", options: ["Leave computers on", "Network Segmentation", "Using Wi-Fi", "Sharing passwords"], correct: 1 }
        ]
    },
    {
        id: 6,
        title: "Secure Remote Work",
        description: "VPNs, Home Router Security, and Digital Nomad safety.",
        icon: <Wifi className="w-6 h-6 text-cyan-500" />,
        xpReward: 120,
        resource: {
            title: "Remote Work Security Protocols",
            content: `Work is an activity, not a place. But the coffee shop is not a fortress.

### 1. The VPN Necessity
Public Wi-Fi is an open book. Hackers use "Man-in-the-Middle" attacks to read traffic.
*   **Rule**: Always use a Corporate VPN when on public Wi-Fi.

### 2. Home Router Hardening
*   **Change Default Password**: "admin/admin" is the first thing bots try.
*   **Guest Network**: Isolate your work laptop from your kids' gaming console (which might be infected) by using the Guest Wi-Fi setting.

### 3. Physical Security
*   **Privacy Screens**: Filters that prevent "Shoulder Surfing" on planes/trains.
*   **Never Leave Unattended**: A laptop takes seconds to steal.`,
            keyTakeaways: [
                "VPN is mandatory on public networks.",
                "Isolate work devices on Home Guest Wi-Fi.",
                "Use Privacy Screens in public spaces."
            ]
        },
        questions: [
            { q: "Why use a VPN on public Wi-Fi?", options: ["To watch Netflix", "To encrypt traffic and prevent interception", "To speed up internet", "To save data"], correct: 1 },
            { q: "What is 'Shoulder Surfing'?", options: ["Swimming technique", "Spying on a screen by looking over someone's shoulder", "Walking behind someone", "Online stalking"], correct: 1 },
            { q: "How should you configure your Home Router for work?", options: ["Leave it open", "Change default password and use Guest Network for IoT/Kids", "Turn off encryption", "Share password with neighbors"], correct: 1 },
            { q: "What is a 'Man-in-the-Middle' attack?", options: ["A referee", "Attacker intercepting communication between two parties", "Server failure", "Cable cut"], correct: 1 },
            { q: "If you leave your laptop in a coffee shop to use the restroom, you should:", options: ["Ask a stranger to watch it", "Lock it (Windows+L)", "Take it with you", "Leave it open"], correct: 2 },
            { q: "Default router passwords (admin/admin) are:", options: ["Secure", "Extremely vulnerable", "Hard to guess", "Recommended"], correct: 1 },
            { q: "A Privacy Screen Filter helps prevention of:", options: ["Glare", "Visual Hacking (Shoulder Surfing)", "Blue light", "Dust"], correct: 1 },
            { q: "Remote Desktop Protocol (RDP) should be:", options: ["Open to the internet", "Protected by VPN / Firewall", "Disabled", "Shared"], correct: 1 },
            { q: "Before traveling, you should:", options: ["Backup your data", "Post on social media", "Disable password", "Format laptop"], correct: 0 },
            { q: "Can smart bulbs/fridges attack your work laptop?", options: ["No", "Yes, if they are infected and on the same network", "Only if plugged in", "Only via Bluetooth"], correct: 1 }
        ]
    },
    {
        id: 7,
        title: "Social Media & OSINT",
        description: "Managing your Digital Footprint and avoiding targeted attacks.",
        icon: <CheckCircle className="w-6 h-6 text-pink-500" />,
        xpReward: 100,
        resource: {
            title: "Counter-OSINT Strategies",
            content: `Attackers use Open Source Intelligence (OSINT) to build a profile on you before attacking.

### 1. What are they looking for?
*   **Company Hierarchy**: To know who the CFO is (for Whaling).
*   **Technology Stack**: Posting "Looking for React Developers" tells hackers you use React (and maybe have specific vulnerabilities).
*   **Vacation Dates**: "Off to Dubai!" tells burglars your office/home is empty.

### 2. Social Media Hygiene
*   **Boarding Passes**: Never post them. The barcode contains your Passport Number and Frequent Flyer info.
*   **ID Badges**: High-res photos allows cloning of keycards.

### 3. Verification
*   **Sock Puppets**: Fake profiles used to connect with employees. If a recruiter with no mutual connections adds you, verify them outside of LinkedIn.`,
            keyTakeaways: [
                "Don't post Boarding Passes or ID Badges.",
                "Be vague about specific technology versions in job posts.",
                "Verify connection requests from strangers."
            ]
        },
        questions: [
            { q: "What is OSINT?", options: ["Open Source Intelligence", "Operating System INTerface", "Online Security INT", "Office Source INT"], correct: 0 },
            { q: "Why is posting a Boarding Pass dangerous?", options: ["It's bragging", "Barcode contains sensitive PII", "It's illegal", "It's boring"], correct: 1 },
            { q: "What is a 'Sock Puppet' account?", options: ["A toy", "Referencing a fake identity used for spying/manipulation", "A verified account", "A bot"], correct: 1 },
            { q: "Posting 'We are hiring a version 5.4.1 WordPress Dev' is risky because:", options: ["It reveals your software version to attackers", "It limits candidates", "It's unprofessional", "It costs money"], correct: 0 },
            { q: "Posting real-time vacation photos can lead to:", options: ["More likes", "Physical burglary / Social Engineering", "Job loss", "Fame"], correct: 1 },
            { q: "Posting your ID Badge allows attackers to:", options: ["Know your name", "Clone the badge for physical access", "Send you mail", "Like your photo"], correct: 1 },
            { q: "If a stranger sends a LinkedIn request, you should:", options: ["Accept immediately", "Check their profile/Verify identity", "Block them", "Ignore"], correct: 1 },
            { q: "Oversharing on social media helps attackers with:", options: ["Spear Phishing & Password guessing", "Nothing", "Marketing", "Improving their lives"], correct: 0 },
            { q: "Metadata in photos can reveal:", options: ["Camera type", "Exact GPS Location", "Photographer name", "All of the above"], correct: 3 },
            { q: "A 'Watering Hole' attack targets:", options: ["Websites frequented by specific employees", "Water coolers", "Phishing emails", "Physical offices"], correct: 0 }
        ]
    },
    {
        id: 8,
        title: "Vulnerability Management",
        description: "Patching, Zero-Days, and EOL Software.",
        icon: <Shield className="w-6 h-6 text-indigo-500" />,
        xpReward: 100,
        resource: {
            title: "Patch Management Protocols",
            content: `Software has bugs. Security updates fix those bugs.

### 1. The Exploit Lifecycle
*   **Vulnerability Discovered (CVE)**: Vendor finds a bug.
*   **Patch Released**: Vendor releases update.
*   **Exploit Window**: Hackers reverse-engineer the patch to attack anyone who hasn't updated yet.
*   **Zero-Day**: Hackers find the bug *before* the vendor. No patch exists yet.

### 2. End-of-Life (EOL) Software
Using Windows 7 or Server 2008 today is suicide. EOL software receives **NO** security updates.
*   **Action**: Upgrade or Air-gap legacy systems.

### 3. Automation
Humans forget. Configure all OS and Browsers to **Auto-Update**.`,
            keyTakeaways: [
                "Enable Auto-Updates everywhere.",
                "Retire End-of-Life (EOL) software immediately.",
                "Zero-Day attacks require behavioral defense (not just patches)."
            ]
        },
        questions: [
            { q: "What is a 'Zero-Day' vulnerability?", options: ["A bug fixed in zero days", "An exploit unknown to the vendor (No patch exists)", "A simple virus", "A fake bug"], correct: 1 },
            { q: "What does 'EOL' stand for?", options: ["End of Line", "End of Life (No more updates)", "End of License", "Easy on Line"], correct: 1 },
            { q: "Why is the time between patch release and installation critical?", options: ["It isn't", "It is the 'Exploit Window' where you are vulnerable", "It saves bandwidth", "It speeds up computers"], correct: 1 },
            { q: "What is a CVE?", options: ["Computer Virus Error", "Common Vulnerabilities and Exposures (ID for a bug)", "Cyber Virtual Environment", "Central Virus Engine"], correct: 1 },
            { q: "Best strategy for updates:", options: ["Manual check yearly", "Automatic Updates", "Wait for bugs", "Never update"], correct: 1 },
            { q: "Why update a Browser?", options: ["New features only", "Security patches for web threats", "Change colors", "Delete cookies"], correct: 1 },
            { q: "Is legacy software (e.g., Windows 7) safe to use?", options: ["Yes, with antivirus", "No, it lacks security updates", "Yes, if offline", "No, it is slow"], correct: 1 },
            { q: "What is 'Virtual Patching'?", options: ["Fake patch", "Using a WAF/IPS to block exploits before the software is patched", "Patching a VM", "Patching a game"], correct: 1 },
            { q: "Who is responsible for patching 3rd party apps (Adobe, Zoom)?", options: ["Microsoft", "The User / IT Admin", "Google", "No one"], correct: 1 },
            { q: "Patch collisions (updates breaking things) can be mitigated by:", options: ["Testing patches in a staging environment", "Not patching", "Patching immediately", "None"], correct: 0 }
        ]
    },
    {
        id: 9,
        title: "Physical Security",
        description: "Tailgating, Clean Desk, and Data Disposal.",
        icon: <Lock className="w-6 h-6 text-gray-500" />,
        xpReward: 100,
        resource: {
            title: "Physical Layer Security",
            content: `If they can touch the server, they own it.

### 1. Tailgating / Piggybacking
Politeness is a vulnerability. Holding the door for a stranger allows them to bypass badge access.
*   **Rule**: "One Badge, One Entry."

### 2. Clean Desk Policy
Leaving a password on a sticky note or sensitive contracts on a desk is a breach.
*   **Lock Screen**: Win+L every time you stand up.

### 3. Dumpster Diving
Thieves raid trash for bank statements or invoices.
*   **Solution**: Cross-cut shredders for all business docs.`,
            keyTakeaways: [
                "Challenge strangers; don't hold the door.",
                "Lock your screen (Win+L) when stepping away.",
                "Shred all documents."
            ]
        },
        questions: [
            { q: "What is 'Tailgating'?", options: ["Driving close", "Following someone through a secure door without a badge", "A party", "Walking fast"], correct: 1 },
            { q: "Best defense against Dumpster Diving:", options: ["Guard dogs", "Cross-cut Shredding", "Recycling", "Burning"], correct: 1 },
            { q: "Windows shortcut to lock screen:", options: ["Alt+F4", "Win+L", "Ctrl+C", "Esc"], correct: 1 },
            { q: "Why is a Clean Desk Policy important?", options: ["It looks nice", "Prevents unauthorized viewing of sensitive info", "Janitors like it", "Saves paper"], correct: 1 },
            { q: "If you see a stranger in a restricted area:", options: ["Ignore them", "Challenge them ('Can I help you?') and check badge", "Run away", "Call police"], correct: 1 },
            { q: "Is writing a password on a sticky note secure?", options: ["Yes, if under keyboard", "No, never", "Yes, if in drawer", "Yes, if written in code"], correct: 1 },
            { q: "Proper disposal of old hard drives:", options: ["Trash can", "Physical Destruction / Degaussing", "Formatting", "Giving to charity"], correct: 1 },
            { q: "Visitor badges should be:", options: ["Optional", "Mandatory and clearly visible", "Hidden", "Paper"], correct: 1 },
            { q: "Access Control Systems (Badge readers) replace:", options: ["Doors", "Traditional Keys", "Guards", "Cameras"], correct: 1 },
            { q: "Biometrics (Fingerprint) are better than keys because:", options: ["They are cooler", "They cannot be lost or shared easily", "They are cheaper", "They are faster"], correct: 1 }
        ]
    },
    {
        id: 10,
        title: "Incident Response",
        description: "What to do exactly when you get hacked.",
        icon: <AlertTriangle className="w-6 h-6 text-red-600" />,
        xpReward: 150,
        resource: {
            title: "Incident Response (IR) Cycle",
            content: `Panic is the enemy. Have a plan.

### 1. Preparation
Have a call list (IT, Legal, PR) printed out. Know where your backups are.

### 2. Identification & Containment
*   **Disconnect**: Pull the network cable. Turn off Wi-Fi.
*   **Preserve Evidence**: Don't shut down (RAM data might be lost) unless encryption is active.

### 3. Eradication & Recovery
*   **Wipe**: Re-image the infected machine.
*   **Restore**: Use the clean backup.
*   **Password Reset**: Force reset all credentials.

### 4. Lessons Learned
Post-mortem meeting. How did they get in? Patch that hole.`,
            keyTakeaways: [
                "Disconnect network cables immediately.",
                "Do not pay ransoms.",
                "Conduct a Post-Mortem analysis."
            ]
        },
        questions: [
            { q: "What is the first step in Incident Response?", options: ["Panic", "Preparation", "Recovery", "Analysis"], correct: 1 },
            { q: "If a computer is infected, you should:", options: ["Leave it on network", "Disconnect from Network (Containment)", "Use it to email IT", "Sell it"], correct: 1 },
            { q: "What is a 'Post-Mortem'?", options: ["A funeral", "Reviewing the incident to learn and improve", "Cleaning up", "Firing staff"], correct: 1 },
            { q: "Preserving evidence is important for:", options: ["Forensics and Legal action", "Memory", "Backups", "None"], correct: 0 },
            { q: "Who should be notified of a data breach?", options: ["No one", "Stakeholders, Legal, Regulators (NDPR/GDPR)", "Twitter", "Family"], correct: 1 },
            { q: "What is 'Eradication'?", options: ["Removing the threat completely", "Containing it", "Detecting it", "Ignoring it"], correct: 0 },
            { q: "Why is preparation important?", options: ["It isn't", "Because panic leads to mistakes during a crisis", "It costs money", "It takes time"], correct: 1 },
            { q: "Tabletop Exercises are:", options: ["Furniture shopping", "Simulating cyberattacks to practice response", "Lunch breaks", "Gym workouts"], correct: 1 },
            { q: "Mean Time To Detect (MTTD) should be:", options: ["High", "As low as possible", "Infinite", "Zero"], correct: 1 },
            { q: "Chain of Custody refers to:", options: ["Prison", "Documentation of who handled evidence", "Backup chain", "Email threads"], correct: 1 }
        ]
    },
    {
        id: 11,
        title: "Data Privacy & Compliance",
        description: "Understanding NDPR, GDPR, and your legal obligations.",
        icon: <Globe className="w-6 h-6 text-teal-500" />,
        xpReward: 200,
        resource: {
            title: "Data Privacy for SMEs",
            content: `Handling customer data is a liability. In Nigeria, the **NDPR** (Nigeria Data Protection Regulation) governs this.

### 1. Key Principles
*   **Consent**: You must ask permission before collecting emails/phones. No pre-ticked boxes!
*   **Purpose Limitation**: If you collected email for a receipt, you cannot use it for marketing unless they agreed.
*   **Data Minimization**: Don't collect data you don't need.

### 2. Digital Rights
Customers have the right to:
*   **Access**: Ask what data you have on them.
*   **Erasure**: Ask you to delete their data ("Right to be Forgotten").

### 3. Compliance Checklist
*   Publish a Privacy Policy on your website.
*   Appoint a Data Protection Officer (DPO) if you process large data.
*   Report breaches to NITDA within 72 hours.`,
            keyTakeaways: [
                "Obtain explicit consent for data collection.",
                "Respect the 'Right to be Forgotten'.",
                "Report breaches to NITDA/Regulators."
            ]
        },
        questions: [
            { q: "What does NDPR stand for?", options: ["National Data Protection Resource", "Nigeria Data Protection Regulation", "New Data Policy Rule", "Nigeria Digital Privacy Rule"], correct: 1 },
            { q: "What is 'Data Minimization'?", options: ["Collecting as much data as possible", "Collecting only what is strictly necessary", "Deleting data", "Ignoring data"], correct: 1 },
            { q: "What is 'Consent'?", options: ["Assuming they agree", "Explicit, informed permission from the user", "Hidden text", "Forced agreement"], correct: 1 },
            { q: "The 'Right to be Forgotten' means:", options: ["Users can ask you to delete their data", "You can forget passwords", "Data expires", "Users forget you"], correct: 0 },
            { q: "Breaches must be reported to NITDA within:", options: ["24 hours", "72 hours", "1 Week", "1 Month"], correct: 1 },
            { q: "What is a Privacy Policy?", options: ["Internal memo", "Public document explaining how you handle data", "Secret document", "Government law"], correct: 1 },
            { q: "Who is a 'Data Subject'?", options: ["The database", "The individual whose data is collected", "The computer", "The hacker"], correct: 1 },
            { q: "GDPR applies to:", options: ["Only Europe", "Any business handling European citizens' data", "Only USA", "No one"], correct: 1 },
            { q: "Can you sell customer data?", options: ["Yes, always", "No, unless explicit consent is given", "Yes, if they don't know", "Only to friends"], correct: 1 },
            { q: "What is PII?", options: ["Personal Internet Info", "Personally Identifiable Information (Name, Phone, etc.)", "Private Internal Info", "Public Info"], correct: 1 }
        ]
    },
    {
        id: 12,
        title: "Supply Chain Security",
        description: "Managing Vendor Risk and Third-Party access.",
        icon: <Truck className="w-6 h-6 text-yellow-600" />,
        xpReward: 200,
        resource: {
            title: "Your Vendors are Your Weakness",
            content: `You might be secure, but is your accountant? Or your cloud provider? 

### 1. Vendor Risk Management (VRM)
*   **Assess**: Before hiring a vendor, ask about their security. Do they use MFA?
*   **Contracts**: Include security requirements in contracts. "Vendor must report breaches within 24 hours."

### 2. Software Supply Chain
*   **Open Source**: Most modern code is open source. Vulnerabilities in libraries (like Log4Shell) affect everyone.
*   **SBOM**: Software Bill of Materials. A list of ingredients in your software.

### 3. Access Control for Vendors
*   **Time-Bound Access**: Give vendors access only for the duration of the project.
*   **Monitoring**:Log what vendors do on your network.`,
            keyTakeaways: [
                "Audit your vendors' security.",
                "Limit vendor access (Least Privilege).",
                "Include security clauses in contracts."
            ]
        },
        questions: [
            { q: "Why is Supply Chain Security important?", options: ["It is cheap", "Attackers target smaller vendors to get to larger targets", "It isn't", "It speeds up delivery"], correct: 1 },
            { q: "What should be in a vendor contract?", options: ["Price only", "Security requirements and Breach notification clauses", "Lunch orders", "Nothing"], correct: 1 },
            { q: "Vendor access should be:", options: ["Permanent", "Temporary and Monitored", "Unlimited", "Unsupervised"], correct: 1 },
            { q: "What is an SBOM?", options: ["Software Bill of Materials", "Super Bomb", "Secure Bill of Money", "Software Bug Manager"], correct: 0 },
            { q: "Target (US Retailer) was breached via:", options: ["Direct hack", "HVAC (Air Conditioning) Vendor", "Phishing CEO", "Bad Wi-Fi"], correct: 1 },
            { q: "Fourth-Party Risk is:", options: ["Your vendor's vendor", "A party", "Your customer", "Your employee"], correct: 0 },
            { q: "Before hiring a SaaS provider, you should:", options: ["Check their price", "Review their security compliance (SOC2/ISO)", "Google them", "Guess"], correct: 1 },
            { q: "If a vendor is breached:", options: ["It's not your problem", "It enables attackers to access your data/systems", "It's good", "Ignore it"], correct: 1 },
            { q: "What is a 'Island Hopping' attack?", options: ["Travel fraud", "Attacking a supply chain partner to reach the primary target", "Wi-Fi hopping", "None"], correct: 1 },
            { q: "Least Privilege for vendors means:", options: ["Giving them admin rights", "Giving them only what they need", "Giving them nothing", "Giving them office keys"], correct: 1 }
        ]
    }
];
