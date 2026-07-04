/* --------------------------------------------------------------
   3. CONTENU TRILINGUE
   -------------------------------------------------------------- */
const CONTENT = {

  /* ============================= FRANÇAIS ============================= */
fr: {
  meta: {
    title: "Schmide Dorante — Communication digitale & projets créatifs",
    description: "Portfolio de Schmide Dorante : communication digitale, gestion de projet, audiovisuel, photographie et projets éditoriaux.",
  },
  nav: {
    about: "À propos",
    skills: "Compétences",
    projects: "Projets",
    contact: "Contact",
    allProjects: "Tous les projets",
    back: "Retour à l'accueil",
  },
hero: {
  greeting: "Bonjour, je suis",
  sub: "J'accompagne des projets de communication de leur conception à leur réalisation. De la stratégie à la création de contenus, je transforme les idées en expériences engageantes grâce à la communication digitale, l'audiovisuel et le storytelling.",
  ctaReel: "Découvrir mes projets",
  ctaCv: "Télécharger mon CV",

  ticker: [
    "COMMUNICATION DIGITALE",
    "GESTION DE PROJET",
    "CRÉATION DE CONTENUS",
    "COMMUNICATION INTERNE",
    "VIDÉO",
    "PHOTOGRAPHIE",
    "STORYTELLING",
    "REPORTING",
    "DOCUMENTAIRE"
  ],
},
  about: {
    label: "Profil",
    title: "À propos de moi",
    p1: "Je suis spécialisée en communication digitale et gestion de projet, avec une forte sensibilité pour l’audiovisuel, la photographie et le storytelling.",
    p2: "Mon parcours me permet de passer de la stratégie à la production : cadrer un besoin, coordonner les parties prenantes, créer des contenus, suivre les résultats et valoriser un projet de manière claire.",
    p3: "Je construis mon portfolio comme un ensemble de case studies : contexte, objectifs, rôle, livrables, contraintes, résultats et apprentissages.",
    stat1: "projets menés",
    stat2: "ans d'expérience",
    timelineTitle: "Mon parcours",
    scLabel: "EXP",
  },
    timeline: [
      { period: "2025 — 2026", role: "Monteuse & Réalisatrice", place: "Freelance", type: "Indépendante", desc: "Montage, étalonnage et réalisation pour clients culturels et corporate. Direction de projets vidéo de A à Z." },
      { period: "2023 — 2025", role: "Formation Cinéma & Audiovisuel", place: "École de cinéma", type: "Formation", desc: "Spécialisation montage & réalisation, initiation à la prise de vue et au son direct." },
      { period: "2023", role: "Assistante monteuse", place: "Studio de post‑production", type: "CDD · 8 mois", desc: "Dérushage, montage off, préparation d'étalonnage sur documentaires et publicités." },
      { period: "2022", role: "Stage prise de vue & photographie", place: "Agence de production", type: "Stage · 4 mois", desc: "Captation événementielle, photographie de plateau, gestion de matériel." },
    ],
    skills: {
      label: "Expertise",
      hardTitle: "Compétences professionnelles",
      softTitle: "Soft skills",

      hard: [

        {
          cat: "Communication & stratégie",
          items: [
            "Communication interne",
            "Communication digitale",
            "Création de contenus",
            "Storytelling",
            "Stratégie éditoriale",
            "Reporting & KPI"
          ]
        },

        {
          cat: "Gestion de projet",
          items: [
            "Coordination de projets",
            "Planification",
            "Gestion des parties prenantes",
            "Organisation d'événements",
            "Gestion des priorités",
            "Méthodes Agile"
          ]
        },

        {
          cat: "Audiovisuel",
          items: [
            "Production vidéo",
            "Montage",
            "Photographie",
            "Interview",
            "Color grading",
            "Sous-titrage multilingue"
          ]
        },

        {
          cat: "Développement web",
          items: [
            "HTML",
            "CSS",
            "JavaScript",
            "Responsive Design",
            "Accessibilité",
            "UX/UI"
          ]
        },

        {
          cat: "Logiciels",
          items: [
            "Adobe Premiere Pro",
            "Photoshop",
            "Lightroom",
            "Canva",
            "Figma",
            "Microsoft 365",
            "SharePoint",
            "Teams",
            "Notion"
          ]
        }

      ],

      soft: [

        "Autonomie",
        "Gestion de projet",
        "Esprit d'équipe",
        "Organisation",
        "Esprit d'analyse",
        "Communication interculturelle",
        "Coordination d'équipes",
        "Créativité",
        "Force de proposition",
        "Adaptabilité",
        "Résolution de problèmes",
        "Gestion des priorités"
      ]
    },
    projectsPage: {
      label: "Case studies & réalisations",
      title: "Mes projets",
      viewAll: "Voir tous les projets →",
      viewProject: "Voir le projet",
      filterAll: "Tous",
      filterCommunication: "Communication",
      filterVideo: "Audiovisuel",
      filterPhoto: "Photographie",
      filterDigital: "Digital",
      close: "Fermer",
      role: "Rôle",
      client: "Contexte",
      year: "Année",
      tools: "Outils",
      list: [
          {
        title: "Stellantis — Communication interne",
        tagline: "Communication digitale & coordination",
        desc: "Contribution à des projets de communication interne autour du bien-être, de la santé et de l’engagement collaborateur au sein d’un environnement international.",
        role: "Coordination, création de contenus, reporting",
        client: "Alternance — Stellantis MEA",
        tools: "Canva, PowerPoint, Teams, SharePoint, Excel"
      },
      {
        title: "MEA Moves",
        tagline: "Challenge interne international",
        desc: "Coordination de plusieurs éditions d’un challenge collaborateur autour de l’activité physique, de l’engagement et de la communication interne.",
        role: "Coordination projet, suivi KPI, communication",
        client: "Stellantis MEA",
        tools: "SquadEasy, Excel, PowerPoint, Canva"
      },
      {
        title: "Zen Break Program",
        tagline: "Programme bien-être collaborateur",
        desc: "Pilotage et valorisation d’un programme de pauses bien-être : sessions de respiration, méditation, stretching et self-massage, avec suivi de participation et satisfaction.",
        role: "Suivi projet, communication, analyse des retours",
        client: "Stellantis MEA",
        tools: "Forms, Excel, Canva, PowerPoint"
      },
      {
        title: "Quand la Corée joue",
        tagline: "Documentaire",
        desc: "Documentaire étudiant sur la société coréenne à travers les jeux : recherche, interviews, tournage, montage, sous-titrage et post-production.",
        role: "Réalisation, montage, traduction, sous-titrage",
        client: "Projet universitaire — Master CMW",
        tools: "Premiere Pro, Audition, caméra, SRT"
      },
      {
        title: "Cellule Communication",
        tagline: "Stratégie digitale & projet web",
        desc: "Projet collectif autour d’une stratégie de communication digitale, avec analyse, production de contenus, recommandations et présentation finale.",
        role: "Stratégie, contenus, analyse, présentation",
        client: "Projet universitaire",
        tools: "Notion, Canva, PowerPoint, réseaux sociaux"
      },
      {
        title: "Schmide Visuals",
        tagline: "Photographie & vidéo freelance",
        desc: "Création de contenus photo et vidéo : portraits, événements, sport, propositions commerciales et retouches.",
        role: "Photographie, vidéo, retouche, relation client",
        client: "Projet personnel / freelance",
        tools: "Sony ZV-E10, Lightroom, Photoshop, Premiere Pro"
      }
    ],
  },
    contact: {
      label: "Parlons-en",
      title: "Me contacter",
      desc: "Une opportunité, un projet de communication ou une collaboration ? N'hésitez pas à me contacter.",
      infoTitle: "Retrouvez-moi sur",
      formName: "Nom",
      formNamePh: "Votre nom complet",
      formEmail: "E-mail",
      formEmailPh: "votre@email.com",
      formMessage: "Message",
      formMessagePh: "Parlez-moi de votre projet ou de votre opportunité…",
      send: "Envoyer",
      success: "Votre message a bien été envoyé ! Je vous répondrai dès que possible.",
      errorRequired: "Ce champ est requis.",
      errorEmail: "Merci d'indiquer une adresse e-mail valide.",
    },
    footer: {
      tagline: "Communication digitale & projets créatifs",
      navTitle: "Navigation", contactTitle: "Contact",
      copyright: "© 2026 Schmide Dorante — Tous droits réservés.",
      legal: "Mentions légales",
    },
    projectDetails: {

  "stellantis-internal-com": {

    hero: {
      eyebrow:"Case Study",
      title: "Internal Communication at Stellantis",
      subtitle: "Middle East & Africa",
      intro:
        "Coordination de projets de communication interne et d’initiatives wellbeing à l’échelle Middle East & Africa."
    },

    overview: {
      client: "Stellantis",
      role: "Digital Communication Project Coordinator",
      duration: "2024 – 2026",
      region: "Middle East & Africa",
      languages: [
        "Français",
        "English"
      ],
      tools: [
        "Canva",
        "PowerPoint",
        "Microsoft Teams",
        "SharePoint",
        "Excel"
      ]
    },

    context: {
      title: "Contexte",
      text:
        "Au sein de l’équipe Wellbeing Middle East & Africa, j’ai participé à la coordination de projets de communication interne visant à promouvoir la santé, le bien-être et l’engagement des collaborateurs dans plusieurs pays de la région."
    },

    objectives: {
      title: "Objectifs",
      items: [
        "Renforcer l’engagement des collaborateurs.",
        "Valoriser les initiatives Wellbeing.",
        "Créer des supports de communication cohérents.",
        "Mesurer les performances grâce aux KPI."
      ]
    },

    role: {
      title: "Mon rôle",
      cards: [

        {
          title: "Gestion de projet",
          description:
            "Coordination des projets, suivi des plannings et échanges avec les différentes parties prenantes."
        },

        {
          title: "Communication",
          description:
            "Création de newsletters, contenus Teams, campagnes internes et supports de communication."
        },

        {
          title: "Création de contenus",
          description:
            "Production de vidéos, présentations, supports visuels et contenus digitaux."
        },

        {
          title: "Reporting",
          description:
            "Suivi des KPI, analyse des résultats et synthèse des retours collaborateurs."
        }

      ]
    },

    process: {
      title: "Processus",
      steps: [

        {
          title: "Analyse",
          description:
            "Compréhension des besoins et définition des objectifs."
        },

        {
          title: "Conception",
          description:
            "Création des supports de communication adaptés aux différentes entités."
        },

        {
          title: "Déploiement",
          description:
            "Coordination du lancement des campagnes auprès des différents pays."
        },

        {
          title: "Mesure",
          description:
            "Analyse des KPI et amélioration continue."
        }

      ]
    },

    deliverables: {
      title: "Livrables",
      items: [
        "Newsletters",
        "Présentations PowerPoint",
        "Supports de communication",
        "Vidéos",
        "Reporting KPI",
        "Pages SharePoint",
        "Communication Microsoft Teams"
      ]
    },

    kpis: {
      title: "Résultats",
      items: [
        {
          value: "2003",
          label: "Participants"
        },
        {
          value: "490",
          label: "Participants actifs"
        },
        {
          value: "98 %",
          label: "Satisfaction"
        }
      ]
    },

    challenges: {
      title: "Défis",
      items: [

        {
          problem:
            "Coordonner plusieurs pays de la région MEA.",
          solution:
            "Mise en place d’une communication centralisée et d’un suivi régulier."
        },

        {
          problem:
            "Maintenir l’engagement sur plusieurs semaines.",
          solution:
            "Création de contenus réguliers et suivi des indicateurs."
        }

      ]
    },

    reflection: {
      title: "Ce que cette expérience m’a appris",
      text:
        "Cette expérience a renforcé mes compétences en gestion de projet, coordination internationale, communication interne et pilotage d’initiatives digitales à grande échelle."
    }

  }

}
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
      ticker: ["EDITING", "DIRECTING", "PHOTOGRAPHY", "COLOR GRADING", "CINEMATOGRAPHY", "DIGITAL PROJETCS", "COMMUNICATION"],
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
        { cat: "Post‑production", items: ["Adobe Premiere Pro", "DaVinci Resolve", "Capcut", "Photoshop", "Lightroom"] },
        { cat: "Camera & sound", items: ["Camera (Sony / Canon)", "On‑set lighting", "Live sound recording", "Film photography"] },
        { cat: "Digital & motion", items: ["Vertical / social formats", "Figma", "HTML / CSS"] },
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
        { cat: "디지털 & 모션", items: ["세로형·SNS 포맷", "피그마", "HTML / CSS"] },
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
