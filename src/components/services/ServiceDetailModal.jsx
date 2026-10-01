import React from 'react';
import Modal from '../common/Modal';
import { Check, Clock, Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';

export default function ServiceDetailModal({ service, isOpen, onClose, onSelectForQuote }) {
  if (!service) return null;

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={service.title}
      subtitle="Service Deep Dive"
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        {/* Full Overview */}
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: '1.6' }}>
          {service.long}
        </p>

        {/* Highlights Bar */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '1rem',
            padding: '1rem',
            background: 'var(--bg-surface-elevated)',
            borderRadius: 'var(--radius-md)',
            border: '1px solid var(--border-color)'
          }}
        >
          <div>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Typical Sprint Timeline</div>
            <div style={{ fontWeight: 700, color: 'var(--cyan-light)', display: 'flex', alignItems: 'center', gap: '0.4rem', marginTop: '0.2rem' }}>
              <Clock size={16} /> {service.timeline}
            </div>
          </div>
          <div>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Key Outcome</div>
            <div style={{ fontWeight: 700, color: '#10b981', display: 'flex', alignItems: 'center', gap: '0.4rem', marginTop: '0.2rem' }}>
              <Sparkles size={16} /> {service.metricsHighlight}
            </div>
          </div>
        </div>

        {/* Deliverables List */}
        <div>
          <h4 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '0.75rem', color: 'var(--text-primary)' }}>
            What Is Included & Delivered:
          </h4>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '0.6rem' }}>
            {service.deliverables.map((item, idx) => (
              <div 
                key={idx}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                  fontSize: '0.9rem',
                  color: 'var(--text-secondary)',
                  padding: '0.5rem 0.75rem',
                  background: 'var(--bg-surface-elevated)',
                  borderRadius: 'var(--radius-sm)',
                  border: '1px solid var(--border-color)'
                }}
              >
                <div 
                  style={{
                    width: '20px',
                    height: '20px',
                    borderRadius: '50%',
                    background: 'rgba(34, 211, 238, 0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}
                >
                  <Check size={12} color="var(--cyan-light)" />
                </div>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Ideal For Section */}
        <div style={{ padding: '1rem', background: 'rgba(47, 91, 255, 0.06)', borderRadius: 'var(--radius-md)', border: '1px solid rgba(47, 91, 255, 0.2)' }}>
          <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--blue-vivid)', textTransform: 'uppercase', marginBottom: '0.25rem' }}>
            Best Suited For
          </div>
          <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
            {service.idealFor}
          </div>
        </div>

        {/* Action Button */}
        <div style={{ display: 'flex', gap: '1rem', marginTop: '0.5rem', flexWrap: 'wrap' }}>
          <button 
            onClick={() => {
              onClose();
              onSelectForQuote(service.title);
            }}
            className="btn btn-primary"
            style={{ flex: 1 }}
          >
            <span>Request Proposal For {service.title}</span>
            <ArrowRight size={16} />
          </button>
          <button onClick={onClose} className="btn btn-secondary">
            Close Window
          </button>
        </div>
      </div>
    </Modal>
  );
}
