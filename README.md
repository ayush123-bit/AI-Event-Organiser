
# AI Event Organiser

![AI Event Organiser](https://firebasestorage.googleapis.com/v0/b/portfolio-e6813.appspot.com/o/Screenshot%202025-12-23%20021431.png?alt=media)

AI Event Organiser is a modern, full-stack web application designed to help users create, manage, and discover events efficiently using AI-powered features. The platform supports authentication, real-time data handling, event categorization, and intelligent event management workflows.

---

## 🚀 Live Demo

🔗 **Deployed Application:**
[https://ai-event-organiser-ten.vercel.app/](https://ai-event-organiser-ten.vercel.app/)

---

## 📦 GitHub Repository

🔗 **Source Code:**
[https://github.com/ayush123-bit/AI-Event-Organiser](https://github.com/ayush123-bit/AI-Event-Organiser)

---

## ✨ Features

* 🔐 Secure authentication using **Clerk**
* 🗂️ Create, edit, and manage events
* 📅 Event categorization and filtering
* ⚡ Real-time backend powered by **Convex**
* 🤖 AI-assisted event descriptions (Gemini API)
* 🖼️ Event images via **Unsplash API**
* 📱 Fully responsive UI
* ☁️ Production-ready deployment on **Vercel**

---

## 🛠️ Tech Stack

**Frontend**

* Next.js (App Router)
* React
* Tailwind CSS

**Backend**

* Convex (Serverless database & functions)

**Authentication**

* Clerk

**APIs & Integrations**

* Google Gemini API (AI features)
* Unsplash API (Images)

**Deployment**

* Vercel (Frontend)
* Convex Cloud (Backend)

---

## ⚙️ Environment Variables

Create a `.env.local` file in the root directory and add the following:

```env
# Convex
CONVEX_DEPLOYMENT=dev
NEXT_PUBLIC_CONVEX_URL=http://localhost:3000/api/convex

# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
CLERK_JWT_ISSUER_DOMAIN=your_clerk_jwt_issuer_domain
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up

# Unsplash
NEXT_PUBLIC_UNSPLASH_ACCESS_KEY=your_unsplash_access_key

# Gemini AI
GEMINI_API_KEY=your_gemini_api_key
```

---

## 🧑‍💻 Local Development Setup

```bash
# Clone the repository
git clone https://github.com/ayush123-bit/AI-Event-Organiser.git
cd AI-Event-Organiser

# Install dependencies
npm install

# Start Convex backend
npx convex dev

# Start Next.js frontend
npm run dev
```

Open `http://localhost:3000` in your browser.

---

## 🚢 Deployment Guide (Production)

1. Deploy Convex backend:

```bash
npx convex deploy
```

2. Add production environment variables in **Vercel Dashboard**
3. Deploy frontend via Vercel

---

## 👤 Author

**Ayush Rai**

* GitHub: [https://github.com/ayush123-bit](https://github.com/ayush123-bit)
* Portfolio: [https://ayushrai-jan-2004.netlify.app](https://ayushrai-jan-2004.netlify.app)
* LinkedIn: [https://www.linkedin.com/in/ayush-rai-7109202b6](https://www.linkedin.com/in/ayush-rai-7109202b6)

---

## 📄 License

This project is licensed under the MIT License.

---

⭐ If you found this project useful, consider giving it a star on GitHub!
