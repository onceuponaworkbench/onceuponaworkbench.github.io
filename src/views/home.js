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
      
      <Navigation></Navigation>

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
            <p className="home-hero-subtitle hero-subtitle">
              Custom playhouses and playspaces handcrafted with care in the heart of Utah.
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

      {/* FULL GALLERY SECTION */}
      <section id="showcase" className="home-thq-showcase-section-elm">
        <div id="gallery" className="home-thq-showcase-container-elm">
          <h2 className="section-title">Our Playhouse Gallery</h2>
          <p className="section-subtitle">Each project is a unique creation designed to bring joy.</p>
          <div className="showcase-carousel">
            <div className="showcase-slide">
              <div className="showcase-card">
                <img src="/web9-1500w.png" alt="Zelda Playhouse" />
                <div className="showcase-caption">
                  <h3 className="showcase-card-title">Link's Playhouse</h3>
                  <p className="showcase-card-description">Inspired by Legend of Zelda: Breath of the Wild</p>
                </div>
              </div>
            </div>
            <div className="showcase-slide">
              <div className="showcase-card">
                <img src="/web14-1500w.png" alt="Hobbit Hole" />
                <div className="showcase-caption">
                  <h3 className="showcase-card-title">Hobbit Hole</h3>
                  <p className="showcase-card-description">A Hobbit inspired under-the-stairs playspace</p>
                </div>
              </div>
            </div>
            <div className="showcase-slide">
              <div className="showcase-card">
                <img src="/web8-1500w.png" alt="Farmhouse Tavern" />
                <div className="showcase-caption">
                  <h3 className="showcase-card-title">Farmhouse Tavern</h3>
                  <p className="showcase-card-description">Fantasy inspired tavern with farmhouse appeal</p>
                </div>
              </div>
            </div>
             <div className="showcase-slide">
              <div className="showcase-card">
                <img src="/web10-1500w.png" alt="Mystery Shack" />
                <div className="showcase-caption">
                  <h3 className="showcase-card-title">Mystery Shack</h3>
                  <p className="showcase-card-description">Inspired by Gravity Falls</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FULL CONTACT SECTION */}
      <section id="quote" className="home-thq-contact-section-elm">
        <div className="home-thq-contact-container-elm">
          <div className="home-thq-contact-form-card-elm">
             <img alt="Logo" src="/website logo-1500h.png" className="home-image19" style={{maxWidth: '200px', margin: '0 auto 20px'}} />
             <h2 className="section-title">Start Your Playhouse Build</h2>
             <p className="section-subtitle">Share your vision, and let's create something magical.</p>
             <form action="/submit" method="POST" className="home-thq-contact-form-elm">
                <div className="contact-form-group">
                  <label className="contact-label">Your Name</label>
                  <input type="text" name="name" placeholder="John Smith" className="contact-input" required />
                </div>
                <div className="contact-form-group">
                  <label className="contact-label">Email Address</label>
                  <input type="email" name="email" placeholder="you@example.com" className="contact-input" required />
                </div>
                <div className="contact-form-group">
                  <label className="contact-label">Tell Us Your Idea</label>
                  <textarea name="idea" rows="5" placeholder="Describe your dream playhouse..." className="contact-textarea" required></textarea>
                </div>
                <button type="submit" className="home-thq-btn-elm2 btn-primary btn-lg btn">
                  Send My Quote Request
                </button>
             </form>
          </div>
        </div>
      </section>

      <Footer></Footer>

      {/* SCRIPTS */}
      <Script
        html={`
        <script>
          // NAVIGATION TOGGLE
          (function() {
            const menuBtn = document.querySelector('[data-thq="thq-menu-btn"]');
            const closeBtn = document.querySelector('[data-thq="thq-close-menu"]');
            const mobileMenu = document.querySelector('[data-thq="thq-mobile-menu"]');
            if (menuBtn && mobileMenu) {
              menuBtn.onclick = () => { mobileMenu.style.display = 'flex'; mobileMenu.classList.add('thq-active'); };
            }
            if (closeBtn && mobileMenu) {
              closeBtn.onclick = () => { mobileMenu.classList.remove('thq-active'); mobileMenu.style.display = 'none'; document.body.style.overflow = 'auto'; };
            }
          })();

          // CAROUSEL AUTO-SCROLL
          (function() {
            const carousel = document.querySelector(".showcase-carousel");
            if (carousel) { carousel.style.overflowX = "auto"; }
          })();
        </script>
        `}
      ></Script>
    </div>
  )
}

export default Home
