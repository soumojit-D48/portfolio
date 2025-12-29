

// "use client";

// import { motion, useInView } from "framer-motion";
// import { useRef, useState } from "react";
// import { ExternalLink, Github, X, Folder, FileCode } from "lucide-react";
// import TerminalWindow from "../terminal/TerminalWindow";

// interface Project {
//   title: string;
//   shortDescription: string;
//   fullDescription: string;
//   tags: string[];
//   image: string;
//   liveUrl: string;
//   githubUrl?: string;
//   features: string[];
//   status: "online" | "offline" | "warning";
// }

// const projects: Project[] = [
//   {
//     title: "eco-tourism-jharkhand",
//     shortDescription: "Full-stack tourism platform for exploring eco and cultural destinations in Jharkhand.",
//     fullDescription: "Built a comprehensive full-stack tourism platform for exploring eco and cultural destinations in Jharkhand. The platform helps tourists discover hidden gems, plan their trips, and connect with local culture and nature.",
//     tags: ["React", "Node.js", "MongoDB", "Gemini AI"],
//     image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=500&fit=crop",
//     liveUrl: "https://eco-quest-7p8q.onrender.com/",
//     githubUrl: "#",
//     status: "online",
//     features: [
//       "AI-powered travel assistance using Gemini AI",
//       "Hotel bookings and destination discovery",
//       "Secure user authentication system",
//       "Admin dashboard for content management",
//       "Interactive maps and location services",
//     ],
//   },
//   {
//     title: "event-management-system",
//     shortDescription: "Full-stack web application for comprehensive event management.",
//     fullDescription: "A robust event management system that allows users to create, manage, and participate in events. Features a seamless experience from event creation to check-in.",
//     tags: ["React", "Node.js", "MongoDB", "Redux"],
//     image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=500&fit=crop",
//     liveUrl: "https://campus-sync-pi.vercel.app/",
//     githubUrl: "#",
//     status: "online",
//     features: [
//       "User authentication with JWT",
//       "Event creation and management",
//       "QR-based check-in system",
//       "PDF ticket generation",
//       "Redux for state management",
//       "Cloudinary for media storage",
//     ],
//   },
//   {
//     title: "blood-donation-platform",
//     shortDescription: "Connecting blood donors with recipients through a modern Next.js application.",
//     fullDescription: "A life-saving platform that bridges the gap between blood donors and recipients. Real-time matching system ensures quick response during emergencies.",
//     tags: ["Next.js", "TypeScript", "Postgress", "Zustand"],
//     image: "https://images.unsplash.com/photo-1615461066841-6116e61058f4?w=800&h=500&fit=crop",
//     liveUrl: "https://pulse-map-beige.vercel.app/",
//     githubUrl: "#",
//     status: "online",
//     features: [
//       "User authentication and profiles",
//       "Real-time donor matching algorithm",
//       "Blood bank location via integrated maps",
//       "Built with TypeScript for type safety",
//       "Tailwind CSS and shadcn/ui for modern UI",
//       "Zustand for efficient state management",
//     ],
//   },

//   {
//     title: "crypto-price-tracker",
//     shortDescription: "Real-time cryptocurrency price tracking app with interactive charts.",
//     fullDescription:
//       "A responsive React-based crypto price tracker that allows users to monitor real-time cryptocurrency prices, trends, and historical data. The app integrates the CoinGecko API and interactive charts to provide detailed insights into market movements.",
//     tags: ["React", "Vite", "CoinGecko API", "Tailwind CSS", "Charts"],
//     image: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=800&h=500&fit=crop",
//     liveUrl: "https://crypto-price-tracker-one-phi.vercel.app/",
//     githubUrl: "https://github.com/soumojit-D48/CryptoReact",
//     status: "online",
//     features: [
//       "Real-time crypto price updates via CoinGecko API",
//       "Interactive line charts for historical price trends",
//       "Detailed coin data including volume, market cap, and supply",
//       "Global state management using React Context API",
//       "Currency selector (USD, INR, EUR)",
//       "Fast development setup powered by Vite",
//     ],
//   },


//   {
//     title: "mern-auth-system",
//     shortDescription: "Secure MERN authentication system with JWT, OTP verification, and protected routes.",
//     fullDescription:
//       "A complete full-stack MERN authentication system featuring secure user registration, login, email verification, password reset using OTP, and protected routes. Implements JWT authentication with HTTP-only cookies and robust backend security practices.",
//     tags: ["MongoDB", "Express", "React", "Node.js", "JWT", "Tailwind CSS"],
//     image: "https://images.unsplash.com/photo-1633265486064-086b219458ec?w=800&h=500&fit=crop",
//     liveUrl: "https://mernauth-frontend-bkwh.onrender.com/",
//     githubUrl: "#",
//     status: "online",
//     features: [
//       "User registration and login with secure password hashing (bcrypt)",
//       "JWT authentication using HTTP-only cookies",
//       "Email verification via OTP with expiry",
//       "Password reset flow using OTP",
//       "Protected routes using custom Express middleware",
//       "Nodemailer integration for email services",
//       "Persistent authentication across sessions",
//     ],
//   },


//   {
//   title: "portfolio-website",
//   shortDescription: "Modern developer portfolio website with interactive terminal interface.",
//   fullDescription: "A responsive and interactive portfolio website built with Next.js and TypeScript, featuring a terminal-inspired UI with custom animations and a clean, modern design. The portfolio showcases my projects, skills, and contact information in an engaging way.",
//   tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "shadcn/ui"],
//   image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=500&fit=crop",
//   liveUrl: "https://soumojit-das.vercel.app/",
//   githubUrl: "https://github.com/soumojit-D48/portfolio",
//   status: "online",
//   features: [
//     "Terminal-inspired interactive UI with command-line interface",
//     "Responsive design that works on all devices",
//     "Smooth animations and transitions using Framer Motion",
//     "Dark/light mode support with system preference detection",
//     "Project showcase with detailed descriptions and live demos",
//     "Modern UI components built with shadcn/ui",
//     "Type-safe development with TypeScript"
//   ]
// }


// ];

// const Projects = () => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, margin: "-100px" });
//   const [selectedProject, setSelectedProject] = useState<Project | null>(null);

//   return (
//     <section id="projects" className="py-24" ref={ref}>
//       <div className="container mx-auto px-6">
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           animate={isInView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.6 }}
//           className="mb-16"
//         >
//           <div className="flex items-center gap-3 mb-4 flex-wrap">
//             <Folder className="w-6 h-6 text-primary glow-text" />
//             <span className="text-terminal-cyan">visitor@portfolio</span>
//             <span className="text-muted-foreground">:</span>
//             <span className="text-terminal-amber">~/projects</span>
//             <span className="text-muted-foreground">$</span>
//             <span className="text-foreground">find . -name "*.project" -type f</span>
//             <span className="status-dot status-online" />
//           </div>
//           <h2 className="text-3xl md:text-4xl font-bold text-primary mb-2" style={{ textShadow: "0 0 10px hsl(120 100% 45% / 0.3)" }}>
//             {"/* PROJECTS */"}
//           </h2>
//           <p className="text-muted-foreground text-lg">
//             <span className="text-terminal-cyan">//</span> A selection of projects showcasing my full-stack development skills
//           </p>
//         </motion.div>

//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {projects.map((project, index) => (
//             <motion.div
//               key={project.title}
//               initial={{ opacity: 0, y: 50 }}
//               animate={isInView ? { opacity: 1, y: 0 } : {}}
//               transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
//             >
//               <TerminalWindow title={project.title} className="h-full">
//                 <div className="flex items-center justify-between mb-3 text-xs">
//                   <div className="flex items-center gap-2">
//                     <FileCode className="w-4 h-4 text-chart-3" />
//                     <span className="text-muted-foreground">README.md</span>
//                   </div>
//                   <span
//                     className={`status-dot ${project.status === "online"
//                         ? "status-online"
//                         : project.status === "warning"
//                           ? "status-warning"
//                           : "status-offline"
//                       }`}
//                   />
//                 </div>

//                 <div className="relative overflow-hidden rounded mb-4 border-glow">
//                   <motion.img
//                     src={project.image}
//                     alt={project.title}
//                     className="w-full h-32 object-cover filter grayscale hover:grayscale-0 transition-all duration-500"
//                     whileHover={{ scale: 1.05 }}
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
//                 </div>

//                 <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
//                   <span className="text-terminal-cyan">#</span> {project.shortDescription}
//                 </p>

//                 <div className="flex flex-wrap gap-1.5 mb-4">
//                   {project.tags.map((tag) => (
//                     <motion.span
//                       key={tag}
//                       whileHover={{ scale: 1.05, y: -2 }}
//                       className="px-2 py-0.5 text-xs font-medium border border-border text-accent rounded hover:border-primary hover:bg-primary/10 transition-all cursor-default"
//                     >
//                       {tag}
//                     </motion.span>
//                   ))}
//                 </div>

//                 <div className="flex gap-2">
//                   <motion.button
//                     onClick={() => setSelectedProject(project)}
//                     whileHover={{ scale: 1.02 }}
//                     whileTap={{ scale: 0.98 }}
//                     className="btn-terminal flex-1"
//                   >
//                     <span className="text-terminal-cyan">$</span> cat README.md
//                   </motion.button>
//                   <motion.a
//                     href={project.liveUrl}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     whileHover={{ scale: 1.1, rotate: 5 }}
//                     whileTap={{ scale: 0.95 }}
//                     className="p-2 rounded border-glow hover:bg-primary/10 transition-colors"
//                   >
//                     <ExternalLink className="w-4 h-4 text-primary" />
//                   </motion.a>
//                 </div>
//               </TerminalWindow>
//             </motion.div>
//           ))}
//         </div>
//       </div>

//       {/* Project Details Modal */}
//       {selectedProject && (
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/95 backdrop-blur-md"
//           onClick={() => setSelectedProject(null)}
//         >
//           <motion.div
//             initial={{ scale: 0.9, opacity: 0 }}
//             animate={{ scale: 1, opacity: 1 }}
//             exit={{ scale: 0.9, opacity: 0 }}
//             className="max-w-2xl w-full max-h-[90vh] overflow-y-auto"
//             onClick={(e) => e.stopPropagation()}
//           >
//             <TerminalWindow title={`${selectedProject.title}/README.md`}>
//               <button
//                 onClick={() => setSelectedProject(null)}
//                 className="absolute top-3 right-3 p-1.5 rounded border-glow-red hover:bg-destructive/20 transition-all z-10"
//                 aria-label="Close modal"
//               >
//                 <X className="w-4 h-4 text-terminal-red" />
//               </button>

//               <div className="relative overflow-hidden rounded mb-4 border-glow">
//                 <img
//                   src={selectedProject.image}
//                   alt={selectedProject.title}
//                   className="w-full h-48 object-cover"
//                 />
//               </div>

//               <div className="flex items-center gap-2 mb-3">
//                 <h3 className="text-xl font-bold text-primary glow-text">
//                   # {selectedProject.title}
//                 </h3>
//                 <span
//                   className={`status-dot ${selectedProject.status === "online"
//                       ? "status-online"
//                       : selectedProject.status === "warning"
//                         ? "status-warning"
//                         : "status-offline"
//                     }`}
//                 />
//               </div>

//               <p className="text-muted-foreground mb-6 leading-relaxed">
//                 {selectedProject.fullDescription}
//               </p>

//               <h4 className="text-foreground font-semibold mb-3 text-terminal-cyan">## Features</h4>
//               <ul className="space-y-2 mb-6">
//                 {selectedProject.features.map((feature, index) => (
//                   <li key={index} className="flex items-start gap-2 text-muted-foreground text-sm">
//                     <span className="text-primary mt-0.5">▸</span>
//                     {feature}
//                   </li>
//                 ))}
//               </ul>

//               <h4 className="text-foreground font-semibold mb-3 text-terminal-cyan">## Tech Stack</h4>
//               <div className="flex flex-wrap gap-2 mb-6">
//                 {selectedProject.tags.map((tag) => (
//                   <span
//                     key={tag}
//                     className="px-3 py-1 text-sm font-medium border border-primary text-primary rounded hover:bg-primary/10 transition-all"
//                   >
//                     {tag}
//                   </span>
//                 ))}
//               </div>

//               <div className="flex gap-3">
//                 <motion.a
//                   href={selectedProject.liveUrl}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   whileHover={{ scale: 1.02 }}
//                   whileTap={{ scale: 0.98 }}
//                   className="btn-terminal-filled flex-1 text-center"
//                 >
//                   <ExternalLink className="w-4 h-4 inline mr-2" />
//                   ./run --live
//                 </motion.a>
//                 {selectedProject.githubUrl && (
//                   <motion.a
//                     href={selectedProject.githubUrl}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     whileHover={{ scale: 1.02 }}
//                     whileTap={{ scale: 0.98 }}
//                     className="btn-terminal flex-1 text-center"
//                   >
//                     <Github className="w-4 h-4 inline mr-2" />
//                     git clone
//                   </motion.a>
//                 )}
//               </div>
//             </TerminalWindow>
//           </motion.div>
//         </motion.div>
//       )}
//     </section>
//   );
// };

// export default Projects;
























"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Github, X, Folder, FileCode } from "lucide-react";
import TerminalWindow from "../terminal/TerminalWindow";

interface Project {
  title: string;
  shortDescription: string;
  fullDescription: string;
  tags: string[];
  image: string;
  liveUrl?: string; // Optional
  githubUrl: string; // Required
  features: string[];
  status: "completed" | "in-progress"; // Green or Yellow
}

// const projects: Project[] = [
//   {
//     title: "eco-tourism-jharkhand",
//     shortDescription: "Full-stack tourism platform for exploring eco and cultural destinations in Jharkhand.",
//     fullDescription: "Built a comprehensive full-stack tourism platform for exploring eco and cultural destinations in Jharkhand. The platform helps tourists discover hidden gems, plan their trips, and connect with local culture and nature.",
//     tags: ["React", "Node.js", "MongoDB", "Gemini AI"],
//     image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=500&fit=crop",
//     liveUrl: "#",
//     githubUrl: "https://github.com/soumojitdas/eco-tourism",
//     status: "completed",
//     features: [
//       "AI-powered travel assistance using Gemini AI",
//       "Hotel bookings and destination discovery",
//       "Secure user authentication system",
//       "Admin dashboard for content management",
//       "Interactive maps and location services",
//     ],
//   },
//   {
//     title: "event-management-system",
//     shortDescription: "Full-stack web application for comprehensive event management.",
//     fullDescription: "A robust event management system that allows users to create, manage, and participate in events. Features a seamless experience from event creation to check-in.",
//     tags: ["React", "Node.js", "MongoDB", "Redux"],
//     image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=500&fit=crop",
//     liveUrl: "#",
//     githubUrl: "https://github.com/soumojitdas/event-management",
//     status: "completed",
//     features: [
//       "User authentication with JWT",
//       "Event creation and management",
//       "QR-based check-in system",
//       "PDF ticket generation",
//       "Redux for state management",
//       "Cloudinary for media storage",
//     ],
//   },
//   {
//     title: "blood-donation-platform",
//     shortDescription: "Connecting blood donors with recipients through a modern Next.js application.",
//     fullDescription: "A life-saving platform that bridges the gap between blood donors and recipients. Real-time matching system ensures quick response during emergencies.",
//     tags: ["Next.js", "TypeScript", "Prisma", "Zustand"],
//     image: "https://images.unsplash.com/photo-1615461066841-6116e61058f4?w=800&h=500&fit=crop",
//     githubUrl: "https://github.com/soumojitdas/blood-donation",
//     status: "in-progress",
//     features: [
//       "User authentication and profiles",
//       "Real-time donor matching algorithm",
//       "Blood bank location via integrated maps",
//       "Built with TypeScript for type safety",
//       "Tailwind CSS and shadcn/ui for modern UI",
//       "Zustand for efficient state management",
//     ],
//   },
// ];


const projects: Project[] = [
  {
    title: "eco-tourism-jharkhand",
    shortDescription:
      "Full-stack tourism platform for exploring eco and cultural destinations in Jharkhand.",
    fullDescription:
      "Built a comprehensive full-stack tourism platform for exploring eco and cultural destinations in Jharkhand. The platform helps tourists discover hidden gems, plan their trips, and connect with local culture and nature.",
    tags: ["React", "Node.js", "MongoDB", "Gemini AI"],
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=500&fit=crop",
    liveUrl: "https://eco-quest-7p8q.onrender.com/",
    githubUrl: "https://github.com/soumojit-D48/Jharkhand-Tourism",
    status: "completed",
    features: [
      "AI-powered travel assistance using Gemini AI",
      "Hotel bookings and destination discovery",
      "Secure user authentication system",
      "Admin dashboard for content management",
      "Interactive maps and location services",
    ],
  },

  {
    title: "event-management-system",
    shortDescription:
      "Full-stack web application for comprehensive event management.",
    fullDescription:
      "A robust event management system that allows users to create, manage, and participate in events. Features a seamless experience from event creation to check-in.",
    tags: ["React", "Node.js", "MongoDB", "Redux"],
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=500&fit=crop",
    liveUrl: "https://campus-sync-pi.vercel.app/",
    githubUrl: "https://github.com/soumojit-D48/Event-management",
    status: "completed",
    features: [
      "User authentication with JWT",
      "Event creation and management",
      "QR-based check-in system",
      "PDF ticket generation",
      "Redux for state management",
      "Cloudinary for media storage",
    ],
  },

  {
    title: "Blood-donation-platform",
    shortDescription:
      "Connecting blood donors with recipients through a modern Next.js application.",
    fullDescription:
      "A life-saving platform that bridges the gap between blood donors and recipients. Real-time matching system ensures quick response during emergencies.",
    tags: ["Next.js", "TypeScript", "Postgress", "Tailwind"],
    image:
      "https://images.unsplash.com/photo-1615461066841-6116e61058f4?w=800&h=500&fit=crop",
    githubUrl: "https://github.com/soumojit-D48/Pulse-Map",
    liveUrl: "https://pulse-map-beige.vercel.app/",
    status: "completed",
    features: [
      "User authentication and profiles",
      "Real-time donor matching algorithm",
      "Blood bank location via integrated maps",
      "Type-safe development with TypeScript",
      "Tailwind CSS and shadcn/ui for modern UI",
      "Zustand for efficient state management",
    ],
  },

  {
    "title": "SkillSync",
    "shortDescription": "A comprehensive skill development and tracking platform for professional growth.",
    "fullDescription": "SkillSync is a full-stack application designed to help users track, develop, and showcase their skills. The platform offers personalized learning paths, progress tracking, and resource management to facilitate continuous professional development. With a clean, modern interface and powerful backend, SkillSync makes skill development more accessible and measurable.",
    "tags": ["Next.js", "TypeScript", "FastAPI", "PostgreSQL", "TailwindCSS", "Redux"],
    "image": "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=500&fit=crop",
    "githubUrl": "https://github.com/soumojit-D48/SkillSync",
    "status": "in-progress",
    "features": [
      "User authentication and profile management",
      "Skill tracking and progress visualization",
      "Personalized learning path recommendations",
      "Resource library with categorization",
      "Modern UI built with TailwindCSS and shadcn/ui",
      "Type-safe development with TypeScript",
      "RESTful API with FastAPI",
      "Real-time progress updates",
      "Responsive design for all devices",
      "Secure authentication with JWT"
    ]
  },

  {
    title: "crypto-price-tracker",
    shortDescription:
      "Real-time cryptocurrency price tracking app with interactive charts.",
    fullDescription:
      "A responsive frontend-focused React application for tracking real-time cryptocurrency prices, trends, and historical data using the CoinGecko API.",
    tags: ["React", "Vite", "Tailwind CSS", "CoinGecko API", "Charts"],
    image:
      "https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=800&h=500&fit=crop",
    liveUrl: "https://crypto-price-tracker-one-phi.vercel.app/",
    githubUrl: "https://github.com/soumojit-D48/CryptoReact",
    status: "completed",
    features: [
      "Real-time price updates via CoinGecko API",
      "Interactive charts for historical trends",
      "Global state management using Context API",
      "Currency selector (USD, INR, EUR)",
      "Optimized frontend performance with Vite",
    ],
  },

  {
    title: "mern-auth-system",
    shortDescription:
      "Secure MERN authentication system with JWT, OTP verification, and protected routes.",
    fullDescription:
      "A backend-focused MERN authentication system implementing secure login, registration, email verification, OTP-based password reset, and protected APIs.",
    tags: ["MongoDB", "Express", "Node.js", "JWT", "Auth"],
    image:
      "https://images.unsplash.com/photo-1633265486064-086b219458ec?w=800&h=500&fit=crop",
    liveUrl: "https://mernauth-frontend-bkwh.onrender.com/",
    githubUrl: "https://github.com/soumojit-D48/MernAuth",
    status: "completed",
    features: [
      "JWT authentication with HTTP-only cookies",
      "OTP-based email verification and password reset",
      "Secure password hashing with bcrypt",
      "Protected routes via Express middleware",
      "Nodemailer integration for emails",
    ],
  },

  {
    title: "portfolio-website",
    shortDescription:
      "Modern developer portfolio website with interactive terminal-style UI.",
    fullDescription:
      "A modern, frontend-focused portfolio built with Next.js and TypeScript, featuring a terminal-inspired interface, smooth animations, and a clean UI.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "shadcn/ui"],
    image:
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=500&fit=crop",
    liveUrl: "https://soumojit-das.vercel.app/",
    githubUrl: "https://github.com/soumojit-D48/portfolio",
    status: "completed",
    features: [
      "Terminal-inspired interactive UI",
      "Smooth animations using Framer Motion",
      "Responsive design across devices",
      "Dark/light mode support",
      "Modern UI components with shadcn/ui",
    ],
  },
];



const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-24" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4 flex-wrap">
            <Folder className="w-6 h-6 text-primary glow-text" />
            <span className="text-terminal-cyan">visitor@portfolio</span>
            <span className="text-muted-foreground">:</span>
            <span className="text-terminal-amber">~/projects</span>
            <span className="text-muted-foreground">$</span>
            <span className="text-foreground">find . -name "*.project" -type f</span>
            <span className="status-dot status-online" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-2" style={{ textShadow: "0 0 10px hsl(120 100% 45% / 0.3)" }}>
            {"/* PROJECTS */"}
          </h2>
          <p className="text-muted-foreground text-lg">
            <span className="text-terminal-cyan">//</span> A selection of projects showcasing my full-stack development skills
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
            >
              <TerminalWindow title={project.title} className="h-full">
                <div className="flex items-center justify-between mb-3 text-xs">
                  <div className="flex items-center gap-2">
                    <FileCode className="w-4 h-4 text-chart-3" />
                    <span className="text-muted-foreground">README.md</span>
                  </div>
                  {/* Status Indicator with Tooltip */}
                  <div className="relative group">
                    <span
                      className={`status-dot ${project.status === "completed"
                        ? "status-info"
                        : "status-warning"
                        }`}
                    />
                    {/* Tooltip on hover */}
                    <span className="absolute -top-8 right-0 px-3 py-1 bg-card border border-primary rounded text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
                      {project.status === "completed"
                        ? "✓ Project is Live"
                        : "⚡ Project in Progress"}
                    </span>
                  </div>
                </div>

                <div className="relative overflow-hidden rounded mb-4 border-glow">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-32 object-cover filter grayscale hover:grayscale-0 transition-all duration-500"
                    whileHover={{ scale: 1.05 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                  {/* Status Badge on Image */}
                  <div className="absolute top-2 right-2">
                    <span className={`px-2 py-1 text-xs rounded border ${project.status === "completed"
                      ? "bg-primary/20 border-primary text-primary"
                      : "bg-chart-3/20 border-chart-3 text-chart-3"
                      }`}>
                      {project.status === "completed" ? "Live" : "In Progress"}
                    </span>
                  </div>
                </div>

                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  <span className="text-terminal-cyan">#</span> {project.shortDescription}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tags.map((tag) => (
                    <motion.span
                      key={tag}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="px-2 py-0.5 text-xs font-medium border border-border text-accent rounded hover:border-primary hover:bg-primary/10 transition-all cursor-default"
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>

                <div className="flex gap-2">
                  <motion.button
                    onClick={() => setSelectedProject(project)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="btn-terminal flex-1 text-xs py-2"
                  >
                    <span className="text-terminal-cyan">$</span> cat README
                  </motion.button>

                  {/* GitHub Button (Always visible) */}
                  <motion.a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-2 rounded border-glow hover:bg-primary/10 transition-colors"
                    title="View on GitHub"
                  >
                    <Github className="w-4 h-4 text-primary" />
                  </motion.a>

                  {/* Live Link Button (Conditional) */}
                  {project.liveUrl && (
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-2 rounded border-glow-cyan hover:bg-accent/10 transition-colors"
                      title="View Live Site"
                    >
                      <ExternalLink className="w-4 h-4 text-terminal-cyan" />
                    </motion.a>
                  )}
                </div>
              </TerminalWindow>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Details Modal */}
      {selectedProject && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/95 backdrop-blur-md"
          onClick={() => setSelectedProject(null)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <TerminalWindow title={`${selectedProject.title}/README.md`}>
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-3 right-3 p-1.5 rounded border-glow-red hover:bg-destructive/20 transition-all z-10"
                aria-label="Close modal"
              >
                <X className="w-4 h-4 text-terminal-red" />
              </button>

              <div className="relative overflow-hidden rounded mb-4 border-glow">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-48 object-cover"
                />
                {/* Status Badge */}
                <div className="absolute top-3 right-3">
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded border bg-card/90 backdrop-blur-sm">
                    <span
                      className={`status-dot ${selectedProject.status === "completed"
                        ? "status-info"
                        : "status-warning"
                        }`}
                    />
                    <span className={`text-sm font-medium ${selectedProject.status === "completed"
                      ? "text-primary"
                      : "text-chart-3"
                      }`}>
                      {selectedProject.status === "completed" ? "Live" : "In Progress"}
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 mb-3">
                <h3 className="text-xl font-bold text-primary glow-text">
                  # {selectedProject.title}
                </h3>
              </div>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                {selectedProject.fullDescription}
              </p>

              <h4 className="text-foreground font-semibold mb-3 text-terminal-cyan">## Features</h4>
              <ul className="space-y-2 mb-6">
                {selectedProject.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2 text-muted-foreground text-sm">
                    <span className="text-primary mt-0.5">▸</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <h4 className="text-foreground font-semibold mb-3 text-terminal-cyan">## Tech Stack</h4>
              <div className="flex flex-wrap gap-2 mb-6">
                {selectedProject.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-sm font-medium border border-primary text-primary rounded hover:bg-primary/10 transition-all"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <h4 className="text-foreground font-semibold mb-3 text-terminal-cyan">## Links</h4>
              <div className="flex gap-3">
                {/* GitHub Link (Always shown) */}
                <motion.a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex-1 py-3 px-4 rounded border border-primary text-primary font-medium text-center flex items-center justify-center gap-2 hover:bg-primary/10 transition-all"
                >
                  <Github className="w-4 h-4" />
                  git clone
                </motion.a>

                {/* Live Link (Conditional) */}
                {selectedProject.liveUrl ? (
                  <motion.a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex-1 py-3 px-4 rounded border border-primary bg-primary text-primary-foreground font-medium text-center flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
                  >
                    <ExternalLink className="w-4 h-4" />
                    ./run --live
                  </motion.a>
                ) : (
                  <div className="flex-1 py-3 px-4 rounded border border-muted text-muted-foreground font-medium text-center flex items-center justify-center gap-2 cursor-not-allowed opacity-50">
                    <span className="status-dot status-warning" />
                    Live Soon
                  </div>
                )}
              </div>
            </TerminalWindow>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default Projects;