import React, { useState } from 'react';
import { projects } from '../../data/projectsData';
import ProjectDetailModal from './ProjectDetailModal';
import { ArrowUpRight, Sparkles, ChevronRight } from 'lucide-react';

export default function WorkSection({ _onDiscussProject, isDedicatedPage = false, onNavigate }) {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = ['All', 'Web Solutions', 'Branding & Design', 'Social Media', 'Paid Ads', 'UI/UX Design', 'AI Automation'];

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(p => p.tag === activeFilter);

  // If on home, show first 3 items, if on dedicated page show all
  const displayedProjects = isDedicatedPage ? filteredProjects : filteredProjects.slice(0, 3);

  return (
    <section id="work" className={`page-fade-in ${isDedicatedPage ? 'page-hero-header' : 'section-spacing'}`} style={{ position: 'relative' }}>
      <div className="container">
        {/* ProLaps Style Dedicated Page Header with Breadcrumbs */}
        {isDedicatedPage ? (
          <div style={{ marginBottom: '3.5rem' }}>
            <div className="page-breadcrumbs">
              <button onClick={() => onNavigate && onNavigate('home')}>Home</button>
              <ChevronRight size={14} />
              <span style={{ color: 'var(--text-primary)' }}>Selected Work</span>
            </div>

            <div className="prolaps-eyebrow" style={{ marginBottom: '1rem' }}>
              <span className="prolaps-live-dot" />
              <span>SELECTED CLIENT WORK & CASE STUDIES</span>
            </div>

            <h1 className="page-editorial-title">
              Creative Solutions. <br />
              <em>Crafting your digital presence.</em>
            </h1>

            <p className="page-editorial-sub">
              From memorable brand identities and modern web solutions to viral social media content, paid ad campaigns, and AI workflows. Explore our client outcomes below.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center', marginBottom: '2.5rem' }}>
              <button
                onClick={() => onNavigate && onNavigate('contact')}
                className="btn-prolaps-blue"
              >
                <span>Discuss a similar campaign</span>
                <ArrowUpRight size={16} className="cta-arrow" />
              </button>
            </div>
          </div>
        ) : (
          /* Home page section header */
          <div style={{ textAlign: 'center', maxWidth: '680px', margin: '0 auto 3rem auto' }}>
            <span className="badge badge-brand" style={{ marginBottom: '0.75rem' }}>
              Proven Track Record
            </span>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '1rem' }}>
              Case studies built on <span className="text-gradient">real client outcomes</span>.
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: '1.6' }}>
              Built on creativity, driven by digital. Every case study represents impactful branding, modern web solutions, viral social reach, and measurable client growth.
            </p>
          </div>
        )}

        {/* Filter Buttons */}
        <div 
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.6rem',
            justifyContent: isDedicatedPage ? 'flex-start' : 'center',
            marginBottom: '3rem'
          }}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={activeFilter === cat ? 'btn btn-primary btn-sm' : 'btn btn-secondary btn-sm'}
              style={{
                borderRadius: 'var(--radius-full)',
                fontSize: '0.84rem'
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2rem'
          }}
        >
          {displayedProjects.map((project) => (
            <div 
              key={project.id}
              className="glass-card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                cursor: 'pointer',
                borderRadius: 'var(--radius-lg)',
              }}
              onClick={() => setSelectedProject(project)}
            >
              {/* Photo Visual Header with Client Tag */}
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
                  background: project.gradient
                }}
              >
                {/* Background Image */}
                {project.image && (
                  <img
                    src={project.image}
                    alt={project.title}
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
                    {project.client}
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
                    {project.metrics[0].value} {project.metrics[0].label}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                  <span className="badge badge-brand" style={{ fontSize: '0.72rem' }}>
                    {project.tag}
                  </span>
                </div>

                <h3 style={{ fontSize: '1.35rem', fontWeight: 800, marginBottom: '0.75rem', lineHeight: 1.3 }}>
                  {project.title}
                </h3>

                <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: 1.6, marginBottom: '1.5rem', flexGrow: 1 }}>
                  {project.description}
                </p>

                {/* KPI Metrics Badges Row */}
                <div 
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    gap: '0.5rem',
                    padding: '0.85rem 0',
                    borderTop: '1px solid var(--border-color)',
                    borderBottom: '1px solid var(--border-color)',
                    marginBottom: '1.25rem',
                    textAlign: 'center'
                  }}
                >
                  {project.metrics.map((m, idx) => (
                    <div key={idx}>
                      <div style={{ fontWeight: 800, fontSize: '0.95rem', color: '#0f62fe' }}>
                        {m.value}
                      </div>
                      <div style={{ fontSize: '0.68rem', color: 'var(--text-muted)' }}>
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Footer Link */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                    {project.platform}
                  </span>
                  <span style={{ fontSize: '0.85rem', fontWeight: 600, color: '#0f62fe', display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}>
                    Read Case Study <ArrowUpRight size={15} />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button on Home Preview */}
        {!isDedicatedPage && onNavigate && (
          <div style={{ textAlign: 'center', marginTop: '3.5rem' }}>
            <button
              onClick={() => onNavigate('work')}
              className="btn-prolaps-white"
              style={{ padding: '0.75rem 2rem' }}
            >
              <span>See All Case Studies & Results</span>
              <ArrowUpRight size={16} />
            </button>
          </div>
        )}
      </div>

      {/* Case Study Detail Modal */}
      <ProjectDetailModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
