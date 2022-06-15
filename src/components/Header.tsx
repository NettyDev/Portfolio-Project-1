import React from 'react'
import { Parallax } from 'react-parallax'
import parallaxImage from '../../assets/images/parallax.png'
import './Header.scss'

function Header() {
  return (
    <Parallax bgImage={parallaxImage} strength={250}>
      <div id='home'>
        <div>
          <h1>Lorem</h1>
          <h3>Lorem ipsum dolor sit amet</h3>
        </div>
      </div>
    </Parallax>
  )
}

export default Header
