import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Mail, MapPin, Clock } from 'lucide-react';

export default function Footer({ onNavigate }) {
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // Pakistan Standard Time is UTC+5
      const options = {
        timeZone: 'Asia/Karachi',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      };
      setCurrentTime(new Intl.DateTimeFormat('en-US', options).format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer
      className="site-footer"
      style={{
        position: 'relative',
        paddingTop: '5rem',
        paddingBottom: '2.5rem',
        marginTop: '6rem'
      }}
    >
      {/* Decorative Wave SVG */}
      <div
        style={{
          position: 'absolute',
          top: '-35px',
          left: 0,
          right: 0,
          height: '35px',
          overflow: 'hidden',
          lineHeight: 0,
          pointerEvents: 'none'
        }}
      >
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" style={{ width: '100%', height: '100%' }}>
          <path
            d="M0,0 C150,90 350,-40 500,45 C650,130 900,10 1200,50 L1200,120 L0,120 Z"
            fill="var(--bg-secondary)"
            opacity="0.95"
          />
        </svg>
      </div>

      <div className="container">
        {/* Main Footer Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))',
            gap: '3rem',
            paddingBottom: '4rem',
            borderBottom: '1px solid var(--border-color)'
          }}
        >
          {/* Brand Info & Mission */}
          <div style={{ gridColumn: 'span 1' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <svg width="34" height="34" viewBox="0 0 100 100">
                <defs>
                  <linearGradient id="footer-brand-lg" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#22d3ee" />
                    <stop offset="55%" stopColor="#2f5bff" />
                    <stop offset="100%" stopColor="#7c3aed" />
                  </linearGradient>
                </defs>
                <path d="M78 22 A38 38 0 1 0 78 78 L60 62 A18 18 0 1 1 60 38 Z" fill="url(#footer-brand-lg)" />
              </svg>
              <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '1.3rem' }}>
                Cynex <span className="text-gradient">Digital</span>
              </span>
            </div>

            <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: '1.6', marginBottom: '1.5rem', maxWidth: '340px' }}>
              Built on creativity, driven by digital. We craft your digital presence ⚡ Helping businesses build their online presence, strengthen their brand identity, and achieve sustainable digital growth.
            </p>

            {/* Live Studio Clock */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid var(--border-color)',
                padding: '0.5rem 0.9rem',
                borderRadius: 'var(--radius-full)',
                fontSize: '0.82rem',
                color: 'var(--text-secondary)'
              }}
            >
              <Clock size={14} color="var(--cyan-light)" />
              <span>RAWALPINDI Studio: <strong style={{ color: 'var(--text-primary)' }}>{currentTime || '04:00 PM'} PKT</strong></span>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10b981', display: 'inline-block' }} title="Studio Active" />
            </div>

            {/* Social Icons */}
            <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1.5rem' }}>
              <a
                href="https://www.instagram.com/cynexdigital.pk"
                target="_blank"
                rel="noopener noreferrer"
                className="icon-btn"
                aria-label="Cynex Digital Instagram"
                title="@cynexdigital.pk on Instagram"
              >
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" /></svg>
              </a>
              <a
                href="https://www.linkedin.com/company/cynex-digital/"
                target="_blank"
                rel="noopener noreferrer"
                className="icon-btn"
                aria-label="Cynex Digital LinkedIn"
                title="Cynex Digital on LinkedIn"
              >
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="9" width="4" height="12" /><circle cx="5" cy="4" r="2" /><path d="M11 9v12M11 13c0-2 2-4 4-4s4 2 4 4v8" /></svg>
              </a>
              <a
                href="mailto:hello@cynexdigital.pk"
                className="icon-btn"
                aria-label="Email Cynex Digital"
                title="Email hello@cynexdigital.pk"
              >
                <Mail size={17} />
              </a>
            </div>
          </div>

          {/* Quick Pages Navigation */}
          <div>
            <h4 style={{ fontSize: '0.95rem', fontWeight: 700, marginBottom: '1.25rem', color: 'var(--text-primary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Navigation
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <li>
                <button onClick={() => onNavigate('home')} className="footer-nav-link">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('services')} className="footer-nav-link">
                  Our Services
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('work')} className="footer-nav-link">
                  Selected Work & Case Studies
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('about')} className="footer-nav-link">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('blog')} className="footer-nav-link">
                  Insights & Articles
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('careers')} className="footer-nav-link">
                  Careers at Cynex
                </button>
              </li>
            </ul>
          </div>

          {/* Agency Specializations (The 6 Pillars) */}
          <div>
            <h4 style={{ fontSize: '0.95rem', fontWeight: 700, marginBottom: '1.25rem', color: 'var(--text-primary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Core Capabilities
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <li>
                <button onClick={() => onNavigate('services/digital-marketing')} className="footer-nav-link">
                  Digital Marketing & Social Media
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('services/paid-ads')} className="footer-nav-link">
                  Paid Advertising & Performance Ads
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('services/web-solutions')} className="footer-nav-link">
                  Website Design & Modern Web Solutions
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('services/branding-design')} className="footer-nav-link">
                  Branding & Graphic Design
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('services/uiux-design')} className="footer-nav-link">
                  UI/UX Design & Digital Experiences
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('services/ai-automation')} className="footer-nav-link">
                  AI Automation & Workflow Efficiency
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 style={{ fontSize: '0.95rem', fontWeight: 700, marginBottom: '1.25rem', color: 'var(--text-primary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Studio & Inquiries
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '0.92rem', color: 'var(--text-secondary)' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                <MapPin size={18} color="var(--cyan-light)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span>RAWALPINDI, Punjab, Pakistan<br /><span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Serving clients across UAE, UK, US & Pakistan</span></span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <Mail size={18} color="var(--blue-vivid)" style={{ flexShrink: 0 }} />
                <a href="mailto:hello@cynexdigital.pk" style={{ color: 'var(--cyan-light)' }}>
                  hello@cynexdigital.pk
                </a>
              </div>
              <div style={{ marginTop: '0.5rem' }}>
                <button
                  onClick={() => onNavigate('contact')}
                  className="btn btn-outline btn-sm"
                  style={{ width: '100%' }}
                >
                  Start A Conversation <ArrowUpRight size={14} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar & Copyright */}
        <div
          style={{
            paddingTop: '2rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1rem',
            fontSize: '0.85rem',
            color: 'var(--text-muted)'
          }}
        >
          <div>
            © {new Date().getFullYear()} Cynex Digital. Built on creativity, Driven by Digital. All rights reserved.
          </div>
          <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', alignItems: 'center' }}>
            <button 
              onClick={() => onNavigate('careers')}
              className="footer-bottom-link"
            >
              Careers
            </button>
            <span style={{ opacity: 0.4 }}>·</span>
            <button 
              onClick={() => onNavigate('privacy')}
              className="footer-bottom-link"
            >
              Privacy Policy
            </button>
            <span style={{ opacity: 0.4 }}>·</span>
            <button 
              onClick={() => onNavigate('terms')}
              className="footer-bottom-link"
            >
              Terms & Conditions
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
