import React from 'react';
import Modal from '../common/Modal';
import { Calendar, Clock, User, ArrowLeft } from 'lucide-react';

export default function ArticleModal({ article, isOpen, onClose }) {
  if (!article) return null;

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={article.title}
      subtitle={`Studio Insights // ${article.tag}`}
      maxWidth="780px"
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        {/* Article Meta Bar */}
        <div 
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1.25rem',
            flexWrap: 'wrap',
            fontSize: '0.84rem',
            color: 'var(--text-muted)',
            borderBottom: '1px solid var(--border-color)',
            paddingBottom: '1rem'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
            <User size={14} color="var(--cyan-light)" />
            <span style={{ color: 'var(--text-primary)', fontWeight: 600 }}>{article.author}</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
            <Calendar size={14} />
            <span>{article.date}</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
            <Clock size={14} />
            <span>{article.readTime}</span>
          </div>
        </div>

        {/* Featured Image */}
        {article.image && (
          <div style={{ height: '240px', borderRadius: 'var(--radius-md)', overflow: 'hidden', position: 'relative' }}>
            <img 
              src={article.image} 
              alt={article.title} 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
            />
          </div>
        )}

        {/* Content Body */}
        <div 
          style={{
            fontSize: '0.98rem',
            lineHeight: '1.75',
            color: 'var(--text-secondary)',
            whiteSpace: 'pre-line'
          }}
        >
          {article.content.trim()}
        </div>

        {/* Bottom Close */}
        <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '1.25rem', display: 'flex', justifyContent: 'flex-end' }}>
          <button onClick={onClose} className="btn btn-secondary">
            Close Article
          </button>
        </div>
      </div>
    </Modal>
  );
}
