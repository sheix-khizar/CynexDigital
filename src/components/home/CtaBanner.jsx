import React from 'react';
import { Sparkles, ArrowRight, Calendar, ShieldCheck } from 'lucide-react';

export default function CtaBanner({ onContactClick, onOpenEstimator }) {
  return (
    <section className="section-spacing" style={{ position: 'relative' }}>
      <div className="container">
        <div 
          className="glass-card card-padded cta-banner-wrapper"
          style={{
            position: 'relative',
            overflow: 'hidden',
            textAlign: 'center',
            paddingTop: '4.5rem',
            paddingBottom: '4.5rem'
          }}
        >
          {/* Ambient Glowing Blobs */}
          <div 
            className="ambient-blob" 
            style={{
              width: '320px',
              height: '320px',
              top: '-80px',
              left: '-80px',
              background: 'radial-gradient(circle, var(--cyan-glow) 0%, transparent 70%)',
              opacity: 0.35
            }} 
          />
          <div 
            className="ambient-blob" 
            style={{
              width: '320px',
              height: '320px',
              bottom: '-80px',
              right: '-80px',
              background: 'radial-gradient(circle, var(--violet-glow) 0%, transparent 70%)',
              opacity: 0.35
            }} 
          />

          <div style={{ position: 'relative', zIndex: 1, maxWidth: '640px', margin: '0 auto' }}>
            <span className="badge badge-brand" style={{ marginBottom: '1rem' }}>
              <Sparkles size={12} /> Ready To Elevate Your Brand?
            </span>

            <h2 style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.4rem)', fontWeight: 800, color: 'var(--cta-banner-text)', marginBottom: '1.25rem', lineHeight: 1.15 }}>
              Have an ambitious project <br /><span className="text-gradient">in mind?</span>
            </h2>

            <p style={{ color: 'var(--cta-banner-subtext)', fontSize: '1.1rem', lineHeight: '1.6', marginBottom: '2.5rem' }}>
              Tell us about your brand goals, target timeline, or digital growth objectives. We'll review your vision and deliver a tailored recommendation within 24 hours.
            </p>

            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <button onClick={onContactClick} className="btn btn-primary btn-lg">
                <span>Get In Touch Today</span>
                <ArrowRight size={18} />
              </button>

              <button onClick={onOpenEstimator} className="btn btn-secondary btn-lg">
                <span>Run Instant Cost Estimator</span>
              </button>
            </div>

            <div style={{ marginTop: '2rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1.5rem', fontSize: '0.82rem', color: 'var(--cta-banner-subtext)' }}>
              <span>✓ Free 30-min strategy roadmap</span>
              <span>✓ Fixed-price transparent quotes</span>
              <span>✓ Direct principal attention</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
