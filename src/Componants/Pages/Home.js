import React from "react";
import "./Home.css";
import pizza from "../../Images/pizza.jpeg";

import { Link } from "react-router-dom";
export default function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${pizza})` }}>

      <div className="headerContainer">
        <p>PIZZA TO FIT ANY TESTE</p>
        <Link to="/menu">
          <button>ORDER NOW </button>
        </Link>
      </div>
    </div>
  );
}
