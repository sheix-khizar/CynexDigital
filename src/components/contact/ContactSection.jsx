import React, { useState, useEffect } from 'react';
import { Mail, MapPin, Send, CheckCircle2, Clock, Phone, Sparkles, ShieldCheck, ChevronRight, ArrowRight } from 'lucide-react';

// =========================================================================
// GOOGLE FORM & GOOGLE SHEETS CONFIGURATION
// To connect this form directly to your Google Form and Google Sheet:
// 1. Paste your Google Form action URL below (ends in /formResponse)
// 2. Map the entry.XXXX IDs for each field from your "pre-filled link"
// =========================================================================
export const GOOGLE_FORM_CONFIG = {
  actionUrl: "https://docs.google.com/forms/d/e/1FAIpQLScpEj9i2PpbqTXl9UqoBkjWzqTiqf_R9eVkgnJZBA--IBi59Q/formResponse", 
  entries: {
    name: "entry.1450045843",    // Full name
    email: "entry.1278027873",   // Work email
    company: "entry.1114545592", // Company
    phone: "entry.1399658189",   // Phone
    service: "entry.646496066",  // What do you need?
    budget: "entry.2106172872",  // Indicative budget
    details: "entry.1519096917"  // Project details
  }
};

// Accessible, card-bounded custom dropdown to prevent OS mobile popup overflow and support dark/light theme
function CustomDropdown({ label, name, value, options, placeholder, onChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = React.useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    }
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('touchstart', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [isOpen]);

  const handleSelect = (option) => {
    onChange({ target: { name, value: option } });
    setIsOpen(false);
  };

  return (
    <div className="form-group" style={{ margin: 0, position: 'relative' }} ref={dropdownRef}>
      <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>
        {label}
      </label>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0.85rem 1.15rem',
          borderRadius: '12px',
          background: 'var(--bg-input)',
          border: isOpen ? '1px solid var(--blue-vivid)' : '1px solid var(--border-color)',
          fontSize: '0.92rem',
          color: value ? 'var(--text-primary)' : 'var(--text-muted)',
          cursor: 'pointer',
          textAlign: 'left',
          transition: 'all 0.2s ease',
          boxShadow: isOpen ? '0 0 0 3px rgba(15, 98, 254, 0.15)' : 'none'
        }}
      >
        <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', paddingRight: '0.5rem' }}>
          {value || placeholder}
        </span>
        <ChevronRight
          size={16}
          style={{
            transform: isOpen ? 'rotate(90deg)' : 'rotate(0deg)',
            transition: 'transform 0.2s ease',
            color: 'var(--text-muted)',
            flexShrink: 0
          }}
        />
      </button>

      {isOpen && (
        <div
          role="listbox"
          style={{
            position: 'absolute',
            top: 'calc(100% + 6px)',
            left: 0,
            right: 0,
            zIndex: 90,
            background: 'var(--bg-surface-elevated, #ffffff)',
            border: '1px solid var(--border-color)',
            borderRadius: '12px',
            boxShadow: '0 12px 30px rgba(0, 0, 0, 0.25)',
            maxHeight: '240px',
            overflowY: 'auto',
            padding: '0.35rem',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)'
          }}
        >
          {options.map((opt) => {
            const isSelected = value === opt;
            return (
              <div
                key={opt}
                role="option"
                aria-selected={isSelected}
                onClick={() => handleSelect(opt)}
                style={{
                  padding: '0.7rem 0.9rem',
                  borderRadius: '8px',
                  fontSize: '0.88rem',
                  cursor: 'pointer',
                  color: isSelected ? 'var(--blue-vivid)' : 'var(--text-primary)',
                  background: isSelected ? 'rgba(15, 98, 254, 0.12)' : 'transparent',
                  fontWeight: isSelected ? 600 : 400,
                  transition: 'background 0.15s ease',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}
                onMouseEnter={(e) => {
                  if (!isSelected) e.currentTarget.style.background = 'var(--bg-subtle, rgba(255,255,255,0.06))';
                }}
                onMouseLeave={(e) => {
                  if (!isSelected) e.currentTarget.style.background = 'transparent';
                }}
              >
                <span>{opt}</span>
                {isSelected && <CheckCircle2 size={15} color="var(--blue-vivid)" />}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default function ContactSection({ prefillData, onToast, isDedicatedPage = false, onNavigate }) {
  const [formData, setFormData] = useState(() => ({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: prefillData?.service || '',
    budget: prefillData?.priceRange || '',
    details: prefillData?.details || ''
  }));

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Update when prefillData changes (e.g. from Estimator or Service card)
  useEffect(() => {
    if (prefillData) {
      setFormData(prev => ({
        ...prev,
        service: prefillData.service || prev.service,
        budget: prefillData.priceRange || prev.budget,
        details: prefillData.details || prev.details
      }));
    }
  }, [prefillData]);

  const servicesList = [
    'Website Design & Web Solutions',
    'Social Media & Content Engines',
    'Paid Advertising & Performance Ads',
    'Branding & Graphic Design',
    'UI/UX Design & Experiences',
    'AI Automation & Workflows',
    'Full-Spectrum Growth Partnership'
  ];

  const budgetOptions = [
    'Under $2,500',
    '$2,500 – $5,000',
    '$5,000 – $10,000',
    '$10,000 – $25,000',
    '$25,000+'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // If Google Form Action URL is configured, submit data to Google Form in the background
    if (GOOGLE_FORM_CONFIG.actionUrl) {
      try {
        const params = new URLSearchParams();
        if (GOOGLE_FORM_CONFIG.entries.name) params.append(GOOGLE_FORM_CONFIG.entries.name, formData.name);
        if (GOOGLE_FORM_CONFIG.entries.email) params.append(GOOGLE_FORM_CONFIG.entries.email, formData.email);
        if (GOOGLE_FORM_CONFIG.entries.company) params.append(GOOGLE_FORM_CONFIG.entries.company, formData.company || '');
        if (GOOGLE_FORM_CONFIG.entries.phone) params.append(GOOGLE_FORM_CONFIG.entries.phone, formData.phone || '');
        if (GOOGLE_FORM_CONFIG.entries.service) params.append(GOOGLE_FORM_CONFIG.entries.service, formData.service || '');
        if (GOOGLE_FORM_CONFIG.entries.budget) params.append(GOOGLE_FORM_CONFIG.entries.budget, formData.budget || '');
        if (GOOGLE_FORM_CONFIG.entries.details) params.append(GOOGLE_FORM_CONFIG.entries.details, formData.details || '');

        await fetch(GOOGLE_FORM_CONFIG.actionUrl, {
          method: 'POST',
          mode: 'no-cors', // Bypasses browser CORS for Google Form submissions
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          },
          body: params.toString()
        });
      } catch (err) {
        console.warn('Google Form submission notice:', err);
      }
    }

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      if (onToast) {
        onToast("Message received! We will reply within one business day.");
      }
    }, 800);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({
      name: '',
      email: '',
      company: '',
      phone: '',
      service: '',
      budget: '',
      details: ''
    });
  };

  return (
    <section id="contact" className={`page-fade-in ${isDedicatedPage ? 'page-hero-header' : 'section-spacing'}`} style={{ position: 'relative' }}>
      <div className="container">
        {/* ProLaps Style Dedicated Page Header with Breadcrumbs */}
        {isDedicatedPage ? (
          <div style={{ marginBottom: '3.5rem' }}>
            <div className="page-breadcrumbs">
              <button onClick={() => onNavigate && onNavigate('home')}>Home</button>
              <ChevronRight size={14} />
              <span style={{ color: 'var(--text-primary)' }}>Contact Us</span>
            </div>

            <div className="prolaps-eyebrow" style={{ marginBottom: '1rem' }}>
              <span className="prolaps-live-dot" />
              <span>START A CONVERSATION</span>
            </div>

            <h1 className="page-editorial-title">
              Let's build your next <br />
              <em>digital growth chapter.</em>
            </h1>

            <p className="page-editorial-sub">
              Tell us about your brand goals, target timeline, or what you're looking to build. Our team will review your requirements and respond within one business day with tailored recommendations.
            </p>
          </div>
        ) : (
          /* Home page section header */
          <div style={{ textAlign: 'center', maxWidth: '680px', margin: '0 auto 4rem auto' }}>
            <span className="badge badge-brand" style={{ marginBottom: '0.75rem' }}>
              Start A Conversation
            </span>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '1rem' }}>
              We craft your <span className="text-gradient">digital presence ⚡</span>
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: '1.6' }}>
              Looking to launch a modern website, scale social media, run targeted paid ads, or refresh your brand? Tell us below — we personally reply within one business day.
            </p>
          </div>
        )}

        {/* Contact Container Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
            gap: 'clamp(2rem, 4vw, 3rem)',
            alignItems: 'start'
          }}
        >
          {/* Left Column: Direct Studio Details */}
          <div>
            <div
              className="glass-card card-padded contact-info-card"
              style={{
                marginBottom: '2rem'
              }}
            >
              <h3 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '1rem' }}>
                Studio Direct Contact
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: '1.6', marginBottom: '2rem' }}>
                We believe in genuine, collaborative partnerships. Reach out directly or connect with us across our social channels.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div style={{ display: 'flex', gap: '1rem' }}>
                  <div className="icon-btn" style={{ flexShrink: 0 }}>
                    <Mail size={18} color="var(--cyan-light)" />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Direct Inquiries</div>
                    <a href="mailto:hello@cynexdigital.pk" style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                      hello@cynexdigital.pk
                    </a>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1rem' }}>
                  <div className="icon-btn" style={{ flexShrink: 0 }}>
                    <MapPin size={18} color="var(--blue-vivid)" />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Studio Base</div>
                    <div style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                      RAWALPINDI, Punjab, Pakistan
                    </div>
                    <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                      Partnering with clients across Pakistan, UAE, UK & USA
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1rem' }}>
                  <div className="icon-btn" style={{ flexShrink: 0 }}>
                    <Clock size={18} color="#10b981" />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Working Hours & Response SLA</div>
                    <div style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                      Monday – Friday (09:00 – 19:00 PKT)
                    </div>
                    <div style={{ fontSize: '0.82rem', color: '#34d399' }}>
                      Guaranteed reply within 24 business hours
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Official Social Links Card */}
            <div
              className="glass-card"
              style={{
                padding: '1.25rem 1.5rem',
                borderRadius: 'var(--radius-md)',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.75rem',
                marginBottom: '1.5rem'
              }}
            >
              <div style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--text-primary)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                Follow Our Journey
              </div>
              <div style={{ display: 'flex', gap: '0.75rem' }}>
                <a
                  href="https://www.instagram.com/cynexdigital.pk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary btn-sm"
                  style={{ gap: '0.4rem', fontSize: '0.8rem' }}
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" /></svg>
                  <span>@cynexdigital.pk</span>
                </a>
                <a
                  href="https://www.linkedin.com/company/cynex-digital/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary btn-sm"
                  style={{ gap: '0.4rem', fontSize: '0.8rem' }}
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="9" width="4" height="12" /><circle cx="5" cy="4" r="2" /><path d="M11 9v12M11 13c0-2 2-4 4-4s4 2 4 4v8" /></svg>
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>

            {/* Client Privacy Commitment Card */}
            <div
              style={{
                padding: '1.25rem',
                borderRadius: 'var(--radius-md)',
                background: 'var(--bg-surface-elevated)',
                border: '1px solid var(--border-color)',
                display: 'flex',
                gap: '0.75rem',
                alignItems: 'center'
              }}
            >
              <ShieldCheck size={22} color="var(--cyan-light)" style={{ flexShrink: 0 }} />
              <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', margin: 0, lineHeight: '1.5' }}>
                All initial inquiries and concept discussions are strictly protected under mutual confidentiality.
              </p>
            </div>
          </div>

          {/* Right Column: Modern Project Proposal Form (Styled after Reference Design) */}
          <div
            className="glass-card"
            style={{
              padding: 'clamp(1.75rem, 3.5vw, 2.75rem)',
              borderRadius: '24px',
              border: '1px solid var(--border-color)',
              background: 'var(--bg-card)',
              boxShadow: 'var(--shadow-md)'
            }}
          >
            {isSubmitted ? (
              <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
                <div
                  style={{
                    width: '64px',
                    height: '64px',
                    borderRadius: '50%',
                    background: 'rgba(16, 185, 129, 0.15)',
                    border: '1px solid rgba(16, 185, 129, 0.4)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 1.5rem auto'
                  }}
                >
                  <CheckCircle2 size={32} color="#10b981" />
                </div>
                <h3 style={{ fontSize: '1.6rem', fontWeight: 800, marginBottom: '0.75rem' }}>
                  Inquiry Dispatched!
                </h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.6', maxWidth: '420px', margin: '0 auto 2rem auto' }}>
                  Thank you, <strong style={{ color: 'var(--text-primary)' }}>{formData.name}</strong>. Our team has received your project brief {formData.service ? <span>for <strong>{formData.service}</strong></span> : ''} and will email you tailored recommendations within one business day.
                </p>
                <button onClick={handleReset} className="btn btn-secondary">
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                {/* Row 1: Full name * & Work email * */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem', marginBottom: '1.25rem' }}>
                  <div className="form-group" style={{ margin: 0 }}>
                    <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>
                      Full name <span style={{ color: '#0f62fe' }}>*</span>
                    </label>
                    <input
                      type="text"
                      required
                      name="name"
                      placeholder="Ada Lovelace"
                      value={formData.name}
                      onChange={handleChange}
                      className="form-input"
                      style={{
                        width: '100%',
                        padding: '0.85rem 1.15rem',
                        borderRadius: '12px',
                        background: 'var(--bg-input)',
                        border: '1px solid var(--border-color)',
                        fontSize: '0.92rem',
                        color: 'var(--text-primary)',
                        transition: 'border-color 0.2s'
                      }}
                    />
                  </div>

                  <div className="form-group" style={{ margin: 0 }}>
                    <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>
                      Work email <span style={{ color: '#0f62fe' }}>*</span>
                    </label>
                    <input
                      type="email"
                      required
                      name="email"
                      placeholder="ada@company.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="form-input"
                      style={{
                        width: '100%',
                        padding: '0.85rem 1.15rem',
                        borderRadius: '12px',
                        background: 'var(--bg-input)',
                        border: '1px solid var(--border-color)',
                        fontSize: '0.92rem',
                        color: 'var(--text-primary)',
                        transition: 'border-color 0.2s'
                      }}
                    />
                  </div>
                </div>

                {/* Row 2: Company & Phone */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem', marginBottom: '1.25rem' }}>
                  <div className="form-group" style={{ margin: 0 }}>
                    <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>
                      Company
                    </label>
                    <input
                      type="text"
                      name="company"
                      placeholder="Company Ltd"
                      value={formData.company}
                      onChange={handleChange}
                      className="form-input"
                      style={{
                        width: '100%',
                        padding: '0.85rem 1.15rem',
                        borderRadius: '12px',
                        background: 'var(--bg-input)',
                        border: '1px solid var(--border-color)',
                        fontSize: '0.92rem',
                        color: 'var(--text-primary)',
                        transition: 'border-color 0.2s'
                      }}
                    />
                  </div>

                  <div className="form-group" style={{ margin: 0 }}>
                    <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="+92 123 4567890"
                      value={formData.phone}
                      onChange={handleChange}
                      className="form-input"
                      style={{
                        width: '100%',
                        padding: '0.85rem 1.15rem',
                        borderRadius: '12px',
                        background: 'var(--bg-input)',
                        border: '1px solid var(--border-color)',
                        fontSize: '0.92rem',
                        color: 'var(--text-primary)',
                        transition: 'border-color 0.2s'
                      }}
                    />
                  </div>
                </div>

                {/* Row 3: What do you need? & Indicative budget */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))', gap: '1.25rem', marginBottom: '1.25rem' }}>
                  <CustomDropdown
                    label="What do you need?"
                    name="service"
                    value={formData.service}
                    options={servicesList}
                    placeholder="Select a service"
                    onChange={handleChange}
                  />

                  <CustomDropdown
                    label="Indicative budget"
                    name="budget"
                    value={formData.budget}
                    options={budgetOptions}
                    placeholder="Select a range"
                    onChange={handleChange}
                  />
                </div>

                {/* Row 4: Tell us about the project */}
                <div className="form-group" style={{ marginBottom: '1.75rem' }}>
                  <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>
                    Tell us about the project — what it does, who it is for, what is blocking it
                  </label>
                  <textarea
                    name="details"
                    rows="5"
                    placeholder="We have a lending platform that takes nine days to approve an application..."
                    value={formData.details}
                    onChange={handleChange}
                    className="form-textarea"
                    style={{
                      width: '100%',
                      padding: '0.85rem 1.15rem',
                      borderRadius: '12px',
                      background: 'var(--bg-input)',
                      border: '1px solid var(--border-color)',
                      fontSize: '0.92rem',
                      color: 'var(--text-primary)',
                      minHeight: '130px',
                      lineHeight: 1.6,
                      resize: 'vertical'
                    }}
                  />
                </div>

                {/* Bottom Row: Guarantee text & Blue Pill CTA Button */}
                <div 
                  className="contact-submit-row"
                  style={{ 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'center', 
                    gap: '1.5rem', 
                    paddingTop: '0.5rem',
                    flexWrap: 'wrap'
                  }}
                >
                  <p 
                    className="contact-guarantee-text"
                    style={{ color: 'var(--text-muted)', fontSize: '0.84rem', margin: 0, lineHeight: 1.5, flex: '1 1 220px' }}
                  >
                    We reply within one business day. Your details stay with us and are never sold or shared.
                  </p>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-prolaps-blue contact-submit-btn"
                    style={{
                      padding: '0.85rem 2rem',
                      fontSize: '0.96rem',
                      borderRadius: 'var(--radius-full)',
                      gap: '0.5rem',
                      fontWeight: 700,
                      flexShrink: 0,
                      whiteSpace: 'nowrap',
                      boxShadow: '0 8px 20px -4px rgba(15, 98, 254, 0.4)'
                    }}
                  >
                    <span>{isSubmitting ? 'Sending...' : 'Send message'}</span>
                    <ArrowRight size={16} />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
