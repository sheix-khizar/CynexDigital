import React, { useState, useEffect } from 'react';
import { getBlogPostById, getAllBlogPosts } from '../../data/blogData';
import { 
  ChevronRight, Clock, Calendar, ArrowLeft, ArrowUpRight, 
  ArrowRight, Copy, Check, Sparkles, CheckCircle2, 
  ChevronDown, ChevronUp, Bookmark
} from 'lucide-react';

export default function ArticleDetailPage({ articleSlug, onNavigate, onToast }) {
  const article = getBlogPostById(articleSlug) || getAllBlogPosts()[0];
  const allPosts = getAllBlogPosts();

  const [activeSectionId, setActiveSectionId] = useState(article.tableOfContents?.[0]?.id || '');
  const [copiedLink, setCopiedLink] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  // Dynamic SEO Injection: Title, Meta Description, Keywords, JSON-LD Schema
  useEffect(() => {
    const originalTitle = document.title;
    document.title = `${article.title} | Cynex Digital Insights`;

    // Meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    let originalMetaDesc = metaDesc ? metaDesc.getAttribute('content') : '';
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = 'description';
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', article.metaDescription || article.desc);

    // Meta keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords && article.keywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.name = 'keywords';
      document.head.appendChild(metaKeywords);
    }
    if (metaKeywords && article.keywords) {
      metaKeywords.setAttribute('content', article.keywords.join(', '));
    }

    // JSON-LD Structured Data
    const scriptId = 'jsonld-article-schema';
    let jsonLdScript = document.getElementById(scriptId);
    if (!jsonLdScript) {
      jsonLdScript = document.createElement('script');
      jsonLdScript.id = scriptId;
      jsonLdScript.type = 'application/ld+json';
      document.head.appendChild(jsonLdScript);
    }

    const schemaData = {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": article.title,
      "description": article.metaDescription || article.desc,
      "image": [article.image],
      "datePublished": article.date,
      "author": {
        "@type": "Person",
        "name": article.author?.name || "Cynex Digital Editorial Team",
        "jobTitle": article.author?.role || "Growth Strategist"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Cynex Digital",
        "logo": {
          "@type": "ImageObject",
          "url": "https://cynexdigital.pk/logo.png"
        }
      },
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": window.location.href
      }
    };
    jsonLdScript.textContent = JSON.stringify(schemaData);

    // Scroll to top
    if (window.lenis) {
      window.lenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }

    return () => {
      document.title = originalTitle;
      if (metaDesc && originalMetaDesc) {
        metaDesc.setAttribute('content', originalMetaDesc);
      }
      const existingScript = document.getElementById(scriptId);
      if (existingScript) existingScript.remove();
    };
  }, [article.id]);

  // Section observer for sticky Table of Contents
  useEffect(() => {
    const handleScroll = () => {
      if (!article.tableOfContents) return;
      const scrollY = window.scrollY + 140;

      for (let i = article.tableOfContents.length - 1; i >= 0; i--) {
        const item = article.tableOfContents[i];
        const el = document.getElementById(item.id);
        if (el && el.offsetTop <= scrollY) {
          setActiveSectionId(item.id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [article.tableOfContents]);

  // Smooth scroll to section anchor
  const scrollToAnchor = (e, sectionId) => {
    if (e && e.preventDefault) e.preventDefault();
    const target = document.getElementById(sectionId);
    if (target) {
      setActiveSectionId(sectionId);
      if (window.lenis) {
        window.lenis.scrollTo(target, { offset: -90, duration: 1.1 });
      } else {
        const yOffset = -90;
        const y = target.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }
  };

  // Copy link handler
  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    if (onToast) onToast("Playbook link copied to clipboard!");
    setTimeout(() => setCopiedLink(false), 3000);
  };

  // Find previous and next articles
  const currentIndex = allPosts.findIndex(p => p.id === article.id);
  const prevArticle = currentIndex > 0 ? allPosts[currentIndex - 1] : null;
  const nextArticle = currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null;

  // Find related articles
  const relatedArticles = allPosts.filter(p => 
    p.id !== article.id && (article.relatedArticleIds?.includes(p.id) || p.tag === article.tag)
  ).slice(0, 3);

  return (
    <article className="article-detail-page page-fade-in" style={{ position: 'relative' }}>
      {/* Top Header Section */}
      <header className="page-hero-header" style={{ position: 'relative', overflow: 'hidden', paddingBottom: '2.5rem' }}>
        <div className="container">
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="page-breadcrumbs" style={{ marginBottom: '2rem' }}>
            <button 
              onClick={() => onNavigate && onNavigate('home')} 
              style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, color: 'inherit' }}
            >
              Home
            </button>
            <ChevronRight size={14} />
            <button 
              onClick={() => onNavigate && onNavigate('blog')} 
              style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, color: 'inherit' }}
            >
              Insights
            </button>
            <ChevronRight size={14} />
            <span style={{ color: 'var(--text-primary)', fontWeight: 600 }}>{article.tag}</span>
          </nav>

          {/* Eyebrow and Tag */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', flexWrap: 'wrap', marginBottom: '0.25rem' }}>
            <div className="prolaps-eyebrow">
              <span className="prolaps-live-dot" />
              <span>{article.category ? article.category.toUpperCase() : article.tag.toUpperCase()}</span>
            </div>
          </div>

          {/* Main H1 Title */}
          <h1 
            style={{ 
              fontSize: 'clamp(2rem, 3.8vw, 3.4rem)', 
              fontWeight: 800, 
              lineHeight: 1.18, 
              letterSpacing: '-0.025em', 
              color: 'var(--text-primary)',
              maxWidth: '920px',
              marginBottom: '1rem'
            }}
          >
            {article.title}
          </h1>

          {/* Subtitle / Kicker */}
          {article.subtitle && (
            <p 
              style={{ 
                fontSize: 'clamp(1.05rem, 1.6vw, 1.25rem)', 
                color: 'var(--text-secondary)', 
                lineHeight: 1.6, 
                maxWidth: '820px',
                marginBottom: '2rem'
              }}
            >
              {article.subtitle}
            </p>
          )}

          {/* Author and Metadata Bar */}
          <div 
            style={{ 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'space-between', 
              flexWrap: 'wrap', 
              gap: '1.5rem',
              paddingTop: '1.25rem',
              borderTop: '1px solid var(--border-color)',
              marginBottom: '2.5rem'
            }}
          >
            {/* Author info */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.9rem' }}>
              {article.author?.avatar && (
                <img 
                  src={article.author.avatar} 
                  alt={article.author.name}
                  style={{ 
                    width: '46px', 
                    height: '46px', 
                    borderRadius: '50%', 
                    objectFit: 'cover',
                    border: '2px solid #0f62fe'
                  }} 
                />
              )}
              <div>
                <div style={{ fontWeight: 700, fontSize: '0.95rem', color: 'var(--text-primary)' }}>
                  {article.author?.name}
                </div>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                  {article.author?.role}
                </div>
              </div>
            </div>

            {/* Date, Read time, Share */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                <Calendar size={15} />
                <span>{article.date}</span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                <Clock size={15} />
                <span>{article.readTime}</span>
              </div>

              {/* Share Capsule */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <button
                  onClick={handleCopyLink}
                  className="icon-btn"
                  style={{ 
                    padding: '0.4rem 0.85rem', 
                    borderRadius: 'var(--radius-full)', 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '0.4rem', 
                    fontSize: '0.78rem', 
                    fontWeight: 600,
                    background: copiedLink ? 'rgba(16, 185, 129, 0.12)' : 'var(--bg-surface-elevated)',
                    color: copiedLink ? '#10b981' : 'var(--text-secondary)',
                    border: '1px solid var(--border-color)'
                  }}
                  title="Copy direct playbook link"
                >
                  {copiedLink ? <Check size={14} /> : <Copy size={14} />}
                  <span>{copiedLink ? 'Copied' : 'Share'}</span>
                </button>
              </div>
            </div>
          </div>

          {/* Hero Featured Photography */}
          <div 
            style={{ 
              position: 'relative', 
              borderRadius: 'var(--radius-xl)', 
              overflow: 'hidden', 
              boxShadow: 'var(--shadow-xl)',
              border: '1px solid var(--border-color)',
              aspectRatio: '16 / 8.5',
              maxHeight: '480px'
            }}
          >
            <img 
              src={article.image} 
              alt={article.imageAlt || article.title}
              loading="eager"
              className="card-media-zoom"
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
            {/* Dark Vignette Overlay */}
            <div 
              style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(180deg, rgba(8, 14, 28, 0.15) 0%, rgba(8, 14, 28, 0.72) 100%)'
              }}
            />

            {/* Metric Highlight Badge Overlay */}
            {article.metricsHighlight && (
              <div 
                style={{ 
                  position: 'absolute', 
                  bottom: '1.75rem', 
                  left: '1.75rem', 
                  right: '1.75rem',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-end',
                  flexWrap: 'wrap',
                  gap: '1rem',
                  color: '#ffffff'
                }}
              >
                <div>
                  <div style={{ fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#93c5fd', fontWeight: 700, marginBottom: '0.2rem' }}>
                    KEY COMMERCIAL BENCHMARK
                  </div>
                  <div style={{ fontSize: '1.65rem', fontWeight: 800, lineHeight: 1.2 }}>
                    {article.metricsHighlight}
                  </div>
                  {article.metricsLabel && (
                    <div style={{ fontSize: '0.82rem', color: '#cbd5e1', marginTop: '0.25rem' }}>
                      {article.metricsLabel}
                    </div>
                  )}
                </div>

                {article.imageCaption && (
                  <span style={{ fontSize: '0.74rem', color: 'rgba(255,255,255,0.7)', fontStyle: 'italic' }}>
                    {article.imageCaption}
                  </span>
                )}
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Main Two-Column Editorial Grid */}
      <section className="section-spacing" style={{ paddingTop: '2.5rem' }}>
        <div className="container">
          <div className="article-layout-grid">
            {/* Sticky Sidebar Navigation (Left) */}
            <aside 
              style={{ 
                position: 'sticky', 
                top: '100px', 
                display: 'flex', 
                flexDirection: 'column', 
                gap: '1.75rem' 
              }}
            >
              {/* Table of Contents Card */}
              {article.tableOfContents && article.tableOfContents.length > 0 && (
                <div 
                  className="glass-card"
                  style={{
                    padding: '1.5rem',
                    borderRadius: 'var(--radius-lg)',
                    border: '1px solid var(--border-color)',
                    background: 'var(--bg-surface-elevated)'
                  }}
                >
                  <div style={{ fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-muted)', marginBottom: '1rem' }}>
                    Table of Contents
                  </div>

                  <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                    {article.tableOfContents.map((item, idx) => {
                      const isActive = activeSectionId === item.id;
                      return (
                        <button
                          key={item.id}
                          onClick={(e) => scrollToAnchor(e, item.id)}
                          style={{
                            background: 'none',
                            border: 'none',
                            padding: '0.45rem 0.6rem',
                            textAlign: 'left',
                            borderRadius: 'var(--radius-sm)',
                            cursor: 'pointer',
                            fontSize: '0.84rem',
                            lineHeight: 1.45,
                            fontWeight: isActive ? 700 : 500,
                            color: isActive ? '#0f62fe' : 'var(--text-secondary)',
                            backgroundColor: isActive ? 'rgba(15, 98, 254, 0.08)' : 'transparent',
                            transition: 'all 0.15s ease',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem'
                          }}
                        >
                          <span style={{ fontSize: '0.75rem', color: isActive ? '#0f62fe' : 'var(--text-muted)', minWidth: '16px' }}>
                            {idx + 1}.
                          </span>
                          <span>{item.title}</span>
                        </button>
                      );
                    })}
                  </nav>
                </div>
              )}

              {/* Author Credential Card */}
              {article.author && (
                <div 
                  className="glass-card"
                  style={{
                    padding: '1.5rem',
                    borderRadius: 'var(--radius-lg)',
                    border: '1px solid var(--border-color)',
                    background: 'var(--bg-card)'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.85rem' }}>
                    {article.author.avatar && (
                      <img 
                        src={article.author.avatar} 
                        alt={article.author.name}
                        style={{ width: '42px', height: '42px', borderRadius: '50%', objectFit: 'cover' }}
                      />
                    )}
                    <div>
                      <div style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                        {article.author.name}
                      </div>
                      <div style={{ fontSize: '0.74rem', color: 'var(--text-muted)' }}>
                        {article.author.role}
                      </div>
                    </div>
                  </div>

                  <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: 1.55, marginBottom: '1.1rem' }}>
                    {article.author.bio}
                  </p>

                  <button
                    onClick={() => onNavigate && onNavigate('contact')}
                    className="btn-prolaps-white"
                    style={{ width: '100%', fontSize: '0.8rem', padding: '0.55rem 0.8rem', justifyContent: 'center' }}
                  >
                    <span>Consult with our team</span>
                    <ArrowRight size={13} />
                  </button>
                </div>
              )}

              {/* Quick Share Widget */}
              <div 
                className="glass-card"
                style={{
                  padding: '1.25rem 1.5rem',
                  borderRadius: 'var(--radius-lg)',
                  border: '1px solid var(--border-color)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}
              >
                <span style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-secondary)' }}>
                  Share this playbook:
                </span>
                <div style={{ display: 'flex', gap: '0.45rem' }}>
                  <button
                    onClick={handleCopyLink}
                    className="icon-btn"
                    title="Copy Link"
                    style={{ width: '32px', height: '32px', borderRadius: '50%' }}
                  >
                    {copiedLink ? <Check size={14} color="#10b981" /> : <Copy size={14} />}
                  </button>
                  <a
                    href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(article.title)}&url=${encodeURIComponent(window.location.href)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="icon-btn"
                    title="Share on X"
                    style={{ width: '32px', height: '32px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                  >
                    <span style={{ fontSize: '0.78rem', fontWeight: 800 }}>𝕏</span>
                  </a>
                  <a
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="icon-btn"
                    title="Share on LinkedIn"
                    style={{ width: '32px', height: '32px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                  >
                    <span style={{ fontSize: '0.78rem', fontWeight: 800, color: '#0a66c2' }}>in</span>
                  </a>
                </div>
              </div>
            </aside>

            {/* Main Editorial Content Column (Right) */}
            <main className="article-main-content">
              {/* Executive Summary / Key Takeaways Box */}
              {article.keyTakeaways && article.keyTakeaways.length > 0 && (
                <div 
                  className="glass-card"
                  style={{
                    padding: '2rem',
                    borderRadius: 'var(--radius-lg)',
                    marginBottom: '3rem',
                    background: 'linear-gradient(135deg, rgba(15, 98, 254, 0.06) 0%, rgba(124, 58, 237, 0.04) 100%)',
                    border: '1px solid rgba(15, 98, 254, 0.25)'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                    <Sparkles size={18} color="#0f62fe" />
                    <h2 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--text-primary)', margin: 0 }}>
                      Executive Summary & Key Takeaways
                    </h2>
                  </div>

                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                    {article.keyTakeaways.map((takeaway, idx) => (
                      <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', fontSize: '0.94rem', color: 'var(--text-secondary)', lineHeight: 1.55 }}>
                        <CheckCircle2 size={16} color="#0f62fe" style={{ flexShrink: 0, marginTop: '3px' }} />
                        <span>{takeaway}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* In-Depth Content Sections */}
              <div className="article-body-text">
                {article.sections && article.sections.map((section) => (
                  <section 
                    key={section.id} 
                    id={section.id} 
                    style={{ marginBottom: '3.5rem', scrollMarginTop: '100px' }}
                  >
                    <h2 
                      style={{ 
                        fontSize: 'clamp(1.5rem, 2.2vw, 2rem)', 
                        fontWeight: 800, 
                        lineHeight: 1.25, 
                        letterSpacing: '-0.02em', 
                        color: 'var(--text-primary)',
                        marginBottom: '1.25rem' 
                      }}
                    >
                      {section.heading}
                    </h2>

                    {/* Paragraphs */}
                    {section.paragraphs && section.paragraphs.map((p, pIdx) => (
                      <p key={pIdx}>{p}</p>
                    ))}

                    {/* Styled Pull Quote */}
                    {section.quote && (
                      <blockquote className="article-pull-quote">
                        <p>"{section.quote}"</p>
                        {section.quoteAuthor && (
                          <cite style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontStyle: 'normal', fontWeight: 600 }}>
                            — {section.quoteAuthor}
                          </cite>
                        )}
                      </blockquote>
                    )}

                    {/* Comparison Table */}
                    {section.comparisonTable && (
                      <div className="article-table-wrapper">
                        <table className="article-table">
                          <thead>
                            <tr>
                              {section.comparisonTable.headers.map((h, hIdx) => (
                                <th key={hIdx}>{h}</th>
                              ))}
                            </tr>
                          </thead>
                          <tbody>
                            {section.comparisonTable.rows.map((row, rIdx) => (
                              <tr key={rIdx}>
                                {row.map((cell, cIdx) => (
                                  <td key={cIdx} style={{ fontWeight: cIdx === 0 ? 600 : 400 }}>
                                    {cell}
                                  </td>
                                ))}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    )}

                    {/* Bullet Points */}
                    {section.bullets && (
                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '0.85rem', margin: '1.75rem 0' }}>
                        {section.bullets.map((b, bIdx) => (
                          <div 
                            key={bIdx}
                            className="glass-card"
                            style={{
                              padding: '1.1rem 1.25rem',
                              borderRadius: 'var(--radius-md)',
                              display: 'flex',
                              alignItems: 'flex-start',
                              gap: '0.65rem'
                            }}
                          >
                            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#0f62fe', marginTop: '7px', flexShrink: 0 }} />
                            <span style={{ fontSize: '0.9rem', color: 'var(--text-primary)', lineHeight: 1.5, fontWeight: 500 }}>
                              {b}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Data Highlight Card */}
                    {section.dataCard && (
                      <div 
                        className="glass-card"
                        style={{
                          padding: '1.75rem 2rem',
                          borderRadius: 'var(--radius-lg)',
                          margin: '2rem 0',
                          borderLeft: '4px solid #0f62fe',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '2rem',
                          flexWrap: 'wrap'
                        }}
                      >
                        <div style={{ fontSize: '2.5rem', fontWeight: 800, color: '#0f62fe', fontFamily: 'var(--font-heading)', minWidth: '120px' }}>
                          {section.dataCard.metric}
                        </div>
                        <div style={{ flex: 1 }}>
                          <h4 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: '0.35rem' }}>
                            {section.dataCard.title}
                          </h4>
                          <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', margin: 0, lineHeight: 1.55 }}>
                            {section.dataCard.desc}
                          </p>
                        </div>
                      </div>
                    )}

                    {/* Checklist */}
                    {section.checklist && (
                      <div 
                        style={{
                          margin: '1.75rem 0',
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '0.75rem'
                        }}
                      >
                        {section.checklist.map((item, cIdx) => (
                          <div 
                            key={cIdx}
                            className="glass-card"
                            style={{
                              padding: '1rem 1.25rem',
                              borderRadius: 'var(--radius-md)',
                              display: 'flex',
                              alignItems: 'flex-start',
                              gap: '0.75rem'
                            }}
                          >
                            <CheckCircle2 size={18} color="#10b981" style={{ flexShrink: 0, marginTop: '2px' }} />
                            <span style={{ fontSize: '0.92rem', color: 'var(--text-primary)', lineHeight: 1.5 }}>
                              {item}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}
                  </section>
                ))}

                {/* FAQ Accordion Section for SEO Rich Snippets */}
                {article.faq && article.faq.length > 0 && (
                  <section id="faq" style={{ marginBottom: '3.5rem', scrollMarginTop: '100px' }}>
                    <div className="prolaps-eyebrow" style={{ marginBottom: '0.75rem' }}>
                      <span className="prolaps-live-dot" />
                      <span>STRATEGIC FAQ</span>
                    </div>
                    <h2 style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>
                      Frequently Asked Questions
                    </h2>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                      {article.faq.map((item, idx) => {
                        const isOpen = openFaqIndex === idx;
                        return (
                          <div 
                            key={idx}
                            className="glass-card"
                            style={{
                              borderRadius: 'var(--radius-md)',
                              overflow: 'hidden',
                              border: '1px solid var(--border-color)'
                            }}
                          >
                            <button
                              onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                              style={{
                                width: '100%',
                                padding: '1.15rem 1.5rem',
                                background: 'none',
                                border: 'none',
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                cursor: 'pointer',
                                textAlign: 'left'
                              }}
                            >
                              <span style={{ fontSize: '0.96rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                                {item.q}
                              </span>
                              {isOpen ? <ChevronUp size={18} color="#0f62fe" /> : <ChevronDown size={18} color="var(--text-muted)" />}
                            </button>
                            {isOpen && (
                              <div style={{ padding: '0 1.5rem 1.25rem 1.5rem', fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.65 }}>
                                {item.a}
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </section>
                )}

                {/* Author Sign-Off Card */}
                <div 
                  className="glass-card card-padded"
                  style={{
                    borderRadius: 'var(--radius-lg)',
                    marginTop: '3rem',
                    marginBottom: '3.5rem',
                    background: 'var(--bg-surface-elevated)',
                    border: '1px solid var(--border-color)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                    gap: '1.5rem'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'rgba(15, 98, 254, 0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Bookmark size={22} color="#0f62fe" />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.95rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                        Published by Cynex Digital Growth Labs
                      </div>
                      <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                        Creative Solutions · Performance Advertising · Digital Growth
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => onNavigate && onNavigate('contact')}
                    className="btn-prolaps-blue"
                    style={{ fontSize: '0.88rem', padding: '0.65rem 1.4rem' }}
                  >
                    <span>Request Custom Strategy</span>
                    <ArrowUpRight size={15} />
                  </button>
                </div>

                {/* Previous & Next Article Navigation */}
                <div 
                  style={{ 
                    display: 'grid', 
                    gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', 
                    gap: '1.25rem',
                    paddingTop: '2rem',
                    borderTop: '1px solid var(--border-color)',
                    marginBottom: '4rem'
                  }}
                >
                  {prevArticle ? (
                    <button
                      onClick={() => onNavigate && onNavigate(`blog/${prevArticle.id}`)}
                      className="glass-card"
                      style={{
                        padding: '1.25rem',
                        borderRadius: 'var(--radius-md)',
                        textAlign: 'left',
                        cursor: 'pointer',
                        border: '1px solid var(--border-color)',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between'
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: 'var(--text-muted)', fontSize: '0.76rem', fontWeight: 600, textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                        <ArrowLeft size={13} />
                        <span>Previous Playbook</span>
                      </div>
                      <div style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-primary)', lineHeight: 1.35 }}>
                        {prevArticle.title}
                      </div>
                    </button>
                  ) : <div />}

                  {nextArticle ? (
                    <button
                      onClick={() => onNavigate && onNavigate(`blog/${nextArticle.id}`)}
                      className="glass-card"
                      style={{
                        padding: '1.25rem',
                        borderRadius: 'var(--radius-md)',
                        textAlign: 'right',
                        cursor: 'pointer',
                        border: '1px solid var(--border-color)',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        alignItems: 'flex-end'
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: 'var(--text-muted)', fontSize: '0.76rem', fontWeight: 600, textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                        <span>Next Playbook</span>
                        <ArrowRight size={13} />
                      </div>
                      <div style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-primary)', lineHeight: 1.35 }}>
                        {nextArticle.title}
                      </div>
                    </button>
                  ) : <div />}
                </div>
              </div>
            </main>
          </div>
        </div>
      </section>

      {/* Related Playbooks Grid */}
      {relatedArticles.length > 0 && (
        <section className="section-spacing" style={{ borderTop: '1px solid var(--border-color)', background: 'var(--bg-secondary)' }}>
          <div className="container">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1.5rem', marginBottom: '2.5rem' }}>
              <div>
                <div className="prolaps-eyebrow" style={{ marginBottom: '0.5rem' }}>
                  <span className="prolaps-live-dot" />
                  <span>MORE STRATEGIC PLAYBOOKS</span>
                </div>
                <h3 style={{ fontSize: 'clamp(1.4rem, 2.2vw, 1.85rem)', fontWeight: 800 }}>
                  Recommended Reading
                </h3>
              </div>

              <button
                onClick={() => onNavigate && onNavigate('blog')}
                className="btn-prolaps-white"
              >
                <span>View all insights</span>
                <ArrowRight size={14} />
              </button>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
              {relatedArticles.map((rel) => (
                <div
                  key={rel.id}
                  className="glass-card"
                  onClick={() => onNavigate && onNavigate(`blog/${rel.id}`)}
                  style={{
                    borderRadius: 'var(--radius-lg)',
                    overflow: 'hidden',
                    cursor: 'pointer',
                    display: 'flex',
                    flexDirection: 'column'
                  }}
                >
                  <div style={{ height: '160px', position: 'relative', overflow: 'hidden' }}>
                    <img 
                      src={rel.image} 
                      alt={rel.title} 
                      className="card-media-zoom"
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                    />
                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(8, 14, 28, 0.3) 0%, rgba(8, 14, 28, 0.75) 100%)' }} />
                    <span 
                      style={{ 
                        position: 'absolute', 
                        top: '1rem', 
                        left: '1rem', 
                        fontSize: '0.72rem', 
                        fontWeight: 700, 
                        color: '#ffffff', 
                        background: 'rgba(0,0,0,0.5)', 
                        padding: '0.2rem 0.6rem', 
                        borderRadius: 'var(--radius-full)' 
                      }}
                    >
                      {rel.tag}
                    </span>
                  </div>

                  <div style={{ padding: '1.25rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                    <h4 style={{ fontSize: '1.08rem', fontWeight: 800, marginBottom: '0.5rem', lineHeight: 1.35 }}>
                      {rel.title}
                    </h4>
                    <p style={{ fontSize: '0.84rem', color: 'var(--text-secondary)', lineHeight: 1.5, marginBottom: '1rem', flexGrow: 1 }}>
                      {rel.summary}
                    </p>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid var(--border-color)', paddingTop: '0.75rem', fontSize: '0.78rem' }}>
                      <span style={{ color: 'var(--text-muted)' }}>{rel.readTime}</span>
                      <span style={{ color: '#0f62fe', fontWeight: 700 }}>Read Playbook ↗</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Bottom Conversion CTA Banner */}
      <section className="section-spacing" style={{ position: 'relative' }}>
        <div className="container">
          <div 
            className="glass-card card-padded cta-banner-wrapper"
            style={{
              textAlign: 'center',
              paddingTop: '4rem',
              paddingBottom: '4rem'
            }}
          >
            <div style={{ maxWidth: '640px', margin: '0 auto' }}>
              <span className="badge badge-brand" style={{ marginBottom: '1rem' }}>
                <Sparkles size={12} /> Execution & Partnership
              </span>

              <h2 style={{ fontSize: 'clamp(1.6rem, 2.8vw, 2.25rem)', fontWeight: 800, marginBottom: '1rem', lineHeight: 1.2 }}>
                Want Cynex Digital to implement this strategy <br />
                <span className="text-gradient">for your brand?</span>
              </h2>

              <p style={{ color: 'var(--text-secondary)', fontSize: '1.02rem', lineHeight: 1.6, marginBottom: '2rem' }}>
                Schedule a confidential 30-minute growth roadmapping session. We'll audit your current positioning and ad funnels, and present an actionable scale plan.
              </p>

              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                <button 
                  onClick={() => onNavigate && onNavigate('contact')} 
                  className="btn-prolaps-blue" 
                  style={{ fontSize: '0.96rem', padding: '0.75rem 1.8rem' }}
                >
                  <span>Book Strategy Session</span>
                  <ArrowUpRight size={16} />
                </button>

                <button 
                  onClick={() => onNavigate && onNavigate('blog')} 
                  className="btn-prolaps-white"
                >
                  <span>All Growth Playbooks</span>
                  <ArrowRight size={15} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
