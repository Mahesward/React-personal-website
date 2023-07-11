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
          <svg viewBox="0 0 200 200" className="blob" xmlns="http://www.w3.org/2000/svg">
            <path
              fill="#FFB742"
              d="M67.6,-38.4C81.5,-14.9,82.6,16.7,69.2,38.7C55.8,60.7,27.9,73,5.2,70.1C-17.6,67.1,-35.2,48.8,-49,26.5C-62.8,4.3,-72.9,-21.8,-64.1,-42.4C-55.3,-63,-27.7,-78,-0.4,-77.8C26.8,-77.5,53.6,-62,67.6,-38.4Z"
              transform="translate(100 100)"
            />
          </svg>
        </div>
      </div>
    </>
  );
}

export default hero;
