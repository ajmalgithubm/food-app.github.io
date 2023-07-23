import React from 'react'
import './NavBar.css';
import { useNavigate } from 'react-router-dom';
function NavBar() {
    let navigate = useNavigate();
    return (
        <div className='nav-bar-container'>
            <div className="nav-bar">
                <div className="nav-header">
                    <h1 className='nav-bar-heading' onClick={() => navigate('/')}>Exquisite Bites Catering</h1>
                </div>
                <div className="nav-header">
                    <p onClick={() => navigate('/menu')}>Menu</p>
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
