import banner from "../images/trek-li-banner.png";
import transporterLogo from "../images/transporter-room-logo.jpeg";
import { FaFacebook, FaInstagram, FaMastodon } from "react-icons/fa6";

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
        <h1 className="info-dates">June 12 - 14, 2026</h1>
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
        <p>Friday: 5:00 PM - 11:00 PM</p>
        <p>Saturday: 10:00 AM - 12:00 AM</p>
        <p>Sunday: 10:00 AM - 6:00 PM</p>
      </section>

      <div className="social-links" aria-label="Trek Long Island social media">
        <a
          href="https://www.facebook.com/TrekLongIsland"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Trek Long Island on Facebook - opens in new tab"
        >
          <FaFacebook />
        </a>
        <a
          href="https://www.instagram.com/treklongisland/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Trek Long Island on Instagram - opens in new tab"
        >
          <FaInstagram />
        </a>
        <a
          href="https://mastodon.world/@TrekLongIsland"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Trek Long Island on Mastodon - opens in new tab"
        >
          <FaMastodon />
        </a>
      </div>

      <a
        href="https://treklongisland.beehiiv.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="mailing-list-btn"
        aria-label="Join the Trek Long Island mailing list - opens in new tab"
      >
        Join Our Mailing List
      </a>

      <section className="sponsor-bar" aria-label="App sponsor information">
        <p>App Sponsored by</p>
        <img
          src={transporterLogo}
          alt="The Transporter Room Podcast logo"
          className="sponsor-logo"
        />
        <h2 className="sponsor-name">The Transporter Room Podcast</h2>
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
