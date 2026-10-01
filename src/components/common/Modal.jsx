import React, { useEffect, useRef } from 'react';
import { X } from 'lucide-react';

export default function Modal({ isOpen, onClose, title, subtitle, children, maxWidth = "760px" }) {
  const contentRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      if (window.lenis) {
        window.lenis.stop();
      }
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = '';
      if (window.lenis) {
        window.lenis.start();
      }
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  // Reset scroll position to top whenever opened
  useEffect(() => {
    if (isOpen && contentRef.current) {
      contentRef.current.scrollTop = 0;
    }
  }, [isOpen]);

  // Isolate wheel events so parent/window listeners do not cancel modal scrolling
  useEffect(() => {
    if (!isOpen) return;
    const el = contentRef.current;
    if (!el) return;

    const onWheel = (e) => {
      e.stopPropagation();
    };

    el.addEventListener('wheel', onWheel, { passive: true });
    return () => {
      el.removeEventListener('wheel', onWheel);
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div 
      className="modal-backdrop" 
      onClick={onClose} 
      role="dialog" 
      aria-modal="true"
      data-lenis-prevent="true"
    >
      <div 
        ref={contentRef}
        className="modal-content card-padded" 
        style={{ maxWidth }} 
        onClick={(e) => e.stopPropagation()}
        data-lenis-prevent="true"
      >
        <button 
          className="modal-close-btn" 
          onClick={onClose} 
          aria-label="Close dialog"
        >
          <X size={18} />
        </button>

        {(title || subtitle) && (
          <div style={{ marginBottom: '1.25rem', paddingRight: '2.5rem' }}>
            {subtitle && (
              <span 
                className="badge badge-brand" 
                style={{ 
                  marginBottom: '0.4rem', 
                  fontSize: '0.72rem', 
                  letterSpacing: '0.04em',
                  display: 'inline-block',
                  maxWidth: '100%',
                  whiteSpace: 'normal',
                  lineHeight: 1.4
                }}
              >
                {subtitle}
              </span>
            )}
            {title && (
              <h2 style={{ fontSize: 'clamp(1.15rem, 3.8vw, 1.55rem)', fontWeight: 800, marginTop: '0.2rem', lineHeight: 1.25 }}>
                {title}
              </h2>
            )}
          </div>
        )}

        <div>
          {children}
        </div>
      </div>
    </div>
  );
}
