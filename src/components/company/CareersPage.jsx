import React, { useState } from 'react';
import { 
  MapPin, Clock, ArrowUpRight, 
  Sparkles, ChevronRight, Zap, Laptop, Award
} from 'lucide-react';

export default function CareersPage({ onNavigate }) {
  const [selectedDepartment, setSelectedDepartment] = useState('All');

  const departments = ['All', 'Engineering', 'Design', 'Marketing', 'AI & Automation'];

  const getMailtoLink = (roleTitle) => {
    const subject = encodeURIComponent(`Application for ${roleTitle} - Cynex Digital`);
    const body = encodeURIComponent(
`Hi Cynex Digital Hiring Squad,

I am writing to apply for the ${roleTitle} position at Cynex Digital.

Full Name: 
Phone / WhatsApp: 
Current Location / Timezone: 
Portfolio / GitHub / Case Studies URL: 
LinkedIn Profile: 
Years of Relevant Experience: 

Brief Introduction & Why I'm a Great Fit:
[Tell us about your background, relevant projects, and what makes you stand out]

Looking forward to hearing from you.

Best regards,`
    );
    return `mailto:careers@cynexdigital.pk?subject=${subject}&body=${body}`;
  };

  const perks = [
    {
      icon: Laptop,
      title: "Remote-First Flexibility",
      desc: "Work asynchronously from anywhere. We care about high-impact outcomes, not arbitrary desk hours.",
      color: "#0f62fe"
    },
    {
      icon: Zap,
      title: "Global Client Spectrum",
      desc: "Direct hands-on ownership scaling innovative ventures across Pakistan, the UAE, UK, and USA.",
      color: "#8b5cf6"
    },
    {
      icon: Award,
      title: "Above-Market Comp & Bonuses",
      desc: "Competitive compensation packages with direct profit-sharing and performance bonuses on client milestones.",
      color: "#10b981"
    },
    {
      icon: Sparkles,
      title: "Learning & Tool Stipend",
      desc: "Annual budget for premium tools, AI subscriptions, design assets, and top-tier learning resources.",
      color: "#f59e0b"
    }
  ];

  const openPositions = [
    // {
    //   id: "sr-frontend-engineer",
    //   title: "Senior React & Modern Web Engineer",
    //   department: "Engineering",
    //   type: "Full-time",
    //   location: "Remote",
    //   experience: "3+ Years",
    //   overview: "Lead the frontend architecture of high-converting web solutions, fluid micro-interactions, and bespoke client platforms.",
    //   responsibilities: [
    //     "Architect clean, performant React & Vite applications with modern animation systems (Lenis, CSS transitions, Framer).",
    //     "Translate high-fidelity Figma components into responsive, pixel-perfect web interfaces.",
    //     "Integrate REST, GraphQL APIs, and custom headless CMS platforms.",
    //     "Champion web performance, Core Web Vitals, and accessibility across all browser targets."
    //   ],
    //   skills: ["React", "JavaScript (ES6+)", "Vite / Next.js", "Modern Vanilla CSS", "Figma", "REST APIs"]
    // },
    // {
    //   id: "sr-product-designer",
    //   title: "Senior UI/UX & Digital Product Designer",
    //   department: "Design",
    //   type: "Full-time",
    //   location: "Remote",
    //   experience: "3+ Years",
    //   overview: "Craft world-class digital brand aesthetics, user journeys, component libraries, and interactive prototypes for scaling businesses.",
    //   responsibilities: [
    //     "Design conversion-focused website designs, editorial typography hierarchies, and mobile interfaces.",
    //     "Build and maintain robust Figma design systems with interactive variants and auto-layouts.",
    //     "Collaborate closely with frontend engineers to ensure design fidelity from concept to launch.",
    //     "Conduct user journey teardowns and implement UX heuristics that elevate user retention."
    //   ],
    //   skills: ["Figma", "Design Systems", "UI/UX", "Typography", "Interactive Prototyping", "Brand Identity"]
    // },
    // {
    //   id: "performance-media-buyer",
    //   title: "Performance Marketing Lead (Meta & Google Ads)",
    //   department: "Marketing",
    //   type: "Full-time",
    //   location: "Remote / Hybrid",
    //   experience: "2+ Years",
    //   overview: "Scale client ad accounts profitably with disciplined media buying, iterative creative testing, and deep attribution modeling.",
    //   responsibilities: [
    //     "Manage, optimize, and scale 6-figure monthly ad spend across Meta Ads Manager, Google Ads, and TikTok.",
    //     "Develop high-converting direct-response creative briefs in collaboration with our video editors.",
    //     "Build automated performance reporting dashboards and analyze ROAS, MER, and CAC metrics.",
    //     "Conduct continuous A/B split testing on hooks, angles, landing pages, and audience cohorts."
    //   ],
    //   skills: ["Meta Ads", "Google Ads", "TikTok Ads", "Attribution Modeling", "Creative Strategy", "GA4"]
    // },
    // {
    //   id: "video-editor-motion",
    //   title: "Creative Video Editor & Motion Designer",
    //   department: "Design",
    //   type: "Full-time",
    //   location: "Remote",
    //   experience: "2+ Years",
    //   overview: "Create viral short-form Reels, TikToks, and motion ad creatives that capture attention in the first 2 seconds.",
    //   responsibilities: [
    //     "Edit fast-paced, high-retention vertical videos (Reels, TikToks, Shorts) tailored to direct-response brands.",
    //     "Design animated lower thirds, Kinetic typography, sound design, and product callout motion graphics.",
    //     "Iterate rapidly based on hook-retention metrics and creative performance analytics.",
    //     "Maintain organized asset pipelines and deliver publication-ready cutdowns efficiently."
    //   ],
    //   skills: ["Premiere Pro", "After Effects", "CapCut", "Kinetic Typography", "Sound Design", "Direct-Response Hooks"]
    // },
    // {
    //   id: "ai-workflow-engineer",
    //   title: "AI Automation & Workflow Engineer",
    //   department: "AI & Automation",
    //   type: "Full-time",
    //   location: "Remote",
    //   experience: "2+ Years",
    //   overview: "Build autonomous lead generation bots, CRM synchronization pipelines, and custom AI agent workflows for enterprise clients.",
    //   responsibilities: [
    //     "Build resilient end-to-end automation pipelines using Make.com, n8n, webhooks, and REST APIs.",
    //     "Develop conversational AI assistants using OpenAI API, Anthropic, and WhatsApp Cloud API.",
    //     "Synchronize incoming lead data seamlessly with HubSpot, Notion, Google Sheets, and custom databases.",
    //     "Monitor automation health, error-handling protocols, and prompt latency optimizations."
    //   ],
    //   skills: ["Make.com / n8n", "OpenAI APIs", "Prompt Engineering", "Webhooks", "WhatsApp Cloud API", "Node.js"]
    // }
  ];

  const filteredPositions = selectedDepartment === 'All'
    ? openPositions
    : openPositions.filter(p => p.department === selectedDepartment);

  return (
    <div className="page-fade-in" style={{ position: 'relative' }}>
      {/* Header Section */}
      <section className="page-hero-header" style={{ position: 'relative' }}>
        <div className="container">
          <div style={{ marginBottom: '3.5rem' }}>
            <div className="page-breadcrumbs">
              <button onClick={() => onNavigate && onNavigate('home')}>Home</button>
              <ChevronRight size={14} />
              <button onClick={() => onNavigate && onNavigate('about')}>Company</button>
              <ChevronRight size={14} />
              <span style={{ color: 'var(--text-primary)' }}>Careers</span>
            </div>

            <div className="prolaps-eyebrow" style={{ marginBottom: '1rem' }}>
              <span className="prolaps-live-dot" />
              <span>JOIN OUR CORE SQUAD</span>
            </div>

            <h1 className="page-editorial-title">
              Build the future of digital. <br />
              Grow with <em>Cynex Digital.</em>
            </h1>

            <p className="page-editorial-sub">
              We are a senior squad of performance media buyers, full-stack builders, brand strategists, and AI architects. We move fast, prioritize craft, and partner with ambitious brands worldwide.
            </p>
          </div>

          {/* Perks & Culture Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '1.25rem',
              marginBottom: '5rem'
            }}
          >
            {perks.map((perk, idx) => {
              const Icon = perk.icon;
              return (
                <div
                  key={idx}
                  className="glass-card"
                  style={{
                    padding: '1.75rem',
                    borderRadius: 'var(--radius-lg)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.85rem'
                  }}
                >
                  <div
                    style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: '12px',
                      background: 'var(--bg-surface-elevated)',
                      border: '1px solid var(--border-color)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    <Icon size={20} color={perk.color} />
                  </div>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 700, margin: 0 }}>
                    {perk.title}
                  </h3>
                  <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>
                    {perk.desc}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Open Roles Section */}
          <div id="open-roles" style={{ marginBottom: '4rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1.5rem', marginBottom: '2.5rem' }}>
              <div>
                <span className="badge badge-brand" style={{ marginBottom: '0.5rem' }}>Open Opportunities</span>
                <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.35rem)', fontWeight: 800 }}>
                  Current Open Positions
                </h2>
              </div>

              {/* Department Filter Pills */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                {departments.map((dept) => (
                  <button
                    key={dept}
                    onClick={() => setSelectedDepartment(dept)}
                    className={`prolaps-chat-pill ${selectedDepartment === dept ? 'active' : ''}`}
                    style={{ fontSize: '0.82rem' }}
                  >
                    {dept}
                  </button>
                ))}
              </div>
            </div>

            {/* Job Listings List */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {filteredPositions.length > 0 ? (
                filteredPositions.map((pos) => {
                  const mailtoUrl = getMailtoLink(pos.title);
                  return (
                    <div
                      key={pos.id}
                      className="glass-card"
                      style={{
                        borderRadius: 'var(--radius-lg)',
                        padding: '1.75rem',
                        transition: 'all 0.25s ease'
                      }}
                    >
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1.25rem' }}>
                        <div style={{ maxWidth: '640px' }}>
                          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.65rem', alignItems: 'center' }}>
                            <span 
                              style={{ 
                                fontSize: '0.72rem', 
                                fontWeight: 700, 
                                textTransform: 'uppercase', 
                                padding: '0.2rem 0.6rem', 
                                borderRadius: '9999px',
                                background: 'rgba(15, 98, 254, 0.1)',
                                color: '#0f62fe'
                              }}
                            >
                              {pos.department}
                            </span>
                            <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                              <Clock size={13} /> {pos.type}
                            </span>
                            <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                              <MapPin size={13} /> {pos.location}
                            </span>
                            <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                              · {pos.experience}
                            </span>
                          </div>

                          <h3 style={{ fontSize: '1.35rem', fontWeight: 800, marginBottom: '0.5rem' }}>
                            {pos.title}
                          </h3>
                          <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1rem' }}>
                            {pos.overview}
                          </p>

                          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                            {pos.skills.map((skill, sIdx) => (
                              <span
                                key={sIdx}
                                style={{
                                  fontSize: '0.75rem',
                                  padding: '0.25rem 0.65rem',
                                  borderRadius: '6px',
                                  background: 'var(--bg-surface-elevated)',
                                  border: '1px solid var(--border-color)',
                                  color: 'var(--text-secondary)'
                                }}
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div style={{ display: 'flex', alignItems: 'center' }}>
                          <a
                            href={mailtoUrl}
                            className="btn-prolaps-blue"
                            style={{ padding: '0.6rem 1.4rem', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}
                          >
                            <span>Apply Now</span>
                            <ArrowUpRight size={15} />
                          </a>
                        </div>
                      </div>
                    </div>
                  );
                })
              ) : (
                <div
                  className="glass-card"
                  style={{
                    padding: '3.5rem 2rem',
                    borderRadius: '24px',
                    textAlign: 'center',
                    border: '1px solid var(--border-color)',
                    background: 'var(--bg-surface)'
                  }}
                >
                  <div
                    style={{
                      width: '52px',
                      height: '52px',
                      borderRadius: '16px',
                      background: 'rgba(15, 98, 254, 0.08)',
                      border: '1px solid rgba(15, 98, 254, 0.2)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 1.25rem auto'
                    }}
                  >
                    <Clock size={22} color="#0f62fe" />
                  </div>

                  <h3 style={{ fontSize: '1.35rem', fontWeight: 800, marginBottom: '0.5rem' }}>
                    {selectedDepartment === 'All' 
                      ? 'No Active Openings Right Now' 
                      : `No Open Positions in ${selectedDepartment}`}
                  </h3>

                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', maxWidth: '500px', margin: '0 auto 1.5rem auto', lineHeight: 1.6 }}>
                  </p>

                  <div style={{ display: 'flex', justifyContent: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
                    <a
                      href={getMailtoLink("Spontaneous Candidate Application")}
                      className="btn-prolaps-blue"
                      style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', textDecoration: 'none', padding: '0.6rem 1.35rem' }}
                    >
                      <span>Send General Application</span>
                      <ArrowUpRight size={15} />
                    </a>
                    {selectedDepartment !== 'All' && (
                      <button
                        onClick={() => setSelectedDepartment('All')}
                        className="btn btn-secondary"
                        style={{ padding: '0.6rem 1.2rem' }}
                      >
                        <span>View All Departments</span>
                      </button>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
