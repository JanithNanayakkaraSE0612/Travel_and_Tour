import React from 'react'
import './FooterStyles.css'
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'


function Footer() {
    return (
        <div className='footer'>
            <div className="container">
                <div className="top">
                    <h3>Down South.</h3>
                    <p></p>
                    <div className="social">
                        <FaFacebook className='icon' />
                        <FaInstagram className='icon' />
                        <FaTwitter className='icon' />
                        <FaYoutube className='icon' />
                    </div>
                </div>
                <div className="bottom">
                    <div className="left">
                     
                    </div>

                    <div className='center'>

                    </div>
                    <div className="right">
                        <ul>

                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
