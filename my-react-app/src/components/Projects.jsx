import { ExternalLink, Github } from "lucide-react";

export function Projects() {

  const projects = [

    {
      title: "Life OS-Personal AI System",
      description:
        "A personal AI-powered life management system where you can manage tasks, notes, and expenses through a smart natural language assistant.",
      tags: ["HTML", "CSS","JavaScript","React JS","Chart JS","Python","PostgreSQL"],
      liveUrl: "",
      githubUrl: "https://github.com/julkarShabab/Personal-ai-system",
    },

    {
      title: "AI Job Tracking System",
      description:
        "Built an AI-powered job tracking platform that analyzes job descriptions, matches CVs, and auto-generates cover letters using LLM APIs.",
      tags: ["JavaScript","React JS","Tailwind","Python(FastAPI)","Supabase","Groq LLM API"],
      liveUrl: "",
      githubUrl: "https://github.com/julkarShabab/job-tracking-automation",
    },
    
    {
      title: "Gym Management System",
      description:
        "Built responsive React components for membership management and user interaction.",
      tags: ["React.js", "Node.js", "MongoDB"],
      liveUrl: "",
      githubUrl: "https://github.com/julkarShabab/relife",
    },

    {
      title: "Gender Bias Detection in AI Chatbots",
      description:
        "Conducted quantitative bias analysis in AI chatbots(Chatgpt,Gemini) using automated bias scorecards.",
      tags: ["Python", "NLP"],
      liveUrl: "",
      githubUrl: "https://github.com/julkarShabab/sentiment_analysis",
    },
    
    {
      title: "Cafe Delivery Management System",
      description:
        "Built full-stack system and designed order workflows with CRUD support.",
      tags: ["React.js", "Node.js", "MongoDB"],
      liveUrl: "",
      githubUrl: "https://github.com/julkarShabab/uiu-canteen",
    },
    {
      title: "Hospital Management System",
      description:
        "Developed full-stack appointment & scheduling modules and optimized dashboards for usability.",
      tags: ["PHP", "HTML", "CSS", "JavaScript", "MySQL"],
      liveUrl: "",
      githubUrl: "",
    }
    
    
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

              <p>{project.description}</p>

              <div className="project-tags">
                {project.tags.map(tag => (
                  <span key={tag} className="project-tag">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="project-links">
                {/* <a href={project.liveUrl}>
                  <ExternalLink size={16}/> Live Demo
                </a> */}

                {/* <a href={project.githubUrl}>
                  <Github size={16}/> Code
                </a> */}

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
                

              </div>

            </div>

          </div>
        ))}

      </div>

    </section>
  );
}