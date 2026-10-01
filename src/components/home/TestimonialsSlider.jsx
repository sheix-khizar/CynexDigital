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
        <div style={{ textAlign: 'center', maxWidth: '650px', margin: '0 auto 3.5rem auto' }}>
          <span className="badge badge-brand" style={{ marginBottom: '0.75rem' }}>
            Client Endorsements
          </span>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '1rem' }}>
            Trusted by founders who <span className="text-gradient">demand excellence</span>.
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: '1.6' }}>
            Here is what partners say after collaborating with our senior creative and engineering teams.
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
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '2rem' }}>
            {/* Stars */}
            <div style={{ display: 'flex', gap: '0.3rem' }}>
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} fill="#f59e0b" color="#f59e0b" />
              ))}
            </div>

            {/* Metric pill */}
            <span className="badge badge-green" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
              <Sparkles size={13} /> {current.metric}
            </span>
          </div>

          {/* Quote Body */}
          <p 
            style={{
              fontSize: 'clamp(1.15rem, 2.5vw, 1.45rem)',
              lineHeight: 1.5,
              fontWeight: 500,
              color: 'var(--text-primary)',
              marginBottom: '2.5rem',
              fontFamily: 'var(--font-heading)'
            }}
          >
            "{current.quote}"
          </p>

          {/* Author info & controls */}
          <div 
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '1.5rem',
              borderTop: '1px solid var(--border-color)',
              paddingTop: '1.5rem'
            }}
          >
            {/* Author */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div 
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '50%',
                  background: current.avatarBg,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 800,
                  color: '#ffffff',
                  fontSize: '1.1rem',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.3)'
                }}
              >
                {current.author.charAt(0)}
              </div>
              <div>
                <h4 style={{ fontSize: '1.05rem', fontWeight: 700, margin: 0 }}>
                  {current.author}
                </h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', margin: 0 }}>
                  {current.role} · <strong style={{ color: 'var(--cyan-light)' }}>{current.company}</strong>
                </p>
              </div>
            </div>

            {/* Slider Navigation Arrows */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <button 
                onClick={prev}
                className="icon-btn"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={18} />
              </button>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', minWidth: '45px', textAlign: 'center' }}>
                {currentIndex + 1} / {testimonials.length}
              </span>
              <button 
                onClick={next}
                className="icon-btn"
                aria-label="Next testimonial"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
