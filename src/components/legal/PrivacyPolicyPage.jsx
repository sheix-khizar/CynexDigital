import React, { useState } from 'react';
import { 
  ShieldCheck, Lock, Eye, FileText, CheckCircle2, ChevronRight, 
  Mail, ArrowUpRight, Scale, Clock, Globe, KeyRound, AlertCircle
} from 'lucide-react';

export default function PrivacyPolicyPage({ onNavigate }) {
  const [activeSection, setActiveSection] = useState('scope');

  const policySections = [
    {
      id: 'scope',
      title: '1. Scope & Overview',
      content: (
        <>
          <p style={{ marginBottom: '1rem', lineHeight: '1.7', color: 'var(--text-secondary)' }}>
            This Privacy Policy explains how <strong>Cynex Digital</strong> ("we", "us", or "our"), an elite digital agency based in Rawalpindi, Punjab, Pakistan, collects, processes, and protects your information when you visit our website (<code>cynexdigital.pk</code>), interact with our digital marketing channels, or engage our agency for custom web development, paid advertising, branding, UI/UX, or AI automation services.
          </p>
          <p style={{ lineHeight: '1.7', color: 'var(--text-secondary)' }}>
            We adhere to strict data privacy principles and international standards (including GDPR and CCPA best practices) to ensure client proprietary assets, campaign data, and ad accounts remain private, secure, and confidential.
          </p>
        </>
      )
    },
    {
      id: 'information-collected',
      title: '2. Information We Collect',
      content: (
        <>
          <p style={{ marginBottom: '1rem', lineHeight: '1.7', color: 'var(--text-secondary)' }}>
            Depending on how you interact with Cynex Digital, we collect information across three core categories:
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '1.5rem' }}>
            <div style={{ padding: '1.25rem', background: 'var(--bg-surface-elevated)', borderRadius: '12px', border: '1px solid var(--border-color)' }}>
              <strong style={{ display: 'block', color: 'var(--text-primary)', marginBottom: '0.4rem', fontSize: '0.95rem' }}>
                A. Direct Information Provided by You
              </strong>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                Full name, professional email address, WhatsApp / phone number, company name, website URL, monthly advertising budget, target growth goals, and project scope details submitted via our contact forms or Discovery Estimator.
              </p>
            </div>

            <div style={{ padding: '1.25rem', background: 'var(--bg-surface-elevated)', borderRadius: '12px', border: '1px solid var(--border-color)' }}>
              <strong style={{ display: 'block', color: 'var(--text-primary)', marginBottom: '0.4rem', fontSize: '0.95rem' }}>
                B. Client Ad Accounts & Partner Assets
              </strong>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                When onboarded as an active client, you grant us partner/agency access to Meta Business Manager, Google Ads, TikTok Ads Manager, GA4, Shopify, or GitHub repositories. We access these strictly via authorized partner delegate roles and never request permanent root ownership credentials.
              </p>
            </div>

            <div style={{ padding: '1.25rem', background: 'var(--bg-surface-elevated)', borderRadius: '12px', border: '1px solid var(--border-color)' }}>
              <strong style={{ display: 'block', color: 'var(--text-primary)', marginBottom: '0.4rem', fontSize: '0.95rem' }}>
                C. Automated Website Analytics & Telemetry
              </strong>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                Standard browser telemetry including IP address (anonymized), device type, browser engine, operating system, pages viewed, time spent per case study, and referrer URLs collected via privacy-first analytics tools.
              </p>
            </div>
          </div>
        </>
      )
    },
    {
      id: 'how-we-use-data',
      title: '3. How We Use Your Information',
      content: (
        <>
          <p style={{ marginBottom: '1rem', lineHeight: '1.7', color: 'var(--text-secondary)' }}>
            We only process your information for lawful commercial and operational purposes:
          </p>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', paddingLeft: 0, marginBottom: '1.25rem' }}>
            {[
              "To generate bespoke growth proposals, scope timelines, and project estimates.",
              "To build, configure, deploy, and maintain custom web applications and branding deliverables.",
              "To analyze ad account ROAS, CAC, hook retention, and media performance on client behalf.",
              "To configure autonomous AI workflows, CRM automations, and transactional notifications.",
              "To send formal billing statements, milestones deliverables, and quarterly performance teardowns.",
              "To comply with legal obligations and enforce our mutual client service agreements."
            ].map((text, idx) => (
              <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                <CheckCircle2 size={16} color="#0f62fe" style={{ flexShrink: 0, marginTop: '3px' }} />
                <span>{text}</span>
              </li>
            ))}
          </ul>
        </>
      )
    },
    {
      id: 'nda-confidentiality',
      title: '4. Non-Disclosure & Client Confidentiality',
      content: (
        <>
          <div style={{ padding: '1.25rem', background: 'rgba(15, 98, 254, 0.05)', borderRadius: '12px', border: '1px solid rgba(15, 98, 254, 0.2)', marginBottom: '1.25rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
              <Lock size={18} color="#0f62fe" />
              <strong style={{ color: 'var(--text-primary)', fontSize: '0.95rem' }}>Mutual Non-Disclosure Guarantee</strong>
            </div>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
              All client revenue figures, ad spend allocations, unpublished product roadmaps, proprietary marketing angles, customer lists, and codebases are treated as <strong>Strictly Confidential</strong>. We execute formal NDAs prior to enterprise kickoff upon request.
            </p>
          </div>
          <p style={{ lineHeight: '1.7', color: 'var(--text-secondary)' }}>
            We never resell, lease, monetize, or publicly share raw client lead databases or internal ad data with any third party or competitor. Case studies showcased publicly on our website are either pre-approved by the client or scrubbed of identifiable customer data.
          </p>
        </>
      )
    },
    {
      id: 'third-party-services',
      title: '5. Third-Party Platforms & Tools',
      content: (
        <>
          <p style={{ marginBottom: '1rem', lineHeight: '1.7', color: 'var(--text-secondary)' }}>
            To deliver cutting-edge digital services, we interface with trusted cloud vendors and advertising networks:
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '0.9rem', marginBottom: '1.5rem' }}>
            {[
              { name: "Meta Business Suite", desc: "Performance advertising & catalog tracking", role: "Ad Network" },
              { name: "Google Marketing Platform", desc: "Google Ads, Search Console & GA4 telemetry", role: "Analytics & Ads" },
              { name: "Vercel & Netlify", desc: "Global edge CDN & static site hosting", role: "Infrastructure" },
              { name: "Make.com & OpenAI", desc: "Secure API integrations for AI automation", role: "Automation" }
            ].map((p, idx) => (
              <div key={idx} style={{ padding: '1rem', background: 'var(--bg-surface-elevated)', borderRadius: '10px', border: '1px solid var(--border-color)' }}>
                <span style={{ fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.06em', color: '#0f62fe', fontWeight: 700 }}>
                  {p.role}
                </span>
                <div style={{ fontWeight: 600, color: 'var(--text-primary)', marginTop: '0.2rem', fontSize: '0.92rem' }}>
                  {p.name}
                </div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>
                  {p.desc}
                </div>
              </div>
            ))}
          </div>
          <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
            Each third-party provider maintains their own comprehensive privacy protocols. We only share the minimum necessary programmatic tokens required to execute campaign and hosting deliverables.
          </p>
        </>
      )
    },
    {
      id: 'data-security',
      title: '6. Data Security & Storage',
      content: (
        <>
          <p style={{ marginBottom: '1rem', lineHeight: '1.7', color: 'var(--text-secondary)' }}>
            We implement enterprise-grade technical safeguards to prevent unauthorized data access, loss, or disclosure:
          </p>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', paddingLeft: 0, marginBottom: '1.25rem' }}>
            {[
              "Mandatory Two-Factor Authentication (2FA) across all agency credentials and client portals.",
              "End-to-end TLS 1.3 encryption for all web communications and data in transit.",
              "Role-Based Access Control (RBAC) ensuring only assigned project team members access project repositories.",
              "Periodic audits of agency delegate access and immediate revocation upon project handoff or milestone conclusion."
            ].map((text, idx) => (
              <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                <KeyRound size={16} color="#10b981" style={{ flexShrink: 0, marginTop: '3px' }} />
                <span>{text}</span>
              </li>
            ))}
          </ul>
        </>
      )
    },
    {
      id: 'cookies-tracking',
      title: '7. Cookies & Tracking Technologies',
      content: (
        <>
          <p style={{ marginBottom: '1rem', lineHeight: '1.7', color: 'var(--text-secondary)' }}>
            Our website uses minimal, functional cookies to optimize your browsing experience, remember your visual theme preference (Dark or Light Mode), and measure aggregate traffic performance.
          </p>
          <p style={{ lineHeight: '1.7', color: 'var(--text-secondary)' }}>
            You may disable cookies directly via your browser settings at any time without impacting your ability to browse our services, view case studies, or submit proposal requests.
          </p>
        </>
      )
    },
    {
      id: 'your-rights',
      title: '8. Your Rights & Data Portability',
      content: (
        <>
          <p style={{ marginBottom: '1rem', lineHeight: '1.7', color: 'var(--text-secondary)' }}>
            Regardless of your geographical location, you enjoy full control over your personal data:
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem', marginBottom: '1.25rem' }}>
            <div style={{ padding: '1rem', background: 'var(--bg-surface-elevated)', borderRadius: '10px', border: '1px solid var(--border-color)' }}>
              <div style={{ fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.25rem', fontSize: '0.9rem' }}>
                Right to Access
              </div>
              <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                Request a complete copy of all personal records or proposal correspondence held by Cynex Digital.
              </p>
            </div>
            <div style={{ padding: '1rem', background: 'var(--bg-surface-elevated)', borderRadius: '10px', border: '1px solid var(--border-color)' }}>
              <div style={{ fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.25rem', fontSize: '0.9rem' }}>
                Right to Erasure
              </div>
              <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                Request immediate purging of your contact records, discovery audits, or proposal drafts from our active databases.
              </p>
            </div>
            <div style={{ padding: '1rem', background: 'var(--bg-surface-elevated)', borderRadius: '10px', border: '1px solid var(--border-color)' }}>
              <div style={{ fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.25rem', fontSize: '0.9rem' }}>
                Right to Revocation
              </div>
              <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                Instruct our engineers to immediately remove agency partner permissions from your advertising or cloud suites.
              </p>
            </div>
          </div>
        </>
      )
    },
    {
      id: 'contact-officer',
      title: '9. Privacy Officer Contact',
      content: (
        <>
          <p style={{ marginBottom: '1.25rem', lineHeight: '1.7', color: 'var(--text-secondary)' }}>
            For privacy inquiries, data access requests, or custom NDA execution prior to project kickoff, contact our designated Data Protection Officer:
          </p>
          <div style={{ padding: '1.5rem', background: 'var(--bg-surface-elevated)', borderRadius: '14px', border: '1px solid var(--border-color)', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <Mail size={16} color="#0f62fe" />
              <span style={{ fontSize: '0.92rem', color: 'var(--text-primary)' }}>
                Email: <a href="mailto:privacy@cynexdigital.pk" style={{ color: '#0f62fe', fontWeight: 600 }}>privacy@cynexdigital.pk</a>
              </span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <Globe size={16} color="#0f62fe" />
              <span style={{ fontSize: '0.92rem', color: 'var(--text-primary)' }}>
                Studio: <strong>Rawalpindi, Punjab, Pakistan</strong>
              </span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <Clock size={16} color="#0f62fe" />
              <span style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>
                Response SLA: Within 24-48 business hours
              </span>
            </div>
          </div>
        </>
      )
    }
  ];

  return (
    <div className="page-fade-in" style={{ position: 'relative' }}>
      {/* Hero Header */}
      <section className="page-hero-header" style={{ position: 'relative' }}>
        <div className="container">
          <div style={{ marginBottom: '3.5rem' }}>
            <div className="page-breadcrumbs">
              <button onClick={() => onNavigate && onNavigate('home')}>Home</button>
              <ChevronRight size={14} />
              <button onClick={() => onNavigate && onNavigate('about')}>Company</button>
              <ChevronRight size={14} />
              <span style={{ color: 'var(--text-primary)' }}>Privacy Policy</span>
            </div>

            <div className="prolaps-eyebrow" style={{ marginBottom: '1rem' }}>
              <span className="prolaps-live-dot" />
              <span>CLIENT PRIVACY & DATA ETHICS</span>
            </div>

            <h1 className="page-editorial-title">
              Privacy Policy & <br />
              <em>Data Protection.</em>
            </h1>

            <p className="page-editorial-sub">
              How Cynex Digital safeguards client data, ad account credentials, marketing analytics, and confidentiality under rigorous enterprise standards.
            </p>

            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginTop: '1.5rem', fontSize: '0.84rem', color: 'var(--text-muted)', flexWrap: 'wrap' }}>
              <span>Effective Date: <strong>October 1, 2026</strong></span>
              <span>·</span>
              <span>Version: <strong>2.4 (Enterprise)</strong></span>
              <span>·</span>
              <span>Governing Jurisdiction: <strong>Pakistan & International Commercial Code</strong></span>
            </div>
          </div>

          {/* Trust Guarantees Strip */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))',
              gap: '1rem',
              marginBottom: '4rem'
            }}
          >
            {[
              { icon: Lock, title: "Full Client NDA", desc: "Campaign metrics & financials protected under strict confidentiality.", color: "#0f62fe" },
              { icon: ShieldCheck, title: "Zero Data Brokering", desc: "We never monetize, rent, or distribute client or lead databases.", color: "#10b981" },
              { icon: KeyRound, title: "Least Privilege Access", desc: "Granular partner permissions with enforced 2FA on all accounts.", color: "#8b5cf6" },
              { icon: Scale, title: "Compliance Ready", desc: "Aligned with international GDPR & CCPA privacy provisions.", color: "#f59e0b" }
            ].map((card, idx) => {
              const Icon = card.icon;
              return (
                <div
                  key={idx}
                  style={{
                    padding: '1.25rem',
                    borderRadius: '14px',
                    background: 'var(--bg-surface)',
                    border: '1px solid var(--border-color)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.5rem'
                  }}
                >
                  <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: `${card.color}15`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Icon size={16} color={card.color} />
                  </div>
                  <strong style={{ fontSize: '0.92rem', color: 'var(--text-primary)' }}>{card.title}</strong>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', lineHeight: 1.5, margin: 0 }}>{card.desc}</p>
                </div>
              );
            })}
          </div>

          {/* Main Legal Content with Sticky Quick-Jump Sidebar */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '260px 1fr',
              gap: '3.5rem',
              alignItems: 'start',
              paddingBottom: '6rem'
            }}
            className="legal-layout-grid"
          >
            {/* Sidebar Navigation */}
            <aside
              style={{
                position: 'sticky',
                top: '110px',
                background: 'var(--bg-surface)',
                border: '1px solid var(--border-color)',
                borderRadius: '16px',
                padding: '1.25rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.4rem'
              }}
            >
              <div style={{ fontSize: '0.74rem', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 700, color: 'var(--text-muted)', marginBottom: '0.5rem', paddingLeft: '0.5rem' }}>
                Table of Contents
              </div>
              {policySections.map((sec) => (
                <a
                  key={sec.id}
                  href={`#${sec.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveSection(sec.id);
                    const el = document.getElementById(sec.id);
                    if (el) {
                      const offset = 100;
                      const bodyRect = document.body.getBoundingClientRect().top;
                      const elementRect = el.getBoundingClientRect().top;
                      const elementPosition = elementRect - bodyRect;
                      const offsetPosition = elementPosition - offset;
                      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                    }
                  }}
                  style={{
                    padding: '0.55rem 0.75rem',
                    borderRadius: '8px',
                    fontSize: '0.84rem',
                    fontWeight: activeSection === sec.id ? 600 : 500,
                    color: activeSection === sec.id ? '#0f62fe' : 'var(--text-secondary)',
                    background: activeSection === sec.id ? 'rgba(15, 98, 254, 0.08)' : 'transparent',
                    textDecoration: 'none',
                    display: 'block',
                    transition: 'all 0.15s ease'
                  }}
                >
                  {sec.title}
                </a>
              ))}

              <div style={{ borderTop: '1px solid var(--border-color)', marginTop: '0.75rem', paddingTop: '0.75rem' }}>
                <button
                  onClick={() => onNavigate && onNavigate('terms')}
                  style={{
                    width: '100%',
                    padding: '0.5rem 0.75rem',
                    fontSize: '0.82rem',
                    color: 'var(--text-primary)',
                    background: 'var(--bg-surface-elevated)',
                    border: '1px solid var(--border-color)',
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    cursor: 'pointer'
                  }}
                >
                  <span>Terms & Conditions</span>
                  <ArrowUpRight size={13} />
                </button>
              </div>
            </aside>

            {/* Content Sections */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
              {policySections.map((sec) => (
                <section
                  key={sec.id}
                  id={sec.id}
                  style={{
                    padding: '2rem',
                    background: 'var(--bg-surface)',
                    borderRadius: '16px',
                    border: '1px solid var(--border-color)'
                  }}
                >
                  <h2
                    style={{
                      fontSize: '1.3rem',
                      fontWeight: 700,
                      color: 'var(--text-primary)',
                      marginBottom: '1.25rem',
                      fontFamily: 'var(--font-heading)'
                    }}
                  >
                    {sec.title}
                  </h2>
                  <div>{sec.content}</div>
                </section>
              ))}

              {/* Bottom Support Banner */}
              <div
                style={{
                  padding: '2rem',
                  borderRadius: '16px',
                  background: 'linear-gradient(135deg, rgba(15,98,254,0.06), rgba(124,58,237,0.06))',
                  border: '1px solid rgba(15,98,254,0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '1.5rem',
                  flexWrap: 'wrap'
                }}
              >
                <div>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.35rem' }}>
                    Need a tailored Enterprise NDA?
                  </h3>
                  <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', margin: 0 }}>
                    We provide bilateral NDAs for venture-backed startups and multinational corporate accounts before discovery audits.
                  </p>
                </div>
                <button
                  onClick={() => onNavigate && onNavigate('contact')}
                  className="btn-prolaps-blue"
                  style={{ padding: '0.65rem 1.35rem', fontSize: '0.88rem' }}
                >
                  <span>Request NDA & Proposal</span>
                  <ArrowUpRight size={14} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
