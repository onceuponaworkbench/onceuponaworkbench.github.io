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
              {/* Added inline style to prevent giant image bug */}
              <img alt="Playhouse" src="/web1-1500h.png" loading="eager" style={{width: '100%', maxHeight: '500px', objectFit: 'cover'}} />
            </div>
          </div>
        </div>
      </section>

      {/* FULL GALLERY CAROUSEL SECTION */}
      <section id="showcase" className="home-thq-showcase-section-elm">
        <div id="gallery" className="home-thq-showcase-container-elm thq-section-max-width">
          <h2 className="section-title thq-heading-2">Our Playhouse Gallery</h2>
          <p className="section-subtitle thq-body-large">Each project is a unique creation designed to bring joy.</p>
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

      {/* FAQ SECTION */}
      <section id="faq" className="home-thq-faq-section-elm thq-section-padding">
        <div className="thq-section-max-width">
          <h2 className="section-title thq-heading-2">Frequently Asked Questions</h2>
          <div className="home-thq-faq-grid-elm thq-grid-2">
            <div className="faq-category">
              <details className="faq-item">
                <summary className="faq-question"><span className="faq-question-text">How much does a playhouse cost?</span></summary>
                <div className="faq-answer"><p className="section-content">Typically $3,500 to $12,000 depending on complexity.</p></div>
              </details>
              <details className="faq-item">
                <summary className="faq-question"><span className="faq-question-text">Do you offer payment plans?</span></summary>
                <div className="faq-answer"><p className="section-content">Yes, we offer flexible deposit-based payment schedules.</p></div>
              </details>
            </div>
          </div>
        </div>
      </section>

      {/* CENTERED CONTACT SECTION */}
      <section id="quote" className="home-thq-contact-section-elm thq-section-padding">
        <div className="home-thq-contact-container-elm thq-section-max-width">
          <div className="home-thq-contact-form-card-elm thq-flex-column">
             <img alt="Logo" src="/website logo-1500h.png" style={{maxWidth: '150px', marginBottom: '20px'}} />
             <h2 className="section-title thq-heading-2">Start Your Playhouse Build</h2>
             <p className="section-subtitle thq-body-large" style={{textAlign: 'center'}}>Share your vision with us.</p>
             <form action="/submit" method="POST" className="home-thq-contact-form-elm thq-flex-column" style={{width: '100%', alignItems: 'center'}}>
                <div className="contact-form-group" style={{width: '100%', maxWidth: '500px', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                  <label className="contact-label">Your Name</label>
                  <input type="text" name="name" placeholder="John Smith" className="contact-input thq-input" required style={{width: '100%', textAlign: 'center'}} />
                </div>
                <div className="contact-form-group" style={{width: '100%', maxWidth: '500px', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                  <label className="contact-label">Email Address</label>
                  <input type="email" name="email" placeholder="you@example.com" className="contact-input thq-input" required style={{width: '100%', textAlign: 'center'}} />
                </div>
                <div className="contact-form-group" style={{width: '100%', maxWidth: '500px', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                  <label className="contact-label">Tell Us Your Idea</label>
                  <textarea name="idea" rows="5" placeholder="Describe your dream..." className="contact-textarea thq-input" required style={{width: '100%', textAlign: 'center'}}></textarea>
                </div>
                <button type="submit" className="home-thq-btn-elm2 btn-primary btn-lg btn thq-button-filled">
                  Send My Quote Request
                </button>
             </form>
          </div>
        </div>
      </section>

      <Footer></Footer>

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
        </script>
        `}
      ></Script>
    </div>
  )
}

export default Home
