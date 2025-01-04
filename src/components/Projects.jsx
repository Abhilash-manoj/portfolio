
function Projects() {
  const projects = [
    {
      name: 'Personal Finance Tracker',
      description: 'A web application to manage personal expenses and track budgets.',
      technologies: ['React', 'Node.js', 'MYSQL'],
      link: '#',
    },
    {
      name: 'Student Information Module',
      description: 'A dynamic web application designed to facilitate efficient management and accessibility of student records',
      technologies: ['HTML','CSS', 'PHP', 'MySQL'],
      link: 'https://github.com/Abhilash-manoj/student-information-module',
    },
  ];

  return (
    <div className="projects-container">
      <h1>My Projects</h1>
      <p>Here are some of the projects I have worked on:</p><br></br><br></br>
      <div className="projects-list">
        {projects.map((projects, index) => (
          <div key={index} className="project-item">
            <h2 className="project-name">{projects.name}</h2>
            <p className="project-description">{projects.description}</p>
            <p className="project-technologies">
              <strong>Technologies:</strong> {projects.technologies.join(', ')}
            </p>
            <a href={projects.link} className="project-link" target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
