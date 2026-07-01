/* ============================================================
   CONTENT.JS
   Toutes les informations personnalisables du portfolio.
   👉 C'est le SEUL fichier à modifier pour mettre le site à jour :
      - tes coordonnées (SITE)
      - ta biographie / ton parcours / tes compétences
      - tes projets (textes + couleurs de vignette)
   Le texte existe dans 3 langues : fr / en / kr.
   ============================================================ */

/* --------------------------------------------------------------
   1. IDENTITÉ — à remplacer par tes vraies infos
   -------------------------------------------------------------- */
const SITE = {
  firstName: "Schmide",
  lastName: "Dorante",
  email: "schmidedorante@gmail.com",
  location: "Paris, France",
  cvFile: "assets/cv/CV_Camille_Moreau.pdf",
  socials: {
    instagram: "https://instagram.com/",
    vimeo: "https://vimeo.com/",
    linkedin: "https://www.linkedin.com/",
  },
};

/* --------------------------------------------------------------
   2. PROJETS — texte identique dans les 3 langues sauf
      title / category / tagline / description qui sont traduits
      plus bas dans CONTENT.<lang>.projects (même ordre, même id).
      "hue" pilote la couleur de la vignette placeholder.
   -------------------------------------------------------------- */
const PROJECT_META = [
  { id: "silences",   type: "video",   year: "2026", hue: 8   },
  { id: "aftermovie", type: "video",   year: "2025", hue: 28  },
  { id: "backstage",  type: "photo",   year: "2025", hue: 40  },
  { id: "argentique", type: "photo",   year: "2024", hue: 190 },
  { id: "immersif",   type: "digital", year: "2024", hue: 250 },
  { id: "generique",  type: "digital", year: "2023", hue: 340 },
];

/* --------------------------------------------------------------
   3. CONTENU TRILINGUE
   -------------------------------------------------------------- */
const CONTENT = {

  /* ============================= FRANÇAIS ============================= */
  fr: {
    meta: {
      title: "Schmide Dorante — Réalisatrice & Monteuse",
      description: "Portfolio de Schmide Dorante, réalisatrice, monteuse et photographe — vidéo, photographie et projets digitaux.",
    },
    nav: {
      about: "À propos", skills: "Compétences", projects: "Projets",
      contact: "Contact", allProjects: "Tous les projets",
      back: "Retour à l'accueil",
    },
    hero: {
      eyebrow: "Réalisatrice · Monteuse · Photographe",
      titleLine1: "Je filme,",
      titleLine2: "je monte,",
      titleLine3: "je raconte.",
      sub: "Vidéo, photographie et projets digitaux — du tournage à l'étalonnage, je construis des images qui racontent une histoire.",
      ctaReel: "Voir le showreel",
      ctaCv: "Télécharger mon CV",
      ticker: ["MONTAGE", "RÉALISATION", "PHOTOGRAPHIE", "ÉTALONNAGE", "MOTION DESIGN", "PRISE DE VUE"],
    },
    about: {
      label: "Portrait",
      title: "À propos de moi",
      p1: "Je suis réalisatrice et monteuse, passionnée par le récit visuel sous toutes ses formes — du court‑métrage à la captation événementielle, en passant par la photographie de plateau.",
      p2: "Formée à l'image et au son, j'aime autant être derrière la caméra que devant mon poste de montage : chaque projet est une nouvelle façon de raconter une histoire, de trouver le bon rythme, la bonne lumière, le bon cadre.",
      p3: "Curieuse et rigoureuse, je navigue avec plaisir entre vidéo, photographie argentique et projets digitaux — toujours au service d'une idée claire.",
      stat1: "projets réalisés",
      stat2: "ans d'expérience",
      timelineTitle: "Mon parcours",
      scLabel: "SC",
    },
    timeline: [
      { period: "2025 — 2026", role: "Monteuse & Réalisatrice", place: "Freelance", type: "Indépendante", desc: "Montage, étalonnage et réalisation pour clients culturels et corporate. Direction de projets vidéo de A à Z." },
      { period: "2023 — 2025", role: "Formation Cinéma & Audiovisuel", place: "École de cinéma", type: "Formation", desc: "Spécialisation montage & réalisation, initiation à la prise de vue et au son direct." },
      { period: "2023", role: "Assistante monteuse", place: "Studio de post‑production", type: "CDD · 8 mois", desc: "Dérushage, montage off, préparation d'étalonnage sur documentaires et publicités." },
      { period: "2022", role: "Stage prise de vue & photographie", place: "Agence de production", type: "Stage · 4 mois", desc: "Captation événementielle, photographie de plateau, gestion de matériel." },
    ],
    skills: {
      label: "Boîte à outils",
      hardTitle: "Compétences techniques",
      softTitle: "Qualités personnelles",
      hard: [
        { cat: "Post‑production", items: ["Adobe Premiere Pro", "DaVinci Resolve", "After Effects", "Photoshop", "Lightroom"] },
        { cat: "Prise de vue & son", items: ["Caméra (Sony / Canon)", "Éclairage plateau", "Prise de son direct", "Photographie argentique"] },
        { cat: "Digital & motion", items: ["Motion design", "Formats verticaux / réseaux sociaux", "Figma", "HTML / CSS"] },
      ],
      soft: [
        "Sens du récit & du rythme", "Rigueur et sens du détail", "Travail d'équipe sur plateau",
        "Gestion de projet & délais", "Curiosité créative", "Adaptabilité terrain",
      ],
    },
    projects: {
      label: "Filmographie & travaux",
      title: "Mes projets",
      viewAll: "Voir tous les projets →",
      viewProject: "Voir le projet",
      filterAll: "Tous",
      filterVideo: "Vidéo",
      filterPhoto: "Photo",
      filterDigital: "Digital",
      close: "Fermer",
      role: "Rôle", client: "Client", year: "Année", tools: "Outils",
      list: [
        { title: "Silences", tagline: "Court‑métrage", desc: "Montage et étalonnage d'un court‑métrage dramatique tourné en 3 jours. Travail sur le rythme et le silence comme éléments narratifs à part entière.", role: "Montage & étalonnage", client: "Production indépendante", tools: "Premiere Pro, DaVinci Resolve" },
        { title: "Aftermovie — Festival Nuits Sonores", tagline: "Captation & montage", desc: "Captation multi‑caméra d'un festival de musique électronique et montage d'un aftermovie de 2 minutes livré sous 48h.", role: "Captation & montage", client: "Festival Nuits Sonores", tools: "Sony FX3, Premiere Pro" },
        { title: "Backstage", tagline: "Série de portraits", desc: "Série de portraits en noir et blanc réalisée en coulisses d'un défilé, entre spontanéité et composition soignée.", role: "Photographie de plateau", client: "Maison de mode", tools: "Reflex 35mm, Lightroom" },
        { title: "Contretype", tagline: "Série argentique", desc: "Série personnelle explorant la texture et le grain de la pellicule argentique en environnement urbain.", role: "Photographie & développement", client: "Projet personnel", tools: "Pellicule argentique, chambre noire" },
        { title: "Doc Immersif", tagline: "Web documentaire", desc: "Conception d'une expérience web interactive mêlant vidéo, scroll storytelling et sound design pour un documentaire de fin d'études.", role: "Réalisation & intégration web", client: "Projet de fin d'études", tools: "HTML/CSS, After Effects" },
        { title: "Identité Générique TV", tagline: "Motion design", desc: "Création d'un générique animé pour une émission courte, de la recherche graphique à l'export broadcast.", role: "Motion design", client: "Chaîne locale", tools: "After Effects, Illustrator" },
      ],
    },
    contact: {
      label: "Parlons‑en", title: "Me contacter",
      desc: "Un projet, un tournage, une opportunité ? N'hésitez pas à me contacter.",
      infoTitle: "Retrouvez‑moi sur",
      formName: "Nom", formNamePh: "Votre nom complet",
      formEmail: "E‑mail", formEmailPh: "votre@email.com",
      formMessage: "Message", formMessagePh: "Parlez‑moi de votre projet…",
      send: "Envoyer",
      success: "Votre message a bien été envoyé ! Je vous répondrai dès que possible. 🎬",
      errorRequired: "Ce champ est requis.",
      errorEmail: "Merci d'indiquer une adresse e‑mail valide.",
    },
    footer: {
      tagline: "Réalisatrice & Monteuse",
      navTitle: "Navigation", contactTitle: "Contact",
      copyright: "© 2026 Schmide Dorante — Tous droits réservés.",
      legal: "Mentions légales",
    },
  },

  /* ============================== ENGLISH ============================== */
  en: {
    meta: {
      title: "Schmide Dorante — Director & Editor",
      description: "Portfolio of Schmide Dorante, director, editor and photographer — video, photography and digital projects.",
    },
    nav: {
      about: "About", skills: "Skills", projects: "Projects",
      contact: "Contact", allProjects: "All projects",
      back: "Back to home",
    },
    hero: {
      eyebrow: "Director · Editor · Photographer",
      titleLine1: "I shoot,",
      titleLine2: "I cut,",
      titleLine3: "I tell stories.",
      sub: "Video, photography and digital projects — from set to color grade, I build images that carry a story.",
      ctaReel: "Watch the showreel",
      ctaCv: "Download my CV",
      ticker: ["EDITING", "DIRECTING", "PHOTOGRAPHY", "COLOR GRADING", "MOTION DESIGN", "CINEMATOGRAPHY"],
    },
    about: {
      label: "Portrait",
      title: "About me",
      p1: "I'm a director and editor, driven by visual storytelling in every form — from short films to event coverage, through to on‑set photography.",
      p2: "Trained in image and sound, I'm as comfortable behind the camera as at the editing desk: every project is a new way to tell a story, to find the right rhythm, the right light, the right frame.",
      p3: "Curious and meticulous, I move happily between video, film photography and digital projects — always in service of a clear idea.",
      stat1: "projects delivered",
      stat2: "years of experience",
      timelineTitle: "My journey",
      scLabel: "SC",
    },
    timeline: [
      { period: "2025 — 2026", role: "Editor & Director", place: "Freelance", type: "Independent", desc: "Editing, color grading and directing for cultural and corporate clients. End‑to‑end video project leadership." },
      { period: "2023 — 2025", role: "Film & Audiovisual Studies", place: "Film school", type: "Education", desc: "Specialisation in editing and directing, introduction to camera work and live sound." },
      { period: "2023", role: "Assistant Editor", place: "Post‑production studio", type: "Fixed‑term · 8 months", desc: "Rough cuts, offline editing, color‑grading prep for documentaries and commercials." },
      { period: "2022", role: "Camera & Photography Intern", place: "Production agency", type: "Internship · 4 months", desc: "Event coverage, on‑set photography, equipment management." },
    ],
    skills: {
      label: "Toolbox",
      hardTitle: "Technical skills",
      softTitle: "Personal qualities",
      hard: [
        { cat: "Post‑production", items: ["Adobe Premiere Pro", "DaVinci Resolve", "After Effects", "Photoshop", "Lightroom"] },
        { cat: "Camera & sound", items: ["Camera (Sony / Canon)", "On‑set lighting", "Live sound recording", "Film photography"] },
        { cat: "Digital & motion", items: ["Motion design", "Vertical / social formats", "Figma", "HTML / CSS"] },
      ],
      soft: [
        "Sense of story & pacing", "Attention to detail", "On‑set teamwork",
        "Project & deadline management", "Creative curiosity", "On‑the‑ground adaptability",
      ],
    },
    projects: {
      label: "Filmography & work",
      title: "My projects",
      viewAll: "View all projects →",
      viewProject: "View project",
      filterAll: "All",
      filterVideo: "Video",
      filterPhoto: "Photo",
      filterDigital: "Digital",
      close: "Close",
      role: "Role", client: "Client", year: "Year", tools: "Tools",
      list: [
        { title: "Silences", tagline: "Short film", desc: "Editing and color grading of a dramatic short film shot over 3 days. Focused on rhythm and silence as narrative devices in their own right.", role: "Editing & color grading", client: "Independent production", tools: "Premiere Pro, DaVinci Resolve" },
        { title: "Aftermovie — Nuits Sonores Festival", tagline: "Coverage & editing", desc: "Multi‑camera coverage of an electronic music festival and edit of a 2‑minute aftermovie delivered within 48 hours.", role: "Coverage & editing", client: "Nuits Sonores Festival", tools: "Sony FX3, Premiere Pro" },
        { title: "Backstage", tagline: "Portrait series", desc: "Black and white portrait series shot backstage at a fashion show, balancing spontaneity with careful composition.", role: "On‑set photography", client: "Fashion house", tools: "35mm SLR, Lightroom" },
        { title: "Contretype", tagline: "Film photography series", desc: "A personal series exploring texture and grain on film stock in an urban environment.", role: "Photography & development", client: "Personal project", tools: "Film stock, darkroom" },
        { title: "Immersive Doc", tagline: "Web documentary", desc: "Design of an interactive web experience blending video, scroll storytelling and sound design for a graduation documentary.", role: "Direction & web integration", client: "Graduation project", tools: "HTML/CSS, After Effects" },
        { title: "TV Title Sequence", tagline: "Motion design", desc: "Animated title sequence for a short‑form show, from graphic research to broadcast export.", role: "Motion design", client: "Local TV channel", tools: "After Effects, Illustrator" },
      ],
    },
    contact: {
      label: "Let's talk", title: "Get in touch",
      desc: "A project, a shoot, an opportunity? Feel free to reach out.",
      infoTitle: "Find me on",
      formName: "Name", formNamePh: "Your full name",
      formEmail: "Email", formEmailPh: "your@email.com",
      formMessage: "Message", formMessagePh: "Tell me about your project…",
      send: "Send",
      success: "Your message has been sent! I'll get back to you as soon as possible. 🎬",
      errorRequired: "This field is required.",
      errorEmail: "Please enter a valid email address.",
    },
    footer: {
      tagline: "Director & Editor",
      navTitle: "Navigation", contactTitle: "Contact",
      copyright: "© 2026 Schmide Dorante — All rights reserved.",
      legal: "Legal notice",
    },
  },

  /* =============================== 한국어 =============================== */
  kr: {
    meta: {
      title: "카미유 모로 — 감독 & 편집자",
      description: "카미유 모로의 포트폴리오 — 영상 감독, 편집자, 사진작가. 영상, 사진, 디지털 프로젝트.",
    },
    nav: {
      about: "소개", skills: "역량", projects: "프로젝트",
      contact: "연락처", allProjects: "전체 프로젝트",
      back: "홈으로 돌아가기",
    },
    hero: {
      eyebrow: "감독 · 편집자 · 사진작가",
      titleLine1: "촬영하고,",
      titleLine2: "편집하고,",
      titleLine3: "이야기합니다.",
      sub: "영상, 사진, 디지털 프로젝트 — 촬영 현장부터 색보정까지, 이야기를 담은 이미지를 만듭니다.",
      ctaReel: "쇼릴 보기",
      ctaCv: "이력서 다운로드",
      ticker: ["편집", "연출", "사진", "색보정", "모션 디자인", "촬영"],
    },
    about: {
      label: "소개",
      title: "저에 대해",
      p1: "저는 감독이자 편집자로, 단편 영화부터 행사 촬영, 현장 사진까지 다양한 형태의 영상 스토리텔링에 열정을 갖고 있습니다.",
      p2: "영상과 음향을 전문적으로 공부했으며, 카메라 뒤에 있을 때만큼이나 편집실에서도 편안함을 느낍니다. 프로젝트마다 새로운 이야기를 전하는 방식, 알맞은 리듬과 빛, 프레임을 찾아갑니다.",
      p3: "호기심 많고 꼼꼼한 성격으로 영상, 필름 사진, 디지털 프로젝트를 넘나들며 언제나 명확한 아이디어를 위해 작업합니다.",
      stat1: "완료한 프로젝트",
      stat2: "년의 경력",
      timelineTitle: "저의 이력",
      scLabel: "SC",
    },
    timeline: [
      { period: "2025 — 2026", role: "편집자 & 감독", place: "프리랜서", type: "프리랜서", desc: "문화 및 기업 클라이언트를 위한 편집, 색보정, 연출. 영상 프로젝트 전 과정 총괄." },
      { period: "2023 — 2025", role: "영화·영상 전공", place: "영화 학교", type: "교육", desc: "편집 및 연출 전공, 촬영과 현장 음향 기초 교육." },
      { period: "2023", role: "편집 보조", place: "후반작업 스튜디오", type: "계약직 · 8개월", desc: "다큐멘터리 및 광고의 초벌 편집과 색보정 준비 작업." },
      { period: "2022", role: "촬영·사진 인턴", place: "프로덕션 에이전시", type: "인턴 · 4개월", desc: "행사 촬영, 현장 사진, 장비 관리." },
    ],
    skills: {
      label: "보유 툴",
      hardTitle: "기술 역량",
      softTitle: "개인 역량",
      hard: [
        { cat: "후반작업", items: ["어도비 프리미어 프로", "다빈치 리졸브", "애프터 이펙트", "포토샵", "라이트룸"] },
        { cat: "촬영 & 음향", items: ["카메라 (소니 / 캐논)", "현장 조명", "현장 음향 녹음", "필름 사진"] },
        { cat: "디지털 & 모션", items: ["모션 디자인", "세로형·SNS 포맷", "피그마", "HTML / CSS"] },
      ],
      soft: [
        "스토리텔링과 리듬 감각", "꼼꼼함과 디테일", "현장 팀워크",
        "프로젝트 및 일정 관리", "창의적 호기심", "현장 적응력",
      ],
    },
    projects: {
      label: "필모그래피 & 작업",
      title: "프로젝트",
      viewAll: "전체 프로젝트 보기 →",
      viewProject: "프로젝트 보기",
      filterAll: "전체",
      filterVideo: "영상",
      filterPhoto: "사진",
      filterDigital: "디지털",
      close: "닫기",
      role: "역할", client: "클라이언트", year: "연도", tools: "사용 도구",
      list: [
        { title: "침묵", tagline: "단편 영화", desc: "3일간 촬영한 드라마 단편 영화의 편집과 색보정. 리듬과 침묵을 서사적 요소로 다루었습니다.", role: "편집 & 색보정", client: "독립 제작", tools: "프리미어 프로, 다빈치 리졸브" },
        { title: "애프터무비 — 뉘 소노르 페스티벌", tagline: "촬영 & 편집", desc: "일렉트로닉 음악 페스티벌의 멀티캠 촬영과 48시간 내 납품된 2분 분량 애프터무비 편집.", role: "촬영 & 편집", client: "뉘 소노르 페스티벌", tools: "소니 FX3, 프리미어 프로" },
        { title: "백스테이지", tagline: "인물 사진 시리즈", desc: "패션쇼 백스테이지에서 촬영한 흑백 인물 사진 시리즈, 즉흥성과 정교한 구도의 균형.", role: "현장 사진", client: "패션 하우스", tools: "35mm 필름 카메라, 라이트룸" },
        { title: "콩트르타입", tagline: "필름 사진 시리즈", desc: "도시 환경에서 필름의 질감과 입자를 탐구한 개인 시리즈.", role: "사진 & 현상", client: "개인 프로젝트", tools: "필름, 암실" },
        { title: "몰입형 다큐", tagline: "웹 다큐멘터리", desc: "졸업 다큐멘터리를 위한 영상, 스크롤 스토리텔링, 사운드 디자인을 결합한 인터랙티브 웹 경험 제작.", role: "연출 & 웹 통합", client: "졸업 작품", tools: "HTML/CSS, 애프터 이펙트" },
        { title: "TV 타이틀 시퀀스", tagline: "모션 디자인", desc: "짧은 방송 프로그램을 위한 애니메이션 타이틀 시퀀스, 그래픽 리서치부터 방송용 출력까지.", role: "모션 디자인", client: "지역 방송국", tools: "애프터 이펙트, 일러스트레이터" },
      ],
    },
    contact: {
      label: "연락하기", title: "문의하기",
      desc: "프로젝트, 촬영, 협업 제안이 있으신가요? 언제든 연락해 주세요.",
      infoTitle: "다음 채널에서 확인하세요",
      formName: "이름", formNamePh: "성함을 입력하세요",
      formEmail: "이메일", formEmailPh: "your@email.com",
      formMessage: "메시지", formMessagePh: "프로젝트에 대해 알려주세요…",
      send: "보내기",
      success: "메시지가 전송되었습니다! 빠른 시일 내에 답변드리겠습니다. 🎬",
      errorRequired: "필수 입력 항목입니다.",
      errorEmail: "올바른 이메일 주소를 입력해 주세요.",
    },
    footer: {
      tagline: "감독 & 편집자",
      navTitle: "메뉴", contactTitle: "연락처",
      copyright: "© 2026 카미유 모로 — All rights reserved.",
      legal: "법적 고지",
    },
  },
};
