# Deployment Guide for SME-Guard

Since `git` is not currently installed or recognized on your system, you have two options to deploy your application.

## Option 1: Install Git and Push to GitHub (Recommended)

### 1. Install Git
-   Download Git from [git-scm.com](https://git-scm.com/downloads).
-   Install it (select default options).
-   Restart your terminal/command prompt.

### 2. Create a Repository on GitHub
-   Go to [GitHub.com](https://github.com) and sign in.
-   Click the **+** icon in the top right and select **New repository**.
-   Name it `sme-guard`.
-   Click **Create repository**.

### 3. Push Your Code
Open your terminal in the project folder (`c:\Users\Fikira\Antigravity\sme-guard`) and run:

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/sme-guard.git
git push -u origin main
```
*(Replace `YOUR_USERNAME` with your actual GitHub username)*

### 4. Deploy to Vercel
-   Go to [Vercel.com](https://vercel.com) and sign up/login with GitHub.
-   Click **Add New...** -> **Project**.
-   Import your `sme-guard` repository.
-   Click **Deploy**.
-   Vercel will automatically detect it's a Vite React app and build it.

---

## Option 2: Manual Upload (No Git required)

### Deploy to Netlify (Drag & Drop)
1.  Run the build command locally:
    ```bash
    npm run build
    ```
2.  This creates a `dist` folder in your project directory.
3.  Go to [Netlify Drop](https://app.netlify.com/drop).
4.  Drag and drop the `dist` folder onto the page.
5.  Your site will be live instantly!

### Important: Firebase Configuration
Remember that for the app to work on the live URL, you need to:
1.  Go to Firebase Console -> Authentication -> Settings -> **Authorized domains**.
2.  Add your new Vercel or Netlify domain (e.g., `sme-guard.vercel.app`) to the list.
