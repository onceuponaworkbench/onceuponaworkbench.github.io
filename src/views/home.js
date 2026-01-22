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
            {/* The 'hero-featured-image' class in style.css handles the rounding and perspective */}
            <div className="hero-featured-image">
              <img alt="Playhouse" src="/web1-1500h.png" loading="eager" />
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY CAROUSEL */}
      <section id="showcase" className="home-thq-showcase-section-elm">
        <div id="gallery" className="home-thq-showcase-container-elm">
          <h2 className="home-thq-section-title-elm1 section-title">Our Playhouse Gallery</h2>
          <p className="home-thq-section-subtitle-elm1 section-subtitle">Unique creations designed for adventure.</p>
          <div className="home-thq-showcase-carousel-wrapper-elm">
            <div className="showcase-carousel">
              {[
                { src: "/web9-1500w.png", title: "Link's Playhouse", desc: "Inspired by Legend of Zelda" },
                { src: "/web14-1500w.png", title: "Hobbit Hole", desc: "Under-the-stairs playspace" },
                { src: "/web8-1500w.png", title: "Farmhouse Tavern", desc: "Fantasy meets farmhouse" },
                { src: "/web10-1500w.png", title: "Mystery Shack", desc: "Inspired by Gravity Falls" }
              ].map((item, index) => (
                <div className="showcase-slide" key={index}>
                  <div className="showcase-card">
                    <img src={item.src} alt={item.title} />
                    <div className="showcase-caption">
                      <h3 className="showcase-card-title">{item.title}</h3>
                      <p className="showcase-card-description">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FULL FAQ SECTION */}
      <section id="faq" className="home-thq-faq-section-elm">
        <h2 className="home-thq-section-title-elm3 section-title">Frequently Asked Questions</h2>
        <div className="home-thq-faq-grid-elm">
          <div className="faq-category">
            <h3 className="faq-category-title">Pricing & Ordering</h3>
            <details className="faq-item">
              <summary className="faq-question"><span className="faq-question-text">How much does a custom playhouse cost?</span></summary>
              <div className="faq-answer"><p className="section-content">Our playhouses typically range from $3,500 to $12,000 depending on size and features.</p></div>
            </details>
            <details className="faq-item">
              <summary className="faq-question"><span className="faq-question-text">Do you offer payment plans?</span></summary>
              <div className="faq-answer"><p className="section-content">Yes! We offer flexible payment plans with a deposit structure.</p></div>
            </details>
          </div>
          <div className="faq-category">
            <h3 className="faq-category-title">Timeline & Process</h3>
            <details className="faq-item">
              <summary className="faq-question"><span className="faq-question-text">How long does it take to build?</span></summary>
              <div className="faq-answer"><p className="section-content">Most projects take 4-8 weeks from consultation to installation.</p></div>
            </details>
          </div>
        </div>
      </section>

      {/* CENTERED CONTACT FORM */}
      <section id="quote" className="home-thq-contact-section-elm">
        <div className="home-thq-contact-container-elm">
          <div className="home-thq-contact-form-card-elm" style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
             <img alt="Logo" src="/website logo-1500h.png" style={{maxWidth: '180px', marginBottom: '20px'}} />
             <h2 className="section-title" style={{textAlign: 'center'}}>Start Your Playhouse Build</h2>
             <form action="/submit" method="POST" className="home-thq-contact-form-elm" style={{width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <div className="contact-form-group" style={{width: '100%', maxWidth: '450px', textAlign: 'center'}}>
                  <label className="contact-label">Your Name</label>
                  <input type="text" name="name" className="contact-input thq-input" style={{width: '100%'}} required />
                </div>
                <div className="contact-form-group" style={{width: '100%', maxWidth: '450px', textAlign: 'center', marginTop: '15px'}}>
                  <label className="contact-label">Email Address</label>
                  <input type="email" name="email" className="contact-input thq-input" style={{width: '100%'}} required />
                </div>
                <div className="contact-form-group" style={{width: '100%', maxWidth: '450px', textAlign: 'center', marginTop: '15px'}}>
                  <label className="contact-label">Tell Us Your Idea</label>
                  <textarea name="idea" rows="5" className="contact-textarea thq-input" style={{width: '100%'}} required></textarea>
                </div>
                <button type="submit" className="home-thq-btn-elm2 btn-primary btn-lg btn" style={{marginTop: '25px'}}>
                  Send Request
                </button>
             </form>
          </div>
        </div>
      </section>

      <Footer></Footer>

      <Script
        html={`
        <script>
          // NAV TOGGLE
          (function() {
            const menuBtn = document.querySelector('[data-thq="thq-menu-btn"]');
            const closeBtn = document.querySelector('[data-thq="thq-close-menu"]');
            const mobileMenu = document.querySelector('[data-thq="thq-mobile-menu"]');
            if (menuBtn && mobileMenu) {
              menuBtn.onclick = () => { mobileMenu.style.display = 'flex'; mobileMenu.classList.add('thq-active'); };
            }
            if (closeBtn && mobileMenu) {
              closeBtn.onclick = () => { mobileMenu.classList.remove('thq-active'); mobileMenu.style.display = 'none'; };
            }
          })();
        </script>
        `}
      ></Script>
    </div>
  )
}

export default Home
