import { Link } from 'react-router-dom';


function Header() {
  return (
    <header className="header">
        <h1>  Portfolio  </h1>
      <nav className="nav">
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
