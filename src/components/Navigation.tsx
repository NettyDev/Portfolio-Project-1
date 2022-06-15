import React from 'react'
import { Link } from 'react-scroll'
import menu from '../../assets/images/menu.svg'
import close from '../../assets/images/close.svg'
import logo from '../../assets/logo2.png'
import './Navigation.scss'

function Navigation() {
  const [isActive, setActive] = React.useState(false)

  const navActive = (state: Boolean) => {
    if (state) {
      setActive(false)
      document.getElementById('menu').setAttribute('src', menu)
      document.getElementById('links').removeAttribute('style')
    } else {
      setActive(true)
      document.getElementById('menu').setAttribute('src', close)
      document.getElementById('links').setAttribute('style', 'display: block')
    }
  }

  const navIfActive = () => {
    if (window.innerWidth <= 620) {
      navActive(isActive)
    }
  }

  return (
    <nav>
      <div className='logo'>
        <Link activeClass='active' to='home' spy={true} smooth={true}>
          <img src={logo} alt='Lorem' />
        </Link>
      </div>
      <img
        id='menu'
        onClick={() => navActive(isActive)}
        src={menu}
        alt='Menu'
      />
      <div id='links' className='links'>
        <ul>
          <li>
            <Link
              activeClass='active'
              to='home'
              spy={true}
              smooth={true}
              onClick={() => navIfActive()}>
              Home
            </Link>
          </li>
          <li>
            <Link
              to='services'
              spy={true}
              smooth={true}
              offset={-70}
              onClick={() => navIfActive()}>
              Services
            </Link>
          </li>
          <li>
            <Link
              to='realizations'
              spy={true}
              smooth={true}
              offset={-70}
              onClick={() => navIfActive()}>
              Realizations
            </Link>
          </li>
          <li>
            <Link
              to='contact'
              spy={true}
              smooth={true}
              offset={-70}
              onClick={() => navIfActive()}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navigation
