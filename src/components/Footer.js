import React from 'react'
import { SvgIcon } from '@material-ui/core'
import LinkedInIcon from "@material-ui/icons/LinkedIn"
import GitHubIcon from "@material-ui/icons/GitHub"
import EmailIcon from "@material-ui/icons/Email"
import  MediumIcon  from "../assets/medium-inverted.svg"

import '../styles/Footer.css'


const CustomIcon = ({iconName}) => {
  return(<SvgIcon>
    <image
      href={iconName}
      width="100%"
      height="100%"
    />
  </SvgIcon>)
}

function Footer() {
  return (
    <div className='footer'>
        <div className="socialMedia">
          <a href='https://medium.com/@khizaramin95' target="_blank" rel='noreferrer'><CustomIcon iconName={MediumIcon} /></a>
          <a href='https://www.linkedin.com/in/k-amin07' target="_blank" rel='noreferrer'><LinkedInIcon /></a>
          <a href='mailto:khizaramin95@gmail.com' target="_blank" rel='noreferrer'><EmailIcon /></a>
          <a href='https://www.github.com/k-amin07' target="_blank" rel='noreferrer'><GitHubIcon /></a>
        </div>
    </div>
  )
}

export default Footer