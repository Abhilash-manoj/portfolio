
function Projects() {
  const projects = [
    {
      name: 'Personal Finance Tracker',
      description: 'A web application to manage personal expenses and track budgets.',
      technologies: ['React', 'Node.js', 'MongoDB'],
      link: '#',
    },
    {
      name: 'Portfolio Website',
      description: 'A responsive portfolio showcasing my skills and projects.',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      link: '#',
    },
    {
      name: 'E-Commerce Platform',
      description: 'A mock e-commerce platform with cart functionality and payment integration.',
      technologies: ['React', 'Express', 'MySQL'],
      link: '#',
    },
  ];

  return (
    <div className="projects-container">
      <h1>My Projects</h1>
      <p>Here are some of the projects I have worked on:</p>
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
