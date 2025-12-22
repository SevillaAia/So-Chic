import React from 'react'
import logo from '../assets/SoChicLogo.png'
import snap from '../assets/snap.png'
import instagram from '../assets/insta.png'
import fb from '../assets/fb.png'

function Footer() {
  return (
    <>
    <section className='footer'>
        <div className='address'>
          <p>Address:</p>
            <address>
                Storkower Str. 132,<br/>
                10407, <br/>
                Berlin <br/>
            </address>
            <p>Call Us: +49 30 40365894</p>
        </div>
        <div className='socials'>
            <div>
              <p>Follow Us:</p>
              <div>
                <a href="#" target='_blank'>
                  <img className="socials-logo" src={snap} alt="snap-logo" />
                </a>
                <a href="#" target='_blank'>
                  <img className="socials-logo" src={instagram} alt="insta-logo"></img>
                </a>
                <a href="#" target='_blank'>
                  <img className="socials-logo" src={fb} alt="fb-logo" />
                </a>
              </div>
            </div>
            

            <a href="https://www.ironhack.com/de-en?utm_source=google&utm_medium=organic&utm_campaign=23-10_LOC_eur_DE_clics_google_mybusiness_&utm_content=organic-content" target="_blank"><img className="footer-logo" src={logo} alt="footer-logo" /></a>

            <a href="#" target='_blank'></a>
            

        </div>
    </section>
    </>
  )
}

export default Footer