import React, { useState, useEffect } from 'react';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import Hero from './components/home/Hero';
import BrandMarquee from './components/home/BrandMarquee';
import ProcessSection from './components/home/ProcessSection';
import TestimonialsSlider from './components/home/TestimonialsSlider';
import CtaBanner from './components/home/CtaBanner';
import ServicesSection from './components/services/ServicesSection';
import ServiceDetailPage from './components/services/ServiceDetailPage';
import WorkSection from './components/work/WorkSection';
import AboutSection from './components/about/AboutSection';
import EstimatorModal from './components/pricing/EstimatorModal';
import BlogSection from './components/blog/BlogSection';
import ArticleDetailPage from './components/blog/ArticleDetailPage';
import FaqSection from './components/common/FaqSection';
import ContactSection from './components/contact/ContactSection';
import CareersPage from './components/company/CareersPage';
import PrivacyPolicyPage from './components/legal/PrivacyPolicyPage';
import TermsConditionsPage from './components/legal/TermsConditionsPage';
import { Sparkles, X } from 'lucide-react';
import useSmoothScroll from './hooks/useSmoothScroll';

export default function App() {
  const [activePage, setActivePage] = useState('home');
  const [activeServiceSlug, setActiveServiceSlug] = useState(null);
  const [activeBlogSlug, setActiveBlogSlug] = useState(null);
  const [theme, setTheme] = useState('light');
  const [isEstimatorOpen, setIsEstimatorOpen] = useState(false);
  const [prefillContact, setPrefillContact] = useState(null);
  const [toasts, setToasts] = useState([]);

  // Initialize Lenis inertia smooth scrolling and scroll-reveal observer
  useSmoothScroll(activePage);

  // Sync theme (defaults to light for ProLaps crisp aesthetic)
  useEffect(() => {
    const savedTheme = localStorage.getItem('cynex-theme') || 'light';
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    localStorage.setItem('cynex-theme', nextTheme);
    document.documentElement.setAttribute('data-theme', nextTheme);
  };

  // Toast system
  const showToast = (message) => {
    const id = Date.now();
    setToasts(prev => [...prev, { id, message }]);
    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== id));
    }, 4500);
  };

  const removeToast = (id) => {
    setToasts(prev => prev.filter(t => t.id !== id));
  };

  // Handle hash changes for multi-page and dynamic service routing
  useEffect(() => {
    const handleHash = () => {
      const cleanHash = window.location.hash.replace('#/', '').replace('#', '').trim();
      
      // If it's an in-page section anchor, scroll smoothly to the element rather than resetting page
      const recognizedPages = ['home', 'services', 'work', 'about', 'blog', 'contact', 'careers', 'privacy', 'terms'];
      const targetElement = document.getElementById(cleanHash);
      if (targetElement && !recognizedPages.includes(cleanHash) && !cleanHash.startsWith('services/') && !cleanHash.startsWith('blog/') && !cleanHash.startsWith('insights/')) {
        if (window.lenis) {
          window.lenis.scrollTo(targetElement, { offset: -90, duration: 1.2 });
        } else {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
        return;
      }

      if (cleanHash.startsWith('services/')) {
        const slug = cleanHash.replace('services/', '').trim();
        setActivePage('service-detail');
        setActiveServiceSlug(slug);
        setActiveBlogSlug(null);
      } else if (cleanHash.startsWith('blog/') || cleanHash.startsWith('insights/')) {
        const slug = cleanHash.replace(/^(blog|insights)\//, '').trim();
        setActivePage('blog-detail');
        setActiveBlogSlug(slug);
        setActiveServiceSlug(null);
      } else if (cleanHash && recognizedPages.includes(cleanHash)) {
        setActivePage(cleanHash);
        setActiveServiceSlug(null);
        setActiveBlogSlug(null);
      } else if (!cleanHash) {
        setActivePage('home');
        setActiveServiceSlug(null);
        setActiveBlogSlug(null);
      }

      if (window.lenis) {
        window.lenis.scrollTo(0, { immediate: true });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    };

    window.addEventListener('hashchange', handleHash);
    handleHash();

    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  // Update hash when activePage changes
  const navigateTo = (pageId) => {
    if (pageId.startsWith('services/')) {
      const slug = pageId.replace('services/', '').trim();
      setActivePage('service-detail');
      setActiveServiceSlug(slug);
      setActiveBlogSlug(null);
      window.location.hash = `#/${pageId}`;
    } else if (pageId.startsWith('blog/') || pageId.startsWith('insights/')) {
      const slug = pageId.replace(/^(blog|insights)\//, '').trim();
      setActivePage('blog-detail');
      setActiveBlogSlug(slug);
      setActiveServiceSlug(null);
      window.location.hash = `#/${pageId}`;
    } else {
      setActivePage(pageId);
      setActiveServiceSlug(null);
      setActiveBlogSlug(null);
      window.location.hash = `#/${pageId}`;
    }

    if (window.lenis) {
      window.lenis.scrollTo(0, { duration: 0.9, immediate: false });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Handler for estimator completion
  const handleApplyEstimate = (estimateData) => {
    setPrefillContact({
      service: estimateData.projectType,
      priceRange: estimateData.priceRange,
      details: `Configured via Instant Estimator:\n- Archetype: ${estimateData.projectType}\n- Scope Tier: ${estimateData.scope}\n- Velocity: ${estimateData.speed}\n- Add-ons: ${estimateData.addons.length ? estimateData.addons.join(', ') : 'None'}\n- Estimated Investment: ${estimateData.priceRange}`
    });
    showToast(`Estimate locked (${estimateData.priceRange})! Applied to project proposal form.`);
    navigateTo('contact');
  };

  // Handler when selecting a service card for proposal
  const handleSelectServiceForQuote = (serviceTitle, customDetails) => {
    setPrefillContact({
      service: serviceTitle,
      details: customDetails || `I am interested in partnering with Cynex Digital for ${serviceTitle}. Please share deliverables and discovery schedule.`
    });
    showToast(`Added ${serviceTitle} to proposal form.`);
    navigateTo('contact');
  };


  // Handler when discussing similar project from work
  const handleDiscussProject = (projectTitle) => {
    setPrefillContact({
      details: `I was impressed by your case study on "${projectTitle}" and would love to explore a similar execution for my business.`
    });
    showToast(`Reference case study noted.`);
    navigateTo('contact');
  };

  return (
    <div className="app-container" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Top Animated Scroll Progress Bar */}
      <div className="scroll-progress-line" aria-hidden="true" />

      {/* Floating Capsule Header */}
      <Navbar
        activePage={activePage}
        setActivePage={navigateTo}
        theme={theme}
        toggleTheme={toggleTheme}
        onOpenEstimator={() => setIsEstimatorOpen(true)}
      />

      {/* Dynamic Multi-Page Router Rendering */}
      <main style={{ flexGrow: 1 }}>
        {/* Home Overview Page */}
        {activePage === 'home' && (
          <div className="page-fade-in">
            {/* Hero Section with ProLaps 3D Tilted Ribbon & Quick-Scale Drawer */}
            <Hero
              onNavigate={navigateTo}
              onOpenEstimator={() => setIsEstimatorOpen(true)}
              onSelectServiceForContact={handleSelectServiceForQuote}
            />

            {/* Client Brands Marquee */}
            <BrandMarquee />

            {/* Core Capabilities Preview */}
            <ServicesSection
              onSelectServiceForContact={handleSelectServiceForQuote}
              isDedicatedPage={false}
              onNavigate={navigateTo}
            />

            {/* Featured Case Studies Preview */}
            <WorkSection
              onDiscussProject={handleDiscussProject}
              isDedicatedPage={false}
              onNavigate={navigateTo}
            />

            {/* Agency Agile Process Framework */}
            <ProcessSection />

            {/* Client Endorsements & Reviews */}
            <TestimonialsSlider />

            {/* High-Impact CTA Banner */}
            <CtaBanner
              onContactClick={() => navigateTo('contact')}
              onOpenEstimator={() => setIsEstimatorOpen(true)}
            />
          </div>
        )}

        {/* Dedicated Services Catalog Overview Page (e.g. /services) */}
        {activePage === 'services' && (
          <div className="page-fade-in">
            <ServicesSection
              onSelectServiceForContact={handleSelectServiceForQuote}
              isDedicatedPage={true}
              onNavigate={navigateTo}
            />
            <ProcessSection />
            <CtaBanner
              onContactClick={() => navigateTo('contact')}
              onOpenEstimator={() => setIsEstimatorOpen(true)}
            />
          </div>
        )}

        {/* Dedicated Dynamic Individual Service Page (e.g. /services/custom-software-development or /services/web-solutions) */}
        {activePage === 'service-detail' && (
          <ServiceDetailPage
            serviceSlug={activeServiceSlug}
            onNavigate={navigateTo}
            onContactService={handleSelectServiceForQuote}
          />
        )}

        {/* Dedicated Case Studies / Work Page */}
        {activePage === 'work' && (
          <div className="page-fade-in">
            <WorkSection
              onDiscussProject={handleDiscussProject}
              isDedicatedPage={true}
              onNavigate={navigateTo}
            />
            <TestimonialsSlider />
            <CtaBanner
              onContactClick={() => navigateTo('contact')}
              onOpenEstimator={() => setIsEstimatorOpen(true)}
            />
          </div>
        )}

        {/* Dedicated About Page */}
        {activePage === 'about' && (
          <div className="page-fade-in">
            <AboutSection
              onContactClick={() => navigateTo('contact')}
              isDedicatedPage={true}
              onNavigate={navigateTo}
            />
            <ProcessSection />
            <CtaBanner
              onContactClick={() => navigateTo('contact')}
              onOpenEstimator={() => setIsEstimatorOpen(true)}
            />
          </div>
        )}


        {/* Dedicated Insights Page */}
        {activePage === 'blog' && (
          <div className="page-fade-in">
            <BlogSection
              onToast={showToast}
              isDedicatedPage={true}
              onNavigate={navigateTo}
            />
            <CtaBanner
              onContactClick={() => navigateTo('contact')}
              onOpenEstimator={() => setIsEstimatorOpen(true)}
            />
          </div>
        )}

        {/* Dedicated Dynamic Individual Article Page (e.g. /blog/brand-strategy-before-logo) */}
        {activePage === 'blog-detail' && (
          <ArticleDetailPage
            articleSlug={activeBlogSlug}
            onNavigate={navigateTo}
            onToast={showToast}
            onSelectService={handleSelectServiceForQuote}
          />
        )}

        {/* Dedicated Contact & Proposal Page */}
        {activePage === 'contact' && (
          <div className="page-fade-in">
            <ContactSection
              prefillData={prefillContact}
              onToast={showToast}
              isDedicatedPage={true}
              onNavigate={navigateTo}
            />
            <FaqSection />
          </div>
        )}

        {/* Dedicated Careers Page */}
        {activePage === 'careers' && (
          <div className="page-fade-in">
            <CareersPage
              onNavigate={navigateTo}
            />
            <CtaBanner
              onContactClick={() => navigateTo('contact')}
              onOpenEstimator={() => setIsEstimatorOpen(true)}
            />
          </div>
        )}

        {/* Dedicated Privacy Policy Page */}
        {activePage === 'privacy' && (
          <div className="page-fade-in">
            <PrivacyPolicyPage onNavigate={navigateTo} />
          </div>
        )}

        {/* Dedicated Terms & Conditions Page */}
        {activePage === 'terms' && (
          <div className="page-fade-in">
            <TermsConditionsPage onNavigate={navigateTo} />
          </div>
        )}
      </main>

      {/* Dynamic Project Estimator Modal */}
      <EstimatorModal
        isOpen={isEstimatorOpen}
        onClose={() => setIsEstimatorOpen(false)}
        onSubmitEstimate={handleApplyEstimate}
      />

      {/* Site Footer */}
      <Footer onNavigate={navigateTo} />

      {/* Global Toast Notifications Stack */}
      <div className="toast-container" aria-live="polite">
        {toasts.map(toast => (
          <div key={toast.id} className="toast" role="alert">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <Sparkles size={16} color="var(--cyan-light)" />
              <span>{toast.message}</span>
            </div>
            <button
              onClick={() => removeToast(toast.id)}
              className="toast-close-btn"
              aria-label="Dismiss notification"
            >
              <X size={14} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
