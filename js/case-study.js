/* ==========================================================================
   CASE STUDY — case-study.js
   Génère une page projet à partir de projects.js + content.js
   ========================================================================== */

(function () {
  "use strict";

  const root = document.getElementById("case-study-root");
  if (!root) return;

  const LANGS = ["fr", "en", "kr"];
  const savedLang = localStorage.getItem("lang");
  const currentLang = LANGS.includes(savedLang) ? savedLang : "fr";

  const params = new URLSearchParams(window.location.search);
  const projectId = params.get("id");

  const technicalData = PROJECTS?.[projectId];
  const textData =
    CONTENT?.[currentLang]?.projectDetails?.[projectId] ||
    CONTENT?.fr?.projectDetails?.[projectId];

  if (!projectId || !technicalData || !textData) {
    root.innerHTML = `
      <section class="case-hero">
        <div class="container">
          <p class="section-label">Projet introuvable</p>
          <h1 class="case-title">Ce projet n'existe pas encore.</h1>
          <p class="case-intro">
            Retourne à la page projets pour choisir une étude de cas disponible.
          </p>
          <a class="btn btn-primary" href="projects.html">Voir les projets</a>
        </div>
      </section>
    `;
    return;
  }

  document.documentElement.style.setProperty("--case-accent", technicalData.accent);

  document.title = `${textData.hero.title} — Schmide Dorante`;

  root.innerHTML = `
    ${renderHero(technicalData, textData)}
    ${renderOverview(textData)}
    ${renderTextSection(textData.context)}
    ${renderListSection(textData.objectives)}
    ${renderCardsSection(textData.role)}
    ${renderStepsSection(textData.process)}
    ${renderListSection(textData.deliverables)}
    ${renderKpis(textData.kpis)}
    ${renderChallenges(textData.challenges)}
    ${renderReflection(textData.reflection)}
  `;

  function renderHero(project, content) {
    return `
      <section class="case-hero">
        <div class="container case-hero-inner">
          <div class="case-hero-content">
            <span class="section-label">${escapeHtml(content.hero.eyebrow || "Case Study")}</span>

            <h1 class="case-title">${escapeHtml(content.hero.title)}</h1>

            <p class="case-subtitle">${escapeHtml(content.hero.subtitle)}</p>

            <p class="case-intro">${escapeHtml(content.hero.intro)}</p>
          </div>

          <div class="case-hero-visual">
            <img src="${escapeAttr(project.heroImage)}" alt="">
          </div>
        </div>
      </section>
    `;
  }

  function renderOverview(content) {
    const overview = content.overview;

    return `
      <section class="case-section">
        <div class="container">
          <div class="case-meta-grid">
            ${renderMetaItem("Client", overview.client)}
            ${renderMetaItem("Role", overview.role)}
            ${renderMetaItem("Duration", overview.duration)}
            ${renderMetaItem("Region", overview.region)}
            ${renderMetaItem("Languages", overview.languages.join(", "))}
            ${renderMetaItem("Tools", overview.tools.join(", "))}
          </div>
        </div>
      </section>
    `;
  }

  function renderMetaItem(label, value) {
    return `
      <div>
        <span>${escapeHtml(label)}</span>
        <p>${escapeHtml(value)}</p>
      </div>
    `;
  }

  function renderTextSection(section) {
    if (!section) return "";

    return `
      <section class="case-section">
        <div class="container case-grid">
          <h2>${escapeHtml(section.title)}</h2>
          <p>${escapeHtml(section.text)}</p>
        </div>
      </section>
    `;
  }

  function renderListSection(section) {
    if (!section) return "";

    return `
      <section class="case-section">
        <div class="container case-grid">
          <h2>${escapeHtml(section.title)}</h2>
          <div class="case-list">
            ${section.items.map((item) => `<p>${escapeHtml(item)}</p>`).join("")}
          </div>
        </div>
      </section>
    `;
  }

  function renderCardsSection(section) {
    if (!section) return "";

    return `
      <section class="case-section case-section-alt">
        <div class="container case-grid">
          <h2>${escapeHtml(section.title)}</h2>
          <div class="case-cards">
            ${section.cards
              .map(
                (card) => `
                <article>
                  <h3>${escapeHtml(card.title)}</h3>
                  <p>${escapeHtml(card.description)}</p>
                </article>
              `
              )
              .join("")}
          </div>
        </div>
      </section>
    `;
  }

  function renderStepsSection(section) {
    if (!section) return "";

    return `
      <section class="case-section">
        <div class="container case-grid">
          <h2>${escapeHtml(section.title)}</h2>
          <div class="case-steps">
            ${section.steps
              .map(
                (step, index) => `
                <article class="case-step">
                  <span>${String(index + 1).padStart(2, "0")}</span>
                  <div>
                    <h3>${escapeHtml(step.title)}</h3>
                    <p>${escapeHtml(step.description)}</p>
                  </div>
                </article>
              `
              )
              .join("")}
          </div>
        </div>
      </section>
    `;
  }

  function renderKpis(section) {
    if (!section) return "";

    return `
      <section class="case-section case-section-alt">
        <div class="container">
          <h2 class="case-section-title">${escapeHtml(section.title)}</h2>

          <div class="case-kpis">
            ${section.items
              .map(
                (kpi) => `
                <div class="case-kpi">
                  <span>${escapeHtml(kpi.value)}</span>
                  <p>${escapeHtml(kpi.label)}</p>
                </div>
              `
              )
              .join("")}
          </div>
        </div>
      </section>
    `;
  }

  function renderChallenges(section) {
    if (!section) return "";

    return `
      <section class="case-section">
        <div class="container case-grid">
          <h2>${escapeHtml(section.title)}</h2>

          <div class="case-challenges">
            ${section.items
              .map(
                (item) => `
                <article>
                  <span>Challenge</span>
                  <p>${escapeHtml(item.problem)}</p>

                  <span>Solution</span>
                  <p>${escapeHtml(item.solution)}</p>
                </article>
              `
              )
              .join("")}
          </div>
        </div>
      </section>
    `;
  }

  function renderReflection(section) {
    if (!section) return "";

    return `
      <section class="case-section case-reflection">
        <div class="container case-grid">
          <h2>${escapeHtml(section.title)}</h2>
          <p>${escapeHtml(section.text)}</p>
        </div>
      </section>
    `;
  }

  function escapeHtml(value) {
    const div = document.createElement("div");
    div.textContent = value ?? "";
    return div.innerHTML;
  }

  function escapeAttr(value) {
    return String(value ?? "").replace(/"/g, "&quot;");
  }
})();