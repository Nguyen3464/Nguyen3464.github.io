import React, { useState } from 'react';
import home from "../assets/home.jpeg"
import headshot from "../assets/headshot.png"
import salad1 from "../assets/salad1.jpg"
import salad2 from "../assets/salad2.jpg"
import lettuce3 from "../assets/lettuce3.jpeg"
import divider from "../assets/divider.png"
import gnome1 from "../assets/gnome1.png"
import gnome2 from "../assets/gnome2.png"
import gnome3 from "../assets/gnome3.png"
import gnome4 from "../assets/gnome4.png"
import flower1 from "../assets/flower1.png"
import flower2 from "../assets/flower2.png"
import pumpkin from "../assets/pumpkin.png"
import sun from "../assets/sun.png"
import mushroom1 from "../assets/mushroom1.png"
import mushroom2 from "../assets/mushroom2.png"
import Plx from "react-plx"
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Label, Form, FormGroup, Input,  Carousel, CarouselItem, CarouselControl, CarouselCaption, CardHeader, ListGroup, ListGroupItem, Card } from "reactstrap"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';

const Home = (args) => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.2, 
  })
  const fadeLeftTransition = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  }
  const [sunVisible, setSunVisible] = useState(false);
  const [showGnome1, setShowGnome1] = useState(false);
  const [showGnome2, setShowGnome2] = useState(false);
  const [showGnome3, setShowGnome3] = useState(false);
  const [showflower1, setShowflower1] = useState(false);
  const [showflower2, setShowflower2] = useState(false);
  const [showMushroom1, setShowMushroom1] = useState(false);
  const [showMushroom2, setShowMushroom2] = useState(false);

  const handleButtonClick = () => {
    setSunVisible(true);
    setShowGnome1(true);
    setShowGnome2(true);
    setShowGnome3(true);
    setShowMushroom1(true);
    setShowMushroom2(true);
    setShowflower1(true);
    setShowflower2(true);
  };
  const handleAnimationComplete = () => {
    setShowGnome1(false);
    
  };
  const items = [
    {
      src: 'https://tse3.mm.bing.net/th?id=OIP.4F61pBNCPnhv8dFeV3neuwHaEo&pid=Api&P=0&h=180',
      altText: 'tomato',
      key: 1,
    },
    {
      src: 'https://previews.yayimages.com/28dd392280c94f22aac31bba1ab817e8.0000000.jpg',
      altText: 'broccoli',
      key: 2,
    },
    {
      src: 'https://images2.alphacoders.com/554/thumb-1920-554950.jpg',
      altText: 'beets',
      key: 3,
    },
    {
      src: 'https://wallpapercave.com/wp/wp4159436.jpg',
      altText: 'cabbage',
      key: 4,
    },
    {
      src: 'https://media.istockphoto.com/id/185275579/photo/bundles-of-organic-carrots-with-the-stems-still-attached.jpg?b=1&s=170667a&w=0&k=20&c=tlOo0x-fKU2H1tz58_11VC2tiZwlDYf-icMR5dZviDU=',
      altText: 'carrot',
      key: 5,
    },
    {
      src: 'https://wallpapercave.com/wp/wp4517399.jpg',
      altText: 'cauliflower',
      key: 6,
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} 
        style={{

          borderRadius: "20px",
          width: "50rem",
          height: "20rem",
        }}
        />
        <CarouselCaption
          captionText={item.caption}
          captionHeader={item.caption}
        />
      </CarouselItem>
    );
  });
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
          <p className="aboutme">Hello, My names Nguyen, Nguyen. Currently I am a student attending Learn Academy to become a Full Stack Developer. I have experience creating End-to-End Full-Stack application architectures from RESTful API using Rails, Frontend business logic UI with React, to databases. I write test with RSpec and JEST. Interested in customer-facing applications and passionate about problem solving with technology. I'm a team orientated, solutions based holistic thinker and problem solver. A seeker of active communications vertically and horizontally to insure a cohesive workflow for my team, and assure a quality product is delivered. I enjoy preforming research and conducting analytics in order to be subject matter expert. The values of enthusiasm, active listening, team moral, and reciprocity are metrics I contribute as a force multipliers to my peers on a daily basis. 
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
      <div id="carousel-container">
        <img src={lettuce3} alt='lettuce2' className='lettuce3'/>
        <Carousel
          activeIndex={activeIndex}
          next={next}
          previous={previous}
          interval={3000}
          ride={false}
          wrap={true}
          {...args}
          className='slides'
        >
          {slides}
          <CarouselControl
            direction="prev"
            directionText="Previous"
            onClickHandler={previous}
          />
          <CarouselControl
            direction="next"
            directionText="Next"
            onClickHandler={next}
          />
        </Carousel> 
        <h1 className='skills-title'>Skills</h1>
        <div className='skills'>
        <Card
          style={{
          width: '12rem'
          }}
        >
          <CardHeader style={{ backgroundColor: 'rgb(138, 113, 87)', color: 'rgb(183, 246, 76)', fontSize: '1.5rem', fontWeight: 'bold', }}>
            Languages
          </CardHeader>
          <ListGroup flush>
          <ListGroupItem style={{ fontSize: '1.1rem'}}>
              Javascript
            </ListGroupItem>
            <ListGroupItem style={{ fontSize: '1.1rem'}}>
              Ruby
            </ListGroupItem>
            <ListGroupItem style={{ fontSize: '1.1rem'}}>
              HTML
            </ListGroupItem>
            <ListGroupItem style={{ fontSize: '1.1rem'}}>
              CSS
            </ListGroupItem>
          </ListGroup>
        </Card>
        <Card
          style={{
          width: '12rem'
          }}
        >
          <CardHeader style={{ backgroundColor: 'rgb(138, 113, 87)', color: 'rgb(183, 246, 76)', fontSize: '1.5rem', fontWeight: 'bold', }}>
            Frameworks
          </CardHeader>
          <ListGroup flush>
            <ListGroupItem style={{ fontSize: '1.1rem'}}>
              React
            </ListGroupItem>
            <ListGroupItem style={{ fontSize: '1.1rem'}}>
              Ruby on Rails
            </ListGroupItem>
          </ListGroup>
        </Card>
        <Card
          style={{
          width: '12rem'
          }}
        >
          <CardHeader style={{ backgroundColor: 'rgb(138, 113, 87)', color: 'rgb(183, 246, 76)', fontSize: '1.5rem', fontWeight: 'bold', }}>
            Database
          </CardHeader>
          <ListGroup flush>
            <ListGroupItem style={{ fontSize: '1.1rem'}}>
              PostgreSQL
            </ListGroupItem>
            <ListGroupItem style={{ fontSize: '1.1rem'}}>
              Active Records
            </ListGroupItem>
          </ListGroup>
        </Card>
        <Card
          style={{
          width: '12rem'
          }}
        >
          <CardHeader style={{ backgroundColor: 'rgb(138, 113, 87)', color: 'rgb(183, 246, 76)', fontSize: '1.5rem', fontWeight: 'bold', }}>
            Testing
          </CardHeader>
          <ListGroup flush>
            <ListGroupItem style={{ fontSize: '1.1rem'}}>
              JEST
            </ListGroupItem>
            <ListGroupItem style={{ fontSize: '1.1rem'}}>
              RSpec
            </ListGroupItem>
          </ListGroup>
        </Card>
        <Card
          style={{
          width: '12rem'
          }}
        >
          <CardHeader style={{ backgroundColor: 'rgb(138, 113, 87)', color: 'rgb(183, 246, 76)', fontSize: '1.2rem', fontWeight: 'bold', }}>
            Version Control
          </CardHeader>
          <ListGroup flush>
            <ListGroupItem style={{ fontSize: '1.1rem'}}>
              Git
            </ListGroupItem>
          </ListGroup>
        </Card>
        </div>
    </div>
    <div className='contact-section'>

    <div className="contact"> 
      <Form action="https://formsubmit.co/n.nguyen3464@gmail.com" method="POST" className="form">
        <FormGroup>
          <Label for="exampleEmail">
            Email
          </Label>
          <Input
            id="exampleEmail"
            name="email"
            placeholder="example@email.com"
            type="email"
          />
        </FormGroup>
        <FormGroup>
          <Label for="exampleText">
            Text Area
          </Label>
          <Input
            id="exampleText"
            name="text"
            type="textarea"
            style={{ height: "140px" }}
          />
        </FormGroup>
        <button className="form-button">Submit</button>
      </Form>
      <img src={salad2} alt="salad picture 2" className="salad2"/>
    </div>    
      <a href="#navbar" className="top-link">
          <FontAwesomeIcon icon={faAngleUp} bounce style={{ color: '#b7f64c' }} id="icon" />
      </a>
      <div className='gnome-garden'>
      <motion.img
        src={gnome1}
        alt='gnome1'
        className='gnome1'
        initial={{ x: 0 }}
        animate={showGnome1 ? { x: 200 } : { x: 0 }} 
        transition={{
          duration: 4,
          type: 'tween',
          ease: 'easeInOut'
        }}
      />
        <motion.img 
          src={gnome2}
          alt="gnome2"
          className="gnome2"
          initial={{ y: 300 }} 
         animate={{ y: sunVisible ? 0 : 300 }}
          transition={{ duration: 1, ease: 'easeOut' }} 
        />
        <motion.img 
          src={gnome4}
          alt="gnome4"
          id="gnome4"
          initial={{ y: 300 }} 
         animate={{ y: sunVisible ? 0 : 300 }} 
          transition={{ duration: 1.5, ease: 'easeOut' }} 
        />
      <motion.img 
        src={gnome3}
        alt="gnome3"
        id="gnome3"
        initial={{ x: 300 }} 
        animate={{ x: sunVisible ? 0 : 300 }}
        transition={{ duration: 4, ease: 'easeOut' }} 
        />
      <motion.img 
        src={pumpkin}
        alt="pumpkin"
        className="pumpkin"
        initial={{ x: 300 }} 
        animate={{ x: sunVisible ? 0 : 300 }}
        transition={{ duration: 3, ease: 'easeOut' }} 
        />

    <motion.img 
          src={mushroom1}
          alt="mushroom1"
          className="mushroom1"
          initial={{ y: 300 }} 
         animate={{ y: sunVisible ? 0 : 300 }} 
          transition={{ duration: 3, ease: 'easeOut' }} 
        />  
    <motion.img 
          src={mushroom2}
          alt="mushroom2"
          className="mushroom2"
          initial={{ y: 300 }}
         animate={{ y: sunVisible ? 0 : 300 }} 
          transition={{ duration: 1.5, ease: 'easeOut' }} 
        /> 
              <motion.img 
        src={flower1}
        alt="flower1"
        className="flower1"
        initial={{ x: -300 }} 
        animate={{ x: sunVisible ? 0 : -300 }}
        transition={{ duration: 3, ease: 'easeOut' }} 
        />
    <motion.img 
          src={flower2}
          alt="flower2"
          className="flower2"
          initial={{ y: -300 }} 
         animate={{ y: sunVisible ? 0 : -300 }}
          transition={{ duration: 4, ease: 'easeOut' }} 
        /> 
      <motion.img
          src={sun}
          alt="sun"
          className="sun"
          initial={{ x: -1000 }} 
          animate={{ x: sunVisible ? 0 : -1000 }}
          transition={{ duration: 3, ease: 'easeOut' }}
        />
      <button onClick={handleButtonClick} className='gnome-button'>Show Sun</button>
    </div>
    </div>
  </div>
  )
}

export default Home