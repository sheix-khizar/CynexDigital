import React, { useState } from 'react';
import { 
  ArrowUpRight, ArrowRight, Sparkles, CheckCircle2, TrendingUp, 
  ShieldCheck, Zap, BarChart3, Eye, ShoppingBag, Search, Layers, Play, Globe, Palette
} from 'lucide-react';

export default function Hero({ onNavigate, onOpenEstimator, onSelectServiceForContact }) {
  const [isRibbonPaused, setIsRibbonPaused] = useState(false);
  const [promptInput, setPromptInput] = useState('');
  const [activePill, setActivePill] = useState('Websites');

  const prolapsPills = [
    { id: 'Websites', label: 'Websites' },
    { id: 'Social', label: 'Social' },
    { id: 'Paid ads', label: 'Paid ads' },
    { id: 'Branding', label: 'Branding' },
    { id: 'AI systems', label: 'AI systems' }
  ];

  const serviceNameMapping = {
    'Websites': 'Website Design & Web Solutions',
    'Social': 'Social Media & Content Engines',
    'Social media': 'Social Media & Content Engines',
    'Paid ads': 'Paid Advertising & Performance Ads',
    'Ads': 'Paid Advertising & Performance Ads',
    'Branding': 'Branding & Graphic Design',
    'AI systems': 'AI Automation & Workflows',
    'AI workflows': 'AI Automation & Workflows',
    'UI/UX': 'UI/UX Design & Experiences'
  };

  const handleLetsBuild = () => {
    const selectedServiceName = serviceNameMapping[activePill] || 'Website Design & Web Solutions';
    const customDetails = promptInput.trim()
      ? `Project Scope: ${promptInput.trim()}\n\nService Category: ${selectedServiceName}\n\nI would like to explore this project with Cynex Digital. Please provide an initial scope, deliverables, and timeline.`
      : `I am interested in partnering with Cynex Digital for ${selectedServiceName}. Please share scope, deliverables, and discovery schedule.`;

    if (onSelectServiceForContact) {
      onSelectServiceForContact(selectedServiceName, customDetails);
    } else if (onNavigate) {
      onNavigate('contact');
    }
  };
  // Showcase Cards for the ProLaps-style Tilted 3D Ribbon reflecting Cynex Digital's real spectrum
  const showcaseCampaigns = [
    {
      id: 1,
      title: "Complete Visual Identity & Brand System",
      client: "Aura Living Lifestyle",
      metric: "+82% Brand Recall",
      subMetric: "30+ Formats · Complete Asset Suite",
      tag: "Branding & Design",
      badgeColor: "#7c3aed",
      imgUrl: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=900&q=80"
    },
    {
      id: 2,
      title: "Viral Short-Form Social Media Engine",
      client: "Velo Energy Beverage",
      metric: "14.2M Organic Views",
      subMetric: "Viral Reels, Shorts & TikToks",
      tag: "Social Media",
      badgeColor: "#ec4899",
      imgUrl: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=900&q=80"
    },
    {
      id: 3,
      title: "Modern E-Commerce Web Design & Replatform",
      client: "Artisanal Roastery D2C",
      metric: "+64% Conversions",
      subMetric: "Fast, Mobile-First Storefront",
      tag: "Web Solutions",
      badgeColor: "#0f62fe",
      imgUrl: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=900&q=80"
    },
    {
      id: 4,
      title: "Meta & Google Ads Revenue Scaling",
      client: "Lumina Skincare Brand",
      metric: "$1.4M Attributed",
      subMetric: "4.8x Consistent Blended ROAS",
      tag: "Paid Ads",
      badgeColor: "#0284c7",
      imgUrl: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=900&q=80"
    },
    {
      id: 5,
      title: "SaaS Dashboard & Client Portal UI/UX",
      client: "CloudScale Technology",
      metric: "+52% Onboarding",
      subMetric: "High-Fidelity Component System",
      tag: "UI/UX Design",
      badgeColor: "#2563eb",
      imgUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80"
    },
    {
      id: 6,
      title: "AI Lead & Workflow Automation",
      client: "Nexa Growth Partners",
      metric: "24/7 AI Bot",
      subMetric: "Instant CRM Lead Qualification",
      tag: "AI Automation",
      badgeColor: "#10b981",
      imgUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80"
    }
  ];

  // Repeat for infinite loop ribbon
  const ribbonCards = [...showcaseCampaigns, ...showcaseCampaigns];


  return (
    <section className="prolaps-hero">
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Eyebrow (Cynex Digital official motto & pulse dot) */}
        <div className="prolaps-eyebrow">
          <span className="prolaps-live-dot" />
          <span>CREATIVE SOLUTIONS · DIGITAL GROWTH</span>
        </div>

        {/* Editorial Serif Headline matching official brand */}
        <h1 className="prolaps-hero-title">
          Built on creativity. <br />
          Driven by <em>digital.</em>
        </h1>

        {/* Subtitle with official brand messaging */}
        <p className="prolaps-hero-desc">
          We craft your digital presence. From branding and modern web solutions to social media management, paid ads, and AI workflows — we help ambitious businesses stand out and grow.
        </p>
      </div>

      {/* ProLaps Signature 3D Tilted Showcase Ribbon */}
      <div className="tilted-ribbon-section">
        <div 
          className="tilted-ribbon-track"
          style={{ animationPlayState: isRibbonPaused ? 'paused' : 'running' }}
        >
          {ribbonCards.map((card, idx) => (
            <div 
              key={idx} 
              className="tilted-ribbon-card"
              onClick={() => onNavigate('work')}
              title={`View case study: ${card.title}`}
            >
              {/* Card Thumbnail Image Header - fills 100% of card */}
              <div 
                style={{ 
                  height: '100%', 
                  width: '100%',
                  position: 'relative', 
                  backgroundImage: `url(${card.imgUrl})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                {/* Dark gradient overlay for text readability */}
                <div 
                  style={{ 
                    position: 'absolute', 
                    inset: 0, 
                    background: 'linear-gradient(180deg, rgba(8, 14, 28, 0.28) 0%, rgba(8, 14, 28, 0.78) 100%)' 
                  }} 
                />
                
                {/* Client Badge */}
                <div style={{ position: 'absolute', top: '14px', left: '16px', zIndex: 2 }}>
                  <span 
                    style={{ 
                      fontSize: '0.72rem', 
                      fontWeight: 700, 
                      letterSpacing: '0.04em', 
                      padding: '0.28rem 0.75rem', 
                      borderRadius: '9999px',
                      background: 'rgba(255, 255, 255, 0.95)',
                      color: '#0f172a',
                      boxShadow: '0 2px 8px rgba(0,0,0,0.2)'
                    }}
                  >
                    {card.client}
                  </span>
                </div>

                {/* Primary Metric Badge Overlay */}
                <div style={{ position: 'absolute', bottom: '16px', left: '16px', right: '16px', zIndex: 2 }}>
                  <div style={{ fontSize: '1.35rem', fontWeight: 800, color: '#ffffff', lineHeight: 1.15 }}>
                    {card.metric}
                  </div>
                  <div style={{ fontSize: '0.76rem', color: '#93c5fd', marginTop: '3px', fontWeight: 600 }}>
                    {card.subMetric}
                  </div>
                </div>

                {/* Arrow Icon */}
                <div 
                  style={{ 
                    position: 'absolute', 
                    top: '14px', 
                    right: '16px', 
                    zIndex: 2,
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    background: 'rgba(255, 255, 255, 0.9)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#0f172a',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.2)'
                  }}
                >
                  <ArrowUpRight size={16} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ProLaps Signature Floating Chat Bot & Prompt Box */}
      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        <div className="prolaps-chat-box">
          {/* Header */}
          <div className="prolaps-chat-header">
            <div className="prolaps-chat-orb" />
            <span className="prolaps-chat-kicker">
              A good project starts with a conversation
            </span>
          </div>

          {/* Main Input / Prompt Row */}
          <div className="prolaps-chat-input-row">
            <input
              type="text"
              className="prolaps-chat-input"
              placeholder="What would you like to build?"
              value={promptInput}
              onChange={(e) => setPromptInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  e.preventDefault();
                  handleLetsBuild();
                }
              }}
            />
          </div>

          {/* Bottom Row: Filter Pills + Let's Build Button */}
          <div className="prolaps-chat-bottom-row">
            <div className="prolaps-chat-pills">
              {prolapsPills.map((pill) => (
                <button
                  key={pill.id}
                  type="button"
                  onClick={() => {
                    setActivePill(pill.id);
                    setPromptInput('');
                  }}
                  className={`prolaps-chat-pill ${activePill === pill.id ? 'active' : ''}`}
                >
                  {pill.label}
                </button>
              ))}
            </div>

            <button
              type="button"
              onClick={handleLetsBuild}
              className="prolaps-chat-build-btn"
              aria-label="Let's build"
            >
              <span className="build-btn-text">Let's build</span>
              <svg 
                width="16" 
                height="16" 
                viewBox="0 0 24 24" 
                fill="currentColor"
                className="build-btn-icon"
                aria-hidden="true"
              >
                <path d="M14 4l7 7-7 7v-4.1c-5 0-8.5 1.6-11 5.1 1-5 4-10 11-11V4z" />
              </svg>
            </button>
          </div>
        </div>

        {/* ProLaps Sub-row: No pitch deck needed. Just your idea. | Pause motion */}
        <div className="prolaps-chat-subrow">
          <span>No pitch deck needed. Just your idea.</span>
          <button
            type="button"
            onClick={() => setIsRibbonPaused(!isRibbonPaused)}
            className="prolaps-pause-btn"
          >
            {isRibbonPaused ? 'Resume motion' : 'Pause motion'}
          </button>
        </div>

        {/* ProLaps Secondary Links: Explore the work ↗ | Meet your next team ↗ */}
        <div className="prolaps-chat-links-row">
          <button
            type="button"
            onClick={() => onNavigate('work')}
            className="prolaps-chat-link"
          >
            <span>Explore the work</span>
            <ArrowUpRight size={15} />
          </button>

          <button
            type="button"
            onClick={() => onNavigate('about')}
            className="prolaps-chat-link"
          >
            <span>Who we are?</span>
            <ArrowUpRight size={15} />
          </button>
        </div>
      </div>
    </section>
  );
}
