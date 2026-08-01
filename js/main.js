/* ==========================================================================
   PORTFOLIO — main.js
   Dépend de content.js (chargé avant ce fichier).
   ========================================================================== */
(function () {
  "use strict";

  const LANGS = ["fr", "en", "kr"];
  const DEFAULT_LANG = "fr";
  const savedLang = localStorage.getItem("lang");
  let currentLang = LANGS.includes(savedLang) ? savedLang : DEFAULT_LANG;

  const $ = (sel, ctx) => (ctx || document).querySelector(sel);
  const $$ = (sel, ctx) => Array.from((ctx || document).querySelectorAll(sel));

  /* ---------------- Loader ---------------- */
  function initLoader() {
    const loader = $("#loader");
    if (!loader) return;
    const countEl = $("#loader-count");
    let n = 3;
    if (countEl) countEl.textContent = n;
    const interval = setInterval(() => {
      n -= 1;
      if (countEl) countEl.textContent = n > 0 ? n : "●";
      if (n <= 0) clearInterval(interval);
    }, 260);
    window.addEventListener("load", () => {
      setTimeout(() => loader.classList.add("done"), 550);
    });
    // Fallback si "load" a déjà eu lieu
    if (document.readyState === "complete") {
      setTimeout(() => loader.classList.add("done"), 550);
    }
  }

  /* ---------------- Curseur personnalisé ---------------- */
  function initCursor() {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    const dot = $("#cursor-dot");
    const ring = $("#cursor-ring");
    if (!dot || !ring) return;
    let rx = 0, ry = 0, tx = 0, ty = 0;

    window.addEventListener("mousemove", (e) => {
      dot.style.left = e.clientX + "px";
      dot.style.top = e.clientY + "px";
      tx = e.clientX; ty = e.clientY;
    });
    (function loop() {
      rx += (tx - rx) * 0.18;
      ry += (ty - ry) * 0.18;
      ring.style.left = rx + "px";
      ring.style.top = ry + "px";
      requestAnimationFrame(loop);
    })();

    const hoverables = "a, button, input, textarea, .project-card, [data-cursor-hover]";
    document.addEventListener("mouseover", (e) => {
      if (e.target.closest(hoverables)) ring.classList.add("hover");
    });
    document.addEventListener("mouseout", (e) => {
      if (e.target.closest(hoverables)) ring.classList.remove("hover");
    });
  }

  /* ---------------- Header scroll state + mobile menu ---------------- */
  function initHeader() {
    const header = $("#header");
    if (header) {
      const onScroll = () => header.classList.toggle("scrolled", window.scrollY > 20);
      onScroll();
      window.addEventListener("scroll", onScroll, { passive: true });
    }
    const toggle = $("#menu-toggle");
    const menu = $("#nav-menu");
    if (toggle && menu) {
      toggle.addEventListener("click", () => {
        const open = menu.classList.toggle("open");
        toggle.setAttribute("aria-expanded", String(open));
      });
      $$(".nav-link", menu).forEach((link) =>
        link.addEventListener("click", () => {
          menu.classList.remove("open");
          toggle.setAttribute("aria-expanded", "false");
        })
      );
    }
  }

  /* ---------------- Reveal on scroll ---------------- */
  function initReveal() {
    const els = $$(".reveal");
    if (!els.length) return;
    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("visible"));
      return;
    }
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    els.forEach((el) => obs.observe(el));
  }

  /* ---------------- Ticker : duplication pour boucle infinie ---------------- */
  function renderTicker(lang) {
    const track = $("#hero-ticker");
    if (!track) return;
    const words = CONTENT[lang].hero.ticker;
    const html = words.map((w) => `<span>${escapeHtml(w)}</span>`).join("");
    track.innerHTML = html + html; // dupliqué x2 pour la boucle CSS (translateX -50%)
  }

  function escapeHtml(str) {
    const div = document.createElement("div");
    div.textContent = str;
    return div.innerHTML;
  }

  /* ---------------- Rendu des projets ---------------- */

function getProjects(lang) {
  const languageContent =
    CONTENT[lang] || CONTENT.fr;

  const texts =
    languageContent.projectsPage?.list ||
    CONTENT.fr.projectsPage.list;

  return PROJECT_META.map((meta, index) => ({
    ...meta,
    ...texts[index]
  }));
}
  
  function frameColor(hue) {
    return `linear-gradient(155deg, hsl(${hue} 38% 30%), hsl(${hue} 55% 16%) 75%)`;
  }

function getProjectBadgeLabel(project, lang) {
  const content =
    CONTENT[lang]?.projectsPage ||
    CONTENT.fr.projectsPage;

  const labels = {
    pro: content.badgePro,
    school: content.badgeSchool,
    personal: content.badgePersonal
  };

  return labels[project.badge] || "";
}

function getProjectBadgeClass(project) {
  const badge = project.badge || "pro";

  return `project-card-badge project-card-badge-${badge}`;
}

function projectImageMarkup(project) {
  const initials = String(project.title || project.id)
    .slice(0, 2)
    .toUpperCase();

  if (!project.thumbnail) {
    return `
      <div
        class="project-card-placeholder"
        style="background:${frameColor(project.hue)}">
        ${escapeHtml(initials)}
      </div>
    `;
  }

  return `
    <img
      src="${escapeHtml(project.thumbnail)}"
      alt=""
      class="project-card-image"
      loading="lazy"
      onerror="
        this.style.display='none';
        this.nextElementSibling.style.display='flex';
      "
    >

    <div
      class="project-card-placeholder"
      style="display:none; background:${frameColor(project.hue)}">
      ${escapeHtml(initials)}
    </div>
  `;
}

function renderProjectsGrid(gridId, lang, filter = "all", limit = null) {
  const grid = document.getElementById(gridId);

  if (!grid) return;

  let projects = getProjects(lang);

  if (filter !== "all") {
    projects = projects.filter(
      (project) => project.badge === filter
    );
  }

  if (limit) {
    projects = projects.slice(0, limit);
  }

  grid.innerHTML = projects
    .map(
      (project, index) => `
        <article
          class="project-card reveal reveal-delay-${Math.min(index, 4)}"
          role="listitem">

          <a
            href="case-study.html?id=${encodeURIComponent(project.id)}"
            class="project-card-link"
            aria-label="Voir le projet : ${escapeHtml(project.title)}">
          </a>

          <div class="project-card-media">
            ${projectImageMarkup(project)}

            <div class="project-card-overlay"></div>

            <span class="${getProjectBadgeClass(project)}">
              ${escapeHtml(getProjectBadgeLabel(project, lang))}
            </span>
          </div>

          <div class="project-card-content">
            <div class="project-card-meta">
              <span class="project-card-company">
                ${escapeHtml(project.company || project.client || "")}
              </span>

              <span class="project-card-year">
                ${escapeHtml(project.year)}
              </span>
            </div>

            <h3 class="project-card-title">
              ${escapeHtml(project.title)}
            </h3>

            <p class="project-card-description">
              ${escapeHtml(project.desc || "")}
            </p>

            <div class="project-card-tags">
              ${(project.tags || [])
                .map(
                  (tag) => `<span>${escapeHtml(tag)}</span>`
                )
                .join("")}
            </div>
          </div>
        </article>
      `
    )
    .join("");

  initReveal();
}

  /* ---------------- Filtres (page projets) ---------------- */
  function initFilters() {
    const bar = $("#filter-bar");
    if (!bar) return;
    $$(".filter-btn", bar).forEach((btn) => {
      btn.addEventListener("click", () => {
        $$(".filter-btn", bar).forEach((b) => b.setAttribute("aria-pressed", "false"));
        btn.setAttribute("aria-pressed", "true");
        renderProjectsGrid("projects-grid", currentLang, btn.dataset.filter);
      });
    });
  }

  /* ---------------- Rendu textuel (i18n) ---------------- */
  function renderStaticText(lang) {
    const c = CONTENT[lang];
    document.documentElement.lang = lang;
    document.title = c.meta.title;
    const metaDesc = $('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute("content", c.meta.description);

    // Simple textContent binding via data-i18n="section.key"
    $$("[data-i18n]").forEach((el) => {
      const path = el.getAttribute("data-i18n").split(".");
      let val = c;
      for (const k of path) val = val && val[k];
      if (typeof val === "string") el.textContent = val;
    });
    $$("[data-i18n-ph]").forEach((el) => {
      const path = el.getAttribute("data-i18n-ph").split(".");
      let val = c;
      for (const k of path) val = val && val[k];
      if (typeof val === "string") el.setAttribute("placeholder", val);
    });

    renderTicker(lang);

    // Timeline (about)
    const timelineEl = $("#timeline-items");
    if (timelineEl) {
      timelineEl.innerHTML = c.timeline
        .map(
          (item, i) => `
        <article class="shot-item reveal reveal-delay-${Math.min(i, 4)}">
          <span class="shot-code">${escapeHtml(c.about.scLabel)} ${String(i + 1).padStart(2, "0")}</span>
          <span>
            <span class="shot-role">${escapeHtml(item.role)}</span>
            <span class="shot-place">${escapeHtml(item.place)} — ${escapeHtml(item.period)}</span>
            <span class="shot-desc">${escapeHtml(item.desc)}</span>
          </span>
          <span class="shot-type">${escapeHtml(item.type)}</span>
        </article>`
        )
        .join("");
      initReveal();
    }

    // Skills
    const hardEl = $("#hard-cards");

    if (hardEl) {
      hardEl.innerHTML = c.skills.hard
        .map(
          (cat, index) => `
            <article class="competence-column reveal reveal-delay-${Math.min(index, 4)}">
              <h3 class="competence-category">
                ${escapeHtml(cat.cat)}
              </h3>

              <ul class="competence-list">
                ${cat.items
                  .map((item) => `<li>${escapeHtml(item)}</li>`)
                  .join("")}
              </ul>
            </article>
          `
        )
        .join("");

      initReveal();
    }

    const softEl = $("#soft-list");

    if (softEl) {
      softEl.innerHTML = c.skills.soft
        .map((skill) => `<li>${escapeHtml(skill)}</li>`)
        .join("");
    }

    // Projects grids
    const projectsGrid = $("#projects-grid");

    if (projectsGrid) {
      const activeFilter = $(
        "#filter-bar .filter-btn[aria-pressed='true']"
      );

      const filter = activeFilter
        ? activeFilter.dataset.filter
        : "all";

      renderProjectsGrid("projects-grid", lang, filter);
    }
    initReveal();
  }

  function bindContactInfo() {
    $$("[data-site-email]").forEach((el) => {
      if (el.tagName === "A") {
        el.href = "mailto:" + SITE.email;
      }
    });

    $$("[data-site-email-text]").forEach((el) => {
      el.textContent = SITE.email;
    });

    $$("[data-site-linkedin]").forEach((el) => {
      el.href = SITE.socials.linkedin;
    });

    $$("[data-site-instagram]").forEach((el) => {
      el.href = SITE.socials.instagram;
    });

    $$("[data-site-vimeo]").forEach((el) => {
      el.href = SITE.socials.vimeo;
    });

    $$("[data-site-cv]").forEach((el) => {
      el.href = SITE.cvFile;
    });

    $$("[data-site-name]").forEach((el) => {
      el.textContent = `${SITE.firstName} ${SITE.lastName}`;
    });

    const year = $("#footer-year");

    if (year) {
      year.textContent = new Date().getFullYear();
    }
  }

  /* ---------------- Langue ---------------- */
  function setLang(lang) {
    if (!LANGS.includes(lang)) return;
    currentLang = lang;
    localStorage.setItem("lang", lang);
    $$(".lang-btn").forEach((btn) => btn.setAttribute("aria-pressed", String(btn.dataset.lang === lang)));
    renderStaticText(lang);
  }

  function initLangSwitcher() {
    $$(".lang-btn").forEach((btn) => {
      btn.addEventListener("click", () => setLang(btn.dataset.lang));
    });
  }

  /* ---------------- Formulaire de contact (démo, sans backend) ---------------- */
  function initContactForm() {
    const form = $("#contact-form");

    if (!form) return;

    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const t = CONTENT[currentLang].contact;

      const name = $("#contact-name", form);
      const email = $("#contact-email", form);
      const message = $("#contact-message", form);
      const success = $("#form-success");

      if (!name || !email || !message) {
        console.error("Un ou plusieurs champs du formulaire sont introuvables.");
        return;
      }

      let valid = true;

      [name, message].forEach((field) => {
        const errorEl = $("#" + field.id + "-error");

        if (!field.value.trim()) {
          if (errorEl) {
            errorEl.textContent = t.errorRequired;
          }

          valid = false;
        } else if (errorEl) {
          errorEl.textContent = "";
        }
      });

      const emailError = $("#contact-email-error");

      if (!email.value.trim()) {
        if (emailError) {
          emailError.textContent = t.errorRequired;
        }

        valid = false;
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
        if (emailError) {
          emailError.textContent = t.errorEmail;
        }

        valid = false;
      } else if (emailError) {
        emailError.textContent = "";
      }

      if (!valid) return;

      if (success) {
        success.textContent = t.success;
        success.classList.add("show");
      }

      form.reset();
    });
  }

  function initTheme() {
  const toggle = document.querySelector("#theme-toggle");
  if (!toggle) return;
  if (localStorage.getItem("theme") === "dark") document.documentElement.classList.add("dark");
  const updateLabel = () => {
    const isDark = document.documentElement.classList.contains("dark");
    toggle.setAttribute("aria-label", isDark ? "Passer en mode clair" : "Passer en mode sombre");
  };
  updateLabel();
  toggle.addEventListener("click", () => {
    document.documentElement.classList.toggle("dark");
    localStorage.setItem("theme", document.documentElement.classList.contains("dark") ? "dark" : "light");
    updateLabel();
  });
}

function initParticles(canvasId) {
  const canvas = document.getElementById(canvasId);
  if (!canvas || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const ctx = canvas.getContext("2d");
  let particles = [], animId;
  function resize() { canvas.width = canvas.offsetWidth; canvas.height = canvas.offsetHeight; }
  class Particle {
    constructor() { this.reset(true); }
    reset(initial) {
      this.x = Math.random() * canvas.width;
      this.y = initial ? Math.random() * canvas.height : canvas.height + 10;
      this.vx = (Math.random() - 0.5) * 0.4;
      this.vy = -(Math.random() * 0.3 + 0.1);
      this.r = Math.random() * 1.8 + 0.6;
      this.a = Math.random() * 0.4 + 0.1;
      this.colorSeed = Math.random();
    }
    update() { this.x += this.vx; this.y += this.vy; if (this.y < -5 || this.x < -5 || this.x > canvas.width + 5) this.reset(false); }
    draw() {
      const isDark = document.documentElement.classList.contains("dark");
      const color = isDark ? (this.colorSeed > 0.6 ? "#e2565c" : "#d4b64c") : (this.colorSeed > 0.6 ? "#c1272d" : "#8a7a2c");
      ctx.beginPath(); ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
      ctx.fillStyle = color; ctx.globalAlpha = isDark ? Math.min(this.a * 1.6, 0.85) : this.a;
      ctx.fill(); ctx.globalAlpha = 1;
    }
  }
  function loop() { ctx.clearRect(0, 0, canvas.width, canvas.height); particles.forEach(p => { p.update(); p.draw(); }); animId = requestAnimationFrame(loop); }
  resize(); particles = Array.from({ length: 60 }, () => new Particle());
  new ResizeObserver(() => { cancelAnimationFrame(animId); resize(); loop(); }).observe(canvas.parentElement);
  loop();
}

function initScrollIndicator() {
  const el = document.querySelector("#scroll-indicator");
  if (!el) return;
  el.addEventListener("click", () => document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" }));
}

  /* ---------------- Init ---------------- */
  document.addEventListener("DOMContentLoaded", () => {
    initLoader();
    initTheme();
    initParticles("hero-canvas");
    initScrollIndicator();
    initCursor();
    initHeader();
    initLangSwitcher();
    initFilters();
    initContactForm();
    bindContactInfo();

    $$(".lang-btn").forEach((btn) => btn.setAttribute("aria-pressed", String(btn.dataset.lang === currentLang)));
    renderStaticText(currentLang);
  });
})();
