import React, { useState } from 'react';
import './navbar.css';

export default function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleScroll = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="navbar-root">
      <div className="navbar-app-bar">
        <div className="navbar-toolbar">
       
          
          <div className="navbar-links">
            <span className="navbar-link" onClick={() => handleScroll('home')}>Home</span>
            <span className="navbar-link" onClick={() => handleScroll('about')}>About Me</span>
            <span className="navbar-link" onClick={() => handleScroll('skills')}>Skills</span>
            <span className="navbar-link" onClick={() => handleScroll('projects')}>Projects</span>
            <span className="navbar-link" onClick={() => handleScroll('contact')}>Contact Me</span>
            
          </div>
          
          <div className="navbar-dropdown" onClick={toggleDropdown}>
           
            {dropdownOpen && (
              <div className="dropdown-content">
                <a href="/profile" className="dropdown-item">Profile</a>
                <a href="/login" className="dropdown-item">Logout</a>
                <a href="/settings" className="dropdown-item">Settings</a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}