import React, { useState } from 'react'
import "./Header.css"

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <h2>Ruth Mutisya</h2>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="nav desktop-nav">
            <ul className="nav-list">
              <li><a href="#about" onClick={closeMenu}>About</a></li>
              <li><a href="#services" onClick={closeMenu}>Services</a></li>
              <li><a href="#skills" onClick={closeMenu}>Skills</a></li>
              <li><a href="#experience" onClick={closeMenu}>Experience</a></li>
              <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
            </ul>
          </nav>

          {/* Mobile Hamburger Menu */}
          <div className="mobile-menu-toggle">
            <button 
              className="hamburger-btn" 
              onClick={toggleMenu}
              aria-label="Toggle navigation menu"
            >
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <nav className={`mobile-nav ${isMenuOpen ? 'nav-open' : ''}`}>
          <ul className="mobile-nav-list">
            <li><a href="#about" onClick={closeMenu}>About</a></li>
            <li><a href="#services" onClick={closeMenu}>Services</a></li>
            <li><a href="#skills" onClick={closeMenu}>Skills</a></li>
            <li><a href="#experience" onClick={closeMenu}>Experience</a></li>
            <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header