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
          <div className="process-step">
            <div className="process-icon-wrapper">1</div>
            <div className="process-content">
              <h3 className="process-step-title">Consultation</h3>
              <p className="process-step-description">We discuss your vision and budget.</p>
            </div>
          </div>
          <div className="process-step">
            <div className="process-icon-wrapper">2</div>
            <div className="process-content">
              <h3 className="process-step-title">Design</h3>
              <p className="process-step-description">We build a custom 3D model.</p>
            </div>
          </div>
          <div className="process-step">
            <div className="process-icon-wrapper">3</div>
            <div className="process-content">
              <h3 className="process-step-title">Build</h3>
              <p className="process-step-description">Handcrafted with care in Utah.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="home-thq-about-section-elm">
        <div className="home-thq-about-container-elm">
          <div className="about-sticky-image"><img alt="Forest" src="/web7-1500w.png" /></div>
          <div className="home-thq-about-content-elm">
            <h2 className="section-title">Our Story</h2>
            <p className="section-content about-paragraph">Every child deserves a space where imagination runs free.</p>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section id="faq" className="home-thq-faq-section-elm">
        <h2 className="section-title">Frequently Asked Questions</h2>
        <div className="home-thq-faq-grid-elm">
          <details className="faq-item">
            <summary className="faq-question">How much does it cost?</summary>
            <div className="faq-answer"><p>$3,500 - $12,000</p></div>
          </details>
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
