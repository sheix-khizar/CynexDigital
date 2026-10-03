import React from 'react';
import { 
  Lock, CheckCircle2, ChevronRight, 
  Mail, ArrowUpRight, Clock, Globe, KeyRound
} from 'lucide-react';

export default function PrivacyPolicyPage({ onNavigate }) {

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
                Full name, professional email address, WhatsApp / phone number, company name, website URL, monthly advertising budget, target growth goals, and project scope details submitted via our contact forms and proposal requests.
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
          <div style={{ maxWidth: '820px', margin: '0 auto 3rem auto', textAlign: 'left' }}>
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
              How Cynex Digital safeguards ad accounts, codebases, and client data under strict enterprise standards.
            </p>
          </div>

          {/* Simple Readable Content Container */}
          <div className="legal-reader-container">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              {policySections.map((sec) => (
                <article
                  key={sec.id}
                  id={sec.id}
                  className="legal-section-block"
                >
                  <h2>{sec.title}</h2>
                  <div>{sec.content}</div>
                </article>
              ))}

              {/* Bottom Quick-Switch Banner */}
              <div
                style={{
                  padding: '1.75rem',
                  borderRadius: '16px',
                  background: 'var(--bg-surface)',
                  border: '1px solid var(--border-color)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '1.25rem',
                  flexWrap: 'wrap'
                }}
              >
                <div>
                  <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.25rem' }}>
                    Looking for our Client Service Agreement?
                  </h3>
                  <p style={{ fontSize: '0.86rem', color: 'var(--text-secondary)', margin: 0 }}>
                    Read our commercial terms, milestone definitions, and 100% IP transfer framework.
                  </p>
                </div>
                <button
                  onClick={() => onNavigate && onNavigate('terms')}
                  className="btn-prolaps-blue"
                  style={{ padding: '0.65rem 1.25rem', fontSize: '0.88rem' }}
                >
                  <span>Terms & Conditions</span>
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
