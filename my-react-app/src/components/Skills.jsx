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
  SiJira,
  SiPostgresql,
  SiChartdotjs,
  SiFastapi,
  SiTailwindcss,
  SiClickup

} from "react-icons/si";

import {
  FaJava,
  FaCode,
  FaCss3Alt,
  FaPhp,
  FaExchangeAlt, 
  FaKey 


} from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";



export function Skills() {
  const skillCategories = [
    {
      title: "Programming",
      skills: [
        { name: "Python", icon: <SiPython />, color: "#3776AB" },
        { name: "JavaScript", icon: <SiJavascript />, color: "#F7DF1E" },
        { name: "C", icon: <FaCode />, color: "#A8B9CC" },
        { name: "C++", icon: <SiCplusplus />, color: "#00599C" },
        { name: "Java", icon: <FaJava />, color: "#007396" },
        { name: "PHP", icon: <FaPhp />, color: "#777BB4" },
        { name: "HTML", icon: <SiHtml5 />, color: "#E34F26" },
        { name: "CSS", icon: <FaCss3Alt />, color: "#1572B6" }
      ]
    },
    {
      title: "Framework and Libraries",
      skills: [
        { name: "React.js", icon: <SiReact />, color: "#61DAFB" },
        { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "#06B6D4" },
        { name: "Chart.js", icon: <SiChartdotjs />, color: "#FF6384" }

      ]
    },

     {
      title: "Backend & APIs",
      skills: [
        { name: "FastAPI", icon: <SiFastapi />, color: "#009688" },
        { name: "RESTful API Design", icon: <FaExchangeAlt />, color: "#22C55E" },
        { name: "JWT Authentication", icon: <FaKey />, color: "#F59E0B" }

      ]
    },

    {
      title: "Database",
      skills: [
        { name: "MySQL", icon: <SiMysql />, color: "#4479A1" },
        { name: "MongoDB", icon: <SiMongodb />, color: "#47A248" },
        { name: "PostgreSQL", icon: <SiPostgresql />, color: "#336791" }
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
        { name: "Jira", icon: <SiJira />, color: "#0052CC" },
        { name: "ClickUp", icon: <SiClickup />, color: "#7B68EE" }
      ]
    }
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        <h2 className="skills-title">Skills</h2>
        {skillCategories.map((category) => (
          <div key={category.title} className="skills-row">
            <div className="skills-row-header">
              <span className="skills-row-title">{category.title}</span>
              {/* <span className="skills-row-count">{category.skills.length}</span> */}
            </div>
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
    </section>
  );
}
