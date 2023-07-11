import { Link } from 'react-scroll';
import './footer.scss';

const footer = () => {
  return (
    <>
      <div className="footer-container">
        <div className="footer-main-list">
          <div className="footer-main-list-item">
            <div className="info-main">
              <h2>Maheaswer Dileep</h2>
            </div>
            <div className="info-base">
              Web Developer, Freelancer, <br />
              Backend Developer
            </div>
          </div>

          <div className="footer-main-list-item">
            <h3 className="useful-links-header">Useful Links</h3>

            <ul className="useful-links-ul">
              <Link to="hero-section" spy={true} smooth={true} offset={-70} duration={500}>
                <span className="nav-item-1">Home</span>
              </Link>
              <li className="useful-links-li"></li>
              <li className="useful-links-li">
                <Link to="about-section" spy={true} smooth={true} offset={-70} duration={500}>
                  <span className="nav-item-1">About</span>
                </Link>
              </li>
              <li className="useful-links-li">
                <Link to="skills-section" spy={true} smooth={true} offset={-70} duration={500}>
                  <span className="nav-item-1">Skills</span>
                </Link>
              </li>
              <li className="useful-links-li">
                <Link to="hero-section" spy={true} smooth={true} offset={-70} duration={500}>
                  <span className="nav-item-1">Home</span>
                </Link>
              </li>
            </ul>
          </div>

          <div className="footer-main-list-item">
            <h3 className="social-media-header">Social Media</h3>
            <ul className="social-media-ul">
              <li className="social-media-li">instagram</li>
              <li className="social-media-li">instagram</li>
              <li className="social-media-li">instagram</li>
              <li className="social-media-li">instagram</li>
              <li className="social-media-li">instagram</li>
            </ul>
          </div>

          <div className="footer-main-list-item">
            <div className="contact-me">email</div>
            <input type="email" name="" id="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default footer;
