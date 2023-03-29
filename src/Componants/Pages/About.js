import React from "react";
import "./About.css";
import MultiplePizzas from "../../Images/multiplePizzas.jpeg";
function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${MultiplePizzas})` }}
      >
        {" "}
      </div>
      <div className="aboutBottom">
        <h1>About US</h1>
        <p>
          My favorite food is pizza because it is delicious, has many different
          toppings to choose from, and you can get it anytime. First of all, I
          think pizza is my favorite food because it is very tasty. Pizza tastes
          good at any time of the day. We’ve been eating pizza every Friday
          night for as long as I can remember. I think that’s why we eat pizza
          every Friday because it started as a tradition and now we just keep
          doing it.
        </p>
      </div>
    </div>
  );
}
export default About;
