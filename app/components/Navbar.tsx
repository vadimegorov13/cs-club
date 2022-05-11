import { Link } from 'remix';

const darkBlue = {
  backgroundColor: '#233F61',
  fontFamily: 'Impact',
  fontSize: 25,
  color: 'white',
};

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark m-4" style={darkBlue}>
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          UAA CS Club
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item mx-1">
              <Link to="about" className="nav-link">
                About Us
              </Link>
            </li>
            <li className="nav-item mx-1">
              <Link to="events" className="nav-link">
                Events
              </Link>
            </li>
            <li className="nav-itemmx-1">
              <Link to="projects" className="nav-link">
                Projects
              </Link>
            </li>
            <li className="nav-item mx-1">
              <Link to="blogs" className="nav-link">
                Blogs
              </Link>
            </li>
            <li className="nav-item mx-1">
              <Link to="resources" className="nav-link">
                Resources
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
