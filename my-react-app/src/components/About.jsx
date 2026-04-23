import { Code2, Brain, Server } from "lucide-react";

export function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <h2 className="about-title">About Me</h2>

        <div className="about-grid">
          <div className="about-card card">
            <div className="icon-box blue">
              <Code2 size={24} />
            </div>
            <h3>Frontend</h3>
            <p>
              Building responsive, interactive UIs with React. I care about
              clean component structure and smooth user experiences.
            </p>
          </div>

          <div className="about-card card">
            <div className="icon-box purple">
              <Server size={24} />
            </div>
            <h3>Backend</h3>
            <p>
              Designing REST APIs with FastAPI and Python, backed by PostgreSQL
              and Supabase for reliable, scalable data management.
            </p>
          </div>

          <div className="about-card card">
            <div className="icon-box green">
              <Brain size={24} />
            </div>
            <h3>AI Integration</h3>
            <p>
              Integrating LLM APIs to build smart features — from CV matching
              and cover letter generation to NLP-based bias detection.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}