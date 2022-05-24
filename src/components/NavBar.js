import React from 'react'
import { Link } from 'react-router-dom'
import github from '../img/github_icon.png'
import linkedin from '../img/linkedin_icon.png'
import twitter from '../img/twitter_icon.png'

function NavBar() {
    return (
        <div className='nav-container'>
            <div className='nav-box'>
                <div className='nav-left'>
                <div className='logo'></div>
                    <div className='nav-items'>
                        <ul>
                        <Link to="/"><li><a href='#'>Home</a></li></Link>
                        <Link to="/about"><li><a href='#'>about</a></li></Link>
                        <Link to="/stuff"><li><a href='#'>stuff</a></li></Link>
                        </ul>
                    </div>
                </div>
                <div className='nav-right'>
                    <img src={github}></img>
                    <img src={linkedin}></img>
                    <img src={twitter}></img>
                </div>

            </div>
        </div>
    )
}

export default NavBar