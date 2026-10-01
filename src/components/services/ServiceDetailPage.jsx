import React, { useEffect } from 'react';
import { services, getServiceBySlug } from '../../data/servicesData';
import { projects } from '../../data/projectsData';
import { 
  ArrowUpRight, ArrowRight, CheckCircle2, ChevronRight, Sparkles, 
  Clock, ShieldCheck, Layers, Rocket, Zap, Globe, Palette, Megaphone, ChevronDown
} from 'lucide-react';

export default function ServiceDetailPage({ serviceSlug, onNavigate, onContactService }) {
  const service = getServiceBySlug(serviceSlug) || services[0];

  // Scroll to top when service changes
  useEffect(() => {
    if (window.lenis) {
      window.lenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }
  }, [serviceSlug]);

  const relatedProjects = projects.filter(p => 
    service.relatedProjectIds && service.relatedProjectIds.includes(p.id)
  );

  const otherServices = services.filter(s => s.id !== service.id);

  const handleDiscuss = () => {
    if (onContactService) {
      onContactService(service.title);
    } else if (onNavigate) {
      onNavigate('contact');
    }
  };

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

  return (
    <div className="service-detail-page page-fade-in" style={{ position: 'relative' }}>
      {/* Hero Section */}
      <section className="page-hero-header" style={{ position: 'relative', overflow: 'hidden' }}>
        <div className="container">
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="page-breadcrumbs" style={{ marginBottom: '2rem' }}>
            <button 
              onClick={() => onNavigate && onNavigate('home')} 
              style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, color: 'inherit' }}
            >
              Home
            </button>
            <ChevronRight size={14} />
            <button 
              onClick={() => onNavigate && onNavigate('services')} 
              style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, color: 'inherit' }}
            >
              Services
            </button>
            <ChevronRight size={14} />
            <span style={{ color: 'var(--text-primary)', fontWeight: 600 }}>{service.title}</span>
          </nav>

          {/* Hero Content Layout */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', alignItems: 'center' }}>
            <div>
              <div className="prolaps-eyebrow" style={{ marginBottom: '1.25rem' }}>
                <span className="prolaps-live-dot" />
                <span>{service.category.toUpperCase()}</span>
              </div>

              <h1 className="service-detail-title" style={{ marginBottom: '0.45rem' }}>
                {service.title.split('&')[0].trim()}
              </h1>

              <div className="service-detail-kicker" style={{ marginBottom: '0.85rem' }}>
                <em>{service.heroHeadline}</em>
              </div>

              <p className="service-detail-desc" style={{ marginBottom: '1.75rem' }}>
                {service.short}
              </p>

              {/* Technology & Tooling Pills */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem', marginBottom: '2.5rem' }}>
                {service.tools.map((tool, idx) => (
                  <span
                    key={idx}
                    style={{
                      fontSize: '0.78rem',
                      fontWeight: 600,
                      padding: '0.35rem 0.85rem',
                      borderRadius: 'var(--radius-full)',
                      background: 'var(--bg-surface-elevated)',
                      border: '1px solid var(--border-color)',
                      color: 'var(--text-secondary)'
                    }}
                  >
                    {tool}
                  </span>
                ))}
              </div>

              {/* Actions */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center' }}>
                <button
                  onClick={handleDiscuss}
                  className="btn-prolaps-blue"
                  style={{ fontSize: '0.95rem', padding: '0.75rem 1.75rem' }}
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
            </div>

            {/* Hero Photo / Artwork Card */}
            <div style={{ position: 'relative' }}>
              <div
                style={{
                  borderRadius: 'var(--radius-xl)',
                  overflow: 'hidden',
                  border: '1px solid var(--border-color)',
                  boxShadow: 'var(--shadow-xl)',
                  aspectRatio: '16 / 10',
                  position: 'relative'
                }}
              >
                <img
                  src={service.heroArtwork}
                  alt={service.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block'
                  }}
                />
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(15, 23, 42, 0.85) 0%, rgba(15, 23, 42, 0.2) 60%, transparent 100%)'
                  }}
                />

                {/* Metric Floating Badge */}
                <div style={{ position: 'absolute', bottom: '1.5rem', left: '1.5rem', right: '1.5rem' }}>
                  <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#93c5fd', fontWeight: 700, marginBottom: '0.25rem' }}>
                    KEY BENCHMARK OUTCOME
                  </div>
                  <div style={{ fontSize: '1.25rem', fontWeight: 800, color: '#ffffff', lineHeight: 1.2 }}>
                    {service.metricsHighlight}
                  </div>
                  <div style={{ fontSize: '0.8rem', color: '#cbd5e1', marginTop: '0.35rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <Clock size={13} color="#38bdf8" />
                    <span>Typical delivery timeline: <strong>{service.timeline}</strong></span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* In-Page Navigation Bar */}
          <div 
            style={{ 
              marginTop: '4rem', 
              paddingTop: '1.5rem', 
              borderTop: '1px solid var(--border-color)',
              display: 'flex', 
              flexWrap: 'wrap', 
              gap: '2rem',
              fontSize: '0.88rem'
            }}
          >
            <button 
              type="button"
              onClick={(e) => scrollToSection(e, 'capabilities')} 
              style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer', color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '0.35rem', fontWeight: 500 }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#0f62fe'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}
            >
              <span>What this includes</span>
              <span style={{ fontSize: '0.9rem' }}>↘</span>
            </button>
            <button 
              type="button"
              onClick={(e) => scrollToSection(e, 'delivery')} 
              style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer', color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '0.35rem', fontWeight: 500 }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#0f62fe'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}
            >
              <span>Delivery process</span>
              <span style={{ fontSize: '0.9rem' }}>↘</span>
            </button>
            <button 
              type="button"
              onClick={(e) => scrollToSection(e, 'portfolio')} 
              style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer', color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '0.35rem', fontWeight: 500 }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#0f62fe'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}
            >
              <span>Relevant work</span>
              <span style={{ fontSize: '0.9rem' }}>↘</span>
            </button>
            <button 
              type="button"
              onClick={(e) => scrollToSection(e, 'more-services')} 
              style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer', color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '0.35rem', fontWeight: 500 }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#0f62fe'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}
            >
              <span>More services</span>
              <span style={{ fontSize: '0.9rem' }}>↘</span>
            </button>
          </div>
        </div>
      </section>

      {/* Section 1: What this includes */}
      <section id="capabilities" className="section-spacing" style={{ position: 'relative' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3.5rem', alignItems: 'start' }}>
            {/* Left: Deliverables 2-Column Grid */}
            <div>
              <div className="prolaps-eyebrow" style={{ marginBottom: '0.75rem' }}>
                <span className="prolaps-live-dot" />
                <span>SERVICE SCOPE</span>
              </div>
              <h2 style={{ fontSize: 'clamp(1.4rem, 2.2vw, 1.85rem)', fontWeight: 800, marginBottom: '1.25rem', letterSpacing: '-0.02em' }}>
                What this capability includes.
              </h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '2rem' }}>
                {service.long}
              </p>

              <div 
                style={{ 
                  display: 'grid', 
                  gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', 
                  gap: '1rem' 
                }}
              >
                {service.deliverables.map((item, idx) => (
                  <div
                    key={idx}
                    className="glass-card"
                    style={{
                      padding: '1.25rem 1.4rem',
                      borderRadius: 'var(--radius-md)',
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '0.75rem'
                    }}
                  >
                    <CheckCircle2 size={18} color="#0f62fe" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span style={{ fontSize: '0.92rem', color: 'var(--text-primary)', fontWeight: 500, lineHeight: 1.5 }}>
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: What you get & Consultation callout */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
              <div 
                className="glass-card card-padded"
                style={{
                  background: 'var(--bg-surface-elevated)',
                  border: '1px solid var(--border-color)',
                  borderRadius: 'var(--radius-lg)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.25rem' }}>
                  <ShieldCheck size={20} color="#0f62fe" />
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 800 }}>What you get</h3>
                </div>

                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem', padding: 0, margin: 0 }}>
                  {service.whatYouGet.map((asset, idx) => (
                    <li
                      key={idx}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.65rem',
                        fontSize: '0.92rem',
                        color: 'var(--text-secondary)',
                        paddingBottom: '0.75rem',
                        borderBottom: idx < service.whatYouGet.length - 1 ? '1px solid var(--border-color)' : 'none'
                      }}
                    >
                      <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#0f62fe' }} />
                      <span style={{ color: 'var(--text-primary)', fontWeight: 600 }}>{asset}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Consultation Callout */}
              <div
                className="glass-card card-padded"
                style={{
                  background: 'linear-gradient(135deg, rgba(15, 98, 254, 0.08) 0%, rgba(124, 58, 237, 0.05) 100%)',
                  border: '1px solid rgba(15, 98, 254, 0.25)',
                  borderRadius: 'var(--radius-lg)'
                }}
              >
                <h4 style={{ fontSize: '1.15rem', fontWeight: 800, marginBottom: '0.5rem' }}>
                  Not sure this is the right fit?
                </h4>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                  Describe your current bottlenecks or goals. Our team will advise on the most practical roadmap for your stage of growth.
                </p>
                <button
                  onClick={handleDiscuss}
                  style={{
                    background: 'none',
                    border: 'none',
                    padding: 0,
                    color: '#0f62fe',
                    fontWeight: 700,
                    fontSize: '0.92rem',
                    cursor: 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.35rem'
                  }}
                >
                  <span>Talk with a growth specialist</span>
                  <ArrowRight size={15} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Delivery Process */}
      <section id="delivery" className="section-spacing" style={{ background: 'var(--bg-secondary)', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)' }}>
        <div className="container">
          <div style={{ maxWidth: '680px', marginBottom: '3.5rem' }}>
            <div className="prolaps-eyebrow" style={{ marginBottom: '0.75rem' }}>
              <span className="prolaps-live-dot" />
              <span>THE PROCESS</span>
            </div>
            <h2 style={{ fontSize: 'clamp(1.4rem, 2.2vw, 1.85rem)', fontWeight: 800, letterSpacing: '-0.02em', marginBottom: '0.75rem' }}>
              How we deliver {service.title.toLowerCase()}.
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.02rem', lineHeight: '1.6' }}>
              A disciplined, predictable workflow that guarantees quality and momentum from kick-off to launch.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '1.25rem'
            }}
          >
            {service.deliveryStages.map((stage, idx) => (
              <div
                key={idx}
                className="glass-card"
                style={{
                  padding: '1.75rem',
                  borderRadius: 'var(--radius-md)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  borderTop: '2px solid var(--border-color)',
                  transition: 'border-color 0.2s'
                }}
              >
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                    <span style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0f62fe', fontFamily: 'var(--font-heading)' }}>
                      {stage.step}
                    </span>
                    <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)', fontWeight: 600, textTransform: 'uppercase' }}>
                      {stage.duration}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.5rem' }}>
                    {stage.name}
                  </h3>

                  <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: '1.55' }}>
                    {stage.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Selected Work Matching this Service */}
      {relatedProjects.length > 0 && (
        <section id="portfolio" className="section-spacing">
          <div className="container">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1.5rem', marginBottom: '3rem' }}>
              <div>
                <div className="prolaps-eyebrow" style={{ marginBottom: '0.75rem' }}>
                  <span className="prolaps-live-dot" />
                  <span>FEATURED CASE STUDIES</span>
                </div>
                <h2 style={{ fontSize: 'clamp(1.4rem, 2.2vw, 1.85rem)', fontWeight: 800 }}>
                  Real outcomes in action.
                </h2>
              </div>

              <button
                onClick={() => onNavigate && onNavigate('work')}
                className="btn-prolaps-white"
              >
                <span>View all case studies</span>
                <ArrowRight size={15} />
              </button>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
              {relatedProjects.map((proj) => (
                <div
                  key={proj.id}
                  className="glass-card"
                  onClick={() => onNavigate && onNavigate('work')}
                  style={{
                    borderRadius: 'var(--radius-lg)',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    cursor: 'pointer'
                  }}
                >
                  {/* Photo Visual Header with Client Tag and Same Images */}
                  <div
                    style={{
                      height: '200px',
                      position: 'relative',
                      overflow: 'hidden',
                      borderTopLeftRadius: 'calc(var(--radius-lg) - 1px)',
                      borderTopRightRadius: 'calc(var(--radius-lg) - 1px)',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      padding: '1.5rem',
                      background: proj.gradient
                    }}
                  >
                    {/* Background Image */}
                    {proj.image && (
                      <img
                        src={proj.image}
                        alt={proj.title}
                        loading="lazy"
                        className="card-media-zoom"
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

                    {/* Dark Vignette Overlay for Readability */}
                    <div 
                      style={{
                        position: 'absolute',
                        inset: 0,
                        background: 'linear-gradient(180deg, rgba(8, 14, 28, 0.42) 0%, rgba(8, 14, 28, 0.72) 100%)',
                        zIndex: 1
                      }} 
                    />

                    <div style={{ position: 'relative', zIndex: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span 
                        style={{
                          background: 'rgba(0,0,0,0.5)',
                          backdropFilter: 'blur(10px)',
                          color: '#ffffff',
                          fontSize: '0.75rem',
                          fontWeight: 700,
                          padding: '0.3rem 0.75rem',
                          borderRadius: 'var(--radius-full)',
                          border: '1px solid rgba(255,255,255,0.18)'
                        }}
                      >
                        {proj.client}
                      </span>
                      <div 
                        style={{
                          width: '36px',
                          height: '36px',
                          borderRadius: '50%',
                          background: 'rgba(0,0,0,0.45)',
                          backdropFilter: 'blur(10px)',
                          border: '1px solid rgba(255,255,255,0.2)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: '#ffffff'
                        }}
                      >
                        <ArrowUpRight size={18} />
                      </div>
                    </div>

                    {/* Primary Metric Badge Overlay */}
                    <div style={{ position: 'relative', zIndex: 2 }}>
                      <span 
                        style={{
                          background: '#ffffff',
                          color: '#0f172a',
                          fontSize: '0.8rem',
                          fontWeight: 800,
                          padding: '0.35rem 0.8rem',
                          borderRadius: 'var(--radius-full)',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '0.35rem',
                          boxShadow: '0 4px 16px rgba(0,0,0,0.25)'
                        }}
                      >
                        <Sparkles size={13} color="#0f62fe" />
                        {proj.metrics[0].value} {proj.metrics[0].label}
                      </span>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                      <span className="badge badge-brand" style={{ fontSize: '0.72rem' }}>
                        {proj.tag}
                      </span>
                    </div>

                    <h3 style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: '0.6rem', lineHeight: 1.35 }}>
                      {proj.title}
                    </h3>
                    <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.55, marginBottom: '1.25rem', flexGrow: 1 }}>
                      {proj.desc}
                    </p>

                    {/* 3 Metrics Row matching Work page */}
                    <div 
                      style={{ 
                        display: 'grid', 
                        gridTemplateColumns: 'repeat(3, 1fr)', 
                        gap: '0.5rem', 
                        marginBottom: '1.25rem', 
                        padding: '0.85rem 0.5rem', 
                        background: 'var(--bg-surface-elevated)', 
                        borderRadius: 'var(--radius-md)', 
                        border: '1px solid var(--border-color)', 
                        textAlign: 'center' 
                      }}
                    >
                      {proj.metrics.map((m, mIdx) => (
                        <div key={mIdx}>
                          <div style={{ fontSize: '0.95rem', fontWeight: 800, color: '#0f62fe' }}>{m.value}</div>
                          <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', marginTop: '2px', lineHeight: 1.2 }}>{m.label}</div>
                        </div>
                      ))}
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'flex-end', borderTop: '1px solid var(--border-color)', paddingTop: '0.85rem' }}>
                      <span style={{ fontSize: '0.86rem', fontWeight: 700, color: '#0f62fe', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                        Read Case Study ↗
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Section 4: Explore Other Services */}
      <section id="more-services" className="section-spacing" style={{ borderTop: '1px solid var(--border-color)', background: 'var(--bg-surface-elevated)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto 2.5rem auto' }}>
            <span className="badge badge-brand" style={{ marginBottom: '0.5rem' }}>Explore Capabilities</span>
            <h3 style={{ fontSize: '1.8rem', fontWeight: 800 }}>More Services by Cynex Digital</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', marginTop: '0.35rem' }}>
              Connected solutions designed to craft your complete digital presence.
            </p>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', justifyContent: 'center' }}>
            {otherServices.map((other) => (
              <button
                key={other.id}
                onClick={() => onNavigate && onNavigate(`services/${other.id}`)}
                className="btn-prolaps-white"
                style={{
                  fontSize: '0.88rem',
                  padding: '0.65rem 1.25rem',
                  borderRadius: 'var(--radius-full)'
                }}
              >
                <span>{other.title}</span>
                <ArrowRight size={14} />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="section-spacing" style={{ position: 'relative' }}>
        <div className="container">
          <div 
            className="glass-card card-padded cta-banner-wrapper"
            style={{
              textAlign: 'center',
              paddingTop: '4rem',
              paddingBottom: '4rem'
            }}
          >
            <div style={{ maxWidth: '640px', margin: '0 auto' }}>
              <span className="badge badge-brand" style={{ marginBottom: '1rem' }}>
                <Sparkles size={12} /> Partner With Cynex Digital
              </span>

              <h2 style={{ fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, marginBottom: '1rem', lineHeight: 1.2 }}>
                Ready to scale your business with <br />
                <span className="text-gradient">{service.title}?</span>
              </h2>

              <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.6, marginBottom: '2rem' }}>
                Book a consultation with our senior specialists. We'll review your objectives and deliver a custom roadmap within 24 hours.
              </p>

              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                <button onClick={handleDiscuss} className="btn-prolaps-blue" style={{ fontSize: '0.96rem', padding: '0.75rem 1.8rem' }}>
                  <span>Start A Conversation</span>
                  <ArrowUpRight size={16} />
                </button>

                <button onClick={() => onNavigate && onNavigate('services')} className="btn-prolaps-white">
                  <span>View All Services</span>
                  <ArrowRight size={15} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
