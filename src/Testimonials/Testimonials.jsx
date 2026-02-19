import React from 'react'
import './Testimonials.css'

const Testimonials = () => {
  const testimonials = [
    {
      name: "Emmanuel Muinde",
      position: "Executive Manager-Patema Ventures",
      content: "Ruth delivered an exceptional construction company website that exceeded our expectations. Her attention to detail and innovative solutions transformed our business.",
      rating: 5,
      avatar: "👩‍💼"
    },
    {
      name: "Denzel Lawrence",
      position: "Business Owner",
      content: "Working with Ruth was a game-changer for our project. She brought fresh ideas and technical expertise that helped us launch ahead of schedule.",
      rating: 5,
      avatar: "👨‍💼"
    },
    {
      name: "Diana Mutinda",
      position: "Beauty and spa owner",
      content: "Ruth's portfolio app perfectly captured our vision. The user experience she designed is intuitive and visually stunning.",
      rating: 5,
      avatar: "👩‍🎨"
    }
  ]

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={`star ${i < rating ? 'filled' : ''}`}>★</span>
    ))
  }

  return (
    <section id="testimonials" className="testimonials section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Client Testimonials</h2>
          <p className="section-subtitle">What my clients say about working with me</p>
        </div>
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="testimonial-header">
                <div className="client-avatar">{testimonial.avatar}</div>
                <div className="client-info">
                  <h4 className="client-name">{testimonial.name}</h4>
                  <p className="client-position">{testimonial.position}</p>
                </div>
              </div>
              <div className="testimonial-rating">
                {renderStars(testimonial.rating)}
              </div>
              <p className="testimonial-content">"{testimonial.content}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
