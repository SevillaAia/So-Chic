import React from 'react'
import model from '../assets/model.jpg'
import model1 from '../assets/model1.jpg'
import model2 from '../assets/model2.jpg'

function Content() {
  return (
    <>
    <section className='main-ads'>
        <section className='ads'>
            <img className='model' src={model} alt="fun model" />
           <div className='ad-content'>
             <h2>
                What's Trending?
            </h2>
            <p>
                Think fresh skin, bold pops of color, and effortless glow that looks as good on your feed as it does IRL. This trend is all about confidence—mixing playful textures, glossy finishes, and statement details that let your personality shine. Easy to wear, impossible to ignore. Get ready to swipe, blend, and slay. Makeup trends right now are loud, playful, and totally unapologetic. Soft skin is in, but it's being paired with bold eyeliner, juicy lips, and blush that clearly didn't come to play. Rules are basically cancelled—mix finishes, clash colors, and wear that statement look just because you feel like it. The vibe is less “perfect” and more “fun,” with makeup that shows personality instead of hiding it. If it makes you smile, pop, or turn heads, congratulations—you're on trend.
            </p>
           </div>
        </section>
        <section className='ads-two'>
            <img src={model1} alt='model2' className='model-one'></img>

            <div className='content-two'>
            <h2>Sweet but make it fierce</h2>
            <p>Sweet but make it fierce is all about balancing soft beauty with bold confidence. Think dreamy colors, glowing skin, and playful details paired with sharp wings and statement lips. It's the kind of look that feels cute at first glance but powerful the moment you step into the room. This trend lets you embrace your gentle side without ever dialing down your attitude. Pretty, playful, and unapologetically strong—because being sweet doesn't mean you can't be fierce.</p>
            </div>
        </section>

        <section className='ads-three'>
            <img src={model2} alt='groupie' className='model-two'></img>
            
            <div className='content-two'>
            <h2>Soft glam, loud confidence</h2>
            <p>Soft glam, loud confidence is the perfect mix of effortless beauty and fearless attitude. With glowing skin, subtle tones, and just the right touch of shine, this look whispers elegance while radiating power. It's proof that you don't need heavy makeup to make a bold statement—your confidence does all the talking.</p>
            </div>
        </section>
    </section>

    </>
  )
}

export default Content