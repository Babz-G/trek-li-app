import banner from "../images/trek-li-banner.png";
import transporterLogo from "../images/transporter-room-logo.jpeg";

function Home() {
  return (
    <main className="home">
      <section aria-label="Convention banner">
        <img
          src={banner}
          alt="Trek Long Island 4 - What Happens on Risa - June 12-14 2026"
          className="hero-banner"
        />
      </section>

      <section className="info" aria-label="Convention details">
        <h1 className="info-dates">June 12 – 14, 2026</h1>
        <p className="info-venue">
          Hyatt Regency Long Island · 1717 Motor Pkwy, Hauppauge, NY
        </p>
        <a
          href="http://treklongislandtickets.square.site/"
          target="_blank"
          rel="noopener noreferrer"
          className="ticket-btn"
          aria-label="Purchase tickets for Trek Long Island 2026 - opens in new tab"
        >
          Purchase Tickets
        </a>
      </section>

      <section className="hours" aria-label="Convention hours">
        <h2>Convention Hours</h2>
        <p>Friday: 5:00 PM – 11:00 PM</p>
        <p>Saturday: 10:00 AM – 12:00 AM</p>
        <p>Sunday: 10:00 AM – 6:00 PM</p>
      </section>

      <section className="sponsor-bar" aria-label="App sponsor information">
        <p>App Sponsored by</p>
        {/* <img
          src={transporterLogo}
          alt="The Transporter Room Podcast logo"
          className="sponsor-logo"
        /> */}
        <h2 className="sponsor-name">The Transporter Room Podcast</h2>
        {/* <p className="sponsor-desc">
          Exploring and celebrating the lives forever transformed by the Star
          Trek universe. Each week, Chris Garis and the crew sit down with cast,
          crew, scientists and fans whose journeys have been shaped by the
          franchise.
        </p> */}
        <img
          src={transporterLogo}
          alt="The Transporter Room Podcast logo"
          className="sponsor-logo"
        />
        <a
          href="https://thetransporterroom.net"
          target="_blank"
          rel="noopener noreferrer"
          className="sponsor-link"
          aria-label="Visit The Transporter Room Podcast website - opens in new tab"
        >
          thetransporterroom.net
        </a>
      </section>
    </main>
  );
}

export default Home;
