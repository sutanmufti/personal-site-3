import { createIcons, Route, Layers, Zap, CloudCog, Menu, X } from "lucide";

createIcons({
  icons: { Route, Layers, Zap, CloudCog, Menu, X },
});

// Mobile nav toggle
const toggle = document.getElementById("nav-toggle");
const drawer = document.getElementById("nav-drawer");
const iconOpen = document.getElementById("nav-icon-open");
const iconClose = document.getElementById("nav-icon-close");

if (toggle && drawer) {
  toggle.addEventListener("click", () => {
    const open = drawer.classList.toggle("hidden");
    toggle.setAttribute("aria-expanded", String(!open));
    iconOpen.classList.toggle("hidden", !open);
    iconClose.classList.toggle("hidden", open);
  });
}

// Transparent nav on home page — becomes opaque on scroll
const header = document.getElementById("site-header");

if (header && header.dataset.transparent) {
  const brand    = document.getElementById("nav-brand");
  const tagline  = document.getElementById("nav-tagline");
  const navLinks = [
    document.getElementById("nav-link-about"),
    document.getElementById("nav-link-projects"),
    document.getElementById("nav-link-posts"),
  ].filter(Boolean);

  const makeOpaque = () => {
    header.classList.remove("bg-transparent", "border-transparent", "shadow-none");
    header.classList.add("bg-white", "border-b", "border-slate-200", "shadow-sm");
    if (brand)   { brand.classList.remove("text-white");   brand.classList.add("text-slate-900"); }
    if (tagline) { tagline.classList.remove("text-slate-300"); tagline.classList.add("text-slate-500"); }
    navLinks.forEach(l => { l.classList.remove("text-slate-200", "hover:text-white"); l.classList.add("text-slate-600", "hover:text-blue-700"); });
    toggle?.classList.remove("text-white", "hover:bg-white/10");
    toggle?.classList.add("text-slate-600", "hover:text-slate-900", "hover:bg-slate-100");
  };

  const makeTransparent = () => {
    header.classList.add("bg-transparent", "border-transparent", "shadow-none");
    header.classList.remove("bg-white", "border-b", "border-slate-200", "shadow-sm");
    if (brand)   { brand.classList.add("text-white");   brand.classList.remove("text-slate-900"); }
    if (tagline) { tagline.classList.add("text-slate-300"); tagline.classList.remove("text-slate-500"); }
    navLinks.forEach(l => { l.classList.add("text-slate-200", "hover:text-white"); l.classList.remove("text-slate-600", "hover:text-blue-700"); });
    toggle?.classList.add("text-white", "hover:bg-white/10");
    toggle?.classList.remove("text-slate-600", "hover:text-slate-900", "hover:bg-slate-100");
  };

  window.addEventListener("scroll", () => {
    window.scrollY > 10 ? makeOpaque() : makeTransparent();
  }, { passive: true });
}

// Cookie consent
const CONSENT_KEY = 'cookie_consent';
const banner = document.getElementById('cookie-banner');

function updateConsent(value) {
  gtag('consent', 'update', {
    analytics_storage: value,
    ad_storage: value,
    ad_user_data: value,
    ad_personalization: value,
  });
  localStorage.setItem(CONSENT_KEY, value);
  banner.classList.add('hidden');
}

if (banner && !localStorage.getItem(CONSENT_KEY)) {
  banner.classList.remove('hidden');
}

document.getElementById('cookie-accept')?.addEventListener('click', () => updateConsent('granted'));
document.getElementById('cookie-decline')?.addEventListener('click', () => updateConsent('denied'));
