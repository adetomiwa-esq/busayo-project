import React from 'react'
import { Link } from 'react-router-dom';
import './Footer.css'

function Footer() {
  return (
    <div className='footer'>
        <div className='container'>
            <div className='row'>
                <div className='footer-col'>
                    <h4>Company</h4>
                    <ul>
                        <li><Link className='a' to='/info'>about us</Link></li>
                        <li><Link className='a' to='/info'>our services</Link></li>
                        <li><Link className='a' to='/info'>privacy policy</Link></li>
                        <li><Link className='a' to='/info'>subsidiaries</Link></li>
                    </ul>
                </div>

                <div className='footer-col'>
                    <h4>get help</h4>
                    <ul>
                        <li><Link className='a' to='/info'>Hire a chef</Link></li>
                        <li><Link className='a' to='/info'>Online classes</Link></li>
                        <li><Link className='a' to='/info'>Cook books</Link></li>
                        <li><Link className='a' to='/info'>Talk to our rep</Link></li>
                    </ul>
                </div>

                <div className='footer-col'>
                    <h4>restaurants</h4>
                    <ul>
                        <li><Link className='a' to='/'>adventure</Link></li>
                        <li><Link className='a' to='/'>delivery</Link></li>
                        <li><Link className='a' to='/'>takeouts</Link></li>
                        <li><Link className='a' to='/'>luxury</Link></li>
                    </ul>
                </div>

                <div className='footer-col'>
                    <h4>follow us</h4>
                    <div className='social-links'>
                        <Link className='a' to='/info'><i className='fa fa-twitter'></i></Link>
                        <Link className='a' to='/info'><i className='fa fa-facebook'></i></Link>
                        <Link className='a' to='/info'><i className='fa fa-instagram'></i></Link>
                        <Link className='a' to='/info'><i className='fa fa-youtube'></i></Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer;