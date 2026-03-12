import {
  SiPython,
  SiJavascript,
  SiCplusplus,
  SiReact,
  SiHtml5,
  SiMysql,
  SiMongodb,
  SiFigma,
  SiCanva,
  SiGit,
  SiPostman,
  SiJira
} from "react-icons/si";

import { FaJava } from "react-icons/fa";
import { FaCode } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";

export function Skills() {
  const skillCategories = [
    {
      title: "Programming",
      skills: [
        { name: "Python", icon: <SiPython />, color: "#3776AB" },
        { name: "JavaScript", icon: <SiJavascript />, color: "#F7DF1E" },
        { name: "C", icon: <FaCode />, color: "#A8B9CC" },
        { name: "C++", icon: <SiCplusplus />, color: "#00599C" },
        { name: "Java", icon: <FaJava />, color: "#007396" }
      ]
    },
    {
      title: "Frontend",
      skills: [
        { name: "React.js", icon: <SiReact />, color: "#61DAFB" },
        { name: "HTML", icon: <SiHtml5 />, color: "#E34F26" },
        { name: "CSS", icon: <FaCss3Alt />, color: "#1572B6" }
      ]
    },
    {
      title: "Database",
      skills: [
        { name: "MySQL", icon: <SiMysql />, color: "#4479A1" },
        { name: "MongoDB", icon: <SiMongodb />, color: "#47A248" }
      ]
    },
    {
      title: "Design Tools",
      skills: [
        { name: "Figma", icon: <SiFigma />, color: "#F24E1E" },
        { name: "Canva", icon: <SiCanva />, color: "#00C4CC" }
      ]
    },
    {
      title: "Tools & Others",
      skills: [
        { name: "Git", icon: <SiGit />, color: "#F05032" },
        { name: "Postman", icon: <SiPostman />, color: "#FF6C37" },
        { name: "Jira", icon: <SiJira />, color: "#0052CC" }
      ]
    }
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        <h2 className="skills-title">Skills</h2>
        <div className="skills-grid">
          {skillCategories.map((category) => (
            <div key={category.title} className="skills-card">
              <div className="skills-card-title">{category.title}</div>
              <div className="skills-items">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="skill-pill">
                    <span style={{ color: skill.color, display: "flex" }}>{skill.icon}</span>
                    {skill.name}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
