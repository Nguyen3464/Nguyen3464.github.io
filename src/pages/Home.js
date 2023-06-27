import React from 'react';
import home from "../assets/home.jpeg"
import headshot from "../assets/headshot.png"
import salad1 from "../assets/salad1.jpg"
import divider from "../assets/divider.png"
import Plx from "react-plx"
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';


const Home = (args) => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.2, 
  })
  const fadeLeftTransition = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  }

  
  return (
    <div>
      <div id='home'>
        <Plx
          className='plx1'
          parallaxData={[
            {
              start: 0,
              end: 150,
              properties: [
                {
                  startValue: 0,
                  endValue: 1,
                  property: "opacity"
                }
              ]
            }
          ]}
        >
        <img src={home} className="lettuce" alt="my lettuce from 2020" />
        </Plx>
        <img src={headshot} className="headshot" alt="a photo of me 2023" />
        <div className="intro">
          <p className="title">Full Stack Web <br></br>Developer</p>
          <h1 className="title-h1">My names Nguyen Nguyen</h1>
        </div>
        </div>
        <img src={divider} alt="page divider" id="divider"/>
        <div>
        <motion.div 
        className="aboutme-container"
        ref={ref}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={fadeLeftTransition}
        transition={{ duration: 1 }}
        >
          <p className="aboutme">Hello, My names Nguyen, Nguyen. I have experience creating End-to-End Full-Stack application architectures from RESTful API using Rails, Frontend business logic UI with React, to databases. I write test with RSpec and JEST. Interested in customer-facing applications and passionate about problem solving with technology.
          I'm a team orientated, solutions based holistic thinker and problem solver. A seeker of active communications vertically and horizontally to insure a cohesive workflow for my team, and assure a quality product is delivered. I enjoy preforming research and conducting analytics in order to be subject matter expert. The values of enthusiasm, active listening, team moral, and reciprocity are metrics I contribute as a force multipliers to my peers on a daily basis. 
          I serve in the Minnesota Army National Guard, as a Geospatial Intelligence Imagery Analyst. In 2019 I received an Army Achievement Award for my performance in the 334th's Bridgade Engineer Battalion's Warfighter Event. Outside of the Army I work at Cheetah Precision as a CNC Machinist. We manufacture parts ranging from the Aerospace, Medical, and Military applications. At home i'm a father two a 5 year old boy and a 2 year old girl. On the weekends I spend my time hosting Gardening Workshops, teaching residential families how to be more self sufficient by building and tend gardens, orchards, mushroom logs, and raising chickens in a suburban back yard setting.</p>
          <motion.img
            src={salad1} 
            alt="salad picture 1" className="salad1"
            initial={{ opacity: 0 }}
            animate={{ opacity: inView ? 1 : 0 }}
            transition={{ duration: 3 }}
            />
          </motion.div>
        </div>
  </div>
  )
}

export default Home