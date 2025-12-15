import React from 'react';
import profile from '../assets/profile.jpg';

function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <p className="hero-tagline">
          Antonio Fabrizio · Front-End Developer
        </p>
        <h1 className="hero-title">
          Building clean, modern web experiences.
        </h1>
        <p className="hero-subtitle">
          I&apos;m <strong>Antonio Fabrizio</strong>, a Front-End Developer based in
          Philadelphia, PA. I work with React, Angular, TypeScript, C#, and more to
          build responsive, user-friendly applications — and I&apos;m always pushing
          toward full-stack.
        </p>

        <div className="hero-actions">
          <a href="#projects" className="btn primary">View My Work</a>
          <a href="#contact" className="btn ghost">Let&apos;s Connect</a>
        </div>
      </div>

      <div className="hero-visual">
        <div className="hero-photo-ring">
          <div className="hero-photo-wrapper">
            <img
              src={profile}
              alt="Antonio Fabrizio"
              className="hero-photo"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
