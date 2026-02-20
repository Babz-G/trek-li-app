import logo from "../images/trek-li-logo.jpeg";

function Navbar() {
  return (
    <nav className="navbar">
      <img src={logo} alt="Trek Long Island Logo" className="navbar-logo" />
      <ul className="navbar-links">
        <li>Home</li>
        <li>Schedule</li>
        <li>Celebrity Guests</li>
        <li>Venue Map</li>
        <li>Sponsors</li>
      </ul>
    </nav>
  );
}

export default Navbar;
