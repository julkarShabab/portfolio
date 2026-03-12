import { Code2, Palette, Rocket } from "lucide-react";
//import "./About.css";

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
            <h3>Development</h3>
            <p>
              Specialized in JavaScript,React.js. I build scalable
              applications with clean, maintainable code.
            </p>
          </div>

          <div className="about-card card">
            <div className="icon-box purple">
              <Palette size={24} />
            </div>
            <h3>Design</h3>
            <p>
              Creating intuitive user interfaces with a focus on accessibility
              and user experience best practices.
            </p>
          </div>

          <div className="about-card card">
            <div className="icon-box green">
              <Rocket size={24} />
            </div>
            <h3>Innovation</h3>
            <p>
              Always exploring new technologies and methodologies to deliver
              cutting-edge solutions.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}