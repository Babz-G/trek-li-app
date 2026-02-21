import banner from "../images/trek-li-banner.png";
import transporterBanner from "../images/sponsor-banner.jpeg";

function Home() {
  return (
    <div className="home">
      <section className="hero">
        <img src={banner} alt="Trek Long Island 4" className="hero-banner" />
      </section>

      <section className="info">
        <h2 className="info-dates">June 12 – 14, 2026</h2>
        <p className="info-venue">
          Hyatt Regency Long Island · 1717 Motor Pkwy, Hauppauge, NY
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
          src={transporterBanner}
          alt="The Transporter Room Podcast"
          className="sponsor-banner"
        />
      </div>
    </div>
  );
}

export default Home;
