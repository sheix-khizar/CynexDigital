import React, { useState } from 'react';
import { testimonials } from '../../data/testimonialsData';
import { Star, ChevronLeft, ChevronRight, Quote, Sparkles } from 'lucide-react';

export default function TestimonialsSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const next = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const current = testimonials[currentIndex];

  return (
    <section className="section-spacing" style={{ position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '650px', margin: '0 auto 3rem auto' }}>
          <span className="badge badge-brand" style={{ marginBottom: '0.75rem' }}>
            Client Endorsements
          </span>
          <h2 className="testimonials-section-title">
            Trusted by founders who <span className="text-gradient">demand excellence</span>.
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.96rem', lineHeight: '1.5' }}>
            What partners say after scaling with our team.
          </p>
        </div>

        {/* Featured Testimonial Highlight Card */}
        <div 
          className="glass-card card-padded testimonial-featured-card"
          style={{
            maxWidth: '920px',
            margin: '0 auto',
            position: 'relative'
          }}
        >
          <div className="testimonial-card-header">
            {/* Stars */}
            <div className="testimonial-stars-wrap">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} fill="#f59e0b" color="#f59e0b" />
              ))}
            </div>

            {/* Metric pill */}
            <span className="badge badge-green testimonial-metric-badge">
              <Sparkles size={12} /> {current.metric}
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
              <div>
                <h4 className="testimonial-author-name">
                  {current.author}
                </h4>
                <p className="testimonial-author-role">
                  {current.role} · <strong style={{ color: 'var(--cyan-light)' }}>{current.company}</strong>
                </p>
              </div>
            </div>

            {/* Slider Navigation Arrows */}
            <div className="testimonial-controls-wrap">
              <button 
                onClick={prev}
                className="icon-btn"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={16} />
              </button>
              <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)', minWidth: '40px', textAlign: 'center' }}>
                {currentIndex + 1} / {testimonials.length}
              </span>
              <button 
                onClick={next}
                className="icon-btn"
                aria-label="Next testimonial"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
