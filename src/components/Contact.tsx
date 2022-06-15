import React from 'react'
import './Contact.scss'

function Contact() {
  return (
    <div id='contact' className='container'>
      <h5>Contact</h5>
      <div className='contactGrid'>
        <div className='contact-1'>
          <ul className='list-group '>
            <li className='right'>
              <h5>Working hours:</h5>
              <p>
                Monday <b>08:00 AM - 4:00 PM</b>
              </p>
              <p>
                Tuesday <b>08:00 AM - 4:00 PM</b>
              </p>
              <p>
                Wednesday <b>08:00 AM - 4:00 PM</b>
              </p>
              <p>
                Thursday <b>08:00 AM - 4:00 PM</b>
              </p>
              <p>
                Friday <b>08:00 AM - 4:00 PM</b>
              </p>
              <p>
                Saturday <b>inactive</b>
              </p>
              <p>
                Sunday <b>inactive</b>
              </p>
            </li>
          </ul>
        </div>
        <div className='contact-2'>
          <ul className='list-group'>
            <li>
              <h5>Address:</h5>
              <p>xxxxxxxx 000</p>
              <p>00-000 xxxxxxxx</p>
            </li>
            <li>
              <h5>Phone:</h5>
              <p>+0 00 000 00 00</p>
            </li>
            <li>
              <h5>E-mail:</h5>
              <p>
                <a href='mailto:mail@example.com'>mail@example.com</a>
              </p>
            </li>
            <li className='hidden'>
              <h5>Working hours:</h5>
              <p>
                Monday <b>08:00 AM - 4:00 PM</b>
              </p>
              <p>
                Tuesday <b>08:00 AM - 4:00 PM</b>
              </p>
              <p>
                Wednesday <b>08:00 AM - 4:00 PM</b>
              </p>
              <p>
                Thursday <b>08:00 AM - 4:00 PM</b>
              </p>
              <p>
                Friday <b>08:00 AM - 4:00 PM</b>
              </p>
              <p>
                Saturday <b>inactive</b>
              </p>
              <p>
                Sunday <b>inactive</b>
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div className='map-grid'>
        <div className='map'>
          <iframe
            title='Google Embed'
            src='https://maps.google.com/maps?hl=pl&amp;q=Chicago&amp;ie=UTF8&amp;t=&amp;z=6&amp;iwloc=B&amp;output=embed'
            frameBorder='0'
            scrolling='no'
            marginHeight={0}
            marginWidth={0}></iframe>
        </div>
      </div>
    </div>
  )
}

export default Contact
