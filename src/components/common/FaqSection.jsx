import React, { useState } from 'react';
import { agencyFaqs } from '../../data/faqData';
import { ChevronDown } from 'lucide-react';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <section className="section-spacing" style={{ position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 3.5rem auto' }}>
          <span className="badge badge-brand" style={{ marginBottom: '0.75rem' }}>
            Got Questions?
          </span>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '1rem' }}>
            Frequently asked <span className="text-gradient">questions</span>.
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: '1.6' }}>
            Everything you need to know about our partnership terms, timelines, and deliverables.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div style={{ maxWidth: '820px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {agencyFaqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="glass-card"
                style={{
                  border: isOpen ? '1px solid var(--border-color-hover)' : '1px solid var(--border-color)',
                  borderRadius: 'var(--radius-md)',
                  overflow: 'hidden',
                  transition: 'all 0.25s'
                }}
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  style={{
                    width: '100%',
                    padding: '1.25rem 1.5rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '1rem',
                    textAlign: 'left',
                    color: 'var(--text-primary)',
                    fontWeight: 700,
                    fontSize: '1.05rem'
                  }}
                  aria-expanded={isOpen}
                >
                  <span>{faq.question}</span>
                  <div
                    style={{
                      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.25s ease',
                      color: isOpen ? 'var(--cyan-light)' : 'var(--text-muted)',
                      flexShrink: 0
                    }}
                  >
                    <ChevronDown size={20} />
                  </div>
                </button>

                {isOpen && (
                  <div
                    style={{
                      padding: '0 1.5rem 1.5rem 1.5rem',
                      color: 'var(--text-secondary)',
                      fontSize: '0.94rem',
                      lineHeight: '1.65',
                      borderTop: '1px solid rgba(255, 255, 255, 0.05)',
                      paddingTop: '1rem'
                    }}
                  >
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
