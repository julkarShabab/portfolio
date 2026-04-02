import { Mail, Linkedin, Github } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">

        <h2 className="contact-title">Get In Touch</h2>

        <p className="contact-text">
          I'm always open to discussing new projects, creative ideas, or
          opportunities to be part of your vision.
        </p>

        <div className="contact-socials">

          <a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=julkarshabab@gmail.com"
  target="_blank"
  rel="noopener noreferrer"
  className="social-btn email"
>
  <Mail size={24}/>
</a>

          <a
            href="https://www.linkedin.com/in/julkar-niene/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-btn linkedin"
          >
            <Linkedin size={24}/>
          </a>

          <a
            href="https://github.com/julkarShabab"
            target="_blank"
            rel="noopener noreferrer"
            className="social-btn github"
          >
            <Github size={24}/>
          </a>

        </div>

      </div>
    </section>
  );
}