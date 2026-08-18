/*CASE STUDY*/

(function () {
  "use strict";

  const root = document.getElementById("case-study-root");

  if (!root) return;

  const LANGS = ["fr", "en", "kr"];

  const savedLang = localStorage.getItem("lang");

  const currentLang =
    LANGS.includes(savedLang)
      ? savedLang
      : "fr";
  const UI = {
    fr: {
      back: "← Retour à tous les projets",
      context: "Contexte",
      missions: "Missions",
      result: "Résultat",
      tools: "Outils",
      role: "Rôle",
      period: "Période",
      challenge: "Défi",
      solution: "Solution"
    },

    en: {
      back: "← Back to all projects",
      context: "Context",
      missions: "Responsibilities",
      result: "Outcome",
      tools: "Tools",
      role: "Role",
      period: "Period",
      challenge: "Challenge",
      solution: "Solution"
    },

    kr: {
      back: "← 전체 프로젝트로 돌아가기",
      context: "배경",
      missions: "주요 업무",
      result: "결과",
      tools: "사용 도구",
      role: "담당 역할",
      period: "기간",
      challenge: "과제",
      solution: "해결 방법"
    }
  };

const ui = UI[currentLang] || UI.fr;
  const params =
    new URLSearchParams(window.location.search);

  const projectId =
    params.get("id");

  const technicalData =
    PROJECTS?.[projectId];

  const textData =
    CONTENT?.[currentLang]?.projectDetails?.[projectId] ||
    CONTENT?.fr?.projectDetails?.[projectId];


  /*Projet introuvable*/

  if (
    !projectId ||
    !technicalData ||
    !textData
  ) {
    root.innerHTML = `
      <section class="case-hero">
        <div class="container">

          <p class="section-label">
            Projet introuvable
          </p>

          <h1 class="case-title">
            Ce projet n'existe pas encore.
          </h1>

          <p class="case-intro">
            Retourne à la page projets pour choisir une étude de cas disponible.
          </p>

          <a
            class="btn btn-primary"
            href="projects.html">
            Voir les projets
          </a>

        </div>
      </section>
    `;

    return;
  }


  /*Configuration projet*/

  document.documentElement.style.setProperty(
    "--case-accent",
    technicalData.accent || "#c1272d"
  );

  document.title =
    `${textData.hero.title} — Schmide Dorante`;


  /*Rendu de la page*/

  root.innerHTML = `
    ${renderHero(technicalData, textData)}
    ${renderCompactProjectInfo(textData)}
    ${renderGallery(technicalData.gallery, textData.hero.title)}
    ${renderKpis(textData.kpis)}
    ${renderChallenges(textData.challenges)}
  `;


  /*HERO*/

  function renderHero(project, content) {
    return `
      <section class="case-hero">
        <div class="container case-hero-inner">
          <div class="case-hero-content">
              <a
                class="case-back-link"
                href="projects.html">
                ${escapeHtml(ui.back)}
              </a>

            <span class="section-label">
              ${escapeHtml(
                content.hero.eyebrow ||
                "Case Study"
              )}
            </span>

            <h1 class="case-title">
              ${escapeHtml(
                content.hero.title
              )}
            </h1>

            <p class="case-subtitle">
              ${escapeHtml(
                content.hero.subtitle
              )}
            </p>

            <p class="case-intro">
              ${escapeHtml(
                content.hero.intro
              )}
            </p>

          </div>

          <div class="case-hero-visual">

            <img
              src="${escapeAttr(project.heroImage)}"
              alt="${escapeAttr(content.hero.title)}">

          </div>

        </div>

      </section>
    `;
  }


  /* OVERVIEW */

  function renderOverview(content) {
    const overview =
      content?.overview;

    if (!overview) return "";

    return `
      <section class="case-section">

        <div class="container">

          <div class="case-meta-grid">

            ${renderMetaItem(
              "Client",
              overview.client
            )}

            ${renderMetaItem(
              "Rôle",
              overview.role
            )}

            ${renderMetaItem(
              "Durée",
              overview.duration
            )}

            ${renderMetaItem(
              "Région",
              overview.region
            )}

            ${renderMetaItem(
              "Langues",
              Array.isArray(overview.languages)
                ? overview.languages.join(", ")
                : overview.languages || ""
            )}

            ${renderMetaItem(
              "Outils",
              Array.isArray(overview.tools)
                ? overview.tools.join(", ")
                : overview.tools || ""
            )}

          </div>

        </div>

      </section>
    `;
  }


  function renderMetaItem(label, value) {
    return `
      <div>

        <span>
          ${escapeHtml(label)}
        </span>

        <p>
          ${escapeHtml(value)}
        </p>

      </div>
    `;
  }

  function renderCompactProjectInfo(content) {
    const overview = content?.overview || {};

    const tools = Array.isArray(overview.tools)
      ? overview.tools
      : [];

    const missions = Array.isArray(content?.role?.cards)
      ? content.role.cards
      : [];

    const resultText =
      content?.result?.text ||
      content?.reflection?.text ||
      "";

    return `
      <section class="case-section case-summary">
        <div class="container case-summary-grid">

          <div class="case-summary-main">

            ${
              content?.context?.text
                ? `
                  <div class="case-summary-block">
                    <span class="case-summary-label">
                      ${escapeHtml(ui.context)}
                    </span>

                    <p>
                      ${escapeHtml(content.context.text)}
                    </p>
                  </div>
                `
                : ""
            }

            ${
              missions.length
                ? `
                  <div class="case-summary-block">
                    <span class="case-summary-label">
                      ${escapeHtml(ui.missions)}
                    </span>

                    <ul class="case-summary-missions">
                      ${missions
                        .map(
                          (mission) => `
                            <li>
                              <strong>${escapeHtml(mission.title)}</strong>
                              <span>${escapeHtml(mission.description)}</span>
                            </li>
                          `
                        )
                        .join("")}
                    </ul>
                  </div>
                `
                : ""
            }

            ${
              resultText
                ? `
                  <div class="case-summary-block">
                    <span class="case-summary-label">
                      ${escapeHtml(ui.result)}
                    </span>

                    <p>
                      ${escapeHtml(resultText)}
                    </p>
                  </div>
                `
                : ""
            }

          </div>

          <aside class="case-summary-sidebar">

            ${
              tools.length
                ? `
                  <div class="case-sidebar-section">
                    <span class="case-sidebar-label">
                      ${escapeHtml(ui.tools)}
                    </span>

                    <div class="case-sidebar-tags">
                      ${tools
                        .map(
                          (tool) => `
                            <span>${escapeHtml(tool)}</span>
                          `
                        )
                        .join("")}
                    </div>
                  </div>
                `
                : ""
            }

            ${
              overview.role
                ? `
                  <div class="case-sidebar-section">
                    <span class="case-sidebar-label">
                      ${escapeHtml(ui.role)}
                    </span>

                    <strong>
                      ${escapeHtml(overview.role)}
                    </strong>
                  </div>
                `
                : ""
            }

            ${
              overview.duration
                ? `
                  <div class="case-sidebar-section">
                    <span class="case-sidebar-label">
                      ${escapeHtml(ui.period)}
                    </span>

                    <strong>
                      ${escapeHtml(overview.duration)}
                    </strong>
                  </div>
                `
                : ""
            }

          </aside>

        </div>
      </section>
    `;
  }
  
  /*GALERIE*/

  function renderGallery(images, title) {
    if (
      !Array.isArray(images) ||
      images.length === 0
    ) {
      return "";
    }

    return `
      <section class="case-section case-gallery-section">

        <div class="container">

          <div class="case-gallery">

            ${images
              .map(
                (image, index) => `
                  <figure class="case-gallery-item">

                    <img
                      src="${escapeAttr(image)}"
                      alt="${escapeAttr(title)} — visuel ${index + 1}"
                      loading="lazy">

                  </figure>
                `
              )
              .join("")}

          </div>

        </div>

      </section>
    `;
  }


  /*SECTION TEXTE*/

  function renderTextSection(section) {
    if (
      !section ||
      !section.title ||
      !section.text
    ) {
      return "";
    }

    return `
      <section class="case-section">

        <div class="container case-grid">

          <h2>
            ${escapeHtml(section.title)}
          </h2>

          <p>
            ${escapeHtml(section.text)}
          </p>

        </div>

      </section>
    `;
  }


  /*SECTION LISTE*/

  function renderListSection(section) {
    if (
      !section ||
      !Array.isArray(section.items)
    ) {
      return "";
    }

    return `
      <section class="case-section">

        <div class="container case-grid">

          <h2>
            ${escapeHtml(section.title)}
          </h2>

          <div class="case-list">

            ${section.items
              .map(
                (item) =>
                  `<p>${escapeHtml(item)}</p>`
              )
              .join("")}

          </div>

        </div>

      </section>
    `;
  }


  /*CARTES*/

  function renderCardsSection(section) {
    if (
      !section ||
      !Array.isArray(section.cards)
    ) {
      return "";
    }

    return `
      <section class="case-section case-section-alt">

        <div class="container case-grid">

          <h2>
            ${escapeHtml(section.title)}
          </h2>

          <div class="case-cards">

            ${section.cards
              .map(
                (card) => `
                  <article>

                    <h3>
                      ${escapeHtml(card.title)}
                    </h3>

                    <p>
                      ${escapeHtml(card.description)}
                    </p>

                  </article>
                `
              )
              .join("")}

          </div>

        </div>

      </section>
    `;
  }


  /*PROCESS*/

  function renderStepsSection(section) {
    if (
      !section ||
      !Array.isArray(section.steps)
    ) {
      return "";
    }

    return `
      <section class="case-section">

        <div class="container case-grid">

          <h2>
            ${escapeHtml(section.title)}
          </h2>

          <div class="case-steps">

            ${section.steps
              .map(
                (step, index) => `
                  <article class="case-step">

                    <span>
                      ${String(index + 1).padStart(2, "0")}
                    </span>

                    <div>

                      <h3>
                        ${escapeHtml(step.title)}
                      </h3>

                      <p>
                        ${escapeHtml(step.description)}
                      </p>

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


  /*KPI*/

  function renderKpis(section) {
    if (
      !section ||
      !Array.isArray(section.items)
    ) {
      return "";
    }

    return `
      <section class="case-section case-section-alt">

        <div class="container">

          <h2 class="case-section-title">
            ${escapeHtml(section.title)}
          </h2>

          <div class="case-kpis">

            ${section.items
              .map(
                (kpi) => `
                  <div class="case-kpi">

                    <span>
                      ${escapeHtml(kpi.value)}
                    </span>

                    <p>
                      ${escapeHtml(kpi.label)}
                    </p>

                  </div>
                `
              )
              .join("")}

          </div>

        </div>

      </section>
    `;
  }


  /*CHALLENGES */

  function renderChallenges(section) {
    if (
      !section ||
      !Array.isArray(section.items)
    ) {
      return "";
    }

    return `
      <section class="case-section">

        <div class="container case-grid">

          <h2>
            ${escapeHtml(section.title)}
          </h2>

          <div class="case-challenges">

            ${section.items
              .map(
                (item) => `
                  <article>
                    <span>
                      ${escapeHtml(ui.challenge)}
                    </span>

                    <p>
                      ${escapeHtml(item.problem)}
                    </p>

                    <span>
                      ${escapeHtml(ui.solution)}
                    </span>

                    <p>
                      ${escapeHtml(item.solution)}
                    </p>

                  </article>
                `
              )
              .join("")}

          </div>

        </div>

      </section>
    `;
  }


  /*RÉFLEXION*/

  function renderReflection(section) {
    if (
      !section ||
      !section.title ||
      !section.text
    ) {
      return "";
    }

    return `
      <section class="case-section case-reflection">

        <div class="container case-grid">

          <h2>
            ${escapeHtml(section.title)}
          </h2>

          <p>
            ${escapeHtml(section.text)}
          </p>

        </div>

      </section>
    `;
  }


  /*UTILITAIRES*/

  function escapeHtml(value) {
    const div =
      document.createElement("div");

    div.textContent =
      value ?? "";

    return div.innerHTML;
  }


  function escapeAttr(value) {
    return String(value ?? "")
      .replace(/&/g, "&amp;")
      .replace(/"/g, "&quot;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
  }

})();