import React, { useState, useRef } from 'react';
import { testimonials } from '../../data/testimonialsData';
import { Star, ChevronLeft, ChevronRight, Quote, Sparkles } from 'lucide-react';

export default function TestimonialsSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const prev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const next = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 40) {
      if (diff > 0) next();
      else prev();
    }
  };

  const current = testimonials[currentIndex];

  return (
    <section className="section-spacing" style={{ position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '650px', margin: '0 auto 2.5rem auto' }}>
          <span className="badge badge-brand" style={{ marginBottom: '0.75rem' }}>
            Client Endorsements
          </span>
          <h2 className="testimonials-section-title">
            Trusted by founders who <span className="text-gradient">demand excellence</span>.
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.94rem', lineHeight: '1.5' }}>
            What partners say after scaling with our senior creative and engineering teams.
          </p>
        </div>

        {/* Featured Testimonial Highlight Card */}
        <div 
          className="glass-card testimonial-featured-card"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          style={{
            maxWidth: '860px',
            margin: '0 auto',
            position: 'relative'
          }}
        >
          {/* Decorative watermark quote */}
          <Quote 
            size={56} 
            className="testimonial-watermark-icon" 
            aria-hidden="true" 
          />

          {/* Top Header */}
          <div className="testimonial-card-header">
            {/* Stars */}
            <div className="testimonial-stars-wrap">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={15} fill="#f59e0b" color="#f59e0b" />
              ))}
            </div>

            {/* Metric pill */}
            <span className="testimonial-metric-badge">
              <Sparkles size={12} color="var(--blue-vivid)" />
              <span>{current.metric}</span>
            </span>
          </div>

          {/* Quote Body */}
          <p className="testimonial-quote-text">
            "{current.quote}"
          </p>

          {/* Author info & controls */}
          <div className="testimonial-footer-row">
            {/* Author */}
            <div className="testimonial-author-profile">
              <div 
                className="testimonial-avatar-box"
                style={{
                  background: current.avatarBg
                }}
              >
                {current.author.charAt(0)}
              </div>
              <div style={{ minWidth: 0, flex: 1 }}>
                <h4 className="testimonial-author-name">
                  {current.author}
                </h4>
                <p className="testimonial-author-role">
                  {current.role} · <strong className="testimonial-company-name">{current.company}</strong>
                </p>
              </div>
            </div>

            {/* Slider Navigation Arrows */}
            <div className="testimonial-controls-wrap">
              <button 
                onClick={prev}
                className="testimonial-nav-btn"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={16} />
              </button>
              <span className="testimonial-counter">
                {currentIndex + 1} / {testimonials.length}
              </span>
              <button 
                onClick={next}
                className="testimonial-nav-btn"
                aria-label="Next testimonial"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="testimonial-dots-row">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Go to testimonial ${idx + 1}`}
              className={`testimonial-dot ${currentIndex === idx ? 'active' : ''}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

