import NAVBAR from '../../components/navbar/navbar';
import ABOUT from '../../components/about/about';
import HERO from '../../components/hero-section/hero';

const home = () => {
  return (
    <>
      <NAVBAR />
      <HERO />
      <ABOUT />
    </>
  );
};

export default home;
