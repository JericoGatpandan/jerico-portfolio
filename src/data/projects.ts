export type ProjectCategory = "Full-Stack" | "AI / Data" | "Database" | "UI / Frontend" | "Mobile" | "Desktop" | "Other";

export type Project = {
  id: string;
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
  problem?: string;
  solution?: string;
  features?: string[];
  results?: string;
};

export const PROJECTS: Project[] = [
  {
    id: "stream-ai",
    title: "StreamAI",
    subtitle: "AI Flood Forecasting for the Bicol River Watershed",
    category: "AI / Data",
    year: "2025",
    role: "Backend + Frontend Dev · Team UNC Colab",
    blurb:
      "Two-stage AI flood forecasting system combining ML classifiers with deep learning predictive models, validated using Nash–Sutcliffe Efficiency. 2nd Runner-Up at Naga IDEA2STARTUP 2025.",
    stack: ["React", "Node.js", "Python", "Tailwind"],
    link: "https://stream-ai-forecasting-system-otk4pgd72.vercel.app/",
    image: "/projects/stream.png",
    problem: "The Bicol River Watershed frequently experiences devastating floods, leading to significant economic and human losses. Existing forecasting systems often lack the precision and localized data integration needed for early and accurate warnings.",
    solution: "We developed a two-stage AI flood forecasting system that combines Machine Learning classifiers with deep learning predictive models. This hybrid approach allows for robust pattern recognition and more accurate water level predictions.",
    features: [
      "Real-time data ingestion and processing",
      "Hybrid ML + Deep Learning forecasting engine",
      "Interactive dashboard for monitoring water levels",
      "Automated alert system based on predictive thresholds"
    ],
    results: "Validated using Nash–Sutcliffe Efficiency with high accuracy. Won 2nd Runner-Up at Naga IDEA2STARTUP 2025, demonstrating strong potential for real-world application."
  },
  {
    id: "asac",
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
    problem: "Agricultural cooperatives face challenges with manual bookkeeping, fragmented order management, and lack of transparency between the federation, cooperative officers, and individual farmers.",
    solution: "A comprehensive Automated System for Agriculture Cooperatives (ASAC) designed to digitize FarmLedger accounting and streamline transaction management with a robust relational database foundation.",
    features: [
      "Role-based access control (Admin, Officer, Farmer)",
      "Automated FarmLedger accounting with database triggers",
      "Centralized order and transaction management",
      "Real-time financial summaries and reporting"
    ],
    results: "Currently in active development as a capstone project in collaboration with FACCS, aiming to deploy to multiple cooperatives to improve their operational efficiency."
  },
  {
    id: "travel-tours",
    title: "Travel & Tours Management System",
    subtitle: "JavaFX Desktop Application",
    category: "Full-Stack",
    year: "2024",
    role: "Desktop Developer",
    blurb:
      "A JavaFX desktop application for managing travel agency operations, including client records, tour packages, bookings, trips, payments, and employee administration. Uses MySQL for persistence with role-based workflows.",
    stack: ["Java 21", "JavaFX 21", "Maven", "MySQL"],
    image: "https://placehold.co/600x400/1a1a2e/ffffff?text=Travel+%26+Tours+Management+System",
    problem: "A local travel agency was managing bookings, client records, and employee schedules using scattered spreadsheets and paper records, leading to inefficiencies and data loss.",
    solution: "A centralized JavaFX desktop application that integrates all aspects of the travel agency's operations into a single, intuitive interface backed by a robust MySQL database.",
    features: [
      "Client and tour package management",
      "Booking and trip scheduling system",
      "Payment tracking and financial reporting",
      "Employee administration with role-based workflows"
    ],
    results: "Streamlined daily operations, reduced booking errors, and improved overall data retrieval times for the agency staff."
  },
  {
    id: "mainstruc",
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
    problem: "The consultancy needed a digital presence that accurately reflected their technical expertise and professionalism, as their previous methods of client acquisition relied heavily on word-of-mouth without a centralized portfolio.",
    solution: "Developed a modern, fast, and responsive React-based website with a custom content architecture, allowing the firm to easily showcase their engineering case studies and services.",
    features: [
      "Custom content architecture for easy updates",
      "Responsive, content-driven layout",
      "Project showcase gallery",
      "Performance optimized for fast loading"
    ],
    results: "Established a professional online footprint that enhances credibility for prospective clients. Currently in final content population phase."
  },
  {
    id: "peer-tutoring",
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
    problem: "Students were struggling to find available peer tutors for specific subjects, and the administration lacked a streamlined way to track tutoring hours and student progress.",
    solution: "Leveraged Google AppSheet to rapidly develop and deploy a mobile-friendly application that connects students with available tutors and logs session data.",
    features: [
      "Student-tutor matching system",
      "Session logging and progress tracking",
      "Integration with Google Workspace",
      "Mobile-first responsive interface"
    ],
    results: "Increased student engagement with the tutoring program and drastically reduced the administrative overhead required to manage the system."
  },
  {
    id: "car-website",
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
    problem: "Needed a playground project to explore advanced CSS techniques, layout strategies, and responsive design principles without the overhead of a full framework.",
    solution: "Built a high-fidelity frontend showcase for luxury cars, focusing entirely on visual aesthetics, smooth animations, and pixel-perfect responsive layouts.",
    features: [
      "Custom CSS animations and transitions",
      "Fully responsive grid/flexbox layouts",
      "Interactive UI elements",
      "Optimized asset loading"
    ],
    results: "Successfully demonstrated advanced frontend capabilities and served as a strong portfolio piece for UI/UX implementation."
  },
  {
    id: "first-portfolio",
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
    problem: "Needed an initial digital presence to compile academic projects and achievements for early career opportunities.",
    solution: "Utilized Google Sites to quickly assemble a clean and organized portfolio that highlighted early work and skills.",
    features: [
      "Project gallery",
      "About me section",
      "Contact information",
      "Responsive template"
    ],
    results: "Served as my first professional online presence and a stepping stone to building custom web portfolios."
  },
  {
    id: "project-calculator",
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
    problem: "Needed hands-on practice with vanilla JavaScript to understand state management and DOM manipulation.",
    solution: "Developed a functional web-based calculator that handles basic arithmetic operations, edge cases, and keyboard inputs.",
    features: [
      "Basic arithmetic operations",
      "Clean CSS styling",
      "Keyboard support",
      "Responsive design"
    ],
    results: "Solidified foundational JavaScript knowledge and understanding of how to interact with the DOM."
  },
  {
    id: "rps-game",
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
    problem: "Wanted to explore interactive web development by building a game with state management and win/loss logic.",
    solution: "Created a classic Rock Paper Scissors game using HTML, CSS, and vanilla JavaScript.",
    features: [
      "Interactive gameplay",
      "Score tracking",
      "Win/loss/tie logic",
      "Visual feedback for selections"
    ],
    results: "Improved skills in event handling and state management in a fun, interactive context."
  }
];

export const FILTERS: ProjectCategory[] = ["Full-Stack", "AI / Data", "Database", "UI / Frontend", "Mobile", "Desktop", "Other"];
