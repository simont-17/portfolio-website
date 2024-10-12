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
          action="https://formspree.io/f/movqqvgo" 
          method="POST" 
        >
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
