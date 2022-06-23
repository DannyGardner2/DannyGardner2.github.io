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
                        <Link to="/about"><li><a href='#'>About Me</a></li></Link>
                        <Link to="/stuff"><li><a href='#'>Stuff I've Made</a></li></Link>
                        </ul>
                    </div>
                </div>
                <div className='nav-right'>
                    <a href='https://github.com/DannyGardner2' target='_blank'><img src={github}></img></a>
                    <a href='https://www.linkedin.com/in/dannygardner/' target='_blank'><img src={linkedin}></img></a>
                    {/* <a href='https://github.com/DannyGardner2' target='_blank'> <img src={twitter}></img></a> */}
                </div>

            </div>
        </div>
    )
}

export default NavBar