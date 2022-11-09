import React from 'react'
import './Navbar.css'



const Navbar = () => {
    return(
       <div className="n-wrapper">
        <div className="n-left">
            <div className="n-name">Software Developer Assignment</div>
            
            
        </div>
        <div className="n-right">
            <div className="n-list"> 
            <ul style={{listStyleType:'none'}}>
                <li>Home</li>
                <li>Services</li>
                <li>Experience</li>
                <li>Testimonials</li>
            </ul>
        </div>
        <button className="button">
            CONTACT
        </button>
        </div>
       </div>
    )
}

export default Navbar;