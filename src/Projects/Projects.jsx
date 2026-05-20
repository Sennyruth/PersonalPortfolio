import React from 'react'
import './Projects.css'

const projects = [
  {
    title: "Patema Ventures- construction company website",
    description: "A modern construction company website with real-time project tracking and seamless checkout experience.",
    technologies: ["React", "CSS", "Vite"],
    image: "🏢",
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
    title: "Personalized Medicine Recommendation System",
    description: "The Personalized Medicine Recommendation System is a full-stack healthcare web application that leverages machine learning and Google's Gemini AI",
    technologies: ["React", "Express", "PostgreSQL", "Node.js", "Python", "Flask", "Scikit-learn", "Pandas", "NumPy"],
    image: "🧬",
    liveDemo: "https://personalized-medicine-recommendatio.vercel.app/",
    code: "https://github.com/Sennyruth/Personalized-Medicine-Recommendation-system.git"
  },
  {
    title: "MPESA PAYMENT INTEGRATION WITH DARAJA API",
    description: "A beginner-friendly M-Pesa payment integration using Safaricom's Daraja API with STK Push and a live web frontend.",
    technologies: ["React", "CSS"],
    image: "📲",
    liveDemo: "https://mpesa-daraja-api-production.up.railway.app/",
    code: "https://github.com/Sennyruth/MPESA-DARAJA-API.git"
  },
  {
    title: "Modern ERP System",
    description: "A full-stack Retail ERP system built with Node.js, Express, Prisma ORM, PostgreSQL, and React. Features Sales & CRM, Inventory & Warehouse, and HR & Payroll modules with a modern editorial UI design.",
    technologies: ["React", "CSS", "Vite"],
    image: "📊",
    liveDemo: "#",
    code: "https://github.com/Sennyruth/Modern-ERP-System.git"
  },
  {
    title: "Online-Test-Exam-Management-System",
    description: "A fullstack web application that enables teachers to create and manage online tests, while students can take exams, view their attempts, check results, and track performance through a dedicated dashboard",
    technologies: ["React", "Node.js", "Typescript", "Express", "PostgreSQL"],
    image: "📝",
    liveDemo: "#",
    code: "https://github.com/Sennyruth/Online-Test-Exam-Management-System.git"
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
    title: "Neuskin Beauty Parlor",
    description: "A beauty parlor website with services and booking system.",
    technologies: ["React", "Node.js", "PostgreSQL", "Express"],
    image: "💅",
    liveDemo: "#",
    code: "https://github.com/Sennyruth/NeuSkin_Beaty_Parlor.git"
  }
]

const Projects = () => {
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