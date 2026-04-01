const navHTML = `
<nav class="fixed top-0 w-full z-50 bg-navy border-b border-white/10">
  <div class="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between h-16">
    <a href="/" class="font-display text-base font-semibold text-white tracking-wide">Sutan Mufti</a>
    <div class="hidden md:flex items-center gap-8">
      <a href="/#services" class="text-sm text-white/60 hover:text-white transition-colors duration-200">Services</a>
      <a href="/#work" class="text-sm text-white/60 hover:text-white transition-colors duration-200">Work</a>
      <a href="/#gis" class="text-sm text-white/60 hover:text-white transition-colors duration-200">GIS</a>
      <a href="/about.html" class="text-sm text-white/60 hover:text-white transition-colors duration-200">About</a>
      <a href="/ai.html" class="text-sm text-white/60 hover:text-white transition-colors duration-200 flex items-center gap-1.5">
        <i data-lucide="sparkles" class="w-3.5 h-3.5 text-gold"></i>
        AI
      </a>
      <a href="/#contact" class="text-sm bg-gold text-navy px-5 py-2 font-semibold hover:bg-gold/85 transition-colors duration-200">
        Contact
      </a>
    </div>
    <button id="mobile-menu-btn" class="md:hidden flex flex-col gap-1.5 p-2" aria-label="Menu" aria-expanded="false">
      <span class="w-5 h-px bg-white/70 block transition-transform duration-200"></span>
      <span class="w-5 h-px bg-white/70 block transition-opacity duration-200"></span>
      <span class="w-5 h-px bg-white/70 block transition-transform duration-200"></span>
    </button>
  </div>
  <!-- Mobile menu panel -->
  <div id="mobile-menu" class="md:hidden hidden bg-navy border-t border-white/10">
    <div class="flex flex-col px-6 py-4 gap-1">
      <a href="/#services" class="text-sm text-white/60 hover:text-white py-3 border-b border-white/5 transition-colors duration-200">Services</a>
      <a href="/#work"     class="text-sm text-white/60 hover:text-white py-3 border-b border-white/5 transition-colors duration-200">Work</a>
      <a href="/#gis"      class="text-sm text-white/60 hover:text-white py-3 border-b border-white/5 transition-colors duration-200">GIS</a>
      <a href="/about.html" class="text-sm text-white/60 hover:text-white py-3 border-b border-white/5 transition-colors duration-200">About</a>
      <a href="/ai.html"   class="text-sm text-white/60 hover:text-white py-3 border-b border-white/5 transition-colors duration-200">AI</a>
      <a href="/#contact"  class="text-sm text-white/60 hover:text-white py-3 transition-colors duration-200">Contact</a>
    </div>
  </div>
</nav>
`

const footerHTML = `
<footer class="bg-navy py-10 border-t border-white/10">
  <div class="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col md:flex-row items-center justify-between gap-6">
    <span class="font-display text-white font-semibold">Sutan Mufti</span>
    <span class="text-white/25 text-xs">&copy; 2026 Sutan Mufti. All rights reserved.</span>
    <div class="flex items-center gap-8">
      <a href="/#services" class="text-white/35 text-xs hover:text-white/65 transition-colors duration-200">Services</a>
      <a href="/#work" class="text-white/35 text-xs hover:text-white/65 transition-colors duration-200">Work</a>
      <a href="/about.html" class="text-white/35 text-xs hover:text-white/65 transition-colors duration-200">About</a>
      <a href="/#contact" class="text-white/35 text-xs hover:text-white/65 transition-colors duration-200">Contact</a>
      <div class="w-px h-4 bg-white/15"></div>
      <a href="https://linkedin.com/in/sutanmufti" target="_blank" rel="noopener" aria-label="LinkedIn" class="text-white/35 hover:text-white/65 transition-colors duration-200">
        <i data-lucide="linkedin" class="w-4 h-4"></i>
      </a>
      <a href="https://github.com/sutanmufti/personal-site-3" target="_blank" rel="noopener" aria-label="GitHub" class="text-white/35 hover:text-white/65 transition-colors duration-200">
        <i data-lucide="github" class="w-4 h-4"></i>
      </a>
    </div>
  </div>
</footer>
`

const CV_DISMISS_KEY = 'cv_banner_dismissed_until'
const CV_DISMISS_MS  = 24 * 60 * 60 * 1000 // 1 day

export function mountCVBanner(): void {
  const dismissedUntil = localStorage.getItem(CV_DISMISS_KEY)
  if (dismissedUntil && Date.now() < parseInt(dismissedUntil)) return

  const banner = document.createElement('div')
  banner.id = 'cv-banner'
  banner.className = 'fixed bottom-5 right-5 z-50 flex items-center gap-3 bg-navy border border-gold/40 shadow-lg px-4 py-3 text-sm'
  banner.innerHTML = `
    <i data-lucide="download" class="w-4 h-4 text-gold shrink-0"></i>
    <a href="/20260224_cv.pdf" download class="text-white font-medium hover:text-gold transition-colors duration-200 whitespace-nowrap">
      Download CV
    </a>
    <button id="cv-banner-dismiss" aria-label="Dismiss" class="ml-1 text-white/30 hover:text-white/70 transition-colors duration-200">
      <i data-lucide="x" class="w-3.5 h-3.5"></i>
    </button>
  `
  document.body.appendChild(banner)

  document.getElementById('cv-banner-dismiss')!.addEventListener('click', () => {
    localStorage.setItem(CV_DISMISS_KEY, String(Date.now() + CV_DISMISS_MS))
    banner.remove()
  })
}

export function mountNav(): void {
  document.body.insertAdjacentHTML('afterbegin', navHTML)

  const btn = document.getElementById('mobile-menu-btn')!
  const menu = document.getElementById('mobile-menu')!
  const bars = btn.querySelectorAll('span')

  btn.addEventListener('click', () => {
    const isOpen = !menu.classList.contains('hidden')

    menu.classList.toggle('hidden', isOpen)
    btn.setAttribute('aria-expanded', String(!isOpen))

    // Animate hamburger to X
    bars[0].style.transform = isOpen ? '' : 'translateY(6px) rotate(45deg)'
    bars[1].style.opacity   = isOpen ? '' : '0'
    bars[2].style.transform = isOpen ? '' : 'translateY(-6px) rotate(-45deg)'
  })

  // Close menu when any link inside it is clicked
  menu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.add('hidden')
      btn.setAttribute('aria-expanded', 'false')
      bars[0].style.transform = ''
      bars[1].style.opacity   = ''
      bars[2].style.transform = ''
    })
  })
}

export function mountFooter(): void {
  document.body.insertAdjacentHTML('beforeend', footerHTML)
}
