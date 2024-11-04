import { Link } from 'react-router-dom';
import './Navbar.css';
import { useState } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/"><img src="/public/Logo.jpg" alt="Logo" className="logo-image" width="100" height="100" /></Link>
      </div>
      <div className={`menu-toggle ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className={`nav-links ${isOpen ? 'active' : ''}`}>
        <Link to="/" onClick={toggleMenu}>Home</Link>
        <Link to="/my-skills" onClick={toggleMenu}>My Skills</Link>
        <Link to="/current-projects" onClick={toggleMenu}>Current Projects</Link>
        <Link to="/education-work" onClick={toggleMenu}>Education & Experience</Link>
        <Link to="/cooperation" onClick={toggleMenu}>Cooperation</Link>
        <Link to="/contact" onClick={toggleMenu}>Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar
