import { ExternalLink, Github, FileText } from "lucide-react";

export function Projects() {

  const projects = [
    {
      title: "Life OS-Personal AI System",
      bullets: [
        "Engineered a full-stack REST API platform with secure JWT authentication and optimized CRUD operations ",
        "Built task and expense management modules with dynamic data visualizations for real-time user insights ",
        "Integrated Groq AI to enable natural language querying over user data (e.g., spending trend analysis) ",
        "Designed scalable PostgreSQL schemas to support complex relational data across multiple modules "
      ],
      architecture: {
        frontend: "React.js + Chart.js + CSS",
        backend: "FastAPI",
        database: "PostgreSQL",
        auth: "JWT Authentication",
        ai: "Groq LLM API",
      },
      tags: ["HTML", "CSS", "JavaScript", "React JS", "Chart JS", "Python", "PostgreSQL"],
      liveUrl: "",
      githubUrl: "https://github.com/julkarShabab/Personal-ai-system",
    },
    {
      title: "AI Job Tracking System",
      bullets: [
        "Built an AI-powered job tracking platform with job analysis, CV matching, and cover letter generation ",
        "Used LLM APIs to extract structured insights (skills, experience, company, salary) from job descriptions ",
        "Added CV parsing (PDF/DOCX) and one-click job saving with structured data storage "
      ],

      architecture: {
        frontend: "React.js + Tailwind CSS",
        backend: "FastAPI",
        database: "Supabase PostgreSQL",
        auth: "JWT Authentication",
        ai: "Groq LLM API",
      },
      tags: ["JavaScript", "React JS", "Tailwind", "Python(FastAPI)", "Supabase", "Groq LLM API"],
      liveUrl: "",
      githubUrl: "https://github.com/julkarShabab/job-tracking-automation",
    },

    {
      title: "Team Hub — Collaborative Workspace Platform",
      bullets: [
        "Built a full-stack collaborative workspace platform for managing goals, action items, announcements, members, and analytics",
        "Implemented advanced role-based access control with Admin/Member permissions across frontend and backend routes",
        "Added optimistic UI updates for instant goal creation, Kanban drag-and-drop, role changes, and member management",
        "Integrated real-time collaboration, JWT authentication, email invitations, file uploads, and Swagger API documentation"
      ],
      architecture: {
        frontend: "Next.js + Tailwind CSS + Zustand",
        backend: "Node.js + Express.js",
        database: "PostgreSQL + Prisma",
        auth: "JWT Authentication",
        realtime: "Socket.io",
        email: "Resend",
        storage: "Cloudinary",
      },
      tags: [
        "JavaScript",
        "Next.js",
        "Tailwind CSS",
        "Zustand",
        "Node.js",
        "Express.js",
        "PostgreSQL",
        "Prisma",
        "Socket.io",
        "JWT",
        "Resend",
        "Cloudinary",
        "Swagger",
        "Turborepo"
      ],
      liveUrl: "https://team-hub-frontend.up.railway.app",
      apiDocsUrl: "https://team-hub-production-6ffe.up.railway.app/api/docs",
      githubUrl: "https://github.com/julkarShabab/team-hub",
    },

    {
      title: "Gender Bias Detection in AI Chatbots",
      bullets: [
        "Conducted quantitative analysis of gender bias in AI chatbot(ChatGPT, Gemini) responses using structured experimental design ",
        "Developed automated evaluation pipelines to measure bias across multiple response dimensions ",
      ],
      tags: ["Python", "NLP"],
      liveUrl: "",
      githubUrl: "https://github.com/julkarShabab/sentiment_analysis",
    },
    {
      title: "Cafe Delivery Management System",
      bullets: [
        "Built a complete full-stack delivery platform with user-facing UI, admin panel, and database integration ",
        "Implemented full CRUD operations and end-to-end order processing workflows ",
        "Designed scalable MongoDB schemas for managing users, orders, and delivery logistics "
      ],
      architecture: {
        frontend: "React.js + CSS",
        backend: "Node.js",
        database: "MongoDB",
      },
      tags: ["React.js", "Node.js", "MongoDB"],
      liveUrl: "",
      githubUrl: "https://github.com/julkarShabab/uiu-canteen",
    },
    {
      title: "Gym Management System",
      bullets: [
        "Built responsive React components for membership management",
        "Handles user interaction and member data workflows",
      ],

      architecture: {
        frontend: "React.js + CSS",
        backend: "Node.js",
        database: "MongoDB",
      },
      tags: ["React.js", "Node.js", "MongoDB"],
      liveUrl: "",
      githubUrl: "https://github.com/julkarShabab/relife",
    },
    {
      title: "Hospital Management System",
      bullets: [
        "Developed full-stack appointment and scheduling modules",
        "Optimized dashboards for improved usability",
      ],
      architecture: {
        frontend: "HTML + CSS + JavaScript",
        backend: "PHP",
        database: "MySQL",
      },
      tags: ["PHP", "HTML", "CSS", "JavaScript", "MySQL"],
      liveUrl: "",
      githubUrl: "",
    },
  ];

  return (
    <section id="projects" className="projects-section">

      <h2>Projects</h2>

      <div className="projects-list">

        {projects.map((project) => (
          <div key={project.title} className="project-item">

            <h3 className="project-title">
              {project.title}
            </h3>

            <div className="project-details">

              <ul className="project-bullets">
                {project.bullets.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>

              {project.architecture && (
                <div className="architecture-flow">
                  <div className="flow-row">
                    <div className="flow-box frontend">
                      ⚛ {project.architecture.frontend}
                    </div>

                    <span className="flow-arrow">→</span>

                    <div className="flow-box backend">
                      ⚙ {project.architecture.backend}
                    </div>

                    <span className="flow-arrow">→</span>

                    <div className="flow-box database">
                      🗄 {project.architecture.database}
                    </div>
                  </div>

                  {project.architecture.auth && (
                    <div className="flow-row small">
                      <span className="flow-arrow down">↓</span>
                      <div className="flow-box auth">
                        {project.architecture.auth}
                      </div>
                    </div>
                  )}

                  {project.architecture.ai && (
                    <div className="flow-row small">
                      <span className="flow-arrow down">↓</span>
                      <div className="flow-box ai">
                        {project.architecture.ai}
                      </div>
                    </div>
                  )}
                </div>
              )}

              <div className="project-tags">
                {project.tags.map(tag => (
                  <span key={tag} className="project-tag">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="project-links">
                {project.liveUrl && (
                  <a href={project.liveUrl} className="project-link blue" target="_blank" rel="noopener noreferrer">
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                )}
                {project.githubUrl && (
                  <a href={project.githubUrl} className="project-link gray" target="_blank" rel="noopener noreferrer">
                    <Github size={16} />
                    Code
                  </a>
                )}
                {project.apiDocsUrl && (
                  <a
                    href={project.apiDocsUrl}
                    className="project-link purple"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FileText size={16} />
                    API Docs
                  </a>
                )}
              </div>

            </div>

          </div>
        ))}

      </div>

    </section>
  );
}