import { ArrowDown } from "lucide-react";

export function Hero() {
  const scrollToProjects = () => {
    document
      .getElementById("projects")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="hero-section">
      <div className="hero-container">

        <h1 className="hero-title">
          Hi, I'm <span className="hero-name">Shabab</span>
        </h1>

        <p className="hero-role">
          Frontend Developer
        </p>

        <p className="hero-description">
          Computer Science graduate with a strong interest in frontend development and modern web technologies.
Experienced in building responsive web interfaces and translating ideas into functional applications.
Actively seeking opportunities to contribute, learn, and grow in a professional development environment.
        </p>

        <button onClick={scrollToProjects} className="hero-button">
          View My Work
          <ArrowDown size={20} />
        </button>

      </div>
    </section>
  );
}