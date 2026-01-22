import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'
import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import Navigation from '../components/navigation'
import Footer from '../components/footer'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container10">
      <Helmet>
        <title>Once Upon a Workbench</title>
        <meta property="og:title" content="Once Website" />
        <link
          rel="canonical"
          href="https://onceuponaworkbench.com/"
        />
      </Helmet>
      <Navigation></Navigation>
      <div className="home-container11">
        <div className="home-container12">
          <Script
            html={`<style>
details[open] .faq-icon {
  transform: rotate(180deg);
}
@media (prefers-reduced-motion: reduce) {
.hero-leaf, .__INLINE__hero-cta, .showcase-card, .process-step, .__INLINE__about-badge-icon, .__INLINE__contact-header-icon {
  animation: none;
}
.__INLINE__hero-text-column, .__INLINE__hero-image-column, .showcase-card, .process-content, .about-story-block, .__INLINE__contact-form-card {
  animation: none;
  opacity: 1;
  transform: none;
}
.showcase-card, .process-icon-wrapper, .process-content, .about-stat-item, .faq-item {
  transition: none;
}
}
</style>`}
          ></Script>
        </div>
      </div>
      <section className="home-thq-hero-section-elm">
        <video
          src="https://videos.pexels.com/video-files/5738601/5738601-hd_1280_720_24fps.mp4"
          loop="true"
          muted="true"
          autoPlay="true"
          playsInline="true"
          className="home-thq-hero-background-video-elm"
        ></video>
        <div className="home-thq-hero-overlay-elm"></div>
        <div className="home-thq-hero-decorative-leaves-elm">
          <svg width="48" height="48" viewBox="0 0 24 24" className="home-thq-hero-leaf-elm1 hero-leaf"><g fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8c0 5.5-4.78 10-10 10"></path><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path></g></svg>
          <svg width="36" height="36" viewBox="0 0 24 24" className="home-thq-hero-leaf-elm2 hero-leaf"><g fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8c0 5.5-4.78 10-10 10"></path><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path></g></svg>
          <svg width="42" height="42" viewBox="0 0 24 24" className="home-thq-hero-leaf-elm3 hero-leaf"><g fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8c0 5.5-4.78 10-10 10"></path><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path></g></svg>
        </div>
        <div className="home-thq-hero-content-wrapper-elm">
          <div className="home-thq-hero-text-column-elm">
            <h1 className="home-hero-title hero-title">Build a Good Story</h1>
            <p className="home-thq-hero-subtitle-elm home-hero-subtitle hero-subtitle">
              Custom playhouses and playspaces that spark imagination and create lasting memories for your family. Handcrafted with care in the heart of Utah.
            </p>
            <Link to="/#quote" className="home-thq-btn-elm1 btn-primary btn-lg btn">
              Start Your Playhouse Build
            </Link>
          </div>
          <div className="home-thq-hero-image-column-elm">
            <div className="hero-featured-image">
              <img
                alt="Wooden play structure"
                src="/web1-1500h.png"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="showcase" className="home-thq-showcase-section-elm">
        <div id="gallery" className="home-thq-showcase-container-elm">
          <h2 className="home-thq-section-title-elm1 section-title">Our Playhouse Gallery</h2>
          <p className="home-thq-section-subtitle-elm1 section-subtitle">Each project is a unique creation, designed to bring joy.</p>
          <div className="home-thq-showcase-carousel-wrapper-elm">
            <div className="showcase-carousel">
              <div className="showcase-slide">
                <div className="showcase-card">
                  <img alt="Legend of Zelda inspired playhouse" src="/web9-1500w.png" loading="lazy" />
                  <div className="showcase-caption"><h3 className="showcase-card-title">Link's Playhouse</h3><p className="showcase-card-description">Playhouse inspired by Legend of Zelda</p></div>
                </div>
              </div>
              <div className="showcase-slide">
                <div className="showcase-card">
                  <img alt="Hobbit Hole" src="/web14-1500w.png" loading="lazy" />
                  <div className="showcase-caption"><h3 className="showcase-card-title">Hobbit Hole</h3><p className="showcase-card-description">A Hobbit inspired playspace</p></div>
                </div>
              </div>
              <div className="showcase-slide">
                <div className="showcase-card">
                  <img alt="Farmhouse" src="/web8-1500w.png" loading="lazy" />
                  <div className="showcase-caption"><h3 className="showcase-card-title">Farmhouse Tavern</h3><p className="showcase-card-description">Fantasy inspired tavern</p></div>
                </div>
              </div>
              <div className="showcase-slide">
                <div className="showcase-card">
                  <img alt="Zelda Dog" src="/web2-1500w.png" loading="lazy" />
                  <div className="showcase-caption"><h3 className="showcase-card-title">Zelda Doghouse</h3><p className="showcase-card-description">Legend of Zelda doghouse</p></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="process" className="home-thq-process-section-elm">
        <div className="home-thq-process-timeline-line-elm"></div>
        <div className="process-step process-step-left">
          <div className="process-icon-wrapper"><svg width="32" height="32" viewBox="0 0 24 24" className="process-icon"><g fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16.5 10c3.038 0 5.5 2.015 5.5 4.5c0 1.397-.778 2.645-2 3.47V20l-1.964-1.178A6.7 6.7 0 0 1 16.5 19c-3.038 0-5.5-2.015-5.5-4.5s2.462-4.5 5.5-4.5"></path><path d="M11.197 15.698c-.69.196-1.43.302-2.197.302a8 8 0 0 1-2.612-.432L4 17v-2.801C2.763 13.117 2 11.635 2 10c0-3.314 3.134-6 7-6c3.782 0 6.863 2.57 7 5.785v.233M10 8h.01M7 8h.01M15 14h.01M18 14h.01"></path></g></svg></div>
          <div className="process-content"><h3 className="process-step-title">Step 1: Consultation</h3><p className="process-step-description">We start with a conversation about your vision, space, and budget.</p></div>
        </div>
        <div className="process-step-right process-step">
          <div className="process-icon-wrapper"><svg width="32" height="32" viewBox="0 0 24 24" className="process-icon"><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497zM15 5l4 4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg></div>
          <div className="process-content"><h3 className="process-step-title">Step 2: Design</h3><p className="process-step-description">We take your idea and build a model tailored to your needs.</p></div>
        </div>
        <div className="process-step process-step-left">
          <div className="process-icon-wrapper"><svg width="32" height="32" viewBox="0 0 24 24" className="process-icon"><g fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 12l-9.373 9.373a1 1 0 0 1-3.001-3L12 9m6 6l4-4"></path><path d="m21.5 11.5l-1.914-1.914A2 2 0 0 1 19 8.172v-.344a2 2 0 0 0-.586-1.414l-1.657-1.657A6 6 0 0 0 12.516 3H9l1.243 1.243A6 6 0 0 1 12 8.485V10l2 2h1.172a2 2 0 0 1 1.414.586L18.5 14.5"></path></g></svg></div>
          <div className="process-content"><h3 className="process-step-title">Step 3: Build</h3><p className="process-step-description">Using premium materials and expert craftsmanship, we build your playhouse with attention to every detail.</p></div>
        </div>
        <div className="process-step-right process-step">
          <div className="process-icon-wrapper"><svg width="32" height="32" viewBox="0 0 24 24" className="process-icon"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg></div>
          <div className="process-content"><h3 className="process-step-title">Step 4: Install</h3><p className="process-step-description">We handle delivery and installation with care.</p></div>
        </div>
        <div className="home-thq-process-progress-indicator-elm"><div className="home-thq-process-progress-bar-elm"></div></div>
      </section>

      <section id="about" className="home-thq-about-section-elm">
        <div className="home-thq-about-container-elm">
          <div className="about-sticky-image"><img alt="Forest" src="/web7-1500w.png" loading="lazy" /></div>
          <div className="home-thq-about-content-elm">
            <div className="about-story-block">
              <h2 className="home-thq-section-title-elm2 section-title">Our Story</h2>
              <p className="section-content about-paragraph">Once Upon a Workbench began as a small workshop with a simple belief: every child deserves a space where imagination runs free.</p>
            </div>
            <div className="home-thq-about-stats-elm">
              <div className="about-stat-item">
                <div className="about-stat-content"><span className="about-stat-number">150+</span><span className="about-stat-label">Happy Families</span></div>
              </div>
              <div className="about-stat-item">
                <div className="about-stat-content"><span className="about-stat-number">5+</span><span className="about-stat-label">Years Building Dreams</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="home-thq-faq-section-elm">
        <h2 className="home-thq-section-title-elm3 section-title">Frequently Asked Questions</h2>
        <div className="home-thq-faq-grid-elm">
          <div className="faq-category">
            <h3 className="faq-category-title">Pricing & Ordering</h3>
            <details className="faq-item">
              <summary className="faq-question"><span className="faq-question-text">How much does a custom playhouse cost?</span></summary>
              <div className="faq-answer"><p className="section-content">Typically range from $3,500 to $12,000.</p></div>
            </details>
          </div>
        </div>
      </section>

      <section className="home-thq-contact-section-elm">
        <video src="https://videos.pexels.com/video-files/4102353/4102353-hd_1280_720_50fps.mp4" loop="true" muted="true" autoPlay="true" playsInline="true" className="home-thq-contact-background-video-elm"></video>
        <div id="quote" className="home-thq-contact-container-elm">
          <div className="home-thq-contact-form-card-elm">
            <img alt="logo" src="/website%20logo-1500h.png" className="home-image19" />
            <div className="home-thq-contact-header-elm">
              <h2 className="home-thq-section-title-elm4 section-title">Start Your Playhouse Build</h2>
            </div>
            <form action="/submit" method="POST" className="home-thq-contact-form-elm">
              <div className="contact-form-group"><label className="contact-label">Your Name</label><input type="text" name="name" placeholder="John Smith" className="contact-input" required /></div>
              <div className="contact-form-group"><label className="contact-label">Email Address</label><input type="email" name="email" placeholder="you@example.com" className="contact-input" required /></div>
              <div className="contact-form-group"><label className="contact-label">Tell Us Your Idea</label><textarea name="idea" rows="5" placeholder="Describe your dream..." className="contact-textarea" required></textarea></div>
              <button type="submit" className="home-thq-btn-elm2 btn-primary btn-lg btn">Start Your Playhouse Build</button>
            </form>
          </div>
        </div>
      </section>

      <Footer></Footer>
    </div>
  )
}

export default Home
