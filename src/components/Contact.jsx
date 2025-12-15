import React from 'react';

function Contact() {
  return (
    <div className="section contact-section">
      <h2>Contact</h2>
      <div className="contact-layout">
        <div className="contact-form-wrapper">
          <p>
            Interested in working together, have a role in mind, or just want to chat about dev and esports?
            Drop me a message and I’ll get back to you as soon as I can.
          </p>

          <form
            className="contact-form"
            action="mailto:antonioman44@gmail.com"
            method="POST"
            encType="text/plain"
          >
            <div className="form-row">
              <label>Name</label>
              <input type="text" name="name" placeholder="Your name" required />
            </div>
            <div className="form-row">
              <label>Email</label>
              <input type="email" name="email" placeholder="Your email" required />
            </div>
            <div className="form-row">
              <label>Message</label>
              <textarea name="message" rows="5" placeholder="Your message" required />
            </div>
            <button type="submit" className="btn primary wide">
              Send Email
            </button>
          </form>
        </div>

        <aside className="contact-side">
          <div className="contact-card">
            <h3>Quick Info</h3>
            <ul>
              <li><strong>Location:</strong> Philadelphia, PA</li>
              <li><strong>Email:</strong> <a href="mailto:antonioman44@gmail.com">antonioman44@gmail.com</a></li>
              <li>
                <strong>LinkedIn:</strong>{' '}
                <a
                  href="https://www.linkedin.com/in/antonio-fabrizio-746989248"
                  target="_blank"
                  rel="noreferrer"
                >
                  View Profile
                </a>
              </li>
              <li>
                <strong>GitHub:</strong>{' '}
                <a
                  href="https://github.com/Tonesman44"
                  target="_blank"
                  rel="noreferrer"
                >
                  @Tonesman44
                </a>
              </li>
            </ul>
          </div>

          <div className="contact-card secondary">
            <h3>Currently</h3>
            <p>
              Front-End Developer at Excellis Interactive Workspace and Senior at Temple University,
              building modern web apps and competing in collegiate esports.
            </p>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default Contact;
