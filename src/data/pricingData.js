export const pricingPlans = [
  {
    id: "presence-starter",
    name: "Digital Presence Starter",
    badge: "For Emerging Brands",
    popular: false,
    monthlyPrice: "$1,800",
    projectPrice: "$2,800",
    priceMonthly: "$1,800",
    priceProject: "$2,800",
    timeline: "2-3 Weeks / Sprint",
    description: "Launch your business with an authoritative digital footprint: bespoke branding, a fast modern website, and professional social media setup.",
    features: [
      "Custom Brand Identity (Logo Suite, Colors & Typography)",
      "Modern Responsive Website (Up to 5 Pages, Mobile-First)",
      "Social Media Profile Optimization (Instagram, LinkedIn, FB)",
      "9 Editable Social Media Graphic Templates",
      "Essential On-Page SEO & Contact Lead Capture Form",
      "Domain Setup, SSL Security & High-Speed Hosting Config"
    ],
    recommendedSpend: "Ideal for Startups & Emerging Ventures",
    ctaText: "Choose Presence Starter",
    packageType: "starter"
  },
  {
    id: "growth-partner",
    name: "Growth & Performance Partner",
    badge: "Most Popular Partnership",
    popular: true,
    monthlyPrice: "$3,600",
    projectPrice: "$5,800",
    priceMonthly: "$3,600",
    priceProject: "$5,800",
    timeline: "Monthly Retainer",
    description: "Our flagship growth package: modern web solutions, active social media management, and high-ROI paid ad campaigns across Meta and Google.",
    features: [
      "Everything in Starter, plus:",
      "Full Social Media Management (16 Monthly Posts, Reels & Carousels)",
      "Meta (Instagram & Facebook) & Google Ads Management",
      "Ad Creative Design, Persuasive Copywriting & Hook Testing",
      "Continuous Website Optimization & Landing Page CRO",
      "Meta Pixel & Server-Side Conversion API Setup",
      "Bi-Weekly Strategy Meetings & Transparent ROI Dashboard",
      "Dedicated Creative & Growth Account Manager"
    ],
    recommendedSpend: "Recommended Ad Spend: $3k - $20k/mo",
    ctaText: "Partner with Cynex",
    packageType: "growth"
  },
  {
    id: "full-spectrum",
    name: "Full-Spectrum Enterprise",
    badge: "Complete Digital Dominance",
    popular: false,
    monthlyPrice: "$6,500",
    projectPrice: "$11,000+",
    priceMonthly: "$6,500",
    priceProject: "$11,000+",
    timeline: "Quarterly / Annual Partnership",
    description: "For category leaders demanding an all-in-one digital department: bespoke web platforms, aggressive multi-channel ads, viral content, and AI automation.",
    features: [
      "Everything in Growth Partner, plus:",
      "Custom Web Application or E-Commerce Platform Build",
      "Multi-Channel Paid Ads (Meta, Google Search/PMax, TikTok)",
      "Weekly High-Velocity Short-Form Video Production",
      "AI Lead Qualification Chatbot & WhatsApp Integration",
      "Automated CRM & Email Marketing Sequences",
      "Comprehensive UI/UX Product Design & Figma System",
      "Priority 24/7 Slack Channel & Dedicated Creative Squad"
    ],
    recommendedSpend: "Recommended Ad Spend: $20k+/mo",
    ctaText: "Discuss Enterprise",
    packageType: "enterprise"
  }
];

export const calculatorOptions = {
  projectTypes: [
    { id: "web_solutions", label: "Website Design & Modern Web Solutions", basePrice: 2400, timeline: "2-4 weeks" },
    { id: "social_media", label: "Social Media Management & Content Engine", basePrice: 1800, timeline: "Monthly retainer" },
    { id: "paid_ads", label: "Paid Advertising & Performance (Meta & Google)", basePrice: 2200, timeline: "Monthly retainer" },
    { id: "branding_design", label: "Branding, Logo Suite & Visual Identity", basePrice: 1600, timeline: "1-3 weeks" },
    { id: "uiux_design", label: "UI/UX Product Design & Figma Systems", basePrice: 2800, timeline: "2-4 weeks" },
    { id: "ai_automation", label: "AI Lead & Workflow Automation", basePrice: 1900, timeline: "1-2 weeks" },
    { id: "full_spectrum", label: "Full-Spectrum Digital Presence & Growth", basePrice: 4800, timeline: "Ongoing partnership" }
  ],
  scopes: [
    { id: "starter", label: "Starter Scope (Essential deliverables)", multiplier: 1.0 },
    { id: "growth", label: "Growth Scope (Full multi-platform execution)", multiplier: 1.4 },
    { id: "enterprise", label: "Enterprise Scope (Custom architecture & rapid scale)", multiplier: 1.85 }
  ],
  speeds: [
    { id: "standard", label: "Standard Velocity (Agile delivery)", multiplier: 1.0, fee: 0 },
    { id: "accelerated", label: "Priority Fast-Track (+25% faster turnaround)", multiplier: 1.25, fee: 450 }
  ],
  addons: [
    { id: "ai_bot", label: "Custom 24/7 AI Lead Qualification Assistant", price: 850 },
    { id: "seo_foundation", label: "Advanced Technical SEO & Search Setup", price: 750 },
    { id: "reels_pack", label: "10x High-Hook Short-Form Video Pack (Reels/TikTok)", price: 950 },
    { id: "brand_guidelines", label: "Comprehensive 40+ Page Brand Strategy Guidebook", price: 650 },
    { id: "crm_integration", label: "Full CRM Automation & Instant WhatsApp Alerts", price: 800 }
  ],
  addonsList: [
    { id: "ai_bot", label: "Custom 24/7 AI Lead Qualification Assistant", price: 850 },
    { id: "seo_foundation", label: "Advanced Technical SEO & Search Setup", price: 750 },
    { id: "reels_pack", label: "10x High-Hook Short-Form Video Pack (Reels/TikTok)", price: 950 },
    { id: "brand_guidelines", label: "Comprehensive 40+ Page Brand Strategy Guidebook", price: 650 },
    { id: "crm_integration", label: "Full CRM Automation & Instant WhatsApp Alerts", price: 800 }
  ]
};
