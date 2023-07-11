import { Link } from 'react-scroll';
import './navbar.scss';

const navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">{'</>'}</div>
      <div className="nav-contents">
        <ul className="nav-list">
          <li className="nav-items">
            <Link to="hero-section" spy={true} smooth={true} offset={-70} duration={500}>
              <span className="nav-item-1">Home</span>
            </Link>
          </li>
          <li className="nav-items">
            <Link to="about-section" spy={true} smooth={true} offset={-70} duration={500}>
              About
            </Link>
          </li>
          <li className="nav-items">
            <Link to="skills-section" spy={true} smooth={true} offset={-70} duration={500}>
              Skills
            </Link>
          </li>
          <li className="nav-items">Portfolio</li>
          <li className="nav-items">Contact</li>
        </ul>
      </div>
      <div className="button-container">
        <div className="button">Hire Me</div>
      </div>
    </div>
  );
};

export default navbar;
