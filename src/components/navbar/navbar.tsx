import './navbar.scss';

const navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">{'</>'}</div>
      <div className="nav-contents">
        <ul className="nav-list">
          <li className="nav-items">
            <span className="nav-item-1">Home</span>
          </li>
          <li className="nav-items">About</li>
          <li className="nav-items">Skills</li>
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
