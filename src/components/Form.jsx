import { useState } from 'react';

export default function Form() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); 
  };

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
          name="Contact"
          method="POST"
          data-netlify="true"
          onSubmit={handleSubmit}
        >
          <input type="hidden" name="form-name" value="Contact" />
          <input
            type="text"
            name="name"
            placeholder="First Last"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="name@email.com"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Write text here..."
            value={formData.message}
            onChange={handleChange}
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
