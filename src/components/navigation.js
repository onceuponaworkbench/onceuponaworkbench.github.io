import React from 'react'
import Script from 'dangerous-html/react'
import PropTypes from 'prop-types'

import './navigation.css'

const Navigation = (props) => {
  return (
    <div className="navigation-container1">
      <div className="navigation-container2">
        <div className="navigation-container3">
          <Script
            html={`<style>
@media (prefers-reduced-motion: reduce) {
.__INLINE__navigation, .__INLINE__navigation-logo, .__INLINE__navigation-logo-icon, .__INLINE__navigation-menu-link, .__INLINE__navigation-menu-link::after {
  transition: none;
  animation: none;
}
}
</style>`}
          ></Script>
        </div>
      </div>
      <nav className="navigation-thq-navigation-elm">
        <div className="navigation-thq-navigation-container-elm">
          <img
            alt={props.imageAlt}
            src={props.imageSrc}
            className="navigation-image"
          />
          <a href="#" className="navigation-link10">
            <div
              aria-label="Once Upon a Workbench - Homepage"
              className="navigation-logo"
            >
              <span className="navigation-thq-navigation-logo-text-elm">
                Once Upon a Workbench
              </span>
            </div>
          </a>
          <ul className="navigation-thq-navigation-menu-elm">
            <li className="navigation-menu-item">
              <a href="#showcase">
                <div className="navigation-menu-link">
                  <span>Projects</span>
                </div>
              </a>
            </li>
            <li className="navigation-menu-item">
              <a href="#process">
                <div className="navigation-menu-link">
                  <span>Process</span>
                </div>
              </a>
            </li>
            <li className="navigation-menu-item">
              <a href="#about">
                <div className="navigation-menu-link">
                  <span>About</span>
                </div>
              </a>
            </li>
            <li className="navigation-menu-item">
              <a href="#faq">
                <div className="navigation-menu-link">
                  <span>FAQ</span>
                </div>
              </a>
            </li>
            <li className="navigation-menu-item">
              <a href="#quote">
                <div className="navigation-thq-navigation-menu-link-elm5 btn-primary navigation-menu-link btn">
                  <span>Get a Quote</span>
                </div>
              </a>
            </li>
          </ul>
          {/* HAMBURGER BUTTON AND MOBILE MENU REMOVED FROM HERE */}
        </div>
      </nav>
      {/* INTERNAL MOBILE SCRIPTS REMOVED FOR CLEANLINESS */}
    </div>
  )
}

Navigation.defaultProps = {
  imageAlt: 'Once Upon a Workbench Logo',
  imageSrc: '/website%20logo-200h.png',
}

Navigation.propTypes = {
  imageAlt: PropTypes.string,
  imageSrc: PropTypes.string,
}

export default Navigation
