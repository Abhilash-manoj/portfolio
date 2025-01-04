
function Contact() {
  return (
    <div className="contact-container">
      <h1>Contact Me</h1>
      <p>If you would like to get in touch, please use the form below or reach out via email!</p>
      <form className="contact-form">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" placeholder="Your Name" required />

        <label htmlFor="email">Email</label>
        <input type="email" id="email" placeholder="Your Email" required />

        <label htmlFor="message">Message</label>
        <textarea id="message" rows="5" placeholder="Your Message" required></textarea>

        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}

export default Contact;
