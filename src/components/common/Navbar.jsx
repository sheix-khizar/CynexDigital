import React, { useState, useEffect, useRef } from 'react';
import { 
  Menu, X, Sun, Moon, ArrowUpRight, ChevronDown, 
  TrendingUp, Share2, 
  Layers, Users, Zap, Globe, Palette,
  Briefcase, ShieldCheck, FileText
} from 'lucide-react';

export default function Navbar({ activePage, setActivePage, theme, toggleTheme }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null); // 'services' | 'company' | null
  const dropdownRef = useRef(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleNavClick = (pageId, sectionAnchor = null) => {
    setActivePage(pageId);
    setOpenDropdown(null);
    setMobileMenuOpen(false);

    if (sectionAnchor) {
      setTimeout(() => {
        const el = document.getElementById(sectionAnchor);
        if (el) {
          if (window.lenis) {
            window.lenis.scrollTo(el, { offset: -90, duration: 1.2 });
          } else {
            el.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }, 100);
    } else {
      if (window.lenis) {
        window.lenis.scrollTo(0, { duration: 0.9 });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  const servicesDropdownItems = [
    {
      title: "Digital Marketing & Social Media",
      desc: "Viral Reels, Shorts & strategic social presence",
      icon: Share2,
      page: "services/digital-marketing",
      color: "#a855f7"
    },
    {
      title: "Paid Advertising & Performance Ads",
      desc: "Meta, Google & TikTok profit-driven media buying",
      icon: TrendingUp,
      page: "services/paid-ads",
      color: "#0f62fe"
    },
    {
      title: "Website Design & Web Solutions",
      desc: "Fast, responsive & high-converting modern sites",
      icon: Globe,
      page: "services/web-solutions",
      color: "#10b981"
    },
    {
      title: "Branding & Graphic Design",
      desc: "Bespoke logos, visual identities & brand kits",
      icon: Palette,
      page: "services/branding-design",
      color: "#f59e0b"
    },
    {
      title: "UI/UX Design & Experiences",
      desc: "User journey mapping, Figma prototypes & design systems",
      icon: Layers,
      page: "services/uiux-design",
      color: "#0284c7"
    },
    {
      title: "AI Automation & Workflows",
      desc: "Lead bots, CRM integration & operational efficiency",
      icon: Zap,
      page: "services/ai-automation",
      color: "#7c3aed"
    }
  ];

  const companyDropdownItems = [
    {
      title: "About Cynex Digital",
      desc: "Our story, values, and senior marketing squad",
      icon: Users,
      page: "about",
      color: "#0f62fe"
    },
    {
      title: "Careers at Cynex",
      desc: "Open roles across engineering, design & growth",
      icon: Briefcase,
      page: "careers",
      color: "#0f62fe"
    },
    {
      title: "Privacy Policy",
      desc: "Client confidentiality, NDAs & data protection",
      icon: ShieldCheck,
      page: "privacy",
      color: "#10b981"
    },
    {
      title: "Terms & Conditions",
      desc: "Client engagement framework & IP ownership",
      icon: FileText,
      page: "terms",
      color: "#f59e0b"
    }
  ];

  return (
    <>
      {/* Top Floating Capsule Navbar (ProLaps Style) */}
      <div className="prolaps-nav-wrapper">
        <header className="prolaps-capsule-bar" ref={dropdownRef}>
          {/* Brand Logo */}
          <button 
            onClick={() => handleNavClick('home')} 
            className="prolaps-logo"
            aria-label="Cynex Digital Home"
          >
            <svg width="28" height="28" viewBox="0 0 100 100">
              <defs>
                <linearGradient id="prolaps-brand-lg" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#0f62fe"/>
                  <stop offset="60%" stopColor="#2563eb"/>
                  <stop offset="100%" stopColor="#7c3aed"/>
                </linearGradient>
              </defs>
              <path d="M78 22 A38 38 0 1 0 78 78 L60 62 A18 18 0 1 1 60 38 Z" fill="url(#prolaps-brand-lg)"/>
            </svg>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '2px' }}>
              <span style={{ fontWeight: 800 }}>CYNEX</span>
              <span style={{ fontWeight: 400, color: 'var(--text-muted)' }}>DIGITAL</span>
            </span>
          </button>

          {/* Desktop Nav for viewports > 860px */}
          <div className="desktop-nav-group">
            {/* <button
              onClick={() => handleNavClick('home')}
              className={`prolaps-nav-link ${activePage === 'home' ? 'active' : ''}`}
            >
              Home
            </button> */}

            {/* Services Dropdown Trigger */}
            <button
              onClick={() => setOpenDropdown(openDropdown === 'services' ? null : 'services')}
              className={`prolaps-nav-link ${activePage === 'services' || activePage === 'service-detail' || (activePage && activePage.startsWith('services')) ? 'active' : ''}`}
              aria-expanded={openDropdown === 'services'}
            >
              <span>Services</span>
              <ChevronDown size={11} strokeWidth={2.2} className="prolaps-chevron" />
            </button>

            {/* Case Studies */}
            <button
              onClick={() => handleNavClick('work')}
              className={`prolaps-nav-link ${activePage === 'work' ? 'active' : ''}`}
            >
              Work
            </button>

            {/* Growth Insights */}
            <button
              onClick={() => handleNavClick('blog')}
              className={`prolaps-nav-link ${activePage === 'blog' || activePage === 'blog-detail' || (activePage && (activePage.startsWith('blog') || activePage.startsWith('insights'))) ? 'active' : ''}`}
            >
              Insights
            </button>

            {/* Company Dropdown Trigger */}
            <button
              onClick={() => setOpenDropdown(openDropdown === 'company' ? null : 'company')}
              className={`prolaps-nav-link ${['about', 'careers', 'privacy', 'terms'].includes(activePage) ? 'active' : ''}`}
              aria-expanded={openDropdown === 'company'}
            >
              <span>Company</span>
              <ChevronDown size={11} strokeWidth={2.2} className="prolaps-chevron" />
            </button>
          </div>

          {/* Right Action Buttons */}
          <div className="prolaps-nav-right">
            {/* Theme Toggle */}
            <button 
              onClick={toggleTheme} 
              className="icon-btn nav-theme-toggle" 
              title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              aria-label="Toggle visual theme"
            >
              {theme === 'dark' ? <Sun size={15} /> : <Moon size={15} />}
            </button>

            {/* ProLaps Royal Blue Capsule CTA Button */}
            <button
              onClick={() => handleNavClick('contact')}
              className="btn-prolaps-blue nav-cta-btn"
              aria-label="Book Discovery & Proposal"
            >
              <span>Let's talk</span>
              <svg 
                width="14" 
                height="14" 
                viewBox="0 0 24 24" 
                fill="currentColor"
                style={{ marginLeft: '1px' }}
                aria-hidden="true"
              >
                <path d="M14 4l7 7-7 7v-4.1c-5 0-8.5 1.6-11 5.1 1-5 4-10 11-11V4z" />
              </svg>
            </button>

            {/* Mobile Hamburger / Close Toggle Button (ProLaps Style) */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="prolaps-mobile-toggle"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          {/* Floating Mega Dropdown Menu for Services */}
          {openDropdown === 'services' && (
            <div className="prolaps-mega-dropdown" role="menu">
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem', paddingBottom: '0.75rem', borderBottom: '1px solid var(--border-color)' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>
                  Core Growth Capabilities
                </span>
                <button 
                  onClick={() => handleNavClick('services')}
                  style={{ fontSize: '0.8rem', fontWeight: 600, color: '#0f62fe', display: 'flex', alignItems: 'center', gap: '0.25rem' }}
                >
                  All Capabilities <ArrowUpRight size={13} />
                </button>
              </div>

              <div className="dropdown-grid">
                {servicesDropdownItems.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={idx}
                      onClick={() => handleNavClick(item.page)}
                      className="dropdown-item-card"
                      role="menuitem"
                    >
                      <div style={{ display: 'flex', gap: '0.75rem' }}>
                        <div 
                          style={{ 
                            width: '32px', 
                            height: '32px', 
                            borderRadius: '10px', 
                            background: 'var(--bg-surface-elevated)', 
                            display: 'flex', 
                            alignItems: 'center', 
                            justifyContent: 'center', 
                            flexShrink: 0 
                          }}
                        >
                          <Icon size={16} color={item.color} />
                        </div>
                        <div>
                          <div style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.15rem' }}>
                            {item.title}
                          </div>
                          <div style={{ fontSize: '0.76rem', color: 'var(--text-muted)', lineHeight: 1.4 }}>
                            {item.desc}
                          </div>
                        </div>
                      </div>
                      <ArrowUpRight size={15} className="dropdown-item-arrow" />
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Floating Mega Dropdown Menu for Company */}
          {openDropdown === 'company' && (
            <div className="prolaps-mega-dropdown" role="menu" style={{ width: '580px' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem', paddingBottom: '0.75rem', borderBottom: '1px solid var(--border-color)' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>
                  Agency Ecosystem
                </span>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Creative Solutions · Digital Growth</span>
              </div>

              <div className="dropdown-grid">
                {companyDropdownItems.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={idx}
                      onClick={() => handleNavClick(item.page)}
                      className="dropdown-item-card"
                      role="menuitem"
                    >
                      <div style={{ display: 'flex', gap: '0.75rem' }}>
                        <div 
                          style={{ 
                            width: '32px', 
                            height: '32px', 
                            borderRadius: '10px', 
                            background: `${item.color || '#0f62fe'}15`, 
                            display: 'flex', 
                            alignItems: 'center', 
                            justifyContent: 'center', 
                            flexShrink: 0 
                          }}
                        >
                          <Icon size={16} color={item.color || "#0f62fe"} />
                        </div>
                        <div>
                          <div style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.15rem' }}>
                            {item.title}
                          </div>
                          <div style={{ fontSize: '0.76rem', color: 'var(--text-muted)', lineHeight: 1.4 }}>
                            {item.desc}
                          </div>
                        </div>
                      </div>
                      <ArrowUpRight size={15} className="dropdown-item-arrow" />
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </header>
      </div>

      {/* ProLaps Mobile Menu Card Dropdown */}
      {mobileMenuOpen && (
        <div 
          className="prolaps-mobile-overlay"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div 
            className="prolaps-mobile-card"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="prolaps-mobile-links">
              {[
                { id: 'services', label: 'Services' },
                { id: 'work', label: 'Work' },
                { id: 'blog', label: 'Insights' },
                { id: 'about', label: 'About' },
                { id: 'careers', label: 'Careers' },
              ].map(item => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`prolaps-mobile-link ${activePage === item.id ? 'active' : ''}`}
                >
                  <span>{item.label}</span>
                  <svg 
                    width="17" 
                    height="17" 
                    viewBox="0 0 24 24" 
                    fill="currentColor"
                    className="prolaps-mobile-arrow"
                    aria-hidden="true"
                  >
                    <path d="M14 4l7 7-7 7v-4.1c-5 0-8.5 1.6-11 5.1 1-5 4-10 11-11V4z" />
                  </svg>
                </button>
              ))}
            </div>

            {/* Mobile Prominent CTA Button */}
            <div style={{ marginTop: '1.15rem' }}>
              <button
                onClick={() => handleNavClick('contact')}
                className="btn-prolaps-blue"
                style={{
                  width: '100%',
                  justifyContent: 'center',
                  padding: '0.8rem 1.4rem',
                  fontSize: '0.94rem',
                  borderRadius: '9999px',
                  boxShadow: '0 6px 20px rgba(15, 98, 254, 0.4)'
                }}
              >
                <span>Let's talk</span>
                <svg 
                  width="15" 
                  height="15" 
                  viewBox="0 0 24 24" 
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M14 4l7 7-7 7v-4.1c-5 0-8.5 1.6-11 5.1 1-5 4-10 11-11V4z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
