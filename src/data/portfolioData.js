// =========================================================
// Toutes les données du portfolio sont centralisées ici.
// Modifie ce fichier pour mettre à jour le contenu sans
// toucher aux composants.
// =========================================================

export const profile = {
  name: "Iheb Nguili",
  roles: [
    "Cybersecurity & IT Audit Enthusiast",
    "Zero Trust Architecture Learner",
    "OSINT Platform Developer",
    "Full-Stack MERN Developer",
  ],
  location: "Tunis, Tunisie",
  email: "nguiliiheb760@gmail.com",
  github: "https://github.com/iheb-15",
  linkedin: "https://www.linkedin.com/in/iheb-nguili",
  cvPath: "/Iheb_Nguili_CV.pdf",
  avatar: "/avatar-placeholder.svg",
  tagline:
    "Je construis des solutions sécurisées — du Zero Trust à la stack MERN.",
};

export const about = {
  paragraphs: [
    "Passionné par la cybersécurité et l'audit informatique, je combine une solide base en développement web MERN avec une montée en compétences active sur les architectures Zero Trust, la gestion des risques et l'intelligence sur les menaces.",
    "Je me forme aux méthodes MEHARI et eBIOS pour l'analyse de risques, et j'explore les outils PAM, IAM, OpenCTI et WAF pour concevoir des infrastructures résilientes conformes aux standards ISO 27001 et ISO 27005.",
    "En parallèle, je développe une plateforme OSINT s'appuyant sur l'API NVD pour surveiller les CVEs en temps réel et visualiser les données de threat intelligence.",
  ],
  education: [
    {
      degree: "Master Audit et Sécurité Informatique",
      period: "2024 — 2026",
      status: "Obtenue",
    },
    {
      degree: "Licence en Économie et Gestion",
      period: "2021 — 2024",
      status: "Obtenue",
    },
  ],
  interests: [
    "Zero Trust Architecture",
    "PAM / IAM",
    "OSINT & Threat Intelligence",
    "Risk Management (MEHARI / eBIOS)",
    "ISO 27001 / ISO 27005",
    "Full-Stack MERN",
  ],
};

export const skillGroups = [
  {
    id: "cybersecurity",
    title: "Cybersecurity",
    blurb: "Architectures sécurisées, protection des accès et surveillance des menaces",
    skills: [
      "Zero Trust Architecture",
      "PAM",
      "IAM",
      "WAF",
      "SIEM",
      "OpenCTI",
      "OWASP Top 10",
    ],
  },
  {
    id: "audit",
    title: "Audit & Risk Management",
    blurb: "Référentiels de gestion des risques et conformité SI",
    skills: [
      "ISO 27001",
      "ISO 27005",
      "MEHARI",
      "eBIOS",
      "Risk Assessment",
      "IT Audit",
    ],
  },
  {
    id: "osint",
    title: "OSINT & Threat Intel",
    blurb: "Collecte de renseignements, surveillance CVE et analyse de vulnérabilités",
    skills: [
      "OSINT",
      "NVD API",
      "CVE Monitoring",
      "Vulnerability Scanning",
      "Threat Intelligence",
    ],
  },
  {
    id: "programming",
    title: "Programming & Dev",
    blurb: "Développement full-stack orienté sécurité avec la stack MERN",
    skills: [
      "JavaScript",
      "Python",
      "Java",
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],
  },
  {
    id: "tools",
    title: "Tools & DevOps",
    blurb: "Environnements, conteneurisation et contrôle de version",
    skills: [
      "Docker",
      "Git",
      "Anaconda",
      "Linux",
      "Kali Linux",
    ],
  },
];

export const experiences = [
  {
    company: "Hat Web Security Labs",
    role: "Stage PFE — Ingénieur Sécurité",
    period: "2026",
    project: "SecurAI-Audit",
    description:
      "Conception d'un framework d'audit de sécurité assisté par IA, combinant analyse de risques automatisée et recherche augmentée par récupération (RAG) sur la documentation de conformité.",
    points: [
      "Framework IA de cybersécurité pour l'audit automatisé",
      "Intégration Azure OpenAI pour l'analyse intelligente des risques",
      "Base vectorielle ChromaDB pour la recherche documentaire augmentée",
      "Authentification sécurisée JWT pour l'accès aux rapports d'audit",
    ],
    stack: ["Azure OpenAI", "ChromaDB", "JWT", "Python", "RAG"],
  },
  {
    company: "REC-INOV",
    role: "Stage — Développeur Full-Stack",
    period: "2024",
    project: "Plateforme de gestion interne",
    description:
      "Développement d'une application web full-stack pour la gestion de processus internes, avec une API REST sécurisée et une interface React réactive.",
    points: [
      "Développement front-end avec React.js",
      "Conception d'API REST avec Node.js et Express.js",
      "Modélisation de données avec MongoDB",
      "Intégration continue entre front-end et back-end",
    ],
    stack: ["React.js", "Node.js", "Express.js", "MongoDB", "API REST"],
  },
];

export const projects = [
  {
    title: "OSINT Platform — CVE Monitor",
    description:
      "Plateforme OSINT exploitant l'API NVD pour surveiller les CVEs en temps réel, tracker les vulnérabilités et visualiser les données de threat intelligence.",
    tags: ["Python", "NVD API", "OSINT", "React.js", "Data Visualization"],
    github: "https://github.com/iheb-15/osint-cve-monitor",
    demo: null,
    video: null,
    status: "En cours",
  },
  {
    title: "Zero Trust Lab",
    description:
      "Maquette d'implémentation d'une architecture Zero Trust avec gestion des accès privilégiés (PAM), IAM et WAF sur un environnement de test conteneurisé avec Docker.",
    tags: ["Zero Trust", "PAM", "IAM", "WAF", "Docker"],
    github: "https://github.com/iheb-15/zero-trust-lab",
    demo: null,
    video: null,
    status: "Lab",
  },
  {
    title: "SecurAI-Audit",
    description:
      "Framework d'audit de sécurité piloté par IA. Analyse les politiques ISO 27001, identifie les écarts de conformité et génère des recommandations via RAG.",
    tags: ["Azure OpenAI", "ChromaDB", "JWT", "Python", "RAG"],
    github: "https://github.com/iheb-15/securai-audit",
    demo: null,
    video: null,
    status: "Projet PFE",
  },
  {
    title: "Risk Scenarios — MEHARI/eBIOS",
    description:
      "Développement de scénarios de risques cybersécurité réalistes selon les méthodes MEHARI et eBIOS, avec rapport d'analyse et plan de traitement des risques.",
    tags: ["MEHARI", "eBIOS", "ISO 27005", "Risk Management"],
    github: "https://github.com/iheb-15/risk-scenarios",
    demo: null,
    video: null,
    status: "Recherche",
  },
  {
    title: "MERN Secure App",
    description:
      "Application web full-stack MERN avec authentification JWT, gestion des rôles et bonnes pratiques OWASP intégrées dès la conception.",
    tags: ["MongoDB", "Express.js", "React.js", "Node.js", "JWT", "OWASP"],
    github: "https://github.com/iheb-15/mern-secure-app",
    demo: null,
    video: null,
    status: "Personnel",
  },
  {
    title: "Password Checker",
    description:
      "Outil d'analyse de robustesse des mots de passe avec interface graphique, détection de motifs faibles et estimation du temps de cassage par force brute.",
    tags: ["Python", "Tkinter"],
    github: "https://github.com/iheb-15/password-checker",
    demo: null,
    video: null,
    status: "Outil",
  },
];

export const certifications = [
  { name: "SC-900",   issuer: "Microsoft",                    status: "Obtenue"  },
  { name: "AZ-900",   issuer: "Microsoft",                    status: "Obtenue"  },
  { name: "CCNA",     issuer: "Cisco",                        status: "Obtenue"  },
  { name: "LPIC",     issuer: "Linux Professional Institute", status: "Obtenue"  },
  { name: "ISO 27001",issuer: "En cours d'acquisition",       status: "En cours" },
  { name: "ISO 27005",issuer: "En cours d'acquisition",       status: "En cours" },
  { name: "TryHackMe",issuer: "Plateforme de pentest",        status: "Actif"    },
  { name: "Hack The Box", issuer: "Plateforme de pentest",    status: "Actif"    },
];

export const githubUsername = "iheb-15";

export const tryhackme = {
  username: "ihebnguili",
  profileUrl: "https://tryhackme.com/p/ihebnguili",
};

export const labs = [
  {
    name: "OWASP Top 10",
    category: "Web Application Security",
    difficulty: "Easy",
    skills: ["SQLi", "XSS", "IDOR", "XXE"],
  },
  {
    name: "Blue",
    category: "Windows Exploitation",
    difficulty: "Easy",
    skills: ["EternalBlue", "Metasploit", "Post-exploitation"],
  },
  {
    name: "Mr Robot CTF",
    category: "CTF",
    difficulty: "Medium",
    skills: ["Brute Force", "WordPress", "Privilege Escalation"],
  },
  {
    name: "Nmap",
    category: "Network Scanning",
    difficulty: "Easy",
    skills: ["Nmap", "Port Scan", "Service Detection"],
  },
  {
    name: "Pickle Rick",
    category: "CTF",
    difficulty: "Easy",
    skills: ["Web", "Command Injection", "Linux"],
  },
  {
    name: "Advent of Cyber",
    category: "Multi-domaines",
    difficulty: "Easy",
    skills: ["Web", "Network", "OSINT", "Linux"],
  },
];

export const nav = [
  { label: "Accueil",       href: "#home"           },
  { label: "À propos",      href: "#about"          },
  { label: "Compétences",   href: "#skills"         },
  { label: "Expérience",    href: "#experience"     },
  { label: "Projets",       href: "#projects"       },
  { label: "Certifications",href: "#certifications" },
  { label: "GitHub",        href: "#github"         },
  { label: "Contact",       href: "#contact"        },
];
