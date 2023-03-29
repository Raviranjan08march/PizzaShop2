import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Componants/Navbar";
import Home from "./Componants/Pages/Home";
import Footer from "./Componants/Footer";
import Menu from "./Componants/Pages/Menu";
import About from "./Componants/Pages/About";
import Contact from "./Componants/Pages/Contact";
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
