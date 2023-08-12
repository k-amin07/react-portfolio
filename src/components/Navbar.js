import React, {useEffect, useState} from 'react'
import { Link, useLocation } from 'react-router-dom'
import '../styles/Navbar.css'
import ReorderIcon from '@material-ui/icons/Reorder';

function Navbar() {
    const [expandNavbar, setExpandNavbar] = useState(false);

    // the following lines of code hide the navbar when the user clicks on a link in mobile view
    const Location = useLocation();
    useEffect(() => { setExpandNavbar(false) }, [Location])
  return (
    <div className='navbar' id={expandNavbar ? "open" : "close"}>
          {/* ^ open and close are defined in Navbar.css*/}
        <div className='toggleButton'>
            <button onClick={() => {setExpandNavbar((prev) => !prev) }}>  
                {/* ^ when the hamburger button is clicked, toggle the navbar */}
                <ReorderIcon /> 
                {/* ^ hamburger button */}
            </button>
        </div>
        <div className='links'>
            <Link to="/">Home</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/experience">Experience</Link>
            <a href='https://drive.google.com/file/d/1jYIkj4xz3PWRaWBZT2bY1Gim_uKvdIys/view?usp=sharing' target="_blank">Resume</a>
        </div>
    </div>
  )
}

export default Navbar