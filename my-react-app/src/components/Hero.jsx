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

      <h2 className="hero-role">System Engineer | Linux & Infrastructure</h2>

      <p className="hero-description">
       {/* <b>Recent CSE Graduate | Full-Stack Developer </b> <br /> */}
CSE graduate and System Engineer Intern experienced in Linux server administration, Nginx web hosting, PHP-FPM, MariaDB backup automation, and Bash scripting. I build, deploy, troubleshoot, and maintain applications and infrastructure.
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