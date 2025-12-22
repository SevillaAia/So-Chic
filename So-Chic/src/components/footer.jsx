import React from 'react'
import logo from '../assets/SoChicLogo.png'

function Footer() {
  return (
    <>
    <section className='footer'>
        <div className='address'>
            <address>
                Storkower Str. 132,<br/>
                10407, <br/>
                Berlin <br/>
            </address>
            <p>Call Us: +49 30 40365894</p>
        </div>
        <div className='socials'>
            <p>Follow Us</p>

            <a href="https://www.ironhack.com/de-en?utm_source=google&utm_medium=organic&utm_campaign=23-10_LOC_eur_DE_clics_google_mybusiness_&utm_content=organic-content"><img className="footer-logo" src={logo} alt="footer-logo" /></a>

        </div>
    </section>
    </>
  )
}

export default Footer