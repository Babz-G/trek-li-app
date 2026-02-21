import { Link } from "react-router-dom";
import logo from "../images/trek-li-logo.jpeg";

function Navbar() {
  return (
    <nav className="navbar">
      <img src={logo} alt="Trek Long Island Logo" className="navbar-logo" />
      <ul className="navbar-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/schedule">Schedule</Link>
        </li>
        <li>
          <Link to="/guests">Celebrity Guests</Link>
        </li>
        <li>
          <Link to="/venue">Venue Map</Link>
        </li>
        <li>
          <Link to="/sponsors">Sponsors</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
