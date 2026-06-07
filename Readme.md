# Sutan.co.uk

[![Deploy to GitHub Pages](https://github.com/sutanmufti/personal-site-3/actions/workflows/deploy.yml/badge.svg)](https://github.com/sutanmufti/personal-site-3/actions/workflows/deploy.yml)
[![Hugo](https://img.shields.io/badge/Hugo-0.162.1-FF4088?logo=hugo&logoColor=white)](https://gohugo.io/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Website](https://img.shields.io/website?url=https%3A%2F%2Fsutan.co.uk)](https://sutan.co.uk)
[![GitHub Pages](https://img.shields.io/badge/Hosted_on-GitHub_Pages-222?logo=github)](https://pages.github.com/)

Personal website of Sutan Ashari Mufti — Urban, Transport and Infrastructure Specialist.

Built with [Hugo](https://gohugo.io/) and [Tailwind CSS v4](https://tailwindcss.com/). Deployed to [GitHub Pages](https://pages.github.com/) via GitHub Actions.

## Stack

- **Hugo** — static site generator
- **Tailwind CSS v4** — utility-first styling via PostCSS
- **Lucide** — icon library
- **GitHub Actions** — CI/CD pipeline
- **GitHub Pages** — hosting

## Analytics and Privacy

The site uses **Google Analytics 4** for traffic analysis, implemented with **Google Consent Mode v2**. All analytics signals default to denied on page load. Analytics only activates if the visitor explicitly accepts via the cookie consent banner.

Consent preference is stored in browser local storage under the key `cookie_consent`. No tracking cookies are set before consent is given. See [`content/privacy/index.md`](content/privacy/index.md) for the full privacy policy.

### Cookie Consent Implementation

| File | Purpose |
|------|---------|
| `layouts/_default/baseof.html` | Consent Mode v2 init script in `<head>`; banner partial included before `</body>` |
| `layouts/partials/cookie-consent.html` | Cookie banner UI (Accept / Decline) |
| `assets/js/main.js` | Consent logic: show banner, handle clicks, update gtag, persist to localStorage |
| `content/privacy/index.md` | Privacy policy page |
