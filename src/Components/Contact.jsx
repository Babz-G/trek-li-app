import { FaFacebook, FaInstagram, FaMastodon } from "react-icons/fa6";

function Contact() {
  return (
    <main className="contact-page">
      <h1 className="contact-title">Send a Transmission</h1>
      <p className="contact-subtitle">We'd love to hear from you!</p>

      <section className="contact-section" aria-label="Email contacts">
        <h2 className="contact-heading">Email</h2>
        <ul className="contact-list" role="list">
          <li className="contact-item">
            <span className="contact-label">General</span>
            <a href="mailto:treklongisland@gmail.com" className="contact-link">
              treklongisland@gmail.com
            </a>
          </li>
          <li className="contact-item">
            <span className="contact-label">Guest Booking</span>
            <a
              href="mailto:emilyd.treklongisland@gmail.com"
              className="contact-link"
            >
              emilyd.treklongisland@gmail.com
            </a>
          </li>
          <li className="contact-item">
            <span className="contact-label">Vendors</span>
            <a href="mailto:treklongisland@gmail.com" className="contact-link">
              treklongisland@gmail.com
            </a>
          </li>
          <li className="contact-item">
            <span className="contact-label">Registration</span>
            <a
              href="mailto:TrekLongIsland.Reg@gmail.com"
              className="contact-link"
            >
              TrekLongIsland.Reg@gmail.com
            </a>
          </li>
          <li className="contact-item">
            <span className="contact-label">Info Desk</span>
            <a
              href="mailto:TrekLongIsland.Info@gmail.com"
              className="contact-link"
            >
              TrekLongIsland.Info@gmail.com
            </a>
          </li>
          <li className="contact-item">
            <span className="contact-label">Volunteer</span>
            <a
              href="mailto:TrekLongIsland.Volunteers@gmail.com"
              className="contact-link"
            >
              TrekLongIsland.Volunteers@gmail.com
            </a>
          </li>
          <li className="contact-item">
            <span className="contact-label">Kid's Events</span>
            <a
              href="mailto:TrekLongIsland.Kids@gmail.com"
              className="contact-link"
            >
              TrekLongIsland.Kids@gmail.com
            </a>
          </li>
        </ul>
      </section>

      <section className="contact-section" aria-label="Social media">
        <h2 className="contact-heading">Social Media</h2>
        <p className="contact-subtitle">
          The best way to reach us is via our social media!
        </p>
        <div className="contact-socials">
          <a
            href="https://www.facebook.com/TrekLongIsland"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-social-link"
            aria-label="Trek Long Island on Facebook - opens in new tab"
          >
            <FaFacebook /> Facebook
          </a>

          <a
            href="https://www.instagram.com/treklongisland/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-social-link"
            aria-label="Trek Long Island on Instagram - opens in new tab"
          >
            <FaInstagram /> Instagram
          </a>

          <a
            href="https://mastodon.world/@TrekLongIsland"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-social-link"
            aria-label="Trek Long Island on Mastodon - opens in new tab"
          >
            <FaMastodon /> Mastodon
          </a>
        </div>
      </section>

      <section className="contact-section" aria-label="Mailing list">
        <h2 className="contact-heading">Stay in the Loop</h2>

        <a
          href="https://treklongisland.beehiiv.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="mailing-list-btn"
          aria-label="Join the Trek Long Island mailing list - opens in new tab"
        >
          Join Our Mailing List
        </a>
      </section>
    </main>
  );
}

export default Contact;
