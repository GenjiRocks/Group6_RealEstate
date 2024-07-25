import React from 'react';
import TestimonialItem from './TestimonialItem.jsx';
import './Testimonials.css'; 

function Testimonials() {
  // Sample testimonials data
  const testimonials = [
    { message: "This is the best property site I've ever used!", author: "Arun kumar" },
    { message: "Highly recommended for anyone looking for a new home.", author: "Devis" },
    { message: "A seamless experience from start to finish.", author: "Alice" },
  ];

  return (
    <div className="testimonials-section">
      <h2>What Our Clients Say</h2>
      <div className="testimonials-container">
        {testimonials.map((testimonial, index) => (
          <TestimonialItem key={index} message={testimonial.message} author={testimonial.author} />
        ))}
      </div>
    </div>
  );
}

export default Testimonials;