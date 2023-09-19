import React from "react";
const Contact = () => {
  return (
    <div className="contact">
      <main>
        <h1>Contact Us</h1>
        <form>
          <div>
            <label>Name</label>
            <input type="text" required placeholder="Your Name" />
          </div>

          <div>
            <label>Email</label>
            <input type="text" required placeholder="mail@email.com" />
          </div>

          <div>
            <label>Message</label>
            <input
              type="text"
              required
              placeholder="YTell us about your query..."
            />
          </div>

          <button type="submit">Send</button>
        </form>
      </main>
    </div>
  );
};

export default Contact;
