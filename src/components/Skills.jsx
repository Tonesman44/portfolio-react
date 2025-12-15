import React from 'react';

const skills = {
  Frontend: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Angular', 'Responsive Design'],
  Backend: ['C#', '.NET', 'Java', 'Python'],
  Tools: ['Git', 'GitHub', 'Cypress', 'Jest', 'CircleCI', 'AWS', 'VS Code', 'Figma'],
  Other: ['UI/UX Principles', 'Agile Development', 'Test Automation']
};

function Skills() {
  return (
    <div className="section skills-section">
      <h2>Skills</h2>
      <div className="skills-grid">
        {Object.entries(skills).map(([category, items]) => (
          <div key={category} className="skills-card">
            <h3>{category}</h3>
            <div className="skills-chips">
              {items.map(skill => (
                <span key={skill} className="chip">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
