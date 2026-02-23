import banner from "../images/trek-li-banner.png";
import transporterLogo from "../images/transporter-room-logo.jpeg";

function Home() {
  return (
    <div className="home">
      <section className="hero">
        <img src={banner} alt="Trek Long Island 4" className="hero-banner" />
      </section>

      <section className="info">
        <h2 className="info-dates">June 12 – 14, 2026</h2>
        <p className="info-venue">
          Hyatt Regency Long Island · 1717 Motor Pkwy, Hauppauge, NY 11788
        </p>
        <a
          href="http://treklongislandtickets.square.site/"
          target="_blank"
          className="ticket-btn"
        >
          Purchase Tickets
        </a>
      </section>

      <section className="hours">
        <h2>Convention Hours</h2>
        <p>Friday: 5:00 PM – 11:00 PM</p>
        <p>Saturday: 10:00 AM – 12:00 AM</p>
        <p>Sunday: 10:00 AM – 6:00 PM</p>
      </section>

      <div className="sponsor-bar">
        <p>App Sponsored by</p>
        <img
          src={transporterLogo}
          alt="The Transporter Room Podcast"
          className="sponsor-logo"
        />
        <h3 className="sponsor-name">The Transporter Room Podcast</h3>
        <p className="sponsor-desc">
          Exploring and celebrating the lives forever transformed by the Star
          Trek universe. Each week, Chris Garis and the crew sit down with cast,
          crew, scientists and fans whose journeys have been shaped by the
          franchise.
        </p>
        <a
          href="https://thetransporterroom.net"
          target="_blank"
          className="sponsor-link"
        >
          thetransporterroom.net
        </a>
      </div>
    </div>
  );
}

export default Home;
