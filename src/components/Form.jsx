import React from 'react';

export default function Form() {
  return (
    <div className="contact-form-container">
      <div className="contact-left-section">
        <p>Email: <a href="mailto:simontruong2002@gmail.com">simontruong2002@gmail.com</a></p>
        <p>Phone: <a href="tel:+14037035711">403-703-5711</a></p>
      </div>
      <div className="contact-right-section">
        <h2>I'd love to hear from you.</h2>
        <p>
          Leave a message below if you're interested in learning more about my
          projects in progress or if you're interested in hiring me!
        </p>
        <form
          name="Contact" // Ensure this name matches the one used in Netlify
          method="POST"
          data-netlify="true" // Enable Netlify form handling
          netlify-honeypot="bot-field" // Optional: Prevent spam
        >
          <input type="hidden" name="Contact" value="Contact" />
          <p style={{ display: 'none' }}>
            <label>
              Don’t fill this out if you’re human: <input name="bot-field" />
            </label>
          </p>
          <input
            type="text"
            name="name"
            placeholder="First Last"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="name@email.com"
            required
          />
          <textarea
            name="message"
            placeholder="Write text here..."
            required
          />
          <button type="submit" className="send-message-button">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
