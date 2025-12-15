import React from 'react';

const projects = [
  {
    title: 'Temple C# Course Projects',
    description: 'A collection of C# applications built for coursework at Temple University.',
    tech: ['C#', '.NET', 'ASP.NET'],
    liveUrl: 'https://cis-iis2.temple.edu/Fall2025/CIS3342_tup83292/',
    codeUrl: null
  },
  {
    title: 'GitHub Portfolio',
    description: 'A hub of my projects including React apps, Angular work, and full-stack experiments.',
    tech: ['React', 'Angular', 'JavaScript', 'TypeScript', 'C#'],
    liveUrl: 'https://github.com/Tonesman44?tab=repositories',
    codeUrl: 'https://github.com/Tonesman44'
  }
];

function Projects() {
  return (
    <div className="section projects-section">
      <h2>Projects</h2>
      <p className="section-subtitle">
        A few places you can dive into my real work and code.
      </p>
      <div className="projects-grid">
        {projects.map(project => (
          <article key={project.title} className="project-card">
            <div className="project-thumbnail">
              <span>{project.title.charAt(0)}</span>
            </div>
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tech">
                {project.tech.map(tag => (
                  <span key={tag} className="chip">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="project-links">
                {project.liveUrl && (
                  <a href={project.liveUrl} target="_blank" rel="noreferrer" className="btn small primary">
                    Open Projects
                  </a>
                )}
                {project.codeUrl && (
                  <a href={project.codeUrl} target="_blank" rel="noreferrer" className="btn small outline">
                    View on GitHub
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

export default Projects;
