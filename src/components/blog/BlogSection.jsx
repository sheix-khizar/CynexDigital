import React, { useState } from 'react';
import { blogPosts } from '../../data/blogData';
import ArticleModal from './ArticleModal';
import { ArrowUpRight, Clock, Mail, CheckCircle2, Sparkles, ChevronRight } from 'lucide-react';

export default function BlogSection({ onToast, isDedicatedPage = false, onNavigate }) {
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setSubscribed(true);
    if (onToast) onToast("Thanks for subscribing to Studio Insights! Check your inbox.");
  };

  const handleOpenArticle = (post) => {
    if (onNavigate) {
      onNavigate(`blog/${post.id}`);
    } else {
      window.location.hash = `#/blog/${post.id}`;
    }
  };

  return (
    <section id="blog" className={`page-fade-in ${isDedicatedPage ? 'page-hero-header' : 'section-spacing'}`} style={{ position: 'relative' }}>
      <div className="container">
        {/* ProLaps Style Dedicated Page Header with Breadcrumbs */}
        {isDedicatedPage ? (
          <div style={{ marginBottom: '3.5rem' }}>
            <div className="page-breadcrumbs">
              <button onClick={() => onNavigate && onNavigate('home')}>Home</button>
              <ChevronRight size={14} />
              <span style={{ color: 'var(--text-primary)' }}>Growth Insights</span>
            </div>

            <div className="prolaps-eyebrow" style={{ marginBottom: '1rem' }}>
              <span className="prolaps-live-dot" />
              <span>INSIGHTS & PERSPECTIVES</span>
            </div>

            <h1 className="page-editorial-title">
              Creative strategy & <br />
              <em>digital growth playbooks.</em>
            </h1>

            <p className="page-editorial-sub">
              Guides and playbooks on branding, modern web, social engines, and paid performance.
            </p>
          </div>
        ) : (
          /* Home page section header */
          <div style={{ textAlign: 'center', maxWidth: '680px', margin: '0 auto 3.5rem auto' }}>
            <span className="badge badge-brand" style={{ marginBottom: '0.75rem' }}>
              Thought Leadership
            </span>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '1rem' }}>
              Insights on branding, <span className="text-gradient">creative & digital growth</span>.
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: '1.5' }}>
              Practical strategies and growth playbooks from active client campaigns.
            </p>
          </div>
        )}

        {/* Blog Posts Grid */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))',
            gap: '2rem',
            marginBottom: '4rem'
          }}
        >
          {blogPosts.map((post) => (
            <div 
              key={post.id}
              className="glass-card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                cursor: 'pointer',
                borderRadius: 'var(--radius-lg)'
              }}
              onClick={() => handleOpenArticle(post)}
            >
              {/* Photo Visual Header with Category Tag */}
              <div 
                style={{
                  height: '175px',
                  position: 'relative',
                  overflow: 'hidden',
                  borderTopLeftRadius: 'calc(var(--radius-lg) - 1px)',
                  borderTopRightRadius: 'calc(var(--radius-lg) - 1px)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  padding: '1.25rem',
                  background: post.gradient
                }}
              >
                {/* Background Image */}
                {post.image && (
                  <img
                    src={post.image}
                    alt={post.title}
                    loading="lazy"
                    className="card-media-zoom"
                    style={{
                      position: 'absolute',
                      inset: 0,
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      zIndex: 0
                    }}
                  />
                )}

                {/* Dark Vignette Overlay for Readability */}
                <div 
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(180deg, rgba(8, 14, 28, 0.42) 0%, rgba(8, 14, 28, 0.75) 100%)',
                    zIndex: 1
                  }} 
                />

                <div style={{ position: 'relative', zIndex: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span 
                    style={{
                      background: 'rgba(0,0,0,0.5)',
                      backdropFilter: 'blur(10px)',
                      color: '#ffffff',
                      fontSize: '0.72rem',
                      fontWeight: 700,
                      padding: '0.25rem 0.7rem',
                      borderRadius: 'var(--radius-full)',
                      border: '1px solid rgba(255,255,255,0.18)'
                    }}
                  >
                    {post.tag}
                  </span>
                  <div 
                    style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '50%',
                      background: 'rgba(0,0,0,0.45)',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(255,255,255,0.2)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#ffffff'
                    }}
                  >
                    <ArrowUpRight size={16} />
                  </div>
                </div>

                <div style={{ position: 'relative', zIndex: 2, display: 'flex', alignItems: 'center', gap: '0.35rem', color: '#ffffff', fontSize: '0.75rem', opacity: 0.9 }}>
                  <Clock size={12} />
                  <span>{post.readTime}</span>
                </div>
              </div>

              {/* Body */}
              <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 800, marginBottom: '0.6rem', lineHeight: 1.35 }}>
                  {post.title}
                </h3>

                <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', lineHeight: 1.55, marginBottom: '1.25rem', flexGrow: 1 }}>
                  {post.summary}
                </p>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid var(--border-color)', paddingTop: '0.85rem' }}>
                  <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                    {post.date}
                  </span>
                  <span style={{ fontSize: '0.82rem', fontWeight: 600, color: '#0f62fe' }}>
                    Read Playbook ↗
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Newsletter Signup Form */}
        <div 
          className="glass-card card-padded newsletter-wrapper"
          style={{
            textAlign: 'center',
            maxWidth: '680px',
            margin: '0 auto',
          }}
        >
          <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'rgba(15, 98, 254, 0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.25rem auto' }}>
            <Mail size={22} color="#0f62fe" />
          </div>

          <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '0.5rem' }}>
            The Growth Dispatch
          </h3>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', marginBottom: '1.5rem', maxWidth: '480px', margin: '0 auto 1.5rem auto' }}>
            Bi-weekly ad creative breakdowns, auction updates, and conversion rate playbooks read by 4,200+ founders and CMOs. Zero spam.
          </p>

          {subscribed ? (
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.75rem 1.5rem', borderRadius: 'var(--radius-full)', background: 'rgba(16, 185, 129, 0.12)', color: '#10b981', fontWeight: 600 }}>
              <CheckCircle2 size={18} />
              <span>You're on the list! Check your inbox for the welcome playbook.</span>
            </div>
          ) : (
            <form onSubmit={handleNewsletterSubmit} style={{ display: 'flex', gap: '0.5rem', maxWidth: '440px', margin: '0 auto', flexWrap: 'wrap' }}>
              <input 
                type="email" 
                placeholder="Enter your work email..." 
                required
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                style={{
                  flex: '1 1 240px',
                  padding: '0.75rem 1.25rem',
                  borderRadius: 'var(--radius-full)',
                  background: 'var(--bg-input)',
                  border: '1px solid var(--border-color)',
                  color: 'var(--text-primary)',
                  outline: 'none'
                }}
              />
              <button type="submit" className="btn-prolaps-blue" style={{ flexShrink: 0 }}>
                <span>Subscribe</span>
                <ArrowUpRight size={15} />
              </button>
            </form>
          )}
        </div>
      </div>

      {/* Article Modal */}
      <ArticleModal
        article={selectedArticle}
        isOpen={!!selectedArticle}
        onClose={() => setSelectedArticle(null)}
      />
    </section>
  );
}
