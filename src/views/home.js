import React from 'react'

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
          // --- FIX 1: Canonical URL updated for SEO ---
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
            <button className="home-thq-btn-elm1 btn-primary btn-lg btn">
              Start Your Playhouse Build
            </button>
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
        <div id="gallery" className="home-thq-showcase-container-elm">
          <h2 className="home-thq-section-title-elm1 section-title">
            Our Playhouse Gallery
          </h2>
          <p className="home-thq-section-subtitle-elm1 section-subtitle">
            Each project is a unique creation, designed to bring joy and
            adventure to your backyard.
          </p>
          <div className="home-thq-showcase-carousel-wrapper-elm">
            <div className="showcase-carousel">
              <div className="showcase-slide">
                <div className="showcase-card">
                  <img
                    alt="Legend of Zelda inspired playhouse"
                    src="/web9-1500w.png"
                    loading="lazy"
                  />
                  <div className="showcase-caption">
                    <h3 className="showcase-card-title">
                      Link&apos;s Playhouse
                    </h3>
                    <p className="showcase-card-description">
                      Playhouse inspired by Legend of Zelda&apos;s Breath of the
                      Wild
                    </p>
                  </div>
                </div>
              </div>
              <div className="showcase-slide">
                <div className="showcase-card">
                  <img
                    alt="Close-up of green grass with a blurred red playhouse in the background, capturing a serene summer moment."
                    src="/web14-1500w.png"
                    loading="lazy"
                  />
                  <div className="showcase-caption">
                    <h3 className="showcase-card-title">Hobbit Hole</h3>
                    <p className="showcase-card-description">
                      A Hobbit inspired under the stair playspace
                    </p>
                  </div>
                </div>
              </div>
              <div className="showcase-slide">
                <div className="showcase-card">
                  <img
                    alt="Fantasy inspired farmhouse style playhouse"
                    src="/web8-1500w.png"
                    loading="lazy"
                  />
                  <div className="showcase-caption">
                    <h3 className="showcase-card-title">Farmhouse Tavern</h3>
                    <p className="showcase-card-description">
                      A fantasy inspired tavern with farmhouse appeal
                    </p>
                  </div>
                </div>
              </div>
              <div className="showcase-slide">
                <div className="showcase-card">
                  <img
                    alt="A child enjoying a sunny day in a backyard with a wooden playhouse and trees."
                    src="/web2-1500w.png"
                    loading="lazy"
                  />
                  <div className="showcase-caption">
                    <h3 className="showcase-card-title">Zelda Doghouse</h3>
                    <p className="showcase-card-description">
                      Charming Legend of Zelda doghouse
                    </p>
                  </div>
                </div>
              </div>
              <div className="showcase-slide">
                <div className="showcase-card">
                  <img
                    alt="Happy girl with curly hair in a treehouse, enjoying a sunny day outdoors."
                    src="/web13-1500w.png"
                    loading="lazy"
                  />
                  <div className="showcase-caption">
                    <h3 className="showcase-card-title">
                      Fantastical Chicken Coop
                    </h3>
                    <p className="showcase-card-description">
                      A whimsical chicken coop with a touch of fantasy
                    </p>
                  </div>
                </div>
              </div>
              <div className="showcase-slide">
                <div className="showcase-card">
                  <img
                    alt="Gravity falls inspired playhouse"
                    src="/web10-1500w.png"
                    loading="lazy"
                  />
                  <div className="showcase-caption">
                    <h3 className="showcase-card-title">Mystery Shack</h3>
                    <p className="showcase-card-description">
                      Playhouse inspired by the Mystery Shack from Gravity Falls
                    </p>
                  </div>
                </div>
              </div>
              <div className="showcase-slide">
                <div className="showcase-card">
                  <img
                    alt="A child enjoying playtime on a wooden slide in a decorated indoor playroom."
                    src="/web11-1500w.png"
                    loading="lazy"
                  />
                  <div className="showcase-caption">
                    <h3 className="showcase-card-title">Pint Size Playhouse</h3>
                    <p className="showcase-card-description">
                      A mini Legend of Zelda inspiredplayhouse fit for a family
                      of squirrels
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="home-thq-showcase-navigation-elm">
              <button
                type="button"
                aria-label="Previous slide"
                className="showcase-nav-btn showcase-nav-prev"
              >
                <svg
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 0 24 24"
                  className="home-icon19"
                >
                  <path
                    d="m18 15l-6-6l-6 6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </button>
              <button
                type="button"
                aria-label="Next slide"
                className="showcase-nav-btn showcase-nav-next"
              >
                <svg
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 0 24 24"
                  className="home-icon21"
                >
                  <path
                    d="m18 15l-6-6l-6 6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </button>
              <div
                id="showcase-dots"
                className="home-thq-showcase-dots-elm"
              ></div>
            </div>
          </div>
        </div>
      </section>
      <section id="process" className="home-thq-process-section-elm">
        <div className="home-thq-process-timeline-line-elm"></div>
        <div className="process-step process-step-left">
          <div className="process-icon-wrapper">
            <svg
              width="32"
              xmlns="http://www.w3.org/2000/svg"
              height="32"
              viewBox="0 0 24 24"
              className="process-icon"
            >
              <g
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M16.5 10c3.038 0 5.5 2.015 5.5 4.5c0 1.397-.778 2.645-2 3.47V20l-1.964-1.178A6.7 6.7 0 0 1 16.5 19c-3.038 0-5.5-2.015-5.5-4.5s2.462-4.5 5.5-4.5"></path>
                <path d="M11.197 15.698c-.69.196-1.43.302-2.197.302a8 8 0 0 1-2.612-.432L4 17v-2.801C2.763 13.117 2 11.635 2 10c0-3.314 3.134-6 7-6c3.782 0 6.863 2.57 7 5.785v.233M10 8h.01M7 8h.01M15 14h.01M18 14h.01"></path>
              </g>
            </svg>
          </div>
          <div className="process-content">
            <h3 className="process-step-title">Step 1: Consultation</h3>
            <p className="process-step-description">
              We start with a conversation about your vision, space, and budget.
              Share your ideas, and we&apos;ll guide you through the
              possibilities.
            </p>
          </div>
        </div>
        <div className="process-step-right process-step">
          <div className="process-icon-wrapper">
            <svg
              width="32"
              xmlns="http://www.w3.org/2000/svg"
              height="32"
              viewBox="0 0 24 24"
              className="process-icon"
            >
              <path
                d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497zM15 5l4 4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </div>
          <div className="process-content">
            <h3 className="process-step-title">Step 2: Design</h3>
            <p className="process-step-description">
              We take your idea and build a model tailored to your needs.
              You&apos;ll receive detailed renderings and material selections
              for approval.
            </p>
          </div>
        </div>
        <div className="process-step process-step-left">
          <div className="process-icon-wrapper">
            <svg
              width="32"
              xmlns="http://www.w3.org/2000/svg"
              height="32"
              viewBox="0 0 24 24"
              className="process-icon"
            >
              <g
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m15 12l-9.373 9.373a1 1 0 0 1-3.001-3L12 9m6 6l4-4"></path>
                <path d="m21.5 11.5l-1.914-1.914A2 2 0 0 1 19 8.172v-.344a2 2 0 0 0-.586-1.414l-1.657-1.657A6 6 0 0 0 12.516 3H9l1.243 1.243A6 6 0 0 1 12 8.485V10l2 2h1.172a2 2 0 0 1 1.414.586L18.5 14.5"></path>
              </g>
            </svg>
          </div>
          <div className="process-content">
            <h3 className="process-step-title">Step 3: Build</h3>
            <p className="process-step-description">
              Using premium materials and expert craftsmanship, we build your
              playhouse with attention to every detail. Quality you can see and
              feel.
            </p>
          </div>
        </div>
        <div className="process-step-right process-step">
          <div className="process-icon-wrapper">
            <svg
              width="32"
              xmlns="http://www.w3.org/2000/svg"
              height="32"
              viewBox="0 0 24 24"
              className="process-icon"
            >
              <path
                d="M20 6L9 17l-5-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </div>
          <div className="process-content">
            <h3 className="process-step-title">Step 4: Install</h3>
            <p className="process-step-description">
              We handle delivery and installation with care. Your playhouse is
              secured, inspected, and ready for years of adventure.
            </p>
          </div>
        </div>
        <div className="home-thq-process-progress-indicator-elm">
          <div className="home-thq-process-progress-bar-elm"></div>
        </div>
      </section>
      <section id="about" className="home-thq-about-section-elm">
        <div className="home-thq-about-container-elm">
          <div className="about-sticky-image">
            <img
              alt="man in forest designing playhouse"
              src="/web7-1500w.png"
              loading="lazy"
            />
            <div className="home-thq-about-image-badge-elm">
              <svg
                width="20"
                xmlns="http://www.w3.org/2000/svg"
                height="20"
                viewBox="0 0 24 24"
                className="home-thq-about-badge-icon-elm"
              >
                <path
                  d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676a.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
              <span className="home-thq-about-badge-text-elm">
                Made with Care
              </span>
            </div>
          </div>
          <div className="home-thq-about-content-elm">
            <div className="about-story-block">
              <h2 className="home-thq-section-title-elm2 section-title">
                Our Story
              </h2>
              <p className="section-content about-paragraph">
                Once Upon a Workbench began as a small workshop with a simple
                belief: every child deserves a space where imagination runs
                free. Founded by a lifelong craftsman, geek, and father, our
                mission is to create playhouses that become the backdrop for
                countless stories.
              </p>
            </div>
            <div className="about-story-block">
              <h3 className="about-subtitle">Rooted in Community</h3>
              <p className="section-content about-paragraph">
                We&apos;re proud to call Utah home. The mountains, forests, and
                tight-knit communities here inspire everything we build. We
                source local materials whenever possible and believe in
                supporting our neighbors.
              </p>
            </div>
            <div className="about-story-block">
              <h3 className="about-subtitle">
                Craftsmanship Meets Imagination
              </h3>
              <p className="section-content about-paragraph">
                Each playhouse is built by hand, combining traditional
                woodworking techniques with whimsical designs. We don&apos;t cut
                corners because we know these structures will hold precious
                memories for generations.
              </p>
            </div>
            <div className="home-thq-about-location-card-elm">
              <div className="home-thq-about-location-icon-elm">
                <svg
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0zm.894.211v15M9 3.236v15"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </div>
              <div className="home-thq-about-location-content-elm">
                <h4 className="home-thq-about-location-title-elm">
                  Serving Utah Families
                </h4>
                <p className="home-thq-about-location-text-elm">
                  Based in the heart of Utah, delivering throughout the Wasatch
                  Front and surrounding areas.
                </p>
              </div>
            </div>
            <div className="home-thq-about-stats-elm">
              <div className="about-stat-item">
                <svg
                  width="28"
                  xmlns="http://www.w3.org/2000/svg"
                  height="28"
                  viewBox="0 0 24 24"
                  className="about-stat-icon"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M16 3.128a4 4 0 0 1 0 7.744M22 21v-2a4 4 0 0 0-3-3.87"></path>
                    <circle r="4" cx="9" cy="7"></circle>
                  </g>
                </svg>
                <div className="about-stat-content">
                  <span className="about-stat-number">150+</span>
                  <span className="about-stat-label">Happy Families</span>
                </div>
              </div>
              <div className="about-stat-item">
                <svg
                  width="28"
                  xmlns="http://www.w3.org/2000/svg"
                  height="28"
                  viewBox="0 0 24 24"
                  className="about-stat-icon"
                >
                  <path
                    d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676a.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
                <div className="about-stat-content">
                  <span className="about-stat-number">5+</span>
                  <span className="about-stat-label">
                    Years Building Dreams
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="faq" className="home-thq-faq-section-elm">
        <h2 className="home-thq-section-title-elm3 section-title">
          Frequently Asked Questions
        </h2>
        <p className="home-thq-section-subtitle-elm2 section-subtitle">
          Everything you need to know about building your dream playhouse.
        </p>
        <div className="home-thq-faq-grid-elm">
          <div className="faq-category">
            <h3 className="faq-category-title">Pricing &amp; Ordering</h3>
            <details className="faq-item">
              <summary className="faq-question">
                <span className="faq-question-text">
                  How much does a custom playhouse cost?
                </span>
                <svg
                  width="20"
                  xmlns="http://www.w3.org/2000/svg"
                  height="20"
                  viewBox="0 0 24 24"
                  className="faq-icon"
                >
                  <path
                    d="m18 15l-6-6l-6 6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </summary>
              <div className="faq-answer">
                <p className="section-content">
                  Our playhouses typically range from $3,500 to $12,000
                  depending on size, features, and complexity. During your
                  consultation, we&apos;ll work with your budget to create the
                  perfect design.
                </p>
              </div>
            </details>
            <details className="faq-item">
              <summary className="faq-question">
                <span className="faq-question-text">
                  Do you offer payment plans?
                </span>
                <svg
                  width="20"
                  xmlns="http://www.w3.org/2000/svg"
                  height="20"
                  viewBox="0 0 24 24"
                  className="faq-icon"
                >
                  <path
                    d="m18 15l-6-6l-6 6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </summary>
              <div className="faq-answer">
                <p className="section-content">
                  Yes! We offer flexible payment plans with a 30% deposit, 40%
                  at build completion, and 30% upon installation. Custom
                  arrangements can be discussed.
                </p>
              </div>
            </details>
          </div>
          <div className="faq-category">
            <h3 className="faq-category-title">Timeline &amp; Process</h3>
            <details className="faq-item">
              <summary className="faq-question">
                <span className="faq-question-text">
                  How long does it take to build a playhouse?
                </span>
                <svg
                  width="20"
                  xmlns="http://www.w3.org/2000/svg"
                  height="20"
                  viewBox="0 0 24 24"
                  className="faq-icon"
                >
                  <path
                    d="m18 15l-6-6l-6 6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </summary>
              <div className="faq-answer">
                <p className="section-content">
                  From consultation to installation, most projects take 4-8
                  weeks. Complex designs may take longer, but we&apos;ll give
                  you a clear timeline during the design phase.
                </p>
              </div>
            </details>
            <details className="faq-item">
              <summary className="faq-question">
                <span className="faq-question-text">
                  Can I see the build progress?
                </span>
                <svg
                  width="20"
                  xmlns="http://www.w3.org/2000/svg"
                  height="20"
                  viewBox="0 0 24 24"
                  className="faq-icon"
                >
                  <path
                    d="m18 15l-6-6l-6 6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </summary>
              <div className="faq-answer">
                <p className="section-content">
                  Absolutely! We send regular photo updates throughout the build
                  process and welcome workshop visits by appointment.
                </p>
              </div>
            </details>
          </div>
          <div className="faq-category">
            <h3 className="faq-category-title">Materials &amp; Features</h3>
            <details className="faq-item">
              <summary className="faq-question">
                <span className="faq-question-text">
                  What materials do you use?
                </span>
                <svg
                  width="20"
                  xmlns="http://www.w3.org/2000/svg"
                  height="20"
                  viewBox="0 0 24 24"
                  className="faq-icon"
                >
                  <path
                    d="m18 15l-6-6l-6 6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </summary>
              <div className="faq-answer">
                <p className="section-content">
                  We use premium cedar, pine, or composite materials depending
                  on your preferences. All lumber is sustainably sourced and
                  treated for weather resistance and longevity.
                </p>
              </div>
            </details>
            <details className="faq-item">
              <summary className="faq-question">
                <span className="faq-question-text">
                  Are your playhouses safe for children?
                </span>
                <svg
                  width="20"
                  xmlns="http://www.w3.org/2000/svg"
                  height="20"
                  viewBox="0 0 24 24"
                  className="faq-icon"
                >
                  <path
                    d="m18 15l-6-6l-6 6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </summary>
              <div className="faq-answer">
                <p className="section-content">
                  Safety is our top priority. All structures meet or exceed
                  safety standards with rounded edges, secure railings,
                  non-toxic finishes, and proper anchoring.
                </p>
              </div>
            </details>
          </div>
          <div className="faq-category">
            <h3 className="faq-category-title">Permits &amp; Installation</h3>
            <details className="faq-item">
              <summary className="faq-question">
                <span className="faq-question-text">
                  Do I need a permit for a playhouse?
                </span>
                <svg
                  width="20"
                  xmlns="http://www.w3.org/2000/svg"
                  height="20"
                  viewBox="0 0 24 24"
                  className="faq-icon"
                >
                  <path
                    d="m18 15l-6-6l-6 6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </summary>
              <div className="faq-answer">
                <p className="section-content">
                  It depends on your location and structure size. We&apos;ll
                  research local requirements during consultation and can assist
                  with the permit process if needed.
                </p>
              </div>
            </details>
            <details className="faq-item">
              <summary className="faq-question">
                <span className="faq-question-text">
                  How is the playhouse installed?
                </span>
                <svg
                  width="20"
                  xmlns="http://www.w3.org/2000/svg"
                  height="20"
                  viewBox="0 0 24 24"
                  className="faq-icon"
                >
                  <path
                    d="m18 15l-6-6l-6 6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </summary>
              <div className="faq-answer">
                <p className="section-content">
                  We deliver pre-built sections and assemble them on-site. Most
                  installations take 4-8 hours. We level the ground, anchor
                  securely, and perform a final safety inspection.
                </p>
              </div>
            </details>
          </div>
        </div>
      </section>
      <section className="home-thq-contact-section-elm">
        <video
          src="https://videos.pexels.com/video-files/4102353/4102353-hd_1280_720_50fps.mp4"
          loop="true"
          muted="true"
          autoPlay="true"
          playsInline="true"
          className="home-thq-contact-background-video-elm"
        ></video>
        <div id="quote" className="home-thq-contact-overlay-elm"></div>
        <div id="quote" className="home-thq-contact-container-elm">
          <div id="quote" className="home-thq-contact-form-card-elm">
            <img
              alt="image"
              src="/website%20logo-1500h.png"
              className="home-image19"
            />
            <div className="home-thq-contact-header-elm">
              <h2 className="home-thq-section-title-elm4 section-title">
                Start Your Playhouse Build
              </h2>
              <p className="home-thq-section-subtitle-elm3 section-subtitle">
                Share your vision with us, and let&apos;s create something
                magical together. We&apos;ll respond within 24 hours.
              </p>
            </div>
            <form
              action="/submit"
              method="POST"
              data-form-id="4d6d67c5-2905-45e6-8fed-c3bca610612c"
              className="home-thq-contact-form-elm"
            >
              <div className="contact-form-group">
                <label htmlFor="contact-name" className="contact-label">
                  Your Name
                </label>
                <input
                  type="text"
                  id="contact-name"
                  name="true"
                  required="true"
                  minlength="2"
                  placeholder="John Smith"
                  data-form-field-id="contact-name"
                  className="contact-input"
                />
              </div>
              <div className="contact-form-group">
                <label htmlFor="contact-email" className="contact-label">
                  Email Address
                </label>
                <input
                  type="email"
                  id="contact-email"
                  name="email"
                  required="true"
                  placeholder="you@example.com"
                  data-form-field-id="contact-email"
                  className="contact-input"
                />
              </div>
              <div className="contact-form-group">
                <label htmlFor="contact-idea" className="contact-label">
                  Tell Us Your Idea
                </label>
                <textarea
                  id="contact-idea"
                  name="idea"
                  rows="5"
                  required="true"
                  maxlength="1000"
                  minlength="10"
                  placeholder="Describe your dream playhouse... What features are you envisioning? Any specific style or theme?"
                  data-form-field-id="contact-idea"
                  className="contact-textarea"
                ></textarea>
              </div>
              <button
                id="thq_button_TAqQ"
                name="button"
                type="submit"
                data-form-field-id="thq_button_TAqQ"
                className="home-thq-btn-elm2 btn-primary btn-lg btn"
              >
                Start Your Playhouse Build
              </button>
              <p className="home-thq-contact-privacy-elm">
                We respect your privacy. Your information is never shared with
                third parties.
              </p>
            </form>
          </div>
        </div>
      </section>
      <div className="home-container13">
        <div className="home-container14">
          <Script
            html={`<style>
          @keyframes heroLeafFloat {0%,100% {transform: translateY(0) rotate(0deg);}
25% {transform: translateY(-20px) rotate(10deg);}
50% {transform: translateY(0) rotate(-10deg);}
75% {transform: translateY(-15px) rotate(5deg);}}@keyframes heroSlideInLeft {0% {opacity: 0;
transform: translateX(-40px);}
100% {opacity: 1;
transform: translateX(0);}}@keyframes heroPulse {0%,100% {transform: scale(1);
box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);}
50% {transform: scale(1.02);
box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);}}@keyframes heroSlideInRight {0% {opacity: 0;
transform: translateX(40px);}
100% {opacity: 1;
transform: translateX(0);}}@keyframes processFadeIn {0% {opacity: 0;
transform: translateY(30px);}
100% {opacity: 1;
transform: translateY(0);}}@keyframes aboutHeartbeat {0%,100% {transform: scale(1);}
50% {transform: scale(1.15);}}@keyframes aboutSlideIn {0% {opacity: 0;
transform: translateY(30px);}
100% {opacity: 1;
transform: translateY(0);}}@keyframes faqSlideDown {0% {opacity: 0;
transform: translateY(-10px);}
100% {opacity: 1;
transform: translateY(0);}}@keyframes contactSlideUp {0% {opacity: 0;
transform: translateY(40px);}
100% {opacity: 1;
transform: translateY(0);}}@keyframes contactIconRotate {0%,100% {transform: rotate(0deg);}
25% {transform: rotate(-10deg);}
75% {transform: rotate(10deg);}}
        </style> `}
          ></Script>
        </div>
      </div>
      <div className="home-container15">
        <div className="home-container16">
          <Script
            html={`<script defer data-name="showcase-carousel">
(function(){
  const showcaseCarousel = document.querySelector(".showcase-carousel")
  const showcaseSlides = document.querySelectorAll(".showcase-slide")
  const showcasePrevBtn = document.querySelector(".showcase-nav-prev")
  const showcaseNextBtn = document.querySelector(".showcase-nav-next")
  const showcaseDotsContainer = document.getElementById("showcase-dots")

  let currentSlideIndex = 0

  showcaseSlides.forEach((slide, index) => {
    const dot = document.createElement("button")
    dot.classList.add("showcase-dot")
    dot.setAttribute("aria-label", \`Go to slide \${index + 1}\`)
    if (index === 0) dot.classList.add("showcase-dot-active")

    dot.addEventListener("click", () => {
      goToSlide(index)
    })

    showcaseDotsContainer.appendChild(dot)
  })

  const showcaseDots = document.querySelectorAll(".showcase-dot")

  function updateActiveDot() {
    showcaseDots.forEach((dot, index) => {
      if (index === currentSlideIndex) {
        dot.classList.add("showcase-dot-active")
      } else {
        dot.classList.remove("showcase-dot-active")
      }
    })
  }

  function goToSlide(index) {
    if (index < 0) index = showcaseSlides.length - 1
    if (index >= showcaseSlides.length) index = 0

    currentSlideIndex = index
    const slideWidth = showcaseSlides[0].offsetWidth
    const gap = 24
    showcaseCarousel.scrollTo({
      left: (slideWidth + gap) * currentSlideIndex,
      behavior: "smooth",
    })

    updateActiveDot()
  }

  showcasePrevBtn.addEventListener("click", () => {
    goToSlide(currentSlideIndex - 1)
  })

  showcaseNextBtn.addEventListener("click", () => {
    goToSlide(currentSlideIndex + 1)
  })

  let touchStartX = 0
  let touchEndX = 0

  showcaseCarousel.addEventListener("touchstart", (e) => {
    touchStartX = e.changedTouches[0].screenX
  })

  showcaseCarousel.addEventListener("touchend", (e) => {
    touchEndX = e.changedTouches[0].screenX
    handleSwipe()
  })

  function handleSwipe() {
    const swipeThreshold = 50
    if (touchStartX - touchEndX > swipeThreshold) {
      goToSlide(currentSlideIndex + 1)
    } else if (touchEndX - touchStartX > swipeThreshold) {
      goToSlide(currentSlideIndex - 1)
    }
  }

  const observerOptions = {
    root: showcaseCarousel,
    rootMargin: "0px",
    threshold: 0.6,
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const index = Array.from(showcaseSlides).indexOf(entry.target)
        if (index !== currentSlideIndex) {
          currentSlideIndex = index
          updateActiveDot()
        }
      }
    })
  }, observerOptions)

  showcaseSlides.forEach((slide) => observer.observe(slide))
})()
</script>`}
          ></Script>
        </div>
      </div>
      <div className="home-container17">
        <div className="home-container18">
          <Script
            html={`<script defer data-name="process-scroll-progress">
(function(){
  const processSection = document.querySelector(".__INLINE__process-section")
  const processProgressBar = document.querySelector(".__INLINE__process-progress-bar")

  function updateProcessProgress() {
    if (!processSection || !processProgressBar) return

    const sectionTop = processSection.offsetTop
    const sectionHeight = processSection.offsetHeight
    const scrollPosition = window.scrollY
    const windowHeight = window.innerHeight

    const scrollStart = sectionTop - windowHeight
    const scrollEnd = sectionTop + sectionHeight
    const scrollRange = scrollEnd - scrollStart

    if (scrollPosition > scrollStart && scrollPosition < scrollEnd) {
      const progress = ((scrollPosition - scrollStart) / scrollRange) * 100
      processProgressBar.style.height = Math.min(progress, 100) + "%"
    } else if (scrollPosition <= scrollStart) {
      processProgressBar.style.height = "0%"
    } else {
      processProgressBar.style.height = "100%"
    }
  }

  window.addEventListener("scroll", updateProcessProgress)
  window.addEventListener("resize", updateProcessProgress)
  updateProcessProgress()
})()
</script>`}
          ></Script>
        </div>
      </div>
      <div className="home-container19">
        <div className="home-container20">
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
        </div>
      </div>
      <Footer></Footer>
      <a href="https://play.teleporthq.io/signup">
        <div aria-label="Sign up to TeleportHQ" className="home-container21">
          <svg
            width="24"
            height="24"
            viewBox="0 0 19 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="home-icon46"
          >
            <path
              d="M9.1017 4.64355H2.17867C0.711684 4.64355 -0.477539 5.79975 -0.477539 7.22599V13.9567C-0.477539 15.3829 0.711684 16.5391 2.17867 16.5391H9.1017C10.5687 16.5391 11.7579 15.3829 11.7579 13.9567V7.22599C11.7579 5.79975 10.5687 4.64355 9.1017 4.64355Z"
              fill="#B23ADE"
            ></path>
            <path
              d="M10.9733 12.7878C14.4208 12.7878 17.2156 10.0706 17.2156 6.71886C17.2156 3.3671 14.4208 0.649963 10.9733 0.649963C7.52573 0.649963 4.73096 3.3671 4.73096 6.71886C4.73096 10.0706 7.52573 12.7878 10.9733 12.7878Z"
              fill="#FF5C5C"
            ></path>
            <path
              d="M17.7373 13.3654C19.1497 14.1588 19.1497 15.4634 17.7373 16.2493L10.0865 20.5387C8.67402 21.332 7.51855 20.6836 7.51855 19.0968V10.5141C7.51855 8.92916 8.67402 8.2807 10.0865 9.07221L17.7373 13.3654Z"
              fill="#2874DE"
            ></path>
          </svg>
          <span className="home-text">Built in TeleportHQ</span>
        </div>
      </a>
    </div>
  )
}

export default Home
