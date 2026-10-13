
import { Server, Activity, Code2 } from "lucide-react";

export function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <h2 className="about-title">About Me</h2>

        <div className="about-grid">
          <div className="about-card card">
            <div className="icon-box blue">
              <Server size={24} />
            </div>

            <h3>Systems & Infrastructure</h3>
            <p>
              Working with Ubuntu Server, Linux administration,
              Nginx, PHP-FPM, users and permissions, and systemd
              services to deploy and maintain web applications.
            </p>
          </div>

          <div className="about-card card">
            <div className="icon-box green">
              <Activity size={24} />
            </div>

            <h3>Automation & Monitoring</h3>
            <p>
              Building Bash scripts for server health monitoring
              and MariaDB backups. Using systemd timers, logging,
              and recovery alerts to automate routine tasks.
            </p>
          </div>

          <div className="about-card card">
            <div className="icon-box purple">
              <Code2 size={24} />
            </div>

            <h3>Application Deployment</h3>
            <p>
              Combining my full-stack development background with
              infrastructure knowledge to deploy applications,
              configure reverse proxies, troubleshoot build issues,
              and understand problems across the application stack.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
