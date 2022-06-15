import React from 'react'
import service1 from '../../assets/images/service1.jpg'
import service2 from '../../assets/images/service2.jpg'
import service3 from '../../assets/images/service3.jpg'
import './Services.scss'

function Services() {
  return (
    <div id='services' className='container'>
      <h5>Our services</h5>
      <div className='gridService'>
        <div className='service-1'>
          <div className='card'>
            <img src={service1} alt='Service image 1' />
            <div>
              <h5>Lorem ipsum</h5>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit
                minus, quis laborum, tempora soluta eius perspiciatis maiores
                maxime unde totam quos magnam vitae assumenda autem beatae cum
                eaque aliquid corrupti.
              </p>
            </div>
          </div>
        </div>
        <div className='service-2'>
          <div className='card'>
            <img src={service2} alt='Service image 2' />
            <div>
              <h5>Lorem ipsum</h5>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit
                minus, quis laborum, tempora soluta eius perspiciatis maiores
                maxime unde totam quos magnam vitae assumenda autem beatae cum
                eaque aliquid corrupti.
              </p>
            </div>
          </div>
        </div>
        <div className='service-3'>
          <div className='card'>
            <img src={service3} alt='Service image 3' />
            <div>
              <h5>Lorem ipsum</h5>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit
                minus, quis laborum, tempora soluta eius perspiciatis maiores
                maxime unde totam quos magnam vitae assumenda autem beatae cum
                eaque aliquid corrupti.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services
