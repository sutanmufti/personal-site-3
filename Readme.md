# Sutan.co.uk

[![Live Site](https://img.shields.io/badge/live-sutan.co.uk-0B1D3A?style=flat-square&logo=globe&logoColor=C9A84C)](https://sutan.co.uk)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6.x-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Deployed on GitHub Pages](https://img.shields.io/badge/deployed-GitHub_Pages-222?style=flat-square&logo=github&logoColor=white)](https://sutan.co.uk)
[![Deploy to GitHub Pages](https://github.com/sutanmufti/personal-site-3/actions/workflows/deploy.yml/badge.svg)](https://github.com/sutanmufti/personal-site-3/actions/workflows/deploy.yml)

Personal portfolio and advisory website for Sutan Ashari Mufti.

Built with TypeScript, Vite, and Tailwind CSS v4.

## Important Commands

convert video

```
ffmpeg -i input.mp4 -c:v libvpx-vp9 -crf 32 -b:v 0 output.webm
```

## Pages

| Page | File | Description |
|---|---|---|
| Home | `index.html` | Landing page with services, GIS capability, and selected work |
| About | `about.html` | Background, career timeline, education, and projects |

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Project Structure

```
/
├── index.html          # Home page
├── about.html          # About page
├── public/             # Static assets (images, CV PDF)
├── src/
│   ├── main.ts         # Entry point for index.html
│   ├── about.ts        # Entry point for about.html
│   ├── layout.ts       # Shared nav and footer
│   └── style.css       # Tailwind CSS + theme tokens
└── vite.config.ts      # Vite multi-page config
```

## Adding a New Page

1. Create `page-name.html` at the root
2. Create `src/page-name.ts` and import `mountNav`, `mountFooter` from `./layout`
3. Add the entry to `vite.config.ts`:
   ```ts
   input: {
     main:        resolve(__dirname, 'index.html'),
     about:       resolve(__dirname, 'about.html'),
     'page-name': resolve(__dirname, 'page-name.html'),
   }
   ```

## Tech Stack

- **Vite** — build tool and dev server
- **TypeScript** — type-safe scripting
- **Tailwind CSS v4** — utility-first styling via `@tailwindcss/vite`
- **Lucide** — icon library (`createIcons` for vanilla JS usage)
- **Google Fonts** — Inter (body) and Playfair Display (headings)
