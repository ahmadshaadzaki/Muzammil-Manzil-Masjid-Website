# 🕌 Muzammil Manzil Masjid Website

An informative community portal and digital guide for **Muzammil Manzil Masjid**, located in Dodhpur, Aligarh. This website provides daily prayer times, Friday prayer information, rich historical details, visitor guidelines, interactive directions, and community announcements.

---

## ✨ Features

- ⏰ **Daily Prayer Times**: Real-time accurate prayer schedule (Fajr, Dhuhr, Asr, Maghrib, Isha) computed for Dodhpur, Aligarh.
- 🕌 **Friday (Jummah) Prayer**: Dedicated section with Friday sermon (Khutbah) and Jama'at timings.
- 📜 **History & Architectural Heritage**: Learn about the history, heritage, and unique Indo-Islamic architecture of Muzammil Manzil.
- 🧭 **Qibla Compass & Directions**: Interactive Qibla direction tool and map guide for visitors and local worshippers.
- 📋 **Visitor Etiquette & Guidelines**: Simple, helpful guidelines for visitors and tourists.
- 📢 **Announcements Board**: Updates on community events, Ramadan schedules, and masjid news.

---

## 🛠️ Technology Stack

- **Frontend**: React 19, TypeScript, Vite, Tailwind CSS v4
- **Icons & Animations**: Lucide React, Motion (Framer Motion)
- **Backend / Server**: Express.js, `tsx`, `esbuild`
- **Deployment**: Cloudflare Workers (`wrangler`), Node.js

---

## 🚀 Getting Started & Building Methods

Follow these simple steps to run and build the website on your local computer.

### Prerequisites

Make sure you have one of the following installed on your system:
- **Node.js** (v18 or higher) & **npm**  
  *or*
- **Bun** (recommended for faster package installation)

---

### Step 1: Install Dependencies

Open your terminal in the project folder and run:

Using **npm**:
```bash
npm install
```

*or* using **Bun**:
```bash
bun install
```

---

### Step 2: Run Local Development Server

To start the website in development mode (with live changes):

Using **npm**:
```bash
npm run dev
```

*or* using **Bun**:
```bash
bun run dev
```

Open your browser and navigate to: **`http://localhost:3000`**

---

### Step 3: Build for Production

To compile and build the website for production use:

Using **npm**:
```bash
npm run build
```

*or* using **Bun**:
```bash
bun run build
```

This creates an optimized production bundle inside the `dist/` directory.

---

### Step 4: Preview Production Build Locally

To test the production build on your local machine:

```bash
npm start
```

---

## 🌐 Deployment Methods

You can deploy this website easily using either **Cloudflare** or any **Node.js hosting provider**.

### Method 1: Deploying to Cloudflare (Recommended)

This project comes pre-configured with Cloudflare Wrangler (`wrangler.json`).

1. Make sure you are logged into your Cloudflare account in Wrangler:
   ```bash
   npx wrangler login
   ```
2. Deploy the project:
   ```bash
   npm run deploy
   ```
   *or*
   ```bash
   bun run deploy
   ```

---

### Method 2: Deploying to Node.js Hosting (Vercel, Render, Railway, VPS)

1. Connect your repository to your hosting platform (e.g., Vercel, Render, Railway).
2. Set the following build settings:
   - **Build Command**: `npm run build`
   - **Start Command**: `npm start` or `node dist/server.cjs`
   - **Output Directory**: `dist`
3. Environment Variables:
   - Copy `.env.example` to `.env` and fill in any required keys if applicable.

---

## 📁 Project Structure

```text
├── src/
│   ├── components/        # UI components (Hero, Prayer Times, History, Qibla, etc.)
│   ├── data/              # Static content and prayer schedule data
│   ├── App.tsx            # Main application layout
│   ├── main.tsx           # React entry point
│   └── index.css          # Global styling & Tailwind CSS imports
├── public/                # Public static assets (images, icons)
├── server.ts              # Express server setup for local dev & SSR fallback
├── vite.config.ts         # Vite build configuration
├── wrangler.json          # Cloudflare deployment settings
└── package.json           # Scripts and dependencies
```

---

## 📄 License

This project is maintained for the community of Muzammil Manzil Masjid, Dodhpur, Aligarh.
