import React, { useState } from 'react';
import { 
  FileText, CheckCircle2, ChevronRight, ShieldCheck, Scale, 
  ArrowUpRight, Clock, Award, Briefcase, Mail, Globe, Zap, AlertTriangle
} from 'lucide-react';

export default function TermsConditionsPage({ onNavigate }) {
  const [activeSection, setActiveSection] = useState('acceptance');

  const termsSections = [
    {
      id: 'acceptance',
      title: '1. Acceptance & Engagement Framework',
      content: (
        <>
          <p style={{ marginBottom: '1rem', lineHeight: '1.7', color: 'var(--text-secondary)' }}>
            These Terms & Conditions ("Terms", "Agreement") constitute a legally binding service framework between <strong>Cynex Digital</strong> ("Agency", "we", "us") and the individual or corporate entity ("Client", "you") commissioning our creative, digital marketing, website development, UI/UX, or AI automation services.
          </p>
          <p style={{ lineHeight: '1.7', color: 'var(--text-secondary)' }}>
            By accepting a formal Statement of Work (SOW), paying an initial milestone deposit, signing an electronic quote, or using our interactive proposal tools, you confirm your acceptance of these Terms.
          </p>
        </>
      )
    },
    {
      id: 'sow-scope',
      title: '2. Statements of Work & Scope Definition',
      content: (
        <>
          <p style={{ marginBottom: '1rem', lineHeight: '1.7', color: 'var(--text-secondary)' }}>
            All agency deliverables are governed by an agreed Statement of Work (SOW) or Monthly Retainer Agreement specifying:
          </p>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', paddingLeft: 0, marginBottom: '1.25rem' }}>
            {[
              "Clear technical & creative deliverable specifications (e.g. Figma wireframes, React frontends, TikTok video cuts).",
              "Agile sprint timelines, review checkpoints, and target deployment dates.",
              "Fixed milestone pricing or monthly retainer investment amounts.",
              "Explicitly excluded items (scope boundaries) to maintain delivery velocity."
            ].map((text, idx) => (
              <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                <CheckCircle2 size={16} color="#0f62fe" style={{ flexShrink: 0, marginTop: '3px' }} />
                <span>{text}</span>
              </li>
            ))}
          </ul>
          <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
            Any feature additions, architectural refactors, or new creative angles requested outside the initial SOW are managed via our transparent <em>Change Order</em> process at our prevailing hourly or sprint rate.
          </p>
        </>
      )
    },
    {
      id: 'ip-ownership',
      title: '3. Intellectual Property & Asset Ownership',
      content: (
        <>
          <div style={{ padding: '1.25rem', background: 'rgba(16, 185, 129, 0.05)', borderRadius: '12px', border: '1px solid rgba(16, 185, 129, 0.25)', marginBottom: '1.25rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
              <ShieldCheck size={18} color="#10b981" />
              <strong style={{ color: 'var(--text-primary)', fontSize: '0.95rem' }}>100% Client Ownership Guarantee</strong>
            </div>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
              Upon full and final settlement of all applicable invoices for a project, <strong>all final deliverables</strong>—including bespoke React source code, custom Figma designs, exported 3D/video creatives, and marketing copy—become the sole intellectual property of the Client.
            </p>
          </div>
          <p style={{ lineHeight: '1.7', color: 'var(--text-secondary)', marginBottom: '1rem' }}>
            <strong>Agency Portfolio Rights:</strong> Unless explicitly restricted by a separate, signed Non-Disclosure Agreement (NDA), Cynex Digital retains a perpetual, non-exclusive right to showcase completed creative assets, design system screens, and high-level campaign growth metrics in our agency case studies, website portfolio, and pitch decks.
          </p>
          <p style={{ lineHeight: '1.7', color: 'var(--text-secondary)' }}>
            <strong>Pre-Existing Frameworks:</strong> Open-source libraries (e.g. React, Vite, Lucide icons, Lenis) and Cynex Digital’s internal boilerplate modules remain subject to their respective open-source licenses.
          </p>
        </>
      )
    },
    {
      id: 'fees-payment',
      title: '4. Fees, Invoicing & Retainer Terms',
      content: (
        <>
          <p style={{ marginBottom: '1rem', lineHeight: '1.7', color: 'var(--text-secondary)' }}>
            Our commercial terms prioritize transparency and predictable billing:
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem', marginBottom: '1.25rem' }}>
            <div style={{ padding: '1.25rem', background: 'var(--bg-surface-elevated)', borderRadius: '12px', border: '1px solid var(--border-color)' }}>
              <span style={{ fontSize: '0.74rem', textTransform: 'uppercase', letterSpacing: '0.06em', color: '#0f62fe', fontWeight: 700 }}>
                Fixed Milestone Projects
              </span>
              <p style={{ fontSize: '0.86rem', color: 'var(--text-secondary)', marginTop: '0.4rem', lineHeight: 1.6 }}>
                Standard project cadence requires a 50% mobilization deposit prior to sprint commencement, with the remaining 50% balance due upon staging demo sign-off prior to production DNS cutover.
              </p>
            </div>
            <div style={{ padding: '1.25rem', background: 'var(--bg-surface-elevated)', borderRadius: '12px', border: '1px solid var(--border-color)' }}>
              <span style={{ fontSize: '0.74rem', textTransform: 'uppercase', letterSpacing: '0.06em', color: '#10b981', fontWeight: 700 }}>
                Monthly Growth Retainers
              </span>
              <p style={{ fontSize: '0.86rem', color: 'var(--text-secondary)', marginTop: '0.4rem', lineHeight: 1.6 }}>
                Performance marketing and ongoing retainer services are billed on a 30-day advance schedule. Dedicated squad allocation begins immediately upon receipt of monthly retainer payment.
              </p>
            </div>
          </div>
          <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
            Invoices are payable via direct electronic bank wire (Pakistan IBAN / International SWIFT), corporate Stripe checkout, or authorized international digital transfer. Invoices unpaid after 14 days may trigger a temporary freeze on staging environments and media management.
          </p>
        </>
      )
    },
    {
      id: 'client-feedback',
      title: '5. Client Review Cycles & Approvals',
      content: (
        <>
          <p style={{ marginBottom: '1rem', lineHeight: '1.7', color: 'var(--text-secondary)' }}>
            High-velocity project execution requires responsive collaboration:
          </p>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', paddingLeft: 0, marginBottom: '1.25rem' }}>
            {[
              "Each major design or development phase includes up to 2 comprehensive rounds of structured feedback.",
              "Client agrees to review staging previews and deliver constructive feedback within 5 business days.",
              "If no feedback is provided within 10 business days of delivery, milestones are deemed constructively accepted to maintain sprint velocity.",
              "Client is responsible for providing high-res brand logos, raw footage, and brand copy in a timely manner."
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
      id: 'third-party-spend',
      title: '6. Media Ad Spend & Third-Party Software',
      content: (
        <>
          <p style={{ marginBottom: '1rem', lineHeight: '1.7', color: 'var(--text-secondary)' }}>
            Cynex Digital manages client advertising campaigns as an authorized partner delegate:
          </p>
          <div style={{ padding: '1.25rem', background: 'var(--bg-surface-elevated)', borderRadius: '12px', border: '1px solid var(--border-color)', marginBottom: '1rem' }}>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>
              <strong>Direct Ad Billing:</strong> All paid advertising spend (Meta, Google, TikTok, Snapchat) is billed directly to the Client's registered credit card or ad account credit line. Cynex Digital does not markup ad spend nor absorb media costs on its own merchant accounts.
            </p>
          </div>
          <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
            Costs for client-specific third-party software subscriptions (e.g. Shopify themes, Vercel Pro hosting, domain registration, Make.com operations, OpenAI API tokens) remain the direct operational responsibility of the Client.
          </p>
        </>
      )
    },
    {
      id: 'warranty-support',
      title: '7. 30-Day Post-Launch Warranty & SLAs',
      content: (
        <>
          <p style={{ marginBottom: '1rem', lineHeight: '1.7', color: 'var(--text-secondary)' }}>
            We stand firmly behind the technical integrity of our digital builds:
          </p>
          <div style={{ padding: '1.25rem', background: 'rgba(15, 98, 254, 0.05)', borderRadius: '12px', border: '1px solid rgba(15, 98, 254, 0.2)', marginBottom: '1rem' }}>
            <strong style={{ color: 'var(--text-primary)', fontSize: '0.95rem', display: 'block', marginBottom: '0.4rem' }}>
              Complimentary 30-Day Technical Warranty
            </strong>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>
              All custom web platforms engineered by Cynex Digital include 30 calendar days of free bug-fixing and regression resolution from the date of production launch. Any reproducible defect deviating from the SOW specifications will be resolved at zero additional charge.
            </p>
          </div>
          <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
            Warranty excludes issues resulting from unauthorized third-party code tampering, client hosting server deprecations, or external API breaking changes introduced after deployment.
          </p>
        </>
      )
    },
    {
      id: 'liability-indemnification',
      title: '8. Limitation of Liability',
      content: (
        <>
          <p style={{ marginBottom: '1rem', lineHeight: '1.7', color: 'var(--text-secondary)' }}>
            To the maximum extent permitted by applicable law:
          </p>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', paddingLeft: 0, marginBottom: '1.25rem' }}>
            {[
              "Neither party shall be liable for indirect, incidental, punitive, or consequential damages (including lost profits, server downtime, or loss of goodwill).",
              "Cynex Digital's total cumulative liability arising from any single SOW shall not exceed the total fees actually paid to Agency by Client under that specific SOW in the preceding 3 months.",
              "Marketing performance figures (ROAS, CPC, conversion rates) represent calculated targets based on industry historical data and are not absolute guarantees, as ad auction volatility and market dynamics fluctuate."
            ].map((text, idx) => (
              <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                <AlertTriangle size={16} color="#f59e0b" style={{ flexShrink: 0, marginTop: '3px' }} />
                <span>{text}</span>
              </li>
            ))}
          </ul>
        </>
      )
    },
    {
      id: 'governing-law',
      title: '9. Governing Law & Dispute Resolution',
      content: (
        <>
          <p style={{ marginBottom: '1.25rem', lineHeight: '1.7', color: 'var(--text-secondary)' }}>
            These Terms and any project SOW shall be governed by and construed in accordance with the commercial laws of the <strong>Islamic Republic of Pakistan</strong>, with mutual recognition of international commercial arbitration protocols for foreign clients in the UAE, United Kingdom, and United States.
          </p>
          <div style={{ padding: '1.5rem', background: 'var(--bg-surface-elevated)', borderRadius: '14px', border: '1px solid var(--border-color)', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <Mail size={16} color="#0f62fe" />
              <span style={{ fontSize: '0.92rem', color: 'var(--text-primary)' }}>
                Legal Department: <a href="mailto:legal@cynexdigital.pk" style={{ color: '#0f62fe', fontWeight: 600 }}>legal@cynexdigital.pk</a>
              </span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <Globe size={16} color="#0f62fe" />
              <span style={{ fontSize: '0.92rem', color: 'var(--text-primary)' }}>
                Headquarters: <strong>Rawalpindi, Punjab, Pakistan</strong>
              </span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <Clock size={16} color="#0f62fe" />
              <span style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>
                Arbitration Procedure: 30-day amicable consultation prior to formal legal filing
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
              <span style={{ color: 'var(--text-primary)' }}>Terms & Conditions</span>
            </div>

            <div className="prolaps-eyebrow" style={{ marginBottom: '1rem' }}>
              <span className="prolaps-live-dot" />
              <span>CLIENT SERVICE AGREEMENT</span>
            </div>

            <h1 className="page-editorial-title">
              Terms & <br />
              <em>Conditions of Engagement.</em>
            </h1>

            <p className="page-editorial-sub">
              Our clear, transparent commercial framework outlining project statements of work, 100% intellectual property ownership, milestone payments, and agency guarantees.
            </p>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginTop: '1.5rem', fontSize: '0.84rem', color: 'var(--text-muted)', flexWrap: 'wrap' }}>
              <span style={{ background: 'var(--bg-surface-elevated)', padding: '0.35rem 0.75rem', borderRadius: 'var(--radius-full)', border: '1px solid var(--border-color)' }}>
                Effective: <strong style={{ color: 'var(--text-primary)' }}>October 1, 2026</strong>
              </span>
              <span style={{ background: 'var(--bg-surface-elevated)', padding: '0.35rem 0.75rem', borderRadius: 'var(--radius-full)', border: '1px solid var(--border-color)' }}>
                Version: <strong style={{ color: 'var(--text-primary)' }}>3.1 (Commercial)</strong>
              </span>
              <span style={{ background: 'var(--bg-surface-elevated)', padding: '0.35rem 0.75rem', borderRadius: 'var(--radius-full)', border: '1px solid var(--border-color)' }}>
                Jurisdiction: <strong style={{ color: 'var(--text-primary)' }}>Pakistan & Int. Code</strong>
              </span>
            </div>
          </div>

          {/* Guarantees Strip */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 230px), 1fr))',
              gap: '1rem',
              marginBottom: '3.5rem'
            }}
          >
            {[
              { icon: ShieldCheck, title: "100% IP Transfer", desc: "Full ownership of source code & design vectors upon final invoice settlement.", color: "#10b981" },
              { icon: FileText, title: "Defined Scope SOW", desc: "No hidden charges or surprise scopes. Every sprint milestone is pre-locked.", color: "#0f62fe" },
              { icon: Award, title: "30-Day Tech Warranty", desc: "Complimentary bug resolution & regression fixes post-production launch.", color: "#8b5cf6" },
              { icon: Scale, title: "No Media Markups", desc: "Clients retain direct credit card billing with Meta, Google & TikTok ads.", color: "#f59e0b" }
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
          <div className="legal-layout-grid">
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
                Terms Table of Contents
              </div>
              {termsSections.map((sec) => (
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
                  onClick={() => onNavigate && onNavigate('privacy')}
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
                  <span>Privacy Policy</span>
                  <ArrowUpRight size={13} />
                </button>
              </div>
            </aside>

            {/* Content Sections */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
              {termsSections.map((sec) => (
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

              {/* Bottom Project Kickoff Banner */}
              <div
                style={{
                  padding: '2rem',
                  borderRadius: '16px',
                  background: 'linear-gradient(135deg, rgba(15,98,254,0.06), rgba(16,185,129,0.06))',
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
                    Ready to initiate a Project SOW?
                  </h3>
                  <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', margin: 0 }}>
                    Book a discovery consultation and receive an itemized proposal with clear milestones within 24 hours.
                  </p>
                </div>
                <button
                  onClick={() => onNavigate && onNavigate('contact')}
                  className="btn-prolaps-blue"
                  style={{ padding: '0.65rem 1.35rem', fontSize: '0.88rem' }}
                >
                  <span>Start Discovery & Proposal</span>
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
