import React, { useState } from 'react';
import { services, techStack } from '../../data/servicesData';
import { 
  Megaphone, Rocket, Search, Zap, Palette, Layers, Globe, 
  ArrowRight, ArrowUpRight, Clock, ChevronRight, CheckCircle2, Check
} from 'lucide-react';

export default function ServicesSection({ onSelectServiceForContact, isDedicatedPage = false, onNavigate }) {
  const [activeCategoryFilter, setActiveCategoryFilter] = useState('All');
  const [activeTechTab, setActiveTechTab] = useState(0);

  const scrollToSection = (e, sectionId) => {
    if (e && e.preventDefault) e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      if (window.lenis) {
        window.lenis.scrollTo(element, { offset: -90, duration: 1.2 });
      } else {
        const yOffset = -90;
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }
  };

  const getIcon = (type) => {
    switch(type) {
      case 'rocket': return <Rocket size={22} color="#ffffff" />;
      case 'megaphone': return <Megaphone size={22} color="#ffffff" />;
      case 'code': return <Globe size={22} color="#ffffff" />;
      case 'palette': return <Palette size={22} color="#ffffff" />;
      case 'layers': return <Layers size={22} color="#ffffff" />;
      case 'zap': return <Zap size={22} color="#ffffff" />;
      default: return <Rocket size={22} color="#ffffff" />;
    }
  };

  const categories = ['All', 'Products & Experiences', 'Growth & Revenue', 'Brand & Identity', 'Platforms & Workflows'];

  const filteredServices = activeCategoryFilter === 'All'
    ? services
    : services.filter(s => s.category.toLowerCase().includes(activeCategoryFilter.toLowerCase()) || activeCategoryFilter.toLowerCase().includes(s.category.toLowerCase()));

  const techCategories = [
    {
      name: "Modern Web",
      tools: ["React", "Next.js", "Node.js", "FastAPI", "Supabase","Firebase", "Shopify", "WordPress", "Wix"],
      desc: "Fast, accessible, and high-converting storefronts and applications tailored to your business model."
    },
    {
      name: "Paid Media & Ads",
      tools: ["Meta Ads Manager", "Google Search & PMax", "TikTok Ads", "Meta CAPI", "Google Tag Manager", "Triple Whale"],
      desc: "Disciplined media buying, algorithmic targeting, and server-side tracking engineered for measurable ROAS."
    },
    {
      name: "Brand & Creative",
      tools: ["Adobe Illustrator", "Adobe Photoshop", "Figma", "Premiere Pro", "CapCut", "Vector Formats"],
      desc: "Distinct visual identities, logo suites, and viral social media video production that captivates audiences."
    },
    {
      name: "AI & Automations",
      tools: ["OpenAI API", "Make.com", "Zapier", "WhatsApp Cloud", "HubSpot CRM", "Webhooks", "n8n", "Vapi"],
      desc: "Smart 24/7 lead qualification chatbots and automated CRM synchronization that save operational hours."
    }
  ];

  const handleCardClick = (serviceId) => {
    if (onNavigate) {
      onNavigate(`services/${serviceId}`);
    }
  };

  return (
    <section id="services" className={`page-fade-in ${isDedicatedPage ? 'page-hero-header' : 'section-spacing'}`} style={{ position: 'relative' }}>
      <div className="container">
        {/* ProLaps Style Dedicated Page Breadcrumb & Editorial Header */}
        {isDedicatedPage ? (
          <div style={{ marginBottom: '3.5rem' }}>
            <div className="page-breadcrumbs">
              <button 
                onClick={() => onNavigate && onNavigate('home')} 
                style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, color: 'inherit' }}
              >
                Home
              </button>
              <ChevronRight size={14} />
              <span style={{ color: 'var(--text-primary)' }}>Services</span>
            </div>

            <div className="prolaps-eyebrow" style={{ marginBottom: '1rem' }}>
              <span className="prolaps-live-dot" />
              <span>CREATIVE SOLUTIONS · DIGITAL GROWTH</span>
            </div>

            <h1 className="page-editorial-title">
              Six capabilities. <br />
              One team that <em>crafts your digital presence.</em>
            </h1>

            <p className="page-editorial-sub">
              From memorable branding and modern web solutions to social media management, paid ads, and AI automations — built to help ambitious businesses stand out and grow.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center', marginBottom: '2.5rem' }}>
              <button
                onClick={() => onNavigate && onNavigate('contact')}
                className="btn-prolaps-blue"
              >
                <span>Discuss your project</span>
                <ArrowUpRight size={16} className="cta-arrow" />
              </button>

              <button
                onClick={() => onNavigate && onNavigate('work')}
                className="btn-prolaps-white"
              >
                <span>See our work</span>
                <ArrowRight size={16} />
              </button>
            </div>

            {/* Quick jump anchor row */}
            <div 
              style={{ 
                display: 'flex', 
                flexWrap: 'wrap', 
                gap: '1.75rem', 
                paddingTop: '1.25rem', 
                borderTop: '1px solid var(--border-color)',
                fontSize: '0.86rem',
                color: 'var(--text-muted)'
              }}
            >
              <button 
                type="button"
                onClick={(e) => scrollToSection(e, 'capabilities')} 
                style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.35rem', color: 'var(--text-secondary)', fontWeight: 500 }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#0f62fe'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}
              >
                <span>Capabilities Catalog</span>
                <span style={{ fontSize: '0.9rem' }}>↘</span>
              </button>
              <button 
                type="button"
                onClick={(e) => scrollToSection(e, 'delivery')} 
                style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.35rem', color: 'var(--text-secondary)', fontWeight: 500 }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#0f62fe'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}
              >
                <span>Delivery Process</span>
                <span style={{ fontSize: '0.9rem' }}>↘</span>
              </button>
              <button 
                type="button"
                onClick={(e) => scrollToSection(e, 'growth-ecosystem')} 
                style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.35rem', color: 'var(--text-secondary)', fontWeight: 500 }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#0f62fe'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}
              >
                <span>Technology Stack</span>
                <span style={{ fontSize: '0.9rem' }}>↘</span>
              </button>
            </div>
          </div>
        ) : (
          /* Home page section header */
          <div style={{ textAlign: 'center', maxWidth: '680px', margin: '0 auto 3.5rem auto' }}>
            <span className="badge badge-brand" style={{ marginBottom: '0.75rem' }}>
              Creative Solutions · Digital Growth
            </span>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '1rem' }}>
              We craft your <span className="text-gradient">digital presence ⚡</span>
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: '1.6' }}>
              Practical, modern, and tailored solutions that support businesses at every stage of their digital journey — from brand identity and web solutions to social media, paid ads, and AI workflows.
            </p>
          </div>
        )}

        {/* Filter Tabs when on dedicated page */}
        {isDedicatedPage && (
          <div id="capabilities" style={{ marginBottom: '2.5rem' }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategoryFilter(cat)}
                  style={{
                    fontSize: '0.84rem',
                    fontWeight: 600,
                    padding: '0.45rem 1rem',
                    borderRadius: 'var(--radius-full)',
                    background: activeCategoryFilter === cat ? '#0f62fe' : 'var(--bg-surface-elevated)',
                    border: activeCategoryFilter === cat ? '1px solid #0f62fe' : '1px solid var(--border-color)',
                    color: activeCategoryFilter === cat ? '#ffffff' : 'var(--text-secondary)',
                    cursor: 'pointer',
                    transition: 'all 0.15s'
                  }}
                >
                  {cat === 'All' ? 'All capabilities' : cat}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* ProLaps Style Services Catalog Rows */}
        {isDedicatedPage ? (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '5rem' }}>
            {filteredServices.map((service, index) => (
              <div 
                key={service.id}
                onClick={() => handleCardClick(service.id)}
                className="glass-card"
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                  gap: '2rem',
                  padding: '1.75rem',
                  borderRadius: 'var(--radius-xl)',
                  cursor: 'pointer',
                  border: '1px solid var(--border-color)',
                  transition: 'all 0.25s ease',
                  alignItems: 'center'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#0f62fe';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border-color)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                {/* Artwork Thumbnail */}
                <div 
                  style={{ 
                    borderRadius: 'var(--radius-lg)', 
                    overflow: 'hidden', 
                    aspectRatio: '16 / 10',
                    position: 'relative',
                    border: '1px solid var(--border-color)'
                  }}
                >
                  <img 
                    src={service.heroArtwork} 
                    alt={service.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                  />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(15,23,42,0.7) 0%, transparent 60%)' }} />
                  <span 
                    style={{ 
                      position: 'absolute', 
                      bottom: '12px', 
                      left: '12px', 
                      fontSize: '0.74rem', 
                      fontWeight: 700, 
                      color: '#ffffff',
                      background: 'rgba(15,98,254,0.9)',
                      padding: '0.2rem 0.6rem',
                      borderRadius: '9999px'
                    }}
                  >
                    {service.metricsHighlight}
                  </span>
                </div>

                {/* Content Column */}
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                    <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#0f62fe', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                      {service.category}
                    </span>
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                      ~{service.timeline}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '1.45rem', fontWeight: 800, marginBottom: '0.6rem', letterSpacing: '-0.01em' }}>
                    {service.title}
                  </h3>

                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                    {service.short}
                  </p>

                  {/* Bullet points of top deliverables */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem', marginBottom: '1.5rem' }}>
                    {service.deliverables.slice(0, 3).map((item, dIdx) => (
                      <div key={dIdx} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--text-primary)' }}>
                        <Check size={14} color="#0f62fe" strokeWidth={3} />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Click Action Link */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: '#0f62fe', fontWeight: 700, fontSize: '0.92rem', marginTop: 'auto' }}>
                    <span>Explore {service.title} in detail</span>
                    <ArrowUpRight size={16} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Home page 6-Card Grid: Clicking navigates to dedicated page */
          <div id="services-list" className="services-grid" style={{ marginBottom: '3.5rem' }}>
            {services.map((service, index) => (
              <div 
                key={service.id}
                className="service-card"
                onClick={() => handleCardClick(service.id)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleCardClick(service.id);
                  }
                }}
                aria-label={`View dedicated page for ${service.title}`}
                style={{ cursor: 'pointer' }}
              >
                <div>
                  {/* Header: Icon & Practice Index */}
                  <div className="service-card-header">
                    <div className="service-icon-box">
                      {getIcon(service.icon)}
                    </div>
                    <span className="service-index-badge">
                      0{index + 1}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="service-card-title">
                    {service.title}
                  </h3>

                  {/* Short Value Proposition */}
                  <p className="service-card-desc">
                    {service.short}
                  </p>

                  {/* Key Focus Tags */}
                  <div className="service-tags">
                    {(service.tags || []).map((tag, idx) => (
                      <span key={idx} className="service-tag-pill">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Footer: Timeline & Single Action */}
                <div className="service-card-footer">
                  <span className="service-timeline-chip">
                    <Clock size={13} style={{ opacity: 0.7 }} />
                    <span>{service.timeline}</span>
                  </span>
                  <span className="service-cta-link" style={{ color: '#0f62fe', fontWeight: 600 }}>
                    <span>Explore Service</span>
                    <ArrowRight size={14} className="service-arrow" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Preview Link when on Home */}
        {!isDedicatedPage && onNavigate && (
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <button
              onClick={() => onNavigate('services')}
              className="btn-prolaps-white"
              style={{ padding: '0.75rem 1.8rem' }}
            >
              <span>Explore All Capabilities & Deliverables</span>
              <ArrowUpRight size={16} />
            </button>
          </div>
        )}

        {/* Technology Browser with Tabs (ProLaps style) */}
        <div 
          id="growth-ecosystem"
          className="glass-card card-padded"
          style={{
            background: 'var(--bg-card)',
            border: '1px solid var(--border-color)',
            borderRadius: 'var(--radius-xl)'
          }}
        >
          <div style={{ maxWidth: '640px', marginBottom: '2rem' }}>
            <span className="badge badge-brand" style={{ marginBottom: '0.5rem' }}>Technology & Tooling</span>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 800 }}>The stacks we work in every day.</h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginTop: '0.4rem' }}>
              We partner with industry-standard platforms, attribution engines, and modern frameworks.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '2rem', alignItems: 'start' }}>
            {/* Left Tab Buttons */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {techCategories.map((cat, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveTechTab(idx)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '0.9rem 1.25rem',
                    borderRadius: 'var(--radius-md)',
                    background: activeTechTab === idx ? '#0f62fe' : 'var(--bg-surface-elevated)',
                    border: activeTechTab === idx ? '1px solid #0f62fe' : '1px solid var(--border-color)',
                    color: activeTechTab === idx ? '#ffffff' : 'var(--text-primary)',
                    fontWeight: 700,
                    fontSize: '0.92rem',
                    cursor: 'pointer',
                    textAlign: 'left',
                    transition: 'all 0.15s'
                  }}
                >
                  <span>{cat.name}</span>
                  <ChevronRight size={16} />
                </button>
              ))}
            </div>

            {/* Right Tab Content */}
            <div 
              style={{
                background: 'var(--bg-surface-elevated)',
                padding: '1.75rem',
                borderRadius: 'var(--radius-lg)',
                border: '1px solid var(--border-color)'
              }}
            >
              <h4 style={{ fontSize: '1.2rem', fontWeight: 800, marginBottom: '0.5rem' }}>
                {techCategories[activeTechTab].name} Toolkit
              </h4>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                {techCategories[activeTechTab].desc}
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {techCategories[activeTechTab].tools.map((t, tIdx) => (
                  <span
                    key={tIdx}
                    style={{
                      fontSize: '0.8rem',
                      fontWeight: 600,
                      padding: '0.35rem 0.8rem',
                      borderRadius: 'var(--radius-full)',
                      background: 'var(--bg-card)',
                      border: '1px solid var(--border-color)',
                      color: 'var(--text-primary)'
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
