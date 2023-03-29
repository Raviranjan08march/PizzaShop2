import React from "react";
import pizzaLeft from "../../Images/pizzaLeft.jpg";
import "./Contact.css";
function Contact() {
  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${pizzaLeft})` }}
      ></div>
      <div className="rightSide">
        <h1>Contact Us</h1>
        <form id="contact-form" method="post">
          <label>Full Name</label>
          <input type="text" placeholder="Enter full name" required></input>
          <label>Email</label>
          <input type="email" placeholder="Enter email..." required></input>
          <label>Phone Number</label>
          <input
            type="text"
            placeholder="Enter you phone number..."
            required
          ></input>

          <label>Message</label>
          <textarea rows="6" placeholder="Enter Message..." required></textarea>

          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
}
export default Contact;
