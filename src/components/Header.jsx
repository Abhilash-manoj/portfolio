import { Link } from 'react-router-dom';


function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <h1>Your Name</h1>
        <Link to="/" className="nav-link">
        Home
        </Link>
        <Link to="/about" className="nav-link">
          About
        </Link>
        <Link to="/skills" className="nav-link">
          Skills
        </Link>
        <Link to="/projects" className="nav-link">
          Projects
        </Link>
        <Link to="/contact" className="nav-link">
          Contact
        </Link>
      </nav>
    </header>
  );
}

export default Header;
