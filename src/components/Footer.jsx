import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Antonio Fabrizio. All rights reserved.</p>
      <div className="footer-links">
        <a href="https://github.com/Tonesman44" target="_blank" rel="noreferrer">GitHub</a>
        <a href="https://www.linkedin.com/in/antonio-fabrizio-746989248" target="_blank" rel="noreferrer">
          LinkedIn
        </a>
        <a href="mailto:antonioman44@gmail.com">Email Me</a>
      </div>
    </footer>
  );
}

export default Footer;
