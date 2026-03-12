export function Skills() {
  const skillCategories = [
    {
      title: "Programming",
      skills: ["Python", "JavaScript", "C", "C++", "Java"],
    },
    {
      title: "Frontend",
      skills: ["React.js", "HTML", "CSS"],
    },
    {
      title: "Database",
      skills: ["MySQL", "MongoDB (Familiar)"],
    },
    {
      title: "Design Tools",
      skills: ["Figma", "Canva"],
    },
    {
      title: "Tools & Others",
      skills: ["Git", "Postman", "Jira"],
    },
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">

        <h2 className="skills-title">Skills</h2>

        <div className="skills-grid">
          {skillCategories.map((category) => (
            <div key={category.title} className="skill-category">

              <h3 className="skill-category-title">
                {category.title}
              </h3>

              <div className="skill-list">
                {category.skills.map((skill) => (
                  <span key={skill} className="skill-badge">
                    {skill}
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}