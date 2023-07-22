import React from 'react'
import './NavBar.css';

function NavBar() {
    return (
        <div>
            <div className="nav-bar">
                <div className="nav-header">
                    <h1 className='nav-bar-heading'>Catering Only</h1>
                </div>
                <div className="nav-header">
                    <p>Menu</p>
                </div>
                <div className="nav-header">
                    <p>Booking</p>
                </div>
                <div className="nav-header">
                    <p>Contact Us</p>
                </div>
            </div>
        </div>
    )
}

export default NavBar
