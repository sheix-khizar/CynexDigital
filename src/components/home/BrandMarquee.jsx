import React from 'react';
import { clientLogos } from '../../data/testimonialsData';
import { ShieldCheck, Award } from 'lucide-react';

export default function BrandMarquee() {
  // Duplicate array for continuous infinite scroll
  const marqueeItems = [...clientLogos, ...clientLogos, ...clientLogos];

  return (
    <section 
      style={{
        paddingTop: '2.5rem',
        paddingBottom: '2.5rem',
        borderTop: '1px solid var(--border-color)',
        borderBottom: '1px solid var(--border-color)',
        background: 'rgba(255, 255, 255, 0.01)',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <div className="container" style={{ marginBottom: '1.25rem', textAlign: 'center' }}>
        <p style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
          Trusted By Forward-Thinking Founders & Enterprise Brands
        </p>
      </div>

      <div className="marquee-container">
        <div className="marquee-track">
          {marqueeItems.map((item, index) => (
            <div key={index} className="marquee-item">
              <span 
                style={{
                  width: '28px',
                  height: '28px',
                  borderRadius: '6px',
                  background: 'linear-gradient(135deg, rgba(34, 211, 238, 0.2), rgba(47, 91, 255, 0.3))',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '0.75rem',
                  fontWeight: 800,
                  color: 'var(--cyan-light)'
                }}
              >
                {item.name.charAt(0)}
              </span>
              <span>{item.name}</span>
              <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)', fontWeight: 400, opacity: 0.7 }}>
                ({item.industry})
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
