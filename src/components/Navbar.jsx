import React, { useState } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen(!isOpen);
  const handleNavClick = () => setIsOpen(false);

  return (
    <header className="navbar">
      <div className="navbar-inner">
        <a href="#home" className="logo">
          Antonio <span>Fabrizio</span>
        </a>

        <nav className={`nav-links ${isOpen ? 'nav-open' : ''}`}>
          <a href="#about" onClick={handleNavClick}>About</a>
          <a href="#projects" onClick={handleNavClick}>Projects</a>
          <a href="#experience" onClick={handleNavClick}>Experience</a>
          <a href="#skills" onClick={handleNavClick}>Skills</a>
          <a href="#resume" onClick={handleNavClick}>Resume</a>
          <a href="#contact" onClick={handleNavClick}>Contact</a>
        </nav>

        <button
          className="nav-toggle"
          onClick={handleToggle}
          aria-label="Toggle navigation"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}

export default Navbar;
