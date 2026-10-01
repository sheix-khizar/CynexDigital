import React from 'react';
import Modal from '../common/Modal';
import { CheckCircle2 } from 'lucide-react';

export default function ProjectDetailModal({ project, isOpen, onClose }) {
  if (!project) return null;

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={project.title}
      subtitle={`Client Case Study // ${project.tag}`}
      maxWidth="800px"
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.35rem' }}>
        {/* Banner with photo & meta */}
        <div 
          className="project-modal-banner"
          style={{
            background: project.gradient,
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          {project.image && (
            <img
              src={project.image}
              alt={project.title}
              style={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                zIndex: 0
              }}
            />
          )}
          <div 
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(180deg, rgba(8, 14, 28, 0.72) 0%, rgba(8, 14, 28, 0.92) 100%)',
              zIndex: 1
            }} 
          />
          <div style={{ position: 'relative', zIndex: 2 }}>
            <div className="modal-banner-meta">
              <span className="modal-meta-pill">
                Client: <strong>{project.client}</strong>
              </span>
              <span className="modal-meta-pill">
                Year: <strong>{project.year}</strong>
              </span>
              <span className="modal-meta-pill">
                Service: <strong>{project.tag}</strong>
              </span>
            </div>
            <p className="project-modal-desc">
              {project.desc}
            </p>
          </div>
        </div>

        {/* Quantifiable Results Grid */}
        <div>
          <h4 style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '0.65rem' }}>
            Measurable Client Outcomes
          </h4>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '0.75rem' }}>
            {project.metrics.map((m, i) => (
              <div 
                key={i}
                style={{
                  background: 'var(--bg-surface-elevated)',
                  border: '1px solid var(--border-color)',
                  borderRadius: '12px',
                  padding: '1rem'
                }}
              >
                <div className="text-gradient" style={{ fontSize: '1.5rem', fontWeight: 800, lineHeight: 1.2 }}>
                  {m.value}
                </div>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', marginTop: '0.25rem', lineHeight: 1.3 }}>
                  {m.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Challenge vs Solution */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '0.85rem' }}>
          <div style={{ background: 'rgba(239, 68, 68, 0.05)', border: '1px solid rgba(239, 68, 68, 0.2)', padding: '1.1rem 1rem', borderRadius: '12px' }}>
            <div style={{ fontWeight: 700, color: '#f87171', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '0.35rem' }}>
              The Challenge
            </div>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: '1.5', margin: 0 }}>
              {project.challenge}
            </p>
          </div>

          <div style={{ background: 'rgba(16, 185, 129, 0.05)', border: '1px solid rgba(16, 185, 129, 0.2)', padding: '1.1rem 1rem', borderRadius: '12px' }}>
            <div style={{ fontWeight: 700, color: '#34d399', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '0.35rem' }}>
              Our Strategic Solution
            </div>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: '1.5', margin: 0 }}>
              {project.solution}
            </p>
          </div>
        </div>

        {/* Deliverables Provided */}
        <div>
          <h4 style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.65rem' }}>
            Production Deliverables
          </h4>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem' }}>
            {project.deliverables.map((deliv, i) => (
              <span key={i} className="badge badge-brand" style={{ textTransform: 'none', fontSize: '0.78rem', padding: '0.3rem 0.65rem' }}>
                <CheckCircle2 size={12} /> {deliv}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom Close Button */}
        <div style={{ paddingTop: '0.25rem', paddingBottom: '0.5rem' }}>
          <button 
            onClick={onClose} 
            className="btn btn-secondary"
            style={{ width: '100%', justifyContent: 'center', padding: '0.7rem 1.25rem', borderRadius: 'var(--radius-full)', fontSize: '0.9rem' }}
          >
            Close Case Study
          </button>
        </div>
      </div>
    </Modal>
  );
}
