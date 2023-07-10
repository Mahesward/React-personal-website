import { motion, useScroll } from 'framer-motion';
import AnimatedCursor from 'react-animated-cursor';
import Navbar from '../../components/navbar/navbar';
import Hero from '../../components/hero-section/hero';
import About from '../../components/about/about';
import Skills from '../../components/skills/skills';
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
      <Navbar />
      <Hero />
      <About />
      <Skills />
    </>
  );
};

export default home;
