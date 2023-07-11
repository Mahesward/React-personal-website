import './hero.scss';

function hero() {
  return (
    <>
      <div className="hero-container">
        <h3 className="greeting">
          Hi, I Am
          <span className="greeting-span"> Maheswar Dileep </span>
          👋
        </h3>
        <h2 className="whoami">Web Developer, Tech Enthusiast</h2>
        <h2 className="whoami-2">I love about coding and building web applications</h2>
        <div className="profile">
          <svg id="sw-js-blob-svg" className="blob" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
                <stop id="stop1" stop-color="rgba(255, 183, 66, 1)" offset="0%"></stop>
                <stop id="stop2" stop-color="rgba(255, 183, 66, 1)" offset="100%"></stop>
              </linearGradient>
            </defs>
            <path
              fill="url(#sw-gradient)"
              d="M19.3,-34.4C25.4,-30,30.9,-25.5,33.6,-19.8C36.4,-14,36.3,-7,37,0.4C37.7,7.8,39.2,15.6,36.8,22C34.4,28.3,28.2,33.1,21.4,35.3C14.6,37.4,7.3,36.8,0,36.8C-7.3,36.8,-14.6,37.4,-21,35.1C-27.4,32.7,-32.9,27.4,-37,21.1C-41.1,14.7,-44,7.4,-43.4,0.3C-42.8,-6.7,-38.9,-13.5,-34.8,-19.8C-30.7,-26.2,-26.4,-32.2,-20.5,-36.8C-14.7,-41.3,-7.4,-44.4,-0.4,-43.8C6.6,-43.2,13.3,-38.8,19.3,-34.4Z"
              width="100%"
              height="100%"
              transform="translate(50 50)"
              stroke-width="0"
              style={{ transition: 'all 0.3s ease 0s' }}
              stroke="url(#sw-gradient)"
            ></path>
          </svg>
        </div>
      </div>
    </>
  );
}

export default hero;
