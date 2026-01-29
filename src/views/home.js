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
        <link rel="canonical" href="https://onceuponaworkbench.com/" />
      </Helmet>
      
      <Navigation />

      <div className="home-container11">
        <div className="home-container12">
          <Script
            html={`<style>
details[open] .faq-icon { transform: rotate(180deg); }
@media (prefers-reduced-motion: reduce) {
.hero-leaf, .__INLINE__hero-cta, .showcase-card, .process-step, .__INLINE__about-badge-icon, .__INLINE__contact-header-icon { animation: none; }
.__INLINE__hero-text-column, .__INLINE__hero-image-column, .showcase-card, .process-content, .about-story-block, .__INLINE__contact-form-card { animation: none; opacity: 1; transform: none; }
.showcase-card, .process-icon-wrapper, .process-content, .about-stat-item, .faq-item { transition: none; }
}
</style>`}
          ></Script>
        </div>
      </div>

      {/* HERO SECTION */}
      <section className="home-thq-hero-section-elm">
        <video
          src="https://videos.pexels.com/video-files/5738601/5738601-hd_1280_720_24fps.mp4"
          loop={true} muted={true} autoPlay={true} playsInline={true}
          className="home-thq-hero-background-video-elm"
        ></video>
        <div className="home-thq-hero-overlay-elm"></div>
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
              <img alt="Wooden play structure" src="/web1-1500h.png" loading="eager" />
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY SECTION */}
      <section id="showcase" className="home-thq-showcase-section-elm">
        <div id="gallery" className="home-thq-showcase-container-elm">
          <h2 className="home-thq-section-title-elm1 section-title">Our Playhouse Gallery</h2>
          <p className="home-thq-section-subtitle-elm1 section-subtitle">
            Each project is a unique creation, designed to bring joy and adventure.
          </p>
          <div className="home-thq-showcase-carousel-wrapper-elm">
            <div className="showcase-carousel">
              <div className="showcase-slide">
                <div className="showcase-card">
                  <img alt="Zelda Playhouse" src="/web9-1500w.png" />
                  <div className="showcase-caption">
                    <h3 className="showcase-card-title">Link's Playhouse</h3>
                    <p className="showcase-card-description">Inspired by Legend of Zelda</p>
                  </div>
                </div>
              </div>
              <div className="showcase-slide">
                <div className="showcase-card">
                  <img alt="Hobbit Hole" src="/web14-1500w.png" />
                  <div className="showcase-caption">
                    <h3 className="showcase-card-title">Hobbit Hole</h3>
                    <p className="showcase-card-description">A fantasy playspace</p>
                  </div>
                </div>
              </div>
              <div className="showcase-slide">
                <div className="showcase-card">
                  <img alt="Farmhouse Tavern" src="/web8-1500w.png" />
                  <div className="showcase-caption">
                    <h3 className="showcase-card-title">Farmhouse Tavern</h3>
                    <p className="showcase-card-description">Fantasy meets farmhouse</p>
                  </div>
                </div>
              </div>
              <div className="showcase-slide">
                <div className="showcase-card">
                  <img alt="Mystery Shack" src="/web10-1500w.png" />
                  <div className="showcase-caption">
                    <h3 className="showcase-card-title">Mystery Shack</h3>
                    <p className="showcase-card-description">Inspired by Gravity Falls</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section id="process" className="home-thq-process-section-elm">
        <div className="home-thq-process-timeline-line-elm"></div>
        <div className="home-thq-process-container-elm thq-section-max-width">
          
          {/* Step 1 */}
          <div className="process-step process-step-left">
            <div className="process-icon-wrapper">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
            </div>
            <div className="process-content">
              <h3 className="process-step-title">1. Consultation</h3>
              <p className="process-step-description">We discuss your vision, space requirements, and budget to create a plan that fits your family perfectly.</p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="process-step process-step-right">
            <div className="process-icon-wrapper">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg>
            </div>
            <div className="process-content">
              <h3 className="process-step-title">2. Design</h3>
              <p className="process-step-description">Our team builds a custom 3D model of your playhouse so you can see the story come to life before we build.</p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="process-step process-step-left">
            <div className="process-icon-wrapper">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m2 22 1-1h3l9-9"></path><path d="M3 21v-3l9-9"></path><path d="m15 6 3.4-3.4a2.1 2.1 0 1 1 3 3L18 9l-3-3Z"></path></svg>
            </div>
            <div className="process-content">
              <h3 className="process-step-title">3. Build</h3>
              <p className="process-step-description">Using premium materials and expert craftsmanship, we hand-build your structure in our workshop.</p>
            </div>
          </div>

          {/* Step 4 */}
          <div className="process-step process-step-right">
            <div className="process-icon-wrapper">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg>
            </div>
            <div className="process-content">
              <h3 className="process-step-title">4. Install</h3>
              <p className="process-step-description">We handle the heavy lifting with professional delivery and installation right in your backyard.</p>
            </div>
          </div>

        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="home-thq-about-section-elm">
        <div className="home-thq-about-container-elm">
          
          {/* Left Side: Sticky Image Area */}
          <div className="about-sticky-image-wrapper">
            <div className="about-sticky-image">
              <img 
                alt="Handcrafting a playhouse" 
                src="/web7-1500w.png" 
                loading="lazy" 
              />
              <div className="home-thq-about-image-badge-elm">
                <span className="home-thq-about-badge-text-elm">Handcrafted in Utah</span>
              </div>
            </div>
          </div>

          {/* Right Side: Content Area */}
          <div className="home-thq-about-content-elm">
            <div className="about-story-block">
              <h2 className="home-thq-section-title-elm2 section-title">Our Story</h2>
              <p className="section-content about-paragraph">
                Once Upon a Workbench began with a simple belief: every child deserves a space where imagination runs free. What started as a small workshop in the heart of Utah has grown into a passion for building high-quality, custom playhouses that become the backdrop for your family's most cherished memories.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="home-thq-about-stats-elm">
              <div className="about-stat-item">
                <div className="about-stat-content">
                  <span className="about-stat-number">150+</span>
                  <span className="about-stat-label">Happy Families</span>
                </div>
              </div>
              <div className="about-stat-item">
                <div className="about-stat-content">
                  <span className="about-stat-number">5+</span>
                  <span className="about-stat-label">Years of Magic</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

     {/* FAQ SECTION */}
      <section id="faq" className="home-thq-faq-section-elm">
        <div className="home-thq-faq-container-elm thq-section-max-width">
          <div className="home-thq-faq-header-elm">
            <h2 className="home-thq-section-title-elm3 section-title">Frequently Asked Questions</h2>
            <p className="home-thq-section-subtitle-elm2 section-subtitle">
              Everything you need to know about our custom playhouse process.
            </p>
          </div>
          
          <div className="home-thq-faq-grid-elm">
            {/* Question 1 */}
            <details className="faq-item">
              <summary className="faq-question">
                <span className="faq-question-text">How much does a custom playhouse cost?</span>
                <svg viewBox="0 0 24 24" className="faq-icon"><path d="M6 9l6 6 6-6" stroke="currentColor" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </summary>
              <div className="faq-answer">
                <p className="section-content">Our custom builds typically range from $3,500 to $12,000. Pricing depends on size, complexity, and specific features like electrical, insulation, or custom themes.</p>
              </div>
            </details>

            {/* Question 2 */}
            <details className="faq-item">
              <summary className="faq-question">
                <span className="faq-question-text">Do you offer payment plans?</span>
                <svg viewBox="0 0 24 24" className="faq-icon"><path d="M6 9l6 6 6-6" stroke="currentColor" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </summary>
              <div className="faq-answer">
                <p className="section-content">Yes! We require a non refundable deposit for the design and plans, then can setup a payment plan with half being due up front and the remaining balance split into milestones throughout the project.</p>
              </div>
            </details>

            {/* Question 3 */}
            <details className="faq-item">
              <summary className="faq-question">
                <span className="faq-question-text">How long does the build process take?</span>
                <svg viewBox="0 0 24 24" className="faq-icon"><path d="M6 9l6 6 6-6" stroke="currentColor" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </summary>
              <div className="faq-answer">
                <p className="section-content">Most custom built projects take 4–8 weeks from the final design approval to installation, depending on our current queue and the complexity of the build.</p>
              </div>
            </details>

            {/* Question 4 */}
            <details className="faq-item">
              <summary className="faq-question">
                <span className="faq-question-text">Do you ship outside of Utah?</span>
                <svg viewBox="0 0 24 24" className="faq-icon"><path d="M6 9l6 6 6-6" stroke="currentColor" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </summary>
              <div className="faq-answer">
                <p className="section-content">Currently, we focus on serving families within Utah and surrounding mountain states to ensure high-quality delivery and on-site installation.</p>
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION - FIXED ALIGNMENT */}
      <section id="quote" className="home-thq-contact-section-elm">
        <div className="home-thq-contact-container-elm">
          <div className="home-thq-contact-form-card-elm" style={{display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center'}}>
            <img alt="logo" src="/website logo-1500h.png" style={{maxWidth: '150px', marginBottom: '20px'}} />
            <h2 className="section-title">Start Your Playhouse Build</h2>
            <form action="/submit" method="POST" className="home-thq-contact-form-elm" style={{width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
              <input type="text" name="name" placeholder="Your Name" className="contact-input" style={{width: '100%', maxWidth: '400px', marginBottom: '10px'}} required />
              <input type="email" name="email" placeholder="Email" className="contact-input" style={{width: '100%', maxWidth: '400px', marginBottom: '10px'}} required />
              <textarea name="idea" rows="5" placeholder="Your Idea" className="contact-textarea" style={{width: '100%', maxWidth: '400px', marginBottom: '10px'}} required></textarea>
              <button type="submit" className="btn-primary btn-lg btn">Send Request</button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Home
