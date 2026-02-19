import React from 'react'
import './Projects.css'

const Projects = () => {
  const projects = [
    {
      title: "Patema Ventures- construction company website",
      description: "A modern construction company website with real-time project tracking and seamless checkout experience.",
      technologies: ["React", "CSS", "Vite"],
      image: "🏗️",
      liveDemo: "https://patema-ventures-construction-company-o1cj.vercel.app/",
      code: "https://github.com/Sennyruth/Patema-ventures-construction-company.git"
    },
    {
      title: "Bar/restaurant",
      description: "A responsive bar/restaurant website with menu display and online ordering.",
      technologies: ["HTML", "CSS", "JavaScript"],
      image: "🍽️",
      liveDemo: "https://zero-4-garden.vercel.app/",
      code: "https://github.com/Sennyruth/Zero-4-Garden.git"
    },
    {
      title: "Zaph Tours",
      description: "A travel company website with tour packages and booking system.",
      technologies: ["React", "Express", "PostgreSQL"],
      image: "💬",
      liveDemo: "https://zaph-tours-kappa.vercel.ap",
      code: "https://github.com/Sennyruth/Zaph_Tours.git"
    },
    {
      title: "MUT TECH CLUB",
      description: "A tech club website with event management and member registration.",
      technologies: ["React", "Node.js", "PostgreSQL", "Express"],
      image: "💻",
      liveDemo: "https://mut-tech-club-eta.vercel.app/",
      code: "https://github.com/Sennyruth/MUT_Tech_Club.git"
    },
    {
      title: "Urban Haven Apartments",
      description: "A modern apartment rental website with property listings and booking system.",
      technologies: ["React", "CSS", "Vite"],
      image: "🏠",
      liveDemo: "https://urban-haven-apartments-sandy.vercel.app/",
      code: "https://github.com/Sennyruth/Zaph_Tours.git"
    },
    {
      title: "Rock paper scissors",
      description: "A computer game",
      technologies: ["React", "JavaScript", "CSS"],
      image: "🎮",
      liveDemo: "https://rock-paper-scissors-flax-three.vercel.app/",
      code: "https://github.com/Sennyruth/Rock_paper_scissors.git"
    },
    {
      title: "Portfolio",
      description: "A personal Portfolio website showcasing my work and skills.",
      technologies: ["HTML", "Node.js", "Tailwind CSS", "Vite"],
      image: "💻",
      liveDemo: "https://tailwindcss-portfolio-nine.vercel.app/",
      code: "https://github.com/Sennyruth/Tailwindcss_portfolio.git"
    },
    {
      title: "Neuskin Beauty Parlor",
      description: "A beauty parlor website with services and booking system.",
      technologies: ["React", "Node.js", "PostgreSQL", "Express"],
      image: "💅",
      liveDemo: "#",
      code: "https://github.com/Sennyruth/NeuSkin_Beaty_Parlor.git"
    }
  ]

  return (
    <section id="projects" className="projects section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">My Projects</h2>
          <p className="section-subtitle">A collection of my recent work and creative solutions</p>
        </div>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image">
                <div className="project-icon">{project.image}</div>
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.liveDemo} className="project-link btn-primary">Live Demo</a>
                  <a href={project.code} className="project-link btn-secondary">Code</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
