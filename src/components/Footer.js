import React from 'react'
import LinkedInIcon from "@material-ui/icons/LinkedIn"
import GitHubIcon from "@material-ui/icons/GitHub"
import EmailIcon from "@material-ui/icons/Email"
import MediumIcon from "../assets/medium-inverted.png"

import '../styles/Footer.css'

function Footer() {
  return (
    <div className='footer'>
        <div className="socialMedia">
          <a href='https://medium.com/@khizaramin95'><img src={MediumIcon} style={{width:"4pc", margin:"20px"}} /></a>
          <a href='https://www.linkedin.com/in/k-amin07'><LinkedInIcon /></a>
          <a href='mailto:khizaramin95@gmail.com'><EmailIcon /></a>
          <a href='https://www.github.com/k-amin07'><GitHubIcon /></a>
        </div>
    </div>
  )
}

export default Footer