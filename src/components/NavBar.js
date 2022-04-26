import React from 'react'

function NavBar() {
    return (
        <div className='nav-container'>
            <div className='nav-box'>
                <div className='nav-left'>
                <div className='logo'></div>
                    <div className='nav-items'>
                        <ul>
                            <li>home</li>
                            <li>about</li>
                            <li>stuff</li>
                        </ul>
                    </div>
                </div>
                <div className='nav-right'>right stuff</div>

            </div>
        </div>
    )
}

export default NavBar