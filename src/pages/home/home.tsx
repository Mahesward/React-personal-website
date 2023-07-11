import { motion, useScroll } from 'framer-motion';
import { Link, animateScroll } from 'react-scroll';
import AnimatedCursor from 'react-animated-cursor';
import Navbar from '../../components/navbar/navbar';
import Hero from '../../components/hero-section/hero';
import About from '../../components/about/about';
import Skills from '../../components/skills/skills';
import FeaturedWorks from '../../components/featured_works/featured_works';
import './home.scss';

const home = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { scrollYProgress } = useScroll();

  return (
    <>
      <AnimatedCursor
        innerSize={8}
        outerSize={35}
        innerScale={1}
        outerScale={2}
        outerAlpha={0}
        trailingSpeed={4}
        innerStyle={{
          backgroundColor: 'rgb(255, 183, 66)',
        }}
        outerStyle={{
          border: '2px solid rgb(255, 183, 66)',
        }}
      />

      <motion.div className="progress-bar" style={{ scaleX: scrollYProgress }} />
      <div className="nav-wrapper">
        <Navbar />
      </div>
      <Link to="hero-section" spy={true} smooth={true} offset={-70} duration={500} className="scroll-link">
        <div id="hero-section" className="hero-wrapper">
          <Hero />
        </div>
      </Link>
      <Link to="about-section" spy={true} smooth={true} offset={-70} duration={500} className="scroll-link">
        <div id="about-section" className="about-wrapper">
          <About />
        </div>
      </Link>
      <Link to="skills-section" spy={true} smooth={true} offset={-70} duration={500} className="scroll-link">
        <div id="skills-section" className="skills-wrapper">
          <Skills />
        </div>
      </Link>
      {/* <div className="featured-wrapper">
        <FeaturedWorks />
      </div> */}
    </>
  );
};

export default home;
