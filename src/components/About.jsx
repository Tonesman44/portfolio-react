import React from 'react';

function About() {
  return (
    <div className="section about-section">
      <h2>About Me</h2>
      <div className="about-layout">
        <div className="about-text">
          <p>
            I'm a Senior at <strong>Temple University</strong> and a Front-End Developer focused on
            building clean, user-friendly, and performant web applications. I'm currently leveling
            up toward full-stack development by working with technologies like <strong>React</strong>,{' '}
            <strong>Angular</strong>, <strong>C#</strong>, <strong>Java</strong>, and <strong>Python</strong>.
          </p>
          <p>
            Outside of work and school, I'm an <strong>officer for the Temple Esports Club</strong>,
            where I compete against other colleges in <strong>Marvel Rivals</strong>. Check out the
            announcement post on Instagram:{' '}
            <a
              href="https://www.instagram.com/p/DO4MEeSAZkv/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
              target="_blank"
              rel="noreferrer"
            >
              Temple Esports Post
            </a>.
          </p>
        </div>

        <div className="about-info-cards">
          <div className="info-card">
            <span className="info-label">Location</span>
            <span className="info-value">Philadelphia, PA</span>
          </div>
          <div className="info-card">
            <span className="info-label">Education</span>
            <span className="info-value">Temple University · Senior</span>
          </div>
          <div className="info-card">
            <span className="info-label">Focus</span>
            <span className="info-value">Frontend → Full-Stack Development</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
