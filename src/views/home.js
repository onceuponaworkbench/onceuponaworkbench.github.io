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
      <Navigation></Navigation>
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
      <section className="home-thq-hero-section-elm">
        <video src="https://videos.pexels.com/video-files/5738601/5738601-hd_1280_720_24fps.mp4" loop="true" muted="true" autoPlay="true" playsInline="true" className="home-thq-hero-background-video-elm"></video>
        <div className="home-thq-hero-overlay-elm"></div>
        <div className="home-thq-hero-content-wrapper-elm">
          <div className="home-thq-hero-text-column-elm">
            <h1 className="home-hero-title hero-title">Build a Good Story</h1>
            <p className="home-thq-hero-subtitle-elm home-hero-subtitle hero-subtitle">
              Custom playhouses and playspaces that spark imagination and create lasting memories for your family. Handcrafted with care in the heart of Utah.
            </p>
            {/* FIXED: Get a Quote Scroll Button */}
            <Link to="/#quote" className="home-thq-btn-elm1 btn-primary btn-lg btn">Start Your Playhouse Build</Link>
          </div>
          <div className="home-thq-hero-image-column-elm">
            <div className="hero-featured-image">
              <img alt="Wooden play structure" src="/web1-1500h.png" loading="eager" />
            </div>
          </div>
        </div>
      </section>
      <section id="showcase" className="home-thq-showcase-section-elm">
        <div id="gallery" className="home-thq-showcase-container-elm">
          <h2 className="home-thq-section-title-elm1 section-title">Our Playhouse Gallery</h2>
          <p className="home-thq-section-subtitle-elm1 section-subtitle">Unique creations designed to bring joy.</p>
          <div className="home-thq-showcase-carousel-wrapper-elm">
            <div className="showcase-carousel">
              <div className="showcase-slide"><div className="showcase-card"><img alt="Zelda" src="/web9-1500w.png" loading="lazy" /><div className="showcase-caption"><h3 className="showcase-card-title">Link's Playhouse</h3><p className="showcase-card-description">Breath of the Wild inspired</p></div></div></div>
              <div className="showcase-slide"><div className="showcase-card"><img alt="Hobbit" src="/web14-1500w.png" loading="lazy" /><div className="showcase-caption"><h3 className="showcase-card-title">Hobbit Hole</h3><p className="showcase-card-description">Under the stair playspace</p></div></div></div>
              <div className="showcase-slide"><div className="showcase-card"><img alt="Farmhouse" src="/web8-1500w.png" loading="lazy" /><div className="showcase-caption"><h3 className="showcase-card-title">Farmhouse Tavern</h3><p className="showcase-card-description">Fantasy meets farmhouse</p></div></div></div>
              <div className="showcase-slide"><div className="showcase-card"><img alt="Zelda Dog" src="/web2-1500w.png" loading="lazy" /><div className="showcase-caption"><h3 className="showcase-card-title">Zelda Doghouse</h3><p className="showcase-card-description">Legend of Zelda doghouse</p></div></div></div>
            </div>
          </div>
        </div>
      </section>
      <section id="process" className="home-thq-process-section-elm">
        <div className="home-thq-process-timeline-line-elm"></div>
        <div className="process-step process-step-left">
          <div className="process-content"><h3 className="process-step-title">Step 1: Consultation</h3><p className="process-step-description">We discuss your vision, space, and budget.</p></div>
        </div>
        <div className="process-step-right process-step">
          <div className="process-content"><h3 className="process-step-title">Step 2: Design</h3><p className="process-step-description">We build a model tailored to your needs.</p></div>
        </div>
      </section>
      <section id="about" className="home-thq-about-section-elm">
        <div className="home-thq-about-container-elm">
          <div className="about-sticky-image"><img alt="Designing" src="/web7-1500w.png" loading="lazy" /></div>
          <div className="home-thq-about-content-elm">
            <div className="about-story-block"><h2 className="home-thq-section-title-elm2 section-title">Our Story</h2><p className="section-content about-paragraph">Founded by a lifelong craftsman and father, our mission is to create playhouses that become the backdrop for stories.</p></div>
          </div>
        </div>
      </section>
      <section id="faq" className="home-thq-faq-section-elm">
        <h2 className="home-thq-section-title-elm3 section-title">Frequently Asked Questions</h2>
        <div className="home-thq-faq-grid-elm">
          <div className="faq-category">
            <details className="faq-item"><summary className="faq-question"><span className="faq-question-text">How much?</span></summary><div className="faq-answer"><p className="section-content">Typically $3,500 to $12,000.</p></div></details>
          </div>
        </div>
      </section>
      <section id="quote" className="home-thq-contact-section-elm">
        <div className="home-thq-contact-container-elm">
          <div className="home-thq-contact-form-card-elm">
            <h2 className="home-thq-section-title-elm4 section-title">Start Your Playhouse Build</h2>
            <form action="/submit" method="POST" className="home-thq-contact-form-elm">
              <div className="contact-form-group"><label className="contact-label">Name</label><input type="text" name="name" className="contact-input" required /></div>
              <div className="contact-form-group"><label className="contact-label">Email</label><input type="email" name="email" className="contact-input" required /></div>
              <div className="contact-form-group"><label className="contact-label">Idea</label><textarea name="idea" rows="5" className="contact-textarea" required></textarea></div>
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
