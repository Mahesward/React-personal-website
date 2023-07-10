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
        <div className="profile"></div>
      </div>
    </>
  );
}

export default hero;
