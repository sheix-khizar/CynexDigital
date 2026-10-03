import React from 'react';
import { 
  CheckCircle2, ChevronRight, ShieldCheck, 
  ArrowUpRight, Clock, Mail, Globe, AlertTriangle
} from 'lucide-react';

export default function TermsConditionsPage({ onNavigate }) {

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
          <div style={{ maxWidth: '820px', margin: '0 auto 3rem auto', textAlign: 'left' }}>
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
              Our commercial framework covering milestone payments, full IP transfer, and service guarantees.
            </p>
          </div>

          {/* Simple Readable Content Container */}
          <div className="legal-reader-container">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              {termsSections.map((sec) => (
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
                    Need our Data & Privacy Policy?
                  </h3>
                  <p style={{ fontSize: '0.86rem', color: 'var(--text-secondary)', margin: 0 }}>
                    Understand how Cynex Digital safeguards client data, ad accounts, and project assets.
                  </p>
                </div>
                <button
                  onClick={() => onNavigate && onNavigate('privacy')}
                  className="btn-prolaps-blue"
                  style={{ padding: '0.65rem 1.25rem', fontSize: '0.88rem' }}
                >
                  <span>Privacy Policy</span>
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
