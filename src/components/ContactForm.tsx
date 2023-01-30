import "./ContactForm.css";

const ContactForm = () => {
  return (
    <>
      <div className="main-block">
        <div className="left-part">
          <i className="fas fa-envelope"></i>
          <i className="fas fa-at"></i>
          <i className="fas fa-mail-bulk"></i>
        </div>
        <form action="/">
          <h1>Contact Us</h1>
          <div className="info">
            <input
              className="fname"
              type="text"
              name="name"
              placeholder="Full name"
            />
            <input type="text" name="name" placeholder="Email" />
          </div>
          <p>Message</p>
          <div>
            <textarea rows={4}></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};

export default ContactForm;
