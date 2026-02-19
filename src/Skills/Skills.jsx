import React from 'react'
import './Skills.css'

const Skills = () => {
  const skills = [
    { name: 'React', level: 90 },
    { name: 'Express', level: 85 },
    { name: 'JavaScript', level: 80 },
    { name: 'HTML', level: 85 },
    { name: 'PostgreSQL', level: 75 },
    { name: 'CSS', level: 88 },
    { name: 'Node.js', level: 70 }
  ]

  const experience = [
    {
      title: 'Software Intern',
      company: 'The Jitu',
      period: 'May - July 2024',
      description: 'Leading development of enterprise web applications and mentoring junior developers.'
    },
    {
      title: 'Frontend Developer',
      company: 'Senny Technologies',
      period: 'October-December 2025',
      description: 'Developed responsive user interfaces for various client projects using modern frameworks.'
    },
    // {
    //   title: 'Junior Developer',
    //   company: 'Startup Inc',
    //   period: '2019 - 2020',
    //   description: 'Built and maintained web applications while learning best practices in software development.'
    // }
  ]

  return (
    <section id="skills" className="skills section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Skills & Experience</h2>
          <p className="section-subtitle">My technical expertise and professional journey</p>
        </div>
        
        <div className="skills-content">
          <div className="skills-section">
            <h3>Technical Skills</h3>
            <div className="skills-grid">
              {skills.map((skill, index) => (
                <div key={index} className="skill-item">
                  <div className="skill-header">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-level">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div 
                      className="skill-progress" 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="experience-section">
            <h3>Work Experience</h3>
            <div className="experience-timeline">
              {experience.map((job, index) => (
                <div key={index} className="experience-item">
                  <div className="experience-header">
                    <h4 className="job-title">{job.title}</h4>
                    <span className="job-period">{job.period}</span>
                  </div>
                  <p className="company">{job.company}</p>
                  <p className="job-description">{job.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills