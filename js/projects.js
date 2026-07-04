/* --------------------------------------------------------------
   2. PROJETS — texte identique dans les 3 langues sauf
      title / category / tagline / description qui sont traduits
      plus bas dans CONTENT.<lang>.projects (même ordre, même id).
      "hue" pilote la couleur de la vignette placeholder.
   -------------------------------------------------------------- */
const PROJECT_META = [
  { id: "stellantis-internal-com", type: "communication", year: "2024–2026", hue: 8 },
  { id: "mea-moves", type: "communication", year: "2025–2026", hue: 28 },
  { id: "zen-break", type: "communication", year: "2025", hue: 45 },
  { id: "when-korea-plays", type: "video", year: "2026", hue: 210 },
  { id: "cellule-communication", type: "digital", year: "2026", hue: 260 },
  { id: "schmide-visuals", type: "photo", year: "2025–2026", hue: 340 },
];

const PROJECTS = {

  "stellantis-internal-com": {

    id: "stellantis-internal-com",

    category: "communication",

    accent: "#2C6BED",

    heroImage: "assets/img/projects/stellantis/mea-moves-logo.svg",

    gallery: [
      "assets/img/projects/stellantis/01.jpg",
      "assets/img/projects/stellantis/02.jpg",
      "assets/img/projects/stellantis/03.jpg"
    ]

  },

  "mea-moves": {

    id: "mea-moves",

    category: "communication",

    accent: "#61A63B",

    heroImage: "assets/img/projects/mea-moves/logo.svg",

    gallery: []

  },

  "zen-break": {

    id: "zen-break",

    category: "communication",

    accent: "#B89B6A",

    heroImage: "assets/img/projects/zen-break/logo.svg",

    gallery: []

  },

  "when-korea-plays": {

    id: "when-korea-plays",

    category: "video",

    accent: "#B84A42",

    heroImage: "assets/img/projects/documentary/poster.jpg",

    gallery: []

  },

  "cellule-communication": {

    id: "cellule-communication",

    category: "digital",

    accent: "#7258D8",

    heroImage: "assets/img/projects/cellule/cover.jpg",

    gallery: []

  },

  "schmide-visuals": {

    id: "schmide-visuals",

    category: "photo",

    accent: "#1F1F1F",

    heroImage: "assets/img/projects/schmide-visuals/cover.jpg",

    gallery: []

  }

};