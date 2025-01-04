
function Skills() {
  const skills = [
    { name: 'HTML', level: 'Expert' },
    { name: 'CSS', level: 'Expert' },
    { name: 'JavaScript', level: 'Intermediate' },
    { name: 'React', level: 'Intermediate' },
    { name: 'Node.js', level: 'Beginner' },
    { name: 'MYSQL', level: 'Intermediate' },
  ];

  return (
    <div className="skills-container">
      <h1>My Skills</h1>
      <p>Here are some of the technical skills I have acquired:</p>
      <ul className="skills-list">
        {skills.map((skills, index) => (
          <li key={index} className="skill-item">
            <span className="skill-name">{skills.name}</span>
            <span className="skill-level">{skills.level}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Skills;

  