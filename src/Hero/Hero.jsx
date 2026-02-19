import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <section className="hero section">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Hi, I'm <span className="highlight">Ruth</span>
            </h1>
            <p className="hero-subtitle">
              I'm a passionate developer creating amazing digital experiences
            </p>
            <p className="hero-description">
              Welcome to my portfolio where I showcase my work and share my journey in the world of web development and design.
            </p>
            <div className="hero-buttons">
              <button className="btn-primary"><a href="#contact">Get In Touch</a></button>
              <button className="btn-secondary"><a href="#projects">View My Work</a></button>
            </div>
          </div>
          <div className="hero-image">
            <div className="image-placeholder">
              <div className="avatar-circle">
                <span>R</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero