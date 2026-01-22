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
    <h2 className="home-thq-section-title-elm1 section-title">
      Our Playhouse Gallery
    </h2>
    <p className="home-thq-section-subtitle-elm1 section-subtitle">
      Each project is a unique creation, designed to bring joy and adventure to your backyard.
    </p>
    
    {/* This wrapper is the "hook" your CSS needs for the carousel layout */}
    <div className="home-thq-showcase-carousel-wrapper-elm">
      <div className="showcase-carousel">
        <div className="showcase-slide">
        
        {/* Slide 1 */}
        <div className="showcase-slide">
          <div className="showcase-card">
            <img alt="Zelda Playhouse" src="/web9-1500w.png" loading="lazy" />
            <div className="showcase-caption">
              <h3 className="showcase-card-title">Link's Playhouse</h3>
              <p className="showcase-card-description">Inspired by Legend of Zelda: Breath of the Wild</p>
            </div>
          </div>
        </div>

        {/* Slide 2 */}
        <div className="showcase-slide">
          <div className="showcase-card">
            <img alt="Hobbit Hole" src="/web14-1500w.png" loading="lazy" />
            <div className="showcase-caption">
              <h3 className="showcase-card-title">Hobbit Hole</h3>
              <p className="showcase-card-description">An under-the-stairs fantasy playspace</p>
            </div>
          </div>
        </div>

        {/* Slide 3 */}
        <div className="showcase-slide">
          <div className="showcase-card">
            <img alt="Farmhouse Tavern" src="/web8-1500w.png" loading="lazy" />
            <div className="showcase-caption">
              <h3 className="showcase-card-title">Farmhouse Tavern</h3>
              <p className="showcase-card-description">Fantasy inspired tavern with farmhouse appeal</p>
            </div>
          </div>
        </div>

        {/* Slide 4 */}
        <div className="showcase-slide">
          <div className="showcase-card">
            <img alt="Mystery Shack" src="/web10-1500w.png" loading="lazy" />
            <div className="showcase-caption">
              <h3 className="showcase-card-title">Mystery Shack</h3>
              <p className="showcase-card-description">Playhouse inspired by Gravity Falls</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</section>

      <section id="process" className="home-thq-process-section-elm">
  {/* This is the vertical line in the background */}
  <div className="home-thq-process-timeline-line-elm"></div>
  
  <div className="home-thq-process-container-elm thq-section-max-width">
    
    {/* Step 1 */}
    <div className="process-step process-step-left">
      <div className="process-icon-wrapper">
        <svg width="32" height="32" viewBox="0 0 24 24" className="process-icon"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8z" fill="currentColor"/></svg>
      </div>
      <div className="process-content">
        <h3 className="process-step-title">1. Consultation</h3>
        <p className="process-step-description">We discuss your vision, space requirements, and budget to create a plan that fits your family perfectly.</p>
      </div>
    </div>

    {/* Step 2 */}
    <div className="process-step process-step-right">
      <div className="process-icon-wrapper">
        <svg width="32" height="32" viewBox="0 0 24 24" className="process-icon"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83l3.75 3.75l1.83-1.83z" fill="currentColor"/></svg>
      </div>
      <div className="process-content">
        <h3 className="process-step-title">2. Design</h3>
        <p className="process-step-description">Our team builds a custom 3D model of your playhouse so you can see the story come to life before we cut a single board.</p>
      </div>
    </div>

    {/* Step 3 */}
    <div className="process-step process-step-left">
      <div className="process-icon-wrapper">
        <svg width="32" height="32" viewBox="0 0 24 24" className="process-icon"><path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9c-2-2-5-2.4-7.4-1.3L9 6L6 9L1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z" fill="currentColor"/></svg>
      </div>
      <div className="process-content">
        <h3 className="process-step-title">3. Build</h3>
        <p className="process-step-description">Using premium materials and expert craftsmanship, we hand-build your structure in our Utah workshop.</p>
      </div>
    </div>

  </div>
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
