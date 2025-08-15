# Shri Krishna — Portfolio (Vite + React + Tailwind)

A beautiful, responsive portfolio about Shri Krishna with sections for Leelas, War/Leadership, Bhagavad Gita, Lifestyle, Timeline, Gallery, Quotes, and Resources. Built with Vite + React + Tailwind. Includes dark/light theme toggle and local images.

## Quickstart

```bash
npm install
npm run dev
# open http://localhost:5173
```

## Build

```bash
npm run build
npm run preview
```

## Deploy to Vercel

1. Push this folder to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Shri Krishna portfolio initial"
   git branch -M main
   git remote add origin https://github.com/<your-username>/krishna-portfolio.git
   git push -u origin main
   ```

2. Go to https://vercel.com → **New Project** → import the repo.
3. Vercel auto-detects Vite. Press **Deploy**.
4. Get your public URL (e.g., `https://krishna-portfolio.vercel.app`).

## Notes

- Icons are from `lucide-react` (using only widely-available icons).  
- No `Lotus` icon used to avoid the missing export error.  
- Replace images in `public/images/` with your real artwork (traditional paintings or modern illustrations).

## Customize

- Edit text in `src/App.jsx` for content.
- Add more sections or images in `public/images/`.
- Tailwind is configured with `darkMode: 'class'` and a simple theme toggle in the navbar.
