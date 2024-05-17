import React from 'react'
import "../styles/componentstyle/footer.css"
import { FaEnvelope, FaPhone } from 'react-icons/fa'
import SocialMedia from './SocialMedia'

const Footer = () => {
  return (
    <div className="footer-container">
          <div className="footer-left">
              <h2>Contact Us</h2>
              <div className="contacts">
                  <div className="contact">
                    <div className="icon-container"><FaEnvelope/></div>
                    <a>africanunionhall@gmail.com</a>
                  </div>
                  <div className="contact">
                    <div className="icon-container"><FaPhone/></div>
                    <a>0244123456</a>
                  </div>
              </div>
          </div>
          <div className="footer-right">
              <SocialMedia/>
              <p>&copy; Pent Hall Week 2024 | site designed by <a style={{color: '#0AEAB0'}}>The Tribe</a></p>
          </div>
    </div>
  )
}

export default Footer
