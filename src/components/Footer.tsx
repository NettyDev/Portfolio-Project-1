import React from 'react'
import { Link } from 'react-scroll'
import logo from '../../assets/logo3.png'
import './Footer.scss'

function Footer() {
  return (
    <div className='container'>
      <footer className='footerGrid'>
        <div className='footer-1'>
          <img src={logo} alt='' />
        </div>
        <div className='footer-2'>
          <h6>Contact</h6>
          <p>Lorem</p>
          <p>xxxxxxxx 000</p>
          <p>00-000 xxxxxxxx</p>

          <p>mail@example.com</p>
          <p>+1 00 000 00 00</p>
        </div>
        <div className='footer-3'>
          <h6>Pages</h6>
          <p>
            <Link to='home' smooth={true}>
              Home
            </Link>
          </p>
          <p>
            <Link to='services' smooth={true} offset={-70}>
              Services
            </Link>
          </p>
          <p>
            <Link to='realizations' smooth={true} offset={-70}>
              Realizations
            </Link>
          </p>
          <p>
            <Link to='contact' smooth={true} offset={-70}>
              Contact
            </Link>
          </p>
        </div>
      </footer>
      <h6 id='credit'>Created by Grzegorz Szwyngiel (NettyDev)</h6>
    </div>
  )
}

export default Footer
