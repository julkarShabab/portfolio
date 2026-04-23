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

    <div className="hero-left">
      <h1>
        Hi, I'm <span className="hero-name">Julkar Niene</span>
      </h1>

      <h2 className="hero-role">Recent CSE Graduate | Full-Stack Developer</h2>

      <p className="hero-description">
       {/* <b>Recent CSE Graduate | Full-Stack Developer </b> <br /> */}
I build scalable web applications with React.js, Node.js, and Python — from RESTful APIs and JWT authentication to AI-powered features using LLM integrations. Passionate about writing clean, maintainable code and solving real problems through technology.
      </p>

      <button onClick={scrollToProjects} className="hero-button">
          My Projects
          <ArrowDown size={20} />
        </button>
    </div>

    <div className="hero-right">
      <img src="/PP.png" alt="Shabab" className="hero-photo"/>
    </div>

  </div>
</section>
  );
}