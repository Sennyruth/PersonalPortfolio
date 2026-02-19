import React from 'react'
import './Services.css'

const Services = () => {
  const services = [
    {
      title: "Web Development",
      description: "Creating responsive, modern websites with cutting-edge technologies",
      icon: "🌐"
    },
    {
      title: "UI/UX Design",
      description: "Designing intuitive and beautiful user interfaces",
      icon: "🎨"
    },
    {
      title: "System intergration and deployment",
      description: "Integrating and deploying systems",
      icon: "📱"
    },
    {
      title: "Consulting",
      description: "Providing expert advice on digital transformation",
      icon: "💡"
    }
  ]

  return (
    <section id="services" className="services section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">My Services</h2>
          <p className="section-subtitle">What I can do for you</p>
        </div>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
