# Cynex Digital — Agency Web Platform

> **Built On Creativity, Driven By Digital.**
> Full-service creative, full-stack engineering, and growth agency website built with modern React 19, Vite, and custom CSS design tokens.

---

## 🚀 Key Features & Agency Capabilities

- **Modern Visual Design System**:
  - Curated brand gradient: Cyan (`#06b6d4`), Electric Blue (`#2f5bff`), and Vivid Violet (`#7c3aed`).
  - Dark mode by default with instant toggle to crisp light mode.
  - Glassmorphic card surfaces, glowing borders, and backdrop blurs.
  - Modern typography pairing: **Sora** for impactful display headings + **Inter** for clean UI reading.

- **Dynamic Interactive Components**:
  - **Instant Project Cost & Scope Estimator**: Interactive calculator that computes real-time pricing estimates based on project archetype, scope complexity, delivery velocity, and high-impact add-ons. Locks calculations directly into proposal briefs.
  - **Filterable Case Studies & Portfolio Grid**: Categorized by *Creative Strategy*, *Web & App Development*, *Social Media & Growth*, and *Digital Brand Building*. Clicking any card opens an in-depth case study modal featuring challenge, strategic solution, and verified metrics.
  - **Continuous Partner Marquee**: Smooth infinite client and partner brand ticker.
  - **Service Deep Dives**: Interactive service cards with deliverables, timelines, and proposal request triggers.
  - **Agile 4-Phase Process Timeline**: Discovery & Blueprint → UI/UX Prototyping → Production Engineering → Launch & Scaling.
  - **Client Endorsements Slider**: Verified reviews with 5-star ratings, company titles, and metric badges.
  - **Transparent Pricing & Retainer Models**: Interactive toggle between fixed-scope project sprints and monthly growth retainers.
  - **Studio Insights & Thought Leadership**: Reader modal for reading strategic studio articles without leaving the page.
  - **Lead Capture Proposal Form**: High-converting project inquiry form with validation, service quick-pills, and toast alerts.
  - **Live RAWALPINDI Studio Clock**: Real-time PKT studio clock displaying active agency hours.

---

## 📁 Complete Folder Structure

```
cynex-digital/
├── index.html                   # HTML entry with Google Fonts (Sora + Inter) & SEO meta
├── package.json                 # Dependencies and scripts (React 19, Lucide, Vite)
├── vite.config.js               # Vite bundler configuration
├── src/
│   ├── main.jsx                 # Application root entry point
│   ├── App.jsx                  # Main coordinator, state, theme, router & modals
│   ├── index.css                # Custom CSS design system, tokens, glassmorphism
│   ├── components/
│   │   ├── common/              # Global shared UI components
│   │   │   ├── Navbar.jsx       # Glassmorphic header, theme toggle, mobile drawer
│   │   │   ├── Footer.jsx       # Studio sitemap, live PKT clock, socials
│   │   │   ├── Modal.jsx        # Accessible dialog backdrop with ESC dismiss
│   │   │   └── FaqSection.jsx   # Accordion for pre-sales questions & answers
│   │   ├── home/                # Homepage specific components
│   │   │   ├── Hero.jsx         # Punchy headline, dual CTAs, KPI index card
│   │   │   ├── BrandMarquee.jsx # Infinite scrolling client ticker
│   │   │   ├── ProcessSection.jsx # 4-phase agile methodology
│   │   │   ├── TestimonialsSlider.jsx # Verified client reviews & ratings
│   │   │   └── CtaBanner.jsx    # High-impact conversion banner
│   │   ├── services/            # Services practice components
│   │   │   ├── ServicesSection.jsx # 4 core practices + tech stack badges
│   │   │   └── ServiceDetailModal.jsx # Deliverables & timeline modal
│   │   ├── work/                # Portfolio & Case Studies
│   │   │   ├── WorkSection.jsx  # Category filter & project cards
│   │   │   └── ProjectDetailModal.jsx # Challenge/Solution & quantifiable results
│   │   ├── about/               # Agency Story & Leadership
│   │   │   └── AboutSection.jsx # Studio manifesto, core values & team roster
│   │   ├── pricing/             # Pricing & Calculations
│   │   │   ├── PricingSection.jsx # Sprint vs. Retainer pricing tiers
│   │   │   └── EstimatorModal.jsx # Interactive dynamic quote calculator
│   │   ├── blog/                # Studio Insights & Writing
│   │   │   ├── BlogSection.jsx  # Articles grid & newsletter box
│   │   │   └── ArticleModal.jsx # Clean in-app reader modal
│   │   └── contact/             # Lead Generation & Inquiries
│   │       └── ContactSection.jsx # Validated proposal form & studio details
│   └── data/                    # Structured agency data models
│       ├── servicesData.js      # Service scopes, deliverables, timelines, tech stack
│       ├── projectsData.js      # Portfolio case studies with verified metrics
│       ├── teamData.js          # Team bios, specialties, and agency values
│       ├── testimonialsData.js  # Client reviews, ratings, and partner brands
│       ├── pricingData.js       # Package pricing and calculator logic
│       ├── blogData.js          # Studio insights and essays
│       └── faqData.js           # Client partnership FAQs
```

---

## 💻 Getting Started Locally

### 1. Install dependencies
```bash
npm install
```

### 2. Run the Development Server
```bash
npm run dev
```

### 3. Build for Production
```bash
npm run build
```

### 4. Preview Production Bundle
```bash
npm run preview
```
