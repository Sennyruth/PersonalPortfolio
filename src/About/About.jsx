import React from 'react'
import './About.css'

const About = () => {
  return (
    <section id="about" className="about section">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2 className="about-title">About Me</h2>
            <p className="about-description">
              I'm a passionate full-stack developer with a keen eye for design and a love for creating exceptional digital experiences. With expertise in modern web technologies, I bring ideas to life through clean, efficient code and intuitive user interfaces.
            </p>
            <p className="about-description">
              My journey in tech started with curiosity and has evolved into a career dedicated to solving complex problems and building meaningful applications that make a difference.
            </p>
            <div className="about-stats">
              <div className="stat">
                <h3>3+</h3>
                <p>Years Experience</p>
              </div>
              <div className="stat">
                <h3>50+</h3>
                <p>Projects Completed</p>
              </div>
              <div className="stat">
                <h3>30+</h3>
                <p>Happy Clients</p>
              </div>
            </div>
          </div>
          <div className="about-image">
            <div className="about-image-placeholder">
              <div className="about-avatar">
                <span>👩‍💻</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About