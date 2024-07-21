import React from 'react';
import './TestimonialItem.css'; 

function TestimonialItem({ message, author }) {
  return (
    <div className="testimonial-item">
      <p className="testimonial-message">"{message}"</p>
      <p className="testimonial-author">- {author}</p>
    </div>
  );
}

export default TestimonialItem;