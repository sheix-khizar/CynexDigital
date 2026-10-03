import React from 'react';
import { Search, Sparkles, Megaphone, TrendingUp, CheckCircle2, Compass, Layers, Rocket, BarChart3 } from 'lucide-react';

export default function ProcessSection() {
  const steps = [
    {
      num: "01",
      icon: <Compass size={22} color="var(--cyan-light)" />,
      title: "Discovery & Digital Audit",
      duration: "Stage 1",
      desc: "We analyze your digital presence, audience psychology, and competitors to map high-leverage growth opportunities.",
      points: ["Digital Presence Audit", "Audience & Competitor Recon", "Strategic Growth Roadmap"]
    },
    {
      num: "02",
      icon: <Sparkles size={22} color="#3b82f6" />,
      title: "Creative & Brand Architecture",
      duration: "Stage 2",
      desc: "Our creative team designs distinct visual identities, responsive web layouts, and high-converting ad concepts.",
      points: ["Brand Identity & Visuals", "Modern UI/UX Design", "High-Hook Creative Angles"]
    },
    {
      num: "03",
      icon: <Rocket size={22} color="var(--violet-light)" />,
      title: "Production & Multi-Channel Launch",
      duration: "Stage 3",
      desc: "We deploy your fast responsive website, publish organic video content, and launch targeted ad campaigns.",
      points: ["Web Solution Deployment", "Social Content Engine", "Paid Campaign Setup & Tracking"]
    },
    {
      num: "04",
      icon: <TrendingUp size={22} color="#10b981" />,
      title: "Optimization & Digital Scaling",
      duration: "Ongoing",
      desc: "We monitor performance, refine creative variations, optimize conversion paths, and automate workflows.",
      points: ["Real-Time ROI Analytics", "Creative & Funnel CRO", "AI Automation Workflows"]
    }
  ];

  return (
    <section className="section-spacing" style={{ position: 'relative', background: 'rgba(255,255,255,0.01)' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '650px', margin: '0 auto 3.5rem auto' }}>
          <span className="badge badge-brand" style={{ marginBottom: '0.75rem' }}>
            Our Proven Methodology
          </span>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '1rem' }}>
            Built on creativity, <span className="text-gradient">driven by digital</span>.
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: '1.6' }}>
            Our structured 4-stage framework engineered to take your brand from audit to scalable digital growth.
          </p>
        </div>

        {/* Steps Grid */}
        <div 
          className="reveal-stagger process-steps-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '1.75rem'
          }}
        >
          {steps.map((step, idx) => (
            <div 
              key={idx}
              className="glass-card card-padded"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative'
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
                  <div 
                    style={{
                      width: '46px',
                      height: '46px',
                      borderRadius: 'var(--radius-md)',
                      background: 'var(--bg-surface-elevated, rgba(255,255,255,0.05))',
                      border: '1px solid var(--border-color)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    {step.icon}
                  </div>
                  <span className="badge badge-outline" style={{ fontSize: '0.72rem' }}>
                    {step.duration}
                  </span>
                </div>

                <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.75rem' }}>
                  {step.title}
                </h3>

                <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', lineHeight: '1.6', marginBottom: '1.25rem' }}>
                  {step.desc}
                </p>
              </div>

              {/* Checkpoints */}
              <div 
                className="process-checkpoints-list"
                style={{ borderTop: '1px solid var(--border-color)', paddingTop: '1rem', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}
              >
                {step.points.map((pt, pIdx) => (
                  <div key={pIdx} style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                    <CheckCircle2 size={12} color="var(--cyan-light)" />
                    <span>{pt}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
