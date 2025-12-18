import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-container">
      <h2>Contact Me</h2>
      <form className="contact-form">
        <div className="contact-input">
          <label for="name">Name</label>
          <input type="text" id="name" name="name" />
          {/* the name= in input is what links to the for= in label */}
        </div>
        <div className="contact-input">
          <label for="name">Email</label>
          <input type="text" id="name" name="name" />
        </div>
        <div className="contact-input">
          <label for="message">Message</label>
          <input type="text" id="message" name="message" />
        </div>
        <div className="contact-submit-button">
          <input type="submit" value="Submit" />
        </div>
      </form>
    </div>
  );
};

export default Contact;
