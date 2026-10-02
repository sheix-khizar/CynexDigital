import React from 'react';
import { team, agencyValues } from '../../data/teamData';
import { Award, CheckCircle2, MapPin, Users, Globe2, ShieldCheck, ArrowRight, ArrowUpRight, ChevronRight, Sparkles } from 'lucide-react';

export default function AboutSection({ onContactClick, isDedicatedPage = false, onNavigate }) {
  return (
    <section id="about" className={`page-fade-in ${isDedicatedPage ? 'page-hero-header' : 'section-spacing'}`} style={{ position: 'relative' }}>
      <div className="container">
        {/* ProLaps Style Dedicated Page Header with Breadcrumbs */}
        {isDedicatedPage ? (
          <div style={{ marginBottom: '3.5rem' }}>
            <div className="page-breadcrumbs">
              <button onClick={() => onNavigate && onNavigate('home')}>Home</button>
              <ChevronRight size={14} />
              <span style={{ color: 'var(--text-primary)' }}>About Us</span>
            </div>

            <div className="prolaps-eyebrow" style={{ marginBottom: '1rem' }}>
              <span className="prolaps-live-dot" />
              <span>ABOUT CYNEX DIGITAL</span>
            </div>

            <h1 className="page-editorial-title">
              Built on creativity. <br />
              <em>Driven by digital.</em>
            </h1>

            <p className="page-editorial-sub">
              We combine creativity, technology, and strategic thinking to craft digital experiences that build brand authority and drive sustainable business growth.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center', marginBottom: '2.5rem' }}>
              <button
                onClick={() => onNavigate ? onNavigate('contact') : (onContactClick && onContactClick())}
                className="btn-prolaps-blue"
              >
                <span>Work with our studio</span>
                <ArrowUpRight size={16} className="cta-arrow" />
              </button>

              <button
                onClick={() => onNavigate && onNavigate('work')}
                className="btn-prolaps-white"
              >
                <span>Explore our work</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        ) : (
          /* Home page section header */
          <div style={{ textAlign: 'center', maxWidth: '680px', margin: '0 auto 4rem auto' }}>
            <span className="badge badge-brand" style={{ marginBottom: '0.75rem' }}>
              Who We Are
            </span>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '1rem' }}>
              Creative Solutions. <span className="text-gradient">Digital Growth.</span>
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: '1.6' }}>
              We craft your digital presence ⚡ Helping businesses build their online footprint, strengthen their brand identity, and achieve sustainable digital growth.
            </p>
          </div>
        )}

        {/* Studio Philosophy Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
            gap: '2.5rem',
            alignItems: 'center',
            marginBottom: '5rem'
          }}
        >
          <div>
            <h3 style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: '1.25rem', letterSpacing: '-0.02em' }}>
              We craft your digital presence <br />with <span className="text-gradient">tailored, modern solutions</span>.
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: '1.7', marginBottom: '1.25rem' }}>
              In today's fast-moving landscape, having a disjointed presence slows your business down. At Cynex Digital, we combine brand identity, modern web solutions, social media management, paid advertising, UI/UX design, and AI automation into a unified growth engine.
            </p>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: '1.7', marginBottom: '2rem' }}>
              Based in Rawalpindi, Pakistan, our agency partners with ambitious businesses locally and across the United Arab Emirates, United Kingdom, United States, and worldwide. Our focus is on practical, modern, and tailored solutions that support businesses at every stage of their digital journey.
            </p>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <button onClick={() => onNavigate ? onNavigate('contact') : (onContactClick && onContactClick())} className="btn-prolaps-blue">
                <span>Start A Conversation</span>
                <ArrowUpRight size={16} />
              </button>
            </div>
          </div>

          {/* Core Values 2x2 Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 200px), 1fr))',
              gap: '1.25rem'
            }}
          >
            {agencyValues.map((val, idx) => (
              <div
                key={idx}
                className="glass-card"
                style={{ padding: '1.5rem', borderRadius: 'var(--radius-md)' }}
              >
                <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#0f62fe', marginBottom: '0.75rem' }} />
                <h4 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: '0.5rem' }}>
                  {val.title}
                </h4>
                <p style={{ fontSize: '0.84rem', color: 'var(--text-secondary)', lineHeight: '1.5' }}>
                  {val.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        {/* <div>
          <div style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto 3rem auto' }}>
            <span className="badge badge-brand" style={{ marginBottom: '0.5rem' }}>Our Team</span>
            <h3 style={{ fontSize: '1.8rem', fontWeight: 800 }}>The Minds Behind Cynex Digital</h3>
            <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', marginTop: '0.5rem' }}>
              Dedicated specialists in branding, web solutions, social media, paid media, and digital experience design.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '2rem'
            }}
          >
            {team.map((member) => (
              <div
                key={member.id}
                className="team-card-executive"
              > */}
                {/* Executive Top Photo Header */}
                {/* <div className="team-photo-wrapper">
                  {member.image ? (
                    <img
                      src={member.image}
                      alt={member.name}
                      className="team-photo-img"
                      loading="lazy"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        const fallback = e.currentTarget.parentElement?.querySelector('.team-photo-fallback');
                        if (fallback) fallback.style.display = 'flex';
                      }}
                    />
                  ) : null}
                  <div className="team-photo-overlay" /> */}

                  {/* Fallback if image fails or missing */}
                  {/* <div
                    className="team-photo-fallback"
                    style={{
                      display: member.image ? 'none' : 'flex',
                      width: '100%',
                      height: '100%',
                      background: member.gradient,
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '3.5rem',
                      fontWeight: 800,
                      color: '#ffffff',
                      userSelect: 'none'
                    }}
                  >
                    {member.initials}
                  </div>
                </div> */}

                {/* Information Block matching Reference Card */}
                {/* <div className="team-info-body">
                  <h4 className="team-member-name">
                    {member.name}
                  </h4>

                  <div className="team-member-role">
                    {member.role}
                  </div> */}

                  {/* Mission / Pull Quote with Brand Accent Bar */}
                  {/* <div className="team-member-quote">
                    "{member.quote || member.bio}"
                  </div> */}

                  {/* Specialties Chips */}
                  {/* <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginTop: 'auto', paddingTop: '0.25rem' }}>
                    {member.specialties.map((spec, sIdx) => (
                      <span
                        key={sIdx}
                        style={{
                          fontSize: '0.72rem',
                          fontWeight: 600,
                          padding: '0.25rem 0.65rem',
                          borderRadius: 'var(--radius-full)',
                          background: 'var(--bg-surface-elevated)',
                          border: '1px solid var(--border-color)',
                          color: 'var(--text-muted)'
                        }}
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
}
