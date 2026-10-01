import React from 'react';
import Modal from '../common/Modal';
import { TrendingUp, ArrowRight, CheckCircle2, Calendar, UserCheck } from 'lucide-react';

export default function ProjectDetailModal({ project, isOpen, onClose, onDiscussSimilar }) {
  if (!project) return null;

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={project.title}
      subtitle={`Client Case Study // ${project.tag}`}
      maxWidth="800px"
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
        {/* Banner with photo & meta */}
        <div 
          style={{
            background: project.gradient,
            borderRadius: 'var(--radius-md)',
            padding: '2.5rem 2rem',
            color: '#ffffff',
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
              background: 'linear-gradient(180deg, rgba(8, 14, 28, 0.6) 0%, rgba(8, 14, 28, 0.88) 100%)',
              zIndex: 1
            }} 
          />
          <div style={{ position: 'relative', zIndex: 2 }}>
            <div style={{ display: 'flex', gap: '1.5rem', fontSize: '0.85rem', marginBottom: '0.5rem', opacity: 0.9 }}>
              <span>Client: <strong>{project.client}</strong></span>
              <span>Year: <strong>{project.year}</strong></span>
            </div>
            <h3 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#ffffff', lineHeight: 1.3 }}>
              {project.desc}
            </h3>
          </div>
        </div>

        {/* Quantifiable Results Grid */}
        <div>
          <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
            Measurable Client Outcomes
          </h4>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1rem' }}>
            {project.metrics.map((m, i) => (
              <div 
                key={i}
                style={{
                  background: 'var(--bg-surface-elevated)',
                  border: '1px solid var(--border-color)',
                  borderRadius: 'var(--radius-md)',
                  padding: '1.25rem'
                }}
              >
                <div className="text-gradient" style={{ fontSize: '1.8rem', fontWeight: 800 }}>
                  {m.value}
                </div>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.25rem' }}>
                  {m.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Challenge vs Solution */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
          <div style={{ background: 'rgba(239, 68, 68, 0.05)', border: '1px solid rgba(239, 68, 68, 0.2)', padding: '1.25rem', borderRadius: 'var(--radius-md)' }}>
            <div style={{ fontWeight: 700, color: '#f87171', fontSize: '0.85rem', textTransform: 'uppercase', marginBottom: '0.4rem' }}>
              The Challenge
            </div>
            <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: '1.55' }}>
              {project.challenge}
            </p>
          </div>

          <div style={{ background: 'rgba(16, 185, 129, 0.05)', border: '1px solid rgba(16, 185, 129, 0.2)', padding: '1.25rem', borderRadius: 'var(--radius-md)' }}>
            <div style={{ fontWeight: 700, color: '#34d399', fontSize: '0.85rem', textTransform: 'uppercase', marginBottom: '0.4rem' }}>
              Our Strategic Solution
            </div>
            <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: '1.55' }}>
              {project.solution}
            </p>
          </div>
        </div>

        {/* Deliverables Provided */}
        <div>
          <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.75rem' }}>
            Production Deliverables
          </h4>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            {project.deliverables.map((deliv, i) => (
              <span key={i} className="badge badge-brand" style={{ textTransform: 'none', fontSize: '0.82rem' }}>
                <CheckCircle2 size={13} /> {deliv}
              </span>
            ))}
          </div>
        </div>

        {/* Action Button */}
        <div style={{ display: 'flex', gap: '1rem', paddingTop: '0.5rem', paddingBottom: '1.25rem', flexWrap: 'wrap' }}>
          <button 
            onClick={() => {
              onClose();
              onDiscussSimilar(project.title);
            }} 
            className="btn btn-primary"
            style={{ flex: 1 }}
          >
            <span>Discuss A Similar Project With Our Team</span>
            <ArrowRight size={16} />
          </button>
          <button onClick={onClose} className="btn btn-secondary">
            Close Case Study
          </button>
        </div>
      </div>
    </Modal>
  );
}
