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
        <meta property="og:title" content="Once Upon a Workbench" />
        <link rel="canonical" href="https://onceuponaworkbench.com/" />
      </Helmet>
      
      <Navigation />

      <div className="home-container11">
        <div className="home-container12">
          <Script
            html={`<style>
details[open] .faq-icon { transform: rotate(180deg); }
@media (prefers-reduced-motion: reduce) {
  .hero-leaf, .__INLINE__hero-cta, .showcase-card, .process-step { animation: none; }
}
</style>`}
          ></Script>
        </div>
      </div>

      {/* HERO SECTION - Exact original structure to fix text and image scale */}
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
              Custom playhouses and playspaces that spark imagination and create
              lasting memories for your family. Handcrafted with care in the
              heart of Utah.
            </p>
            <Link to="/#quote" className="home-thq-btn-elm1 btn-primary btn-lg btn">
              Start Your Playhouse Build
            </Link>
          </div>
          <div className="home-thq-hero-image-column-elm">
            <div className="hero-featured-image">
              <img alt="Playhouse" src="/web1-1500h.png" loading="eager" />
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY SECTION - Restored original Carousel classes */}
      <section id="showcase" className="home-thq-showcase-section-elm">
        <div id="gallery" className="home-thq-showcase-container-elm">
          <h2 className="home-thq-section-title-elm1 section-title">Our Playhouse Gallery</h2>
          <div className="home-thq-showcase-carousel-wrapper-elm">
            <div className="showcase-carousel">
              <div className="showcase-slide">
                <div className="showcase-card">
                  <img src="/web9-1500w.png" alt="Zelda" />
                  <div className="showcase-caption">
                    <h3 className="showcase-card-title">Link's Playhouse</h3>
                    <p className="showcase-card-description">Inspired by Legend of Zelda</p>
                  </div>
                </div>
              </div>
              <div className="showcase-slide">
                <div className="showcase-card">
                  <img src="/web14-1500w.png" alt="Hobbit" />
                  <div className="showcase-caption">
                    <h3 className="showcase-card-title">Hobbit Hole</h3>
                    <p className="showcase-card-description">Under-the-stairs playspace</p>
                  </div>
                </div>
              </div>
              <div className="showcase-slide">
                <div className="showcase-card">
                  <img src="/web8-1500w.png" alt="Farmhouse" />
                  <div className="showcase-caption">
                    <h3 className="showcase-card-title">Farmhouse Tavern</h3>
                    <p className="showcase-card-description">Fantasy meets farmhouse</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION - Restored structure */}
      <section id="faq" className="home-thq-faq-section-elm">
        <h2 className="home-thq-section-title-elm3 section-title">Frequently Asked Questions</h2>
        <div className="home-thq-faq-grid-elm">
          <div className="faq-category">
            <details className="faq-item">
              <summary className="faq-question"><span className="faq-question-text">How much does a playhouse cost?</span></summary>
              <div className="faq-answer"><p className="section-content">Typically $3,500 to $12,000 depending on complexity.</p></div>
            </details>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION - Centered inputs */}
      <section id="quote" className="home-thq-contact-section-elm">
        <div className="home-thq-contact-container-elm">
          <div className="home-thq-contact-form-card-elm" style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
             <img alt="Logo" src="/website logo-1500h.png" style={{maxWidth: '150px', marginBottom: '20px'}} />
             <h2 className="home-thq-section-title-elm4 section-title">Start Your Playhouse Build</h2>
             <form action="/submit" method="POST" className="home-thq-contact-form-elm" style={{width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <div className="contact-form-group" style={{width: '100%', maxWidth: '450px', textAlign: 'center'}}>
                  <label className="contact-label">Your Name</label>
                  <input type="text" name="name" className="contact-input thq-input" style={{width: '100%', textAlign: 'center'}} required />
                </div>
                <div className="contact-form-group" style={{width: '100%', maxWidth: '450px', textAlign: 'center', marginTop: '15px'}}>
                  <label className="contact-label">Email Address</label>
                  <input type="email" name="email" className="contact-input thq-input" style={{width: '100%', textAlign: 'center'}} required />
                </div>
                <div className="contact-form-group" style={{width: '100%', maxWidth: '450px', textAlign: 'center', marginTop: '15px'}}>
                  <label className="contact-label">Tell Us Your Idea</label>
                  <textarea name="idea" rows="5" className="contact-textarea thq-input" style={{width: '100%', textAlign: 'center'}} required></textarea>
                </div>
                <button type="submit" className="home-thq-btn-elm2 btn-primary btn-lg btn" style={{marginTop: '20px'}}>Send Request</button>
             </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Home
