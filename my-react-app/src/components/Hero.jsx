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
        Hi, I'm <span className="hero-name">Shabab</span>
      </h1>

      <h2 className="hero-role">Frontend Developer</h2>

      <p className="hero-description">
        Computer Science undergraduate experienced in developing responsive, user-centric web applications using React.js, JavaScript, HTML, and CSS. Familiar with relational and NoSQL databases including MySQL, PostgreSQL, and MongoDB, with practical experience in data handling and application integration. Currently expanding into backend development, aiming to build scalable and complete software solutions.
      </p>

      <button onClick={scrollToProjects} className="hero-button">
          My Projects
          <ArrowDown size={20} />
        </button>
    </div>

    <div className="hero-right">
      <img src="/PP.jpeg" alt="Shabab" className="hero-photo"/>
    </div>

  </div>
</section>
  );
}