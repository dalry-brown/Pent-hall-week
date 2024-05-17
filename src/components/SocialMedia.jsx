import React from 'react'
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa'
import "../styles/componentstyle/socialmedia.css"

const SocialMedia = () => {
  return (
    <div className="social-container">
          <div className="socialicons-container">
            <FaFacebookF />
          </div> 
          <div className="socialicons-container">
            <FaTwitter />
          </div> 
          <div className="socialicons-container">
            <FaInstagram />
          </div> 
    </div>
  )
}

export default SocialMedia
