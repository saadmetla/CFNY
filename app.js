const videoData = {
  production: [
    { year: '2026', title: 'Novig', subtitle: 'Novig Brand Activation', youtubeUrl: 'https://www.youtube.com/watch?v=bOaHuXXjkUk', noViews: true },

    { year: '2025', title: 'Miss Pooja', subtitle: 'Lakh Hile Majajan Jandi Da', youtubeUrl: 'https://www.youtube.com/watch?v=C0dv7kjX1Sk' },
    { year: '2025', title: 'J. Esko', subtitle: 'Like That', youtubeUrl: 'https://www.youtube.com/watch?v=WeCos4aCC60' },
    { year: '2025', title: 'Channi Nattan', subtitle: 'Gangsta Luv', youtubeUrl: 'https://www.youtube.com/watch?v=jMqIpCddv7s' },
    { year: '2025', title: 'Russ', subtitle: 'Movin’ Album Promo', youtubeUrl: 'https://www.youtube.com/shorts/BUU5SxAGbu4' },

    { year: '2024', title: 'Heems', subtitle: 'BUKAYO SAKA', youtubeUrl: 'https://www.youtube.com/watch?v=q5w12XA2Cmw' },
    { year: '2024', title: 'JJ ESKO FT ANNURAL KHALID', subtitle: 'MISTAKES', youtubeUrl: 'https://www.youtube.com/watch?v=cC47jPDezss' },
    { year: '2024', title: 'LOE SHIMMY & CASH COBAIN', subtitle: 'Confession', youtubeUrl: 'https://www.youtube.com/watch?v=iCCYnAwPcvI' },
    { year: '2024', title: 'SHEROZ & HENNY', subtitle: 'YAAR JIGRI', youtubeUrl: 'https://www.youtube.com/watch?v=vrZiFXlE-Vg' },
    { year: '2024', title: 'HEEMS', subtitle: 'Rakhi', youtubeUrl: 'https://www.youtube.com/watch?v=3d_cGjvZNTA' },
    { year: '2024', title: 'AHMED KHAN FT PDNY', subtitle: 'Attention', youtubeUrl: 'https://www.youtube.com/watch?v=gd4__EYRXOg' },
    { year: '2024', title: 'G HOUR TOP', subtitle: 'No Handouts', youtubeUrl: 'https://www.youtube.com/watch?v=7jUrtC4iw7E' },

    { year: '2023', title: 'RAF SAPERRA', subtitle: 'Ranjha', youtubeUrl: 'https://www.youtube.com/watch?v=MwFC7trjEXM' },
    { year: '2023', title: 'TRA-V THE SHOOTA', subtitle: 'I Wanna Be', youtubeUrl: 'https://www.youtube.com/watch?v=3liNCRTa4-s' },
    { year: '2023', title: 'SHEROZ, HENNY, G HOUR', subtitle: 'Mission', youtubeUrl: 'https://www.youtube.com/watch?v=-Zc135mSu7I' },
    { year: '2023', title: 'Heems', subtitle: 'RAPS AT PUNJABI DELI', youtubeUrl: 'https://www.youtube.com/watch?v=0TzZYaM9IDM' },
    { year: '2023', title: 'Heems', subtitle: 'RAPS IN JACKSON HEIGHTS', youtubeUrl: 'https://www.youtube.com/watch?v=Bg0gEo-xuOE' },

    { year: '2022', title: 'ANGIE MARTINEZ IRL PODCAST', subtitle: 'Ashanti', youtubeUrl: 'https://www.youtube.com/watch?v=_j55M6SC8Pw' }
  ],

  marketing: [
    { year: '2026', title: 'SEHAJPREET (PERFORMANCE)', subtitle: 'ON THE RADAR', youtubeUrl: 'https://www.youtube.com/watch?v=5a_KGKmG00w' },

    { year: '2025', title: 'RICO NASTY (FREESTYLE)', subtitle: 'ON THE RADAR', youtubeUrl: 'https://www.youtube.com/watch?v=f0ogsEtb0IY' },
    { year: '2025', title: 'RICO NASTY (PERFORMANCE)', subtitle: 'ON THE RADAR', youtubeUrl: 'https://www.youtube.com/watch?v=RCjhJi7VFmQ' },
    { year: '2025', title: 'ANKITH WOODS (FREESTYLE)', subtitle: 'ON THE RADAR', youtubeUrl: 'https://www.youtube.com/watch?v=H8W6pGOJ9h8' },
    { year: '2025', title: 'ILYKIMCHI (FREESTYLE)', subtitle: 'ON THE RADAR', youtubeUrl: 'https://www.youtube.com/watch?v=mO9O1R1Jehk' },
    { year: '2025', title: 'FEUX (PERFORMANCE)', subtitle: 'ON THE RADAR', youtubeUrl: 'https://www.youtube.com/watch?v=hdkp5c3ID9I' },
    { year: '2025', title: 'ANGEL TUMBADO X DAVIZZY (PERFORMANCE)', subtitle: 'ON THE RADAR', youtubeUrl: 'https://www.youtube.com/watch?v=CBaP99RNV84' },
    { year: '2025', title: 'DAYANA (PERFORMANCE)', subtitle: 'ON THE RADAR', youtubeUrl: 'https://www.youtube.com/watch?v=HOWh_lDvdj8' },
    { year: '2025', title: 'MILLO (PERFORMANCE)', subtitle: 'ON THE RADAR', youtubeUrl: 'https://www.youtube.com/watch?v=sAHFb_rgcFQ' },
    { year: '2025', title: 'YOMEL EL MELOSO (PERFORMANCE)', subtitle: 'ON THE RADAR', youtubeUrl: 'https://www.youtube.com/watch?v=qhN_yR8EKGE' },
    { year: '2025', title: 'JULIO CAESAR (PERFORMANCE)', subtitle: 'ON THE RADAR', youtubeUrl: 'https://www.youtube.com/watch?v=bvmS-oQ2qyE' },
    { year: '2025', title: 'AKSHARA (PERFORMANCE)', subtitle: 'ON THE RADAR', youtubeUrl: 'https://www.youtube.com/watch?v=bQeQ_YKd7xE' },

    { year: '2024', title: 'NSEEB (FREESTYLE)', subtitle: 'ON THE RADAR', youtubeUrl: 'https://www.youtube.com/watch?v=riRiVXi8wes' },
    { year: '2024', title: 'CHANI, MOGA, AR PAISLEY (CYPHER)', subtitle: 'ON THE RADAR', youtubeUrl: 'https://www.youtube.com/watch?v=Tjc6sgmFi6Q' },
    { year: '2024', title: 'HANUMANKIND (FREESTYLE)', subtitle: 'ON THE RADAR', youtubeUrl: 'https://www.youtube.com/watch?v=ZcHTpqWcWFY' },
    { year: '2024', title: 'DJ SHARAD (DJ SET)', subtitle: 'ON THE RADAR', youtubeUrl: 'https://www.youtube.com/watch?v=U4-YElKTTaM' },
    { year: '2024', title: 'YUNG SAMMY (FREESTYLE)', subtitle: 'ON THE RADAR', youtubeUrl: 'https://www.youtube.com/watch?v=C3EwYudlYuA' },
    { year: '2024', title: 'PANJABI HIT SQUAD (DJ SET)', subtitle: 'ON THE RADAR', youtubeUrl: 'https://www.youtube.com/watch?v=zPP4DRi5e8A' },
    { year: '2024', title: 'KOAD (FREESTYLE)', subtitle: 'ON THE RADAR', youtubeUrl: 'https://www.youtube.com/watch?v=UBj7HAy-ZqU' },

    { year: '2023', title: 'RAF SAPERRA (FREESTYLE)', subtitle: 'ON THE RADAR', youtubeUrl: 'https://www.youtube.com/watch?v=DnBZ-QRVg0Q' }
  ],

  concerts: [
    { year: '2024', title: 'Desi Paradise', subtitle: '', youtubeUrl: 'https://www.youtube.com/watch?v=gxU9fqvfEU0' },
    { year: '2024', title: 'Desi Paradise', subtitle: '', youtubeUrl: 'https://www.youtube.com/watch?v=TTFvVLXhV2Y' }
  ],

  nightlife: [
    { year: '2026', title: 'MVM x INDOWAREHOUSE', subtitle: '', instagramUrl: 'https://www.instagram.com/p/DVTvBsoDglq/' }
  ],

  label: [
    { year: '2025', title: 'ABDULLAH MUZAFFAR FT JJ ESKO', subtitle: 'CASH CHAIYAY', youtubeUrl: 'https://www.youtube.com/watch?v=FyKjwCNAH1U' },

    { year: '2024', title: 'JJ ESKO FT ANNURAL KHALID', subtitle: 'MISTAKES', youtubeUrl: 'https://www.youtube.com/watch?v=cC47jPDezss' },
    { year: '2024', title: 'EMMY FT KINDRA', subtitle: 'KIMMY', youtubeUrl: 'https://www.youtube.com/watch?v=KkKDIDnDvPc' },
    { year: '2024', title: 'EMMY', subtitle: 'KLK', youtubeUrl: 'https://www.youtube.com/watch?v=Lh9mNIVE41Y' }
  ]
};

const pageConfig = {
  production: { title: 'PRODUCTION', intro: '' },
  concerts:   { title: 'CONCERTS',   intro: '' },
  nightlife:  { title: 'NIGHTLIFE',  intro: '' },
  marketing:  { title: 'MARKETING',  intro: '' },
  label:      { title: 'LABEL',      intro: '' },
  about:      { title: 'ABOUT',      intro: '' }
};

let justTouched = false;

function getYouTubeId(url = '') {
  const m = url.match(/(?:v=|youtu\.be\/|shorts\/)([a-zA-Z0-9_-]{11})/);
  return m ? m[1] : '';
}

function createInstagramCard(item) {
  return `
  <a class="project-card instagram-card reveal" href="${item.instagramUrl}" target="_blank" rel="noopener noreferrer">
    <div class="project-thumb">
      <div class="instagram-thumb">
        <svg viewBox="0 0 24 24" aria-hidden="true" width="48" height="48">
          <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" stroke-width="1.4" fill="none"/>
          <circle cx="12" cy="12" r="4.2" stroke="currentColor" stroke-width="1.4" fill="none"/>
          <circle cx="17.2" cy="6.8" r="1.2" fill="currentColor"/>
        </svg>
      </div>
      <div class="project-overlay">
        <div class="play-button"><span class="play-icon" style="font-size:22px;">↗</span></div>
      </div>
    </div>
    <div class="project-info">
      <h3 class="project-title">${item.title}</h3>
      <p class="project-sub">${item.subtitle}</p>
    </div>
  </a>`;
}

function createCard(item) {
  if (item.instagramUrl) return createInstagramCard(item);
  const id = getYouTubeId(item.youtubeUrl);
  if (!id) return '';

  const thumb = `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;
  const embed = `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&playsinline=1&rel=0&modestbranding=1&iv_load_policy=3`;

  return `
  <div class="project-card youtube-card reveal" data-embed="${embed}" data-id="${id}"${item.noViews ? ' data-no-views="1"' : ''}>
    <div class="project-thumb">
      <img src="${thumb}" loading="lazy" alt="${item.title}">
      <div class="project-overlay">
        <div class="play-button"><span class="play-icon">▶</span></div>
      </div>
    </div>
    <div class="project-info">
      <h3 class="project-title">${item.title}</h3>
      <p class="project-sub">${item.subtitle}</p>
      <span class="project-views"></span>
    </div>
  </div>`;
}

function renderPage(pageKey) {
  const items = videoData[pageKey] || [];

  document.querySelectorAll('.archive-year').forEach(section => {
    const year = section.dataset.year;
    const grid = section.querySelector('.project-grid');
    if (!grid) return;

    const matches = items.filter(v => v.year === year);

    if (!matches.length) {
      section.style.display = 'none';
      return;
    }

    section.style.display = '';
    grid.innerHTML = matches.map(createCard).join('');
    grid.querySelectorAll('.project-card').forEach((card, idx) => {
      card.style.transitionDelay = `${idx * 65}ms`;
    });
  });

  bindCards();
}

function bindCards() {
  document.querySelectorAll('.youtube-card').forEach(card => {
    const openFromCard = () => {
      const embed = card.dataset.embed;
      openVideo(embed);
    };

    card.addEventListener('touchend', e => {
      justTouched = true;
      e.preventDefault();
      openFromCard();

      window.setTimeout(() => {
        justTouched = false;
      }, 400);
    }, { passive: false });

    card.addEventListener('click', e => {
      if (justTouched) {
        e.preventDefault();
        return;
      }
      openFromCard();
    });
  });
}

function openVideo(embedUrl) {
  const lightbox = document.getElementById('videoLightbox');
  const frameWrap = document.getElementById('videoFrameWrap');

  if (!lightbox || !frameWrap || !embedUrl) return;

  frameWrap.innerHTML = `
    <iframe
      src="${embedUrl}"
      allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
      allowfullscreen
      playsinline
    ></iframe>
  `;

  frameWrap.classList.add('is-ready');
  lightbox.classList.add('is-open');
  lightbox.setAttribute('aria-hidden', 'false');
  document.body.classList.add('modal-open');
}

function closeVideo() {
  const lightbox = document.getElementById('videoLightbox');
  const frameWrap = document.getElementById('videoFrameWrap');

  if (!lightbox || !frameWrap) return;

  frameWrap.innerHTML = '';
  frameWrap.classList.remove('is-ready');
  lightbox.classList.remove('is-open');
  lightbox.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('modal-open');
}

function openMobileMenu() {
  const menuToggle = document.getElementById('menuToggle');
  const mobileMenu = document.getElementById('mobileMenu');

  if (!menuToggle || !mobileMenu) return;

  mobileMenu.classList.add('is-open');
  mobileMenu.setAttribute('aria-hidden', 'false');
  menuToggle.setAttribute('aria-expanded', 'true');
  document.body.classList.add('modal-open');
}

function closeMobileMenu() {
  const menuToggle = document.getElementById('menuToggle');
  const mobileMenu = document.getElementById('mobileMenu');

  if (!menuToggle || !mobileMenu) return;

  mobileMenu.classList.remove('is-open');
  mobileMenu.setAttribute('aria-hidden', 'true');
  menuToggle.setAttribute('aria-expanded', 'false');
  document.body.classList.remove('modal-open');
}

function updateAboutMask() {
  const aboutCopyTop = document.getElementById('aboutCopyTop');
  if (!aboutCopyTop) return;

  const scrollTop = window.scrollY || window.pageYOffset;
  const fade = Math.min(scrollTop / 220, 1);

  aboutCopyTop.style.opacity = String(1 - fade * 0.9);
  aboutCopyTop.style.transform = 'translateY(0) translateZ(0)';
}

document.addEventListener('DOMContentLoaded', () => {
  const currentPage = document.body.dataset.page || 'production';

  const introTitle = document.querySelector('.intro-title');
  const introCopy = document.querySelector('.intro-copy');
  const pageData = pageConfig[currentPage] || pageConfig.production;

  if (introTitle) introTitle.textContent = pageData.title;
  if (introCopy) introCopy.textContent = pageData.intro;

  if (['production', 'concerts', 'nightlife', 'marketing', 'label'].includes(currentPage)) {
    renderPage(currentPage);
  }

  const close = document.getElementById('videoClose');
  if (close) close.addEventListener('click', closeVideo);

  const lightbox = document.getElementById('videoLightbox');
  if (lightbox) {
    lightbox.addEventListener('click', e => {
      if (e.target === lightbox) closeVideo();
    });
  }

  const menuToggle = document.getElementById('menuToggle');
  const mobileMenuClose = document.getElementById('mobileMenuClose');
  const mobileMenuBackdrop = document.getElementById('mobileMenuBackdrop');

  if (menuToggle) {
    menuToggle.addEventListener('click', () => {
      const mobileMenu = document.getElementById('mobileMenu');
      if (mobileMenu?.classList.contains('is-open')) {
        closeMobileMenu();
      } else {
        openMobileMenu();
      }
    });
  }

  if (mobileMenuClose) {
    mobileMenuClose.addEventListener('click', closeMobileMenu);
  }

  if (mobileMenuBackdrop) {
    mobileMenuBackdrop.addEventListener('click', closeMobileMenu);
  }

  if (currentPage === 'about') {
    updateAboutMask();
    window.addEventListener('scroll', updateAboutMask, { passive: true });
  }

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      closeVideo();
      closeMobileMenu();
    }
  });

  // Mobile Label → Roster dropdown toggle
  document.querySelectorAll('.mobile-nav .nav-dropdown > a .dropdown-arrow').forEach(arrow => {
    arrow.addEventListener('click', e => {
      e.preventDefault();
      e.stopPropagation();
      arrow.closest('.nav-dropdown').classList.toggle('is-open');
    });
  });

  initScrollReveal();
  initStatCounters();
  initViewCounts();
  initMobileMenuExtras();
});

function initMobileMenuExtras() {
  const panel = document.querySelector('.mobile-menu-panel');
  if (!panel) return;

  // Logo
  const logo = document.createElement('img');
  logo.src = 'https://raw.githubusercontent.com/amadcore2099/CFNY/refs/heads/main/images/CF_LOGO_NEW.png';
  logo.alt = 'Capital Flight';
  logo.className = 'mobile-menu-logo';
  panel.insertBefore(logo, panel.querySelector('nav'));

  // Social icons
  const socials = document.createElement('div');
  socials.className = 'mobile-menu-socials';
  socials.innerHTML = `
    <a href="https://www.instagram.com/capitalflightny/" target="_blank" aria-label="Instagram">
      <svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" stroke-width="1.6" fill="none"/><circle cx="12" cy="12" r="4.2" stroke="currentColor" stroke-width="1.6" fill="none"/><circle cx="17.2" cy="6.8" r="1.2" fill="currentColor"/></svg>
    </a>
    <a href="https://www.youtube.com/@CapitalFlightNY" target="_blank" aria-label="YouTube">
      <svg viewBox="0 0 24 24"><rect x="2.5" y="6" width="19" height="12" rx="3" stroke="currentColor" stroke-width="1.6" fill="none"/><polygon points="10,9 16,12 10,15" fill="currentColor"/></svg>
    </a>
    <a href="https://www.linkedin.com/company/capital-flight-ny" target="_blank" aria-label="LinkedIn">
      <svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="3" stroke="currentColor" stroke-width="1.6" fill="none"/><rect x="6.5" y="10" width="2.5" height="7" fill="currentColor"/><circle cx="7.75" cy="7.5" r="1.3" fill="currentColor"/><path d="M12 10h2.2v1.2c.5-.8 1.4-1.4 2.8-1.4 2 0 3 1.2 3 3.5V17h-2.6v-3.3c0-1-.3-1.7-1.3-1.7s-1.6.7-1.6 1.7V17H12z" fill="currentColor"/></svg>
    </a>
    <a href="mailto:production@capitalflightny.com" aria-label="Email">
      <svg viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="2.5" stroke="currentColor" stroke-width="1.6" fill="none"/><path d="M4 7l8 6 8-6" stroke="currentColor" stroke-width="1.6" fill="none"/></svg>
    </a>
  `;
  panel.appendChild(socials);
}

/* =============================================
   VIEW COUNTS via YouTube Data API (no-key noembed fallback)
============================================= */
function formatViews(n) {
  if (n >= 1e9) return (n / 1e9).toFixed(1).replace(/\.0$/, '') + 'B views';
  if (n >= 1e6) return (n / 1e6).toFixed(1).replace(/\.0$/, '') + 'M views';
  if (n >= 1e3) return (n / 1e3).toFixed(1).replace(/\.0$/, '') + 'K views';
  return n.toLocaleString() + ' views';
}

async function fetchViews(videoId) {
  try {
    const ctrl = new AbortController();
    const t = setTimeout(() => ctrl.abort(), 6000);
    const res = await fetch(
      `https://returnyoutubedislikeapi.com/votes?videoId=${videoId}`,
      { signal: ctrl.signal }
    );
    clearTimeout(t);
    if (!res.ok) return null;
    const data = await res.json();
    return data.viewCount ?? null;
  } catch {
    return null;
  }
}

function initViewCounts() {
  const cards = document.querySelectorAll('.youtube-card[data-id]');
  if (!cards.length) return;
  cards.forEach((card, i) => {
    setTimeout(() => {
      const id = card.dataset.id;
      const el = card.querySelector('.project-views');
      if (!el || !id || card.dataset.noViews) return;
      fetchViews(id).then(count => {
        if (count !== null) el.textContent = formatViews(count);
      });
    }, i * 200);
  });
}

/* =============================================
   SCROLL REVEAL
============================================= */
function initScrollReveal() {
  const els = document.querySelectorAll('.reveal');
  if (!els.length) return;

  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -32px 0px' });

  els.forEach(el => io.observe(el));
}

/* =============================================
   STAT COUNTERS
============================================= */
function initStatCounters() {
  const stats = document.querySelectorAll('.stat-number[data-target]');
  if (!stats.length) return;

  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        countUp(entry.target);
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  stats.forEach(el => io.observe(el));
}

function countUp(el) {
  const target   = parseFloat(el.dataset.target);
  const suffix   = el.dataset.suffix || '';
  const duration = 1600;
  const start    = performance.now();

  function step(now) {
    const p    = Math.min((now - start) / duration, 1);
    const ease = 1 - Math.pow(1 - p, 3);
    const val  = target * ease;
    el.textContent = (Number.isInteger(target) ? Math.round(val) : val.toFixed(1)) + suffix;
    if (p < 1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}


/* =============================================
   VERTICAL LINES + GRAIN OVERLAY (injected via JS to bypass CSS cache)
============================================= */
(function () {
  // Force header fixed — overrides any cached CSS
  const hdr = document.querySelector('.site-header');
  if (hdr) {
    hdr.style.cssText += ';position:fixed!important;top:0!important;left:0!important;width:100%!important;z-index:1000!important;background:transparent!important;';
  }

  const s = document.createElement('style');
  s.textContent = `
    .site-header { position: fixed !important; top: 0 !important; left: 0 !important; width: 100% !important; background: transparent !important; }
    .cf-lines {
      position: fixed; inset: 0; z-index: 1; pointer-events: none;
      background-image: repeating-linear-gradient(
        to right,
        rgba(255,255,255,.10) 0px,
        rgba(255,255,255,.10) 1px,
        transparent 1px,
        transparent calc(100% / 9)
      );
    }
    .cf-grain {
      position: fixed; inset: 0; z-index: 9999; pointer-events: none;
      opacity: .10;
      background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
      background-size: 200px 200px;
    }
  `;
  document.head.appendChild(s);
  const lines = document.createElement('div');
  lines.className = 'cf-lines';
  const grain = document.createElement('div');
  grain.className = 'cf-grain';
  document.body.appendChild(lines);
  document.body.appendChild(grain);
})();

/* =============================================
   SPARTICLES
============================================= */
(function () {
  if (typeof Sparticles === 'undefined') return;
  // Render to a dedicated fixed container so it never overlaps page content
  const pc = document.createElement('div');
  pc.style.cssText = 'position:fixed;inset:0;pointer-events:none;z-index:0;overflow:hidden;';
  document.body.appendChild(pc);
  new Sparticles(pc, {
    count:       80,
    color:       ['#ffffff', '#c0c0c0', '#d4af37'],
    shape:       ['circle', 'diamond'],
    composition: 'screen',
    twinkle:     true,
    glow:        6,
    minSize:     2,
    maxSize:     6,
    minAlpha:    0.1,
    maxAlpha:    0.55,
    minSpeed:    0.3,
    maxSpeed:    1.2,
    direction:   180,
    bounce:      false,
    overflow:    false,
  });
  // Belt-and-suspenders: force pointer-events:none on any canvas Sparticles creates
  setTimeout(() => {
    pc.querySelectorAll('canvas').forEach(c => { c.style.pointerEvents = 'none'; });
  }, 400);
})();

/* =============================================
   CURSOR RING
============================================= */
(function () {
  if (window.matchMedia('(pointer: coarse)').matches) return;

  const ring = document.createElement('div');
  ring.className = 'cursor-ring';
  document.body.appendChild(ring);

  let rx = -200, ry = -200, tx = -200, ty = -200;

  const HOVER = 'a, button, .project-card, .media-card, .home-link, input, textarea, select, .enter-btn';

  document.addEventListener('mousemove', e => {
    tx = e.clientX;
    ty = e.clientY;
    ring.classList.add('is-visible');
  }, { passive: true });

  document.addEventListener('mouseleave', () => ring.classList.remove('is-visible'));
  document.addEventListener('mouseenter', () => ring.classList.add('is-visible'));

  document.addEventListener('mouseover', e => {
    if (e.target.closest(HOVER)) ring.classList.add('is-hovering');
  });
  document.addEventListener('mouseout', e => {
    if (e.target.closest(HOVER)) ring.classList.remove('is-hovering');
  });

  function tick() {
    rx += (tx - rx) * 0.13;
    ry += (ty - ry) * 0.13;
    ring.style.transform = `translate(${rx - 18}px, ${ry - 18}px)`;
    requestAnimationFrame(tick);
  }
  tick();
})();

/* =============================================
   PAGE TRANSITIONS
============================================= */
(function () {
  document.addEventListener('click', e => {
    const link = e.target.closest('a[href]');
    if (!link) return;
    const href = link.getAttribute('href');
    if (
      !href ||
      href.startsWith('http') ||
      href.startsWith('#') ||
      href.startsWith('mailto') ||
      href.startsWith('tel') ||
      link.target === '_blank'
    ) return;
    e.preventDefault();
    document.body.classList.add('is-leaving');
    setTimeout(() => { window.location.href = href; }, 340);
  });
})();
