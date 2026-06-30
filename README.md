# Shanddar MoMo Restaurant Website + QR Menu System

Static Next.js App Router website for Shanddar MoMo, a Nepali and Indo-Chinese restaurant in Tbilisi, Georgia.

## Folder Structure

```text
.
├── public/
│   └── shanddar-momo-hero.png
├── src/
│   ├── app/
│   │   ├── contact/page.tsx
│   │   ├── location/page.tsx
│   │   ├── menu/
│   │   │   ├── [branch]/page.tsx
│   │   │   └── page.tsx
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   ├── MenuCard.tsx
│   │   ├── ReviewCards.tsx
│   │   └── Section.tsx
│   └── lib/
│       └── restaurant.ts
├── eslint.config.mjs
├── next.config.ts
├── package.json
├── postcss.config.mjs
└── tsconfig.json
```

## Run Locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## QR Menu Links

- `/menu/isani`
- `/menu/saburtalo`

## Production Build

```bash
npm run build
npm run start
```
