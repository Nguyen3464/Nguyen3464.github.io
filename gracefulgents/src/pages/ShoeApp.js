import React from 'react';
import shoe1 from '../assets/shoe1.jpeg'
import shoe11 from '../assets/shoe1.1.png'
import shoe2 from '../assets/shoe2.png'
import shoe4 from '../assets/shoe4.jpeg'
import shoe7 from '../assets/shoe7.jpeg'
import shoe9 from '../assets/shoe9.jpeg'
import stars from '../assets/stars.png'
import logo2 from '../assets/logoshoe.jpeg';
import title from '../assets/shoeappname.png'
import reed from '../assets/reed.png'
import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';


const ShoeApp = () => {
  const fadeTransition = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 4 } },
  };

  const [leftRef, leftInView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  const [rightRef, rightInView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });
  return (
    <div>
      <div className='hero'>
        <div className='hero-text'>
          <div className='hero-container-left'>
            <h4>Timeless Elegance</h4>
            <p>Welcome to our exclusive collection of classy shoes, where style meets sophistication. Discover a world of exceptional craftsmanship and impeccable design that transcends trends and stands the test of time.</p>
          </div>
          <NavLink to="/">
            <img src={logo2} alt="logo" id="shoe-app-logo" />
          </NavLink>  
          <div className='hero-container-right'>
            <h4>Discover Exquisite Craftsmanship</h4>
            <p>Indulge in the luxury of premium materials and meticulous attention to detail. Our shoes are handcrafted by skilled artisans, using the finest leather, suede, and other exquisite fabrics. Each pair is a masterpiece, carefully crafted to provide ultimate comfort and elevate your style to new heights.</p>
          </div>
        </div>
        <img src={shoe1} alt='shoe1' className='hero-image'/>
      </div>
      <div className='hero2-text'>
      <div ref={leftRef} className='motiondiv'>
          {leftInView && (
            <motion.div
              className='hero2-container-left'
              initial='hidden'
              animate='visible'
              variants={fadeTransition}
            >
              <h4>Embodying Classic Charm</h4>
              <p>We believe that true style is about expressing your individuality with confidence. That's why our collection showcases a variety of colors, finishes, and intricate details, allowing you to find the perfect pair that reflects your unique personality.</p>
            </motion.div>
          )}
        </div>
        <div className='divider-shoe-app'>
          <img src={reed} alt='reed' className='reed'/>
        </div>
        <div ref={rightRef} className='motiondiv'>
          {rightInView && (
            <motion.div
              className='hero2-container-right'
              initial='hidden'
              animate='visible'
              variants={fadeTransition}
            >
          <h4>Handcrafted Perfection</h4>
          <p>From classic oxfords that exude refined charm to sleek loafers that embody contemporary elegance, our collection offers a range of styles to suit every discerning individual. Whether you're attending a formal event, a business meeting, or simply stepping out in style, our shoes will effortlessly complement your impeccable taste.</p>
        </motion.div>
          )}
          </div>
      </div>
      <div className='hero2'>
        <img src={shoe11} alt='shoe1.1' className='shoe2-3'/>
        <img src={shoe2} alt='shoe2' className='shoe2-3'/>
      </div>
      <div className='section3'>
        <div className='section3-shoe-container'>
          <div className='section3-d1'>
            <img src={shoe7} alt='shoe3' className='section3-cards'/>
            <div className='shoe-card'>
              <h6>Florsheim Francisco<br></br> Cap Toe Oxfords, Black</h6>
              <h6>$ 175</h6>
              <img src={stars} alt='stars' className='stars'/>
            </div>
            <button className='card-button'>View</button>
          </div>
          <div className='section3-d2'>
            <img src={shoe4} alt='shoe3' className='section3-cards'/>
            <div className='shoe-card'>
                <h6>Florsheim Upscale<br></br> Plain Toe Oxfords, Cognac</h6>
                <h6>$ 150</h6>
                <img src={stars} alt='stars' className='stars'/>
              </div>
            <button className='card-button'>View</button>
          </div>
          <div className='section3-d3'>
            <img src={shoe9} alt='shoe3' className='section3-cards'/>
            <div className='shoe-card'>
                <h6>Stacy Adams Dickinson<br></br> Cap Toe Oxfords, Tan</h6>
                <h6>$ 150</h6>
                <img src={stars} alt='stars' className='stars'/>
            </div>
            <button className='card-button'>View</button>
          </div>
        </div>
        <div className='call-to-action'>
            <p>Experience the epitome of style and sophistication. Step into a world of elegance with our exquisite collection of men's dress shoes. Whether you're attending a formal event or want to elevate your everyday attire, our handcrafted shoes are designed to make a lasting impression. Shop now and discover the perfect pair that will redefine your wardrobe and boost your confidence. and style today!</p>
            <img src={title} alt="logo" id="shoe-app-logo-cta" />
          </div>
      </div>
    </div>
  )
}

export default ShoeApp


