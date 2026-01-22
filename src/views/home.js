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

      {/* RESTORED CONTENT - This is where your gallery and other sections live */}
      <section id="showcase" className="home-thq-showcase-section-elm">
         <div className="home-thq-showcase-container-elm">
            <h2 className="section-title">Our Playhouse Gallery</h2>
            <div className="showcase-carousel">
               {/* Simplified Slides for stability during test */}
               <div className="showcase-slide"><div className="showcase-card"><img src="/web9-1500w.png" alt="Playhouse 1" /></div></div>
               <div className="showcase-slide"><div className="showcase-card"><img src="/web14-1500w.png" alt="Playhouse 2" /></div></div>
            </div>
         </div>
      </section>

      {/* CONTACT / QUOTE SECTION */}
      <section id="quote" className="home-thq-contact-section-elm">
        <div className="home-thq-contact-container-elm">
          <div className="home-thq-contact-form-card-elm">
             <h2 className="section-title">Get a Quote</h2>
             {/* The button you click scrolls here */}
             <form className="home-thq-contact-form-elm">
                <input type="text" placeholder="Name" className="contact-input" />
                <button type="button" className="btn-primary btn-lg btn">Submit</button>
             </form>
          </div>
        </div>
      </section>

      <Footer></Footer>

      {/* --- SAFE SCRIPTS --- */}
      <Script
        html={`
        <script>
          // SAFE TOGGLE LOGIC (Won't freeze scrolling)
          (function() {
            const menuBtn = document.querySelector('[data-thq="thq-menu-btn"]');
            const closeBtn = document.querySelector('[data-thq="thq-close-menu"]');
            const mobileMenu = document.querySelector('[data-thq="thq-mobile-menu"]');
            
            if (menuBtn && mobileMenu) {
              menuBtn.onclick = function() {
                mobileMenu.style.display = 'flex';
                mobileMenu.classList.add('thq-active');
              };
            }
            if (closeBtn && mobileMenu) {
              closeBtn.onclick = function() {
                mobileMenu.classList.remove('thq-active');
                mobileMenu.style.display = 'none';
                document.body.style.overflow = 'auto'; // Force scrolling back on
              };
            }
          })();
        </script>
        `}
      ></Script>
    </div>
  )
}

export default Home
