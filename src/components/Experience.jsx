import React from 'react';
import excellisLogo from '../assets/excellis.jpg';
import suitableLogo from '../assets/suitable.png';

const experiences = [
  {
    role: 'Front-End Developer',
    company: 'Excellis Interactive Workspace',
    period: '2024 – Present',
    bullets: [
      'Building and maintaining responsive web applications using Angular and TypeScript.',
      'Developing reusable and scalable components to support application features.',
      'Collaborating with the team to refine requirements and implement solutions.',
      'Participating in code reviews to maintain code quality and best practices.',
      'Troubleshooting and optimizing application performance for a seamless user experience.'
    ],
    logo: excellisLogo
  },
  {
    role: 'Frontend Developer Intern',
    company: 'Suitable',
    period: '2022 – 2024',
    bullets: [
      'Converted Angular codebases to modern React implementations.',
      'Wrote comprehensive Cypress and Jest tests to ensure robust functionality.',
      'Updated and optimized CircleCI workflows to streamline development.',
      'Developed a system to rerun failed tests, improving reliability and efficiency.',
      'Implemented an AWS scheduling system to automatically delete unwanted cloud resources.'
    ],
    logo: suitableLogo
  }
];

function Experience() {
  return (
    <div className="section experience-section">
      <h2>Experience</h2>
      <div className="experience-list">
        {experiences.map(job => (
          <article key={job.company} className="experience-item">
            <header className="experience-header">
              <div className="experience-logo-wrapper">
                <img src={job.logo} alt={job.company} className="experience-logo" />
              </div>
              <div>
                <h3>{job.role}</h3>
                <p className="experience-meta">
                  {job.company} · <span>{job.period}</span>
                </p>
              </div>
            </header>
            <ul>
              {job.bullets.map((line, idx) => (
                <li key={idx}>{line}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </div>
  );
}

export default Experience;
