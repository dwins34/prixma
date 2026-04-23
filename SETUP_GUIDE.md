# 🚀 Prixma — Setup Guide
## From Download to Localhost in 5 Minutes

---

## STEP 1 — Prerequisites

| Tool | Check | Install |
|------|-------|---------|
| **Node.js** (v18+) | `node -v` | https://nodejs.org |
| **Git** | `git --version` | https://git-scm.com |

---

## STEP 2 — Create GitHub Repo

1. Go to **https://github.com/new**
2. Name it: `prixma`
3. Leave all checkboxes **unchecked**
4. Click **Create repository**
5. Copy your repo URL:
   ```
   https://github.com/YOUR_USERNAME/prixma.git
   ```

---

## STEP 3 — Extract the Project

Extract the downloaded `prixma.zip`. You'll get:

```
prixma/
├── package.json
├── tsconfig.json
├── next.config.js
├── .gitignore
├── README.md
├── SETUP_GUIDE.md
└── src/app/
    ├── layout.tsx
    ├── page.tsx
    ├── globals.css
    └── components/ui/
        └── (all components)
```

---

## STEP 4 — Install & Run Locally

```bash
# Navigate into the folder
cd prixma

# Install dependencies (~30 seconds)
npm install

# Start dev server
npm run dev
```

Open **http://localhost:3000** 🎉

---

## STEP 5 — Push to GitHub

```bash
git init
git add .
git commit -m "feat: initial Prixma component library site"
git remote add origin https://github.com/YOUR_USERNAME/prixma.git
git branch -M main
git push -u origin main
```

---

## STEP 6 — Save Future Changes

```bash
git add .
git commit -m "describe what you changed"
git push
```

---

## STEP 7 (Optional) — Deploy Free on Vercel

1. Go to **https://vercel.com** → sign in with GitHub
2. Click **New Project** → import `prixma`
3. Click **Deploy**

Live in 60 seconds at `https://prixma.vercel.app` ✨

---

## 🔧 Useful Commands

| Command | What it does |
|---------|-------------|
| `npm run dev` | Localhost:3000 with hot reload |
| `npm run build` | Build for production |
| `npm run lint` | Check for code issues |
| `git status` | See changed files |
| `git log --oneline` | See commit history |

---

## ❓ Troubleshooting

**Port in use?**
```bash
npm run dev -- --port 3001
```

**Module errors?**
```bash
rm -rf node_modules && npm install
```

---

*Prixma — Built from your Figma design system*
