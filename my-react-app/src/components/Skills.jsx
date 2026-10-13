import {
  SiPython,
  SiJavascript,
  SiReact,
  SiMysql,
  SiMongodb,
  SiGit,
  SiPostman,
  SiJira,
  SiPostgresql,
  SiFastapi,
  SiTailwindcss,
  SiClickup,
  SiNextdotjs,
  SiNginx,
  SiLinux,
  SiUbuntu,
  SiNodedotjs,
  SiExpress,
  SiGnubash,
  SiPhp,
} from "react-icons/si";

import {
  FaNetworkWired,
  FaTerminal,
  FaServer,
  FaDatabase,
  FaKey,
  FaExchangeAlt,
  FaCode,
  FaCog,
  FaClock,
} from "react-icons/fa";

export function Skills() {
  const skillCategories = [
    {
      title: "Systems & Servers",
      skills: [
        { name: "Linux", icon: <SiLinux />, color: "#FCC624" },
        { name: "Ubuntu Server", icon: <SiUbuntu />, color: "#E95420" },
        { name: "Nginx", icon: <SiNginx />, color: "#009639" },
        { name: "PHP-FPM", icon: <SiPhp />, color: "#777BB4" },
        { name: "systemd", icon: <FaCog />, color: "#00ADEF" },
        { name: "SSH", icon: <FaTerminal />, color: "#22C55E" },
      ],
    },
    {
      title: "Networking",
      skills: [
        { name: "TCP/IP", icon: <FaNetworkWired />, color: "#2563EB" },
        { name: "SSH & SCP", icon: <FaTerminal />, color: "#22C55E" },
        { name: "HTTP / HTTPS", icon: <FaExchangeAlt />, color: "#0EA5E9" },
        { name: "Reverse Proxy", icon: <FaServer />, color: "#8B5CF6" },
      ],
    },
    {
      title: "Scripting & Automation",
      skills: [
        { name: "Bash", icon: <SiGnubash />, color: "#4EAA25" },
        { name: "Python", icon: <SiPython />, color: "#3776AB" },
        { name: "Cron", icon: <FaClock />, color: "#64748B" },
        { name: "systemd Timers", icon: <FaCog />, color: "#00ADEF" },
        { name: "n8n", icon: <FaExchangeAlt />, color: "#EA4B71" },
      ],
    },
    {
      title: "Databases & Recovery",
      skills: [
        { name: "MariaDB", icon: <SiMysql />, color: "#003545" },
        { name: "MySQL", icon: <SiMysql />, color: "#4479A1" },
        { name: "PostgreSQL", icon: <SiPostgresql />, color: "#336791" },
//        { name: "MongoDB", icon: <SiMongodb />, color: "#47A248" },
        { name: "SQL", icon: <FaDatabase />, color: "#0EA5E9" },
        { name: "Backup & Restore", icon: <FaDatabase />, color: "#16A34A" },
      ],
    },
    {
      title: "Deployment & Hosting",
      skills: [
        { name: "Railway", icon: <FaServer />, color: "#8B5CF6" },
        { name: "Render", icon: <FaServer />, color: "#46E3B7" },
        { name: "Vercel", icon: <SiNextdotjs />, color: "#FFFFFF" },
        { name: "Neon", icon: <SiPostgresql />, color: "#00E599" },
      ],
    },
    {
      title: "Development & APIs",
      skills: [
        { name: "JavaScript", icon: <SiJavascript />, color: "#F7DF1E" },
        { name: "React.js", icon: <SiReact />, color: "#61DAFB" },
        { name: "Next.js", icon: <SiNextdotjs />, color: "#FFFFFF" },
        { name: "Node.js", icon: <SiNodedotjs />, color: "#339933" },
        { name: "Express.js", icon: <SiExpress />, color: "#FFFFFF" },
        { name: "FastAPI", icon: <SiFastapi />, color: "#009688" },
        { name: "REST APIs", icon: <FaExchangeAlt />, color: "#22C55E" },
        { name: "JWT Authentication", icon: <FaKey />, color: "#F59E0B" },
        { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "#06B6D4" },
      ],
    },
    {
      title: "Tools & Collaboration",
      skills: [
        { name: "Git", icon: <SiGit />, color: "#F05032" },
        { name: "GitHub", icon: <FaCode />, color: "#FFFFFF" },
        { name: "Postman", icon: <SiPostman />, color: "#FF6C37" },
        { name: "Swagger / OpenAPI", icon: <FaExchangeAlt />, color: "#85EA2D" },
        { name: "Jira", icon: <SiJira />, color: "#0052CC" },
        { name: "ClickUp", icon: <SiClickup />, color: "#7B68EE" },
      ],
    },
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        <h2 className="skills-title">Technical Skills</h2>

        {skillCategories.map((category) => (
          <div key={category.title} className="skills-row">
            <div className="skills-row-header">
              <span className="skills-row-title">{category.title}</span>
            </div>

            <div className="skills-items">
              {category.skills.map((skill) => (
                <div key={skill.name} className="skill-pill">
                  <span
                    style={{
                      color: skill.color,
                      display: "flex",
                      alignItems: "center",
                      fontSize: "1.15rem",
                    }}
                  >
                    {skill.icon}
                  </span>

                  {skill.name}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}