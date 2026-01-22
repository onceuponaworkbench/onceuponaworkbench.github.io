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
        <title>Once Website</title>
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
          <svg
            width="48"
            xmlns="http://www.w3.org/2000/svg"
            height="48"
            viewBox="0 0 24 24"
            className="home-thq-hero-leaf-elm1 hero-leaf"
          >
            <g
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8c0 5.5-4.78 10-10 10"></path>
              <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path>
            </g>
          </svg>
          <svg
            width="36"
            xmlns="http://www.w3.org/2000/svg"
            height="36"
            viewBox="0 0 24 24"
            className="home-thq-hero-leaf-elm2 hero-leaf"
          >
            <g
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8c0 5.5-4.78 10-10 10"></path>
              <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path>
            </g>
          </svg>
          <svg
            width="42"
            xmlns="http://www.w3.org/2000/svg"
            height="42"
            viewBox="0 0 24 24"
            className="home-thq-hero-leaf-elm3 hero-leaf"
          >
            <g
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8c0 5.5-4.78 10-10 10"></path>
              <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path>
            </g>
          </svg>
        </div>
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
              <img
                alt="Wooden play structure with slide in a lush garden on a sunny day."
                src="/web1-1500h.png"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </section>
      <section id="showcase" className="home-thq-showcase-section-elm">
        {/* Gallery code omitted for brevity but should remain exactly as you have it */}
      </section>
      <section id="process" className="home-thq-process-section-elm">
        {/* Process code omitted for brevity but should remain exactly as you have it */}
      </section>
      <section id="about" className="home-thq-about-section-elm">
        {/* About code omitted for brevity but should remain exactly as you have it */}
      </section>
      <section id="faq" className="home-thq-faq-section-elm">
        {/* FAQ code omitted for brevity but should remain exactly as you have it */}
      </section>
      <section id="quote" className="home-thq-contact-section-elm">
        <video
          src="https://videos.pexels.com/video-files/4102353/4102353-hd_1280_720_50fps.mp4"
          loop="true"
          muted="true"
          autoPlay="true"
          playsInline="true"
          className="home-thq-contact-background-video-elm"
        ></video>
        <div className="home-thq-contact-overlay-elm"></div>
        <div className="home-thq-contact-container-elm">
          <div className="home-thq-contact-form-card-elm">
            {/* Form code remains exactly as you have it */}
            <form action="/submit" method="POST" className="home-thq-contact-form-elm">
               {/* ... form content ... */}
               <button type="submit" className="home-thq-btn-elm2 btn-primary btn-lg btn">
                Start Your Playhouse Build
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* --- PARALLAX SCRIPT --- */}
      <Script
        html={`<script defer data-name="hero-parallax">
(function(){
  const heroLeaves = document.querySelectorAll(".hero-leaf")
  function updateHeroParallax() {
    const scrollY = window.scrollY
    heroLeaves.forEach((leaf, index) => {
      const speed = 0.3 + index * 0.1
      const translateY = scrollY * speed
      leaf.style.transform = \`translateY(\${translateY}px)\`
    })
  }
  window.addEventListener("scroll", updateHeroParallax)
})()
</script>`}
      ></Script>

      {/* --- NEW: NAVIGATION TOGGLE SCRIPT --- */}
      <Script
        html={`<script defer data-name="navigation-toggle">
(function() {
    const menuButton = document.querySelector('[data-thq="thq-menu-btn"]');
    const mobileMenu = document.querySelector('[data-thq="thq-mobile-menu"]');
    const closeButton = document.querySelector('[data-thq="thq-close-menu"]');

    if (menuButton && mobileMenu) {
        menuButton.onclick = function() {
            mobileMenu.classList.add('thq-active');
        };
    }

    if (closeButton && mobileMenu) {
        closeButton.onclick = function() {
            mobileMenu.classList.remove('thq-active');
        };
    }
})();
</script>`}
      ></Script>

      <Footer></Footer>
    </div>
  )
}

export default Home
