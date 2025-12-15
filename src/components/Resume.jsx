import React from 'react';
import resumePdf from '../assets/resume.pdf';

function Resume() {
  return (
    <div className="section resume-section">
      <h2>Resume</h2>
      <p className="section-subtitle">
        Want the full overview? You can view or download my resume as a PDF.
      </p>

      <div className="resume-card">
        <p>
          My resume includes details about my experience at Excellis Interactive Workspace,
          Suitable, and my work as a Front-End Developer and Senior at Temple University.
        </p>
        <div className="resume-actions">
          <a
            href={resumePdf}
            target="_blank"
            rel="noreferrer"
            className="btn primary"
          >
            View Resume
          </a>
          <a
            href={resumePdf}
            download="Antonio-Fabrizio-Resume.pdf"
            className="btn outline"
          >
            Download PDF
          </a>
        </div>
      </div>
    </div>
  );
}

export default Resume;
