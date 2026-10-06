import { useEffect, useRef } from 'react';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';

/**
 * Custom hook to initialize Lenis inertia smooth scrolling and
 * scroll-triggered entrance reveal animations across the application.
 */
export default function useSmoothScroll(activePage) {
  const lenisRef = useRef(null);

  useEffect(() => {
    // 1. Initialize Lenis momentum smooth scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Smooth exponential deceleration
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.1,
      touchMultiplier: 1.5,
      infinite: false,
      prevent: (node) => {
        if (!node) return false;
        return (
          node.hasAttribute?.('data-lenis-prevent') ||
          Boolean(node.closest?.('[data-lenis-prevent]')) ||
          Boolean(node.closest?.('.modal-backdrop')) ||
          Boolean(node.closest?.('.modal-content')) ||
          Boolean(node.closest?.('[role="listbox"]')) ||
          Boolean(node.closest?.('.custom-dropdown-menu'))
        );
      }
    });

    lenisRef.current = lenis;
    window.lenis = lenis;

    // Connect Lenis to requestAnimationFrame loop
    let rafId;
    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    // Scroll progress bar listener
    const handleScroll = (e) => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? Math.min(100, Math.max(0, (scrollY / docHeight) * 100)) : 0;
      document.documentElement.style.setProperty('--scroll-progress', `${progress}%`);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    // 2. Setup Scroll-Triggered Reveal Animations via IntersectionObserver
    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -60px 0px', // Trigger slightly before element enters view
      threshold: 0.1,
    };

    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          // Once revealed, keep it visible for performance
          revealObserver.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Function to observe all reveal targets in DOM
    const observeElements = () => {
      const elements = document.querySelectorAll(
        '.reveal-on-scroll, .glass-card, .service-card, .tilted-ribbon-card, .stat-mini-box, .pricing-card-popular'
      );
      elements.forEach((el) => {
        if (!el.classList.contains('is-revealed')) {
          el.classList.add('reveal-on-scroll');
          revealObserver.observe(el);
        }
      });
    };

    // Run observation immediately and whenever activePage changes
    observeElements();
    const timeoutId = setTimeout(observeElements, 150);

    // MutationObserver to catch dynamically rendered components
    const mutationObserver = new MutationObserver(() => {
      observeElements();
    });

    mutationObserver.observe(document.body, { childList: true, subtree: true });

    // Cleanup on unmount
    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timeoutId);
      mutationObserver.disconnect();
      revealObserver.disconnect();
      lenis.destroy();
      window.lenis = null;
    };
  }, []);

  // When activePage changes, scroll to top smoothly with Lenis
  useEffect(() => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate: false, duration: 0.8 });
    }
  }, [activePage]);

  return lenisRef;
}
