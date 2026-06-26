// =========================================================
// Toutes les données du portfolio sont centralisées ici.
// Modifie ce fichier pour mettre à jour le contenu sans
// toucher aux composants.
// =========================================================

export const profile = {
  name: "Iheb Nguili",
  roles: [
    "Cybersecurity Analyst",
    "IT Auditor",
    "Pentester",
    "AI Security Enthusiast",
  ],
  location: "Tunis, Tunisie",
  email: "nguiliiheb760@gmail.com",
  github: "https://github.com/iheb-15",
  linkedin: "https://www.linkedin.com/in/iheb-nguili",
  cvPath: "/Iheb_Nguili_CV.pdf",
  // Remplace par "/avatar.jpg" une fois ta photo ajoutée dans /public
  avatar: "/avatar-placeholder.svg",
  tagline:
    "Je conçois, j'audite et j'attaque des systèmes — pour mieux les défendre.",
};

export const about = {
  paragraphs: [
    "Étudiant en dernière année de Master Audit et Sécurité Informatique, après une Licence en Informatique de Gestion, je me spécialise dans la sécurisation des systèmes d'information : audit de conformité, tests d'intrusion et surveillance SOC.",
    "Mon approche est double : comprendre la gouvernance et les référentiels (ISO 27001, EBIOS, MEHARI) pour structurer la sécurité, et maîtriser les outils offensifs (Nmap, Metasploit, Burp Suite) pour la mettre réellement à l'épreuve.",
    "Je m'intéresse particulièrement à l'apport de l'intelligence artificielle dans la sécurité — analyse de risques automatisée, détection d'anomalies, RAG appliqué à l'audit — un axe que j'explore activement à travers mes projets personnels et mon stage de fin d'études.",
  ],
  education: [
    {
      degree: "Master Audit et Sécurité Informatique",
      period: "2024 — 2026",
      status: "obtenus",
    },
    {
      degree: "Licence en Informatique de Gestion",
      period: "2021 — 2024",
      status: "Obtenue",
    },
  ],
  interests: [
    "Cybersécurité offensive",
    "Audit des systèmes d'information",
    "Pentest",
    "IA appliquée à la sécurité",
    "Cloud Computing",
  ],
};

export const skillGroups = [
  {
    id: "cybersecurity",
    title: "Cybersecurity",
    blurb: "Outils offensifs et défensifs pour l'analyse de vulnérabilités",
    skills: ["Nmap", "Wireshark", "Metasploit", "Burp Suite", "OWASP Top 10", "Kali Linux"],
  },
  {
    id: "audit",
    title: "Audit & Governance",
    blurb: "Référentiels et méthodologies de gestion des risques SI",
    skills: ["ISO 27001", "ISO 27005", "EBIOS", "MEHARI", "Risk Assessment"],
  },
  {
    id: "cloud",
    title: "Cloud & Systems",
    blurb: "Administration d'infrastructures cloud et on-premise",
    skills: ["Microsoft Azure", "Windows Server", "Linux Administration", "LPIC", "Cisco CCNA"],
  },
  {
    id: "programming",
    title: "Programming",
    blurb: "Développement full-stack pour outiller la sécurité",
    skills: ["Python", "Java", "JavaScript", "React.js", "Node.js", "Express.js", "MongoDB", "SQL"],
  },
  {
    id: "ai",
    title: "AI & Automation",
    blurb: "Intelligence artificielle appliquée à l'analyse de sécurité",
    skills: ["Azure OpenAI", "LangChain", "ChromaDB", "RAG", "Prompt Engineering"],
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
    title: "SecurAI-Audit",
    description:
      "Framework d'audit de sécurité piloté par IA. Analyse les politiques de sécurité, identifie les écarts de conformité ISO 27001 et génère des recommandations contextualisées via RAG.",
    tags: ["Azure OpenAI", "ChromaDB", "JWT", "Python", "RAG"],
    github: "https://github.com/ihebnguili/securai-audit",
    demo: null,
    status: "Projet PFE",
  },
  {
    title: "Password Checker",
    description:
      "Outil d'analyse de robustesse des mots de passe avec interface graphique, détection de motifs faibles et estimation du temps de cassage par force brute.",
    tags: ["Python", "Tkinter"],
    github: "https://github.com/ihebnguili/password-checker",
    demo: null,
    status: "Outil",
  },
  {
    title: "SOC Monitoring Lab",
    description:
      "Environnement de laboratoire reproduisant un SOC miniature : centralisation de logs, règles de détection et tableaux de bord de surveillance en temps réel.",
    tags: ["SIEM", "Log Analysis", "Detection Rules"],
    github: "https://github.com/ihebnguili/soc-monitoring-lab",
    demo: null,
    status: "Lab",
  },
  {
    title: "Web Application Pentest Lab",
    description:
      "Laboratoire de tests d'intrusion sur applications web vulnérables, couvrant l'ensemble du Top 10 OWASP avec rapports d'exploitation détaillés.",
    tags: ["Burp Suite", "OWASP Top 10", "Kali Linux"],
    github: "https://github.com/ihebnguili/webapp-pentest-lab",
    demo: null,
    status: "Lab",
  },
  {
    title: "Active Directory Security Lab",
    description:
      "Maquette d'environnement Active Directory pour étudier les vecteurs d'attaque courants (Kerberoasting, Pass-the-Hash) et les contre-mesures associées.",
    tags: ["Active Directory", "Windows Server", "Metasploit"],
    github: "https://github.com/ihebnguili/ad-security-lab",
    demo: null,
    status: "Lab",
  },
];

export const certifications = [
  { name: "LPIC", issuer: "Linux Professional Institute", status: "Obtenue" },
  { name: "CCNA", issuer: "Cisco", status: "Obtenue" },
  { name: "SC-900", issuer: "Microsoft", status: "Obtenue" },
  { name: "AZ-900", issuer: "Microsoft", status: "Obtenue" },
  { name: "TryHackMe", issuer: "Plateforme de pentest", status: "Actif" },
  { name: "Hack The Box", issuer: "Plateforme de pentest", status: "Actif" },
];

export const githubUsername = "ihebnguili";

export const nav = [
  { label: "Accueil", href: "#home" },
  { label: "À propos", href: "#about" },
  { label: "Compétences", href: "#skills" },
  { label: "Expérience", href: "#experience" },
  { label: "Projets", href: "#projects" },
  { label: "Certifications", href: "#certifications" },
  { label: "GitHub", href: "#github" },
  { label: "Contact", href: "#contact" },
];
