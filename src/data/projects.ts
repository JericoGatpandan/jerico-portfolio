export type ProjectCategory = "Full-Stack" | "AI / Data" | "Database" | "UI / Frontend" | "Mobile" | "Desktop" | "Other";

export type Project = {
  title: string;
  subtitle: string;
  category: ProjectCategory;
  year: string;
  role: string;
  blurb: string;
  stack: string[];
  featured?: boolean;
  link?: string;
  image?: string;
};

export const PROJECTS: Project[] = [
  {
    title: "StreamAI",
    subtitle: "AI Flood Forecasting for the Bicol River Watershed",
    category: "AI / Data",
    year: "2025",
    role: "Backend + Frontend Dev · Team UNC Colab",
    blurb:
      "Two-stage AI flood forecasting system combining ML classifiers with a physics-informed neural network surrogate model, validated using Nash–Sutcliffe Efficiency. 2nd Runner-Up at Naga IDEA2STARTUP 2025.",
    stack: ["React", "Node.js", "Python", "PINN", "Tailwind"],
    link: "https://stream-ai-forecasting-system-otk4pgd72.vercel.app/",
    image: "/projects/stream.png",
  },
  {
    title: "ASAC",
    subtitle: "Automated System for Agriculture Cooperatives",
    category: "Full-Stack",
    year: "Ongoing",
    role: "Database + Frontend · Capstone with FACCS",
    blurb:
      "Relational schema, stored procedures, and triggers for Order/Transaction Management and FarmLedger Accounting. Role-based access for FACCS Admin, Cooperative Officer, and Farmer.",
    stack: ["PostgreSQL", "Supabase", "React", "Tailwind", "shadcn/ui", "Figma"],
    featured: true,
    link: "https://salmon-ibis-469171.hostingersite.com/",
    image: "/projects/asac.png",
  },
  {
    title: "Travel & Tours Management System",
    subtitle: "JavaFX Desktop Application",
    category: "Full-Stack",
    year: "2024",
    role: "Desktop Developer",
    blurb:
      "A JavaFX desktop application for managing travel agency operations, including client records, tour packages, bookings, trips, payments, and employee administration. Uses MySQL for persistence with role-based workflows.",
    stack: ["Java 21", "JavaFX 21", "Maven", "MySQL"],
    image: "https://placehold.co/600x400/1a1a2e/ffffff?text=Travel+%26+Tours+Management+System",
  },
  {
    title: "MainStruc",
    subtitle: "Structural Engineering Consultancy Website",
    category: "Full-Stack",
    year: "2025",
    role: "Developer",
    blurb:
      "A modern, professional web presence built for a structural engineering consultancy, designed to communicate technical credibility and showcase project expertise to prospective clients. The site features a clean, content-driven layout optimized for fast updates — built with a centralized content architecture that allows service offerings, project highlights, and company information to be updated without touching the underlying code. Currently in development, with final content and case study assets pending.",
    stack: ["React", "Node.js", "Tailwind"],
    link: "http://mainstruc.com/",
    image: "https://placehold.co/600x400/1a1a2e/ffffff?text=MainStruc",
  },
  {
    title: "Peer Tutoring App",
    subtitle: "AppSheet Mobile Application",
    category: "Mobile",
    year: "2025",
    role: "App Developer",
    blurb:
      "A no-code mobile application built with AppSheet to facilitate peer tutoring sessions, match students with tutors, and track progress.",
    stack: ["AppSheet", "Google Workspace"],
    link: "https://www.appsheet.com/start/52054a1c-fd1e-4a2d-9c6d-fa5abe085356",
    image: "/projects/peertutoring.png",
  },
  {
    title: "Car Website",
    subtitle: "Frontend Showcase",
    category: "UI / Frontend",
    year: "2024",
    role: "Frontend Developer",
    blurb:
      "A visually appealing frontend car showcase website demonstrating responsive design and CSS styling techniques.",
    stack: ["HTML", "CSS", "JavaScript"],
    link: "https://jericogatpandan.github.io/Car-Website/",
    image: "/projects/carwebsite.png",
  },
  {
    title: "First Portfolio",
    subtitle: "Google Sites Portfolio",
    category: "UI / Frontend",
    year: "2023",
    role: "Designer",
    blurb:
      "My very first portfolio website created using Google Sites to showcase early projects and academic achievements.",
    stack: ["Google Sites"],
    link: "https://sites.google.com/unc.edu.ph/jericogatpandan/home?authuser=0",
    image: "/projects/firstportfolio.png",
  },
  {
    title: "Project Calculator",
    subtitle: "Early Practice Project",
    category: "UI / Frontend",
    year: "2023",
    role: "Developer",
    blurb:
      "A simple web-based calculator application built as an early practice project to learn JavaScript logic and DOM manipulation.",
    stack: ["HTML", "CSS", "JavaScript"],
    link: "https://jericogatpandan.github.io/Project_Calculator/",
    image: "/projects/calculator.png",
  },
  {
    title: "RPS Game",
    subtitle: "Early Practice Project",
    category: "UI / Frontend",
    year: "2023",
    role: "Developer",
    blurb:
      "A Rock Paper Scissors web game built to practice interactive frontend state and event handling.",
    stack: ["HTML", "CSS", "JavaScript"],
    link: "https://jericogatpandan.github.io/RPS_Game/",
    image: "/projects/rps.png",
  }
];

export const FILTERS: ProjectCategory[] = ["Full-Stack", "AI / Data", "Database", "UI / Frontend", "Mobile", "Desktop", "Other"];
