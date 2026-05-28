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
