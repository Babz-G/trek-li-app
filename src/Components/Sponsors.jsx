import { sponsors, charities } from "../data";

function SponsorCard({ sponsor }) {
  return (
    <div className="sponsor-card">
      <img
        src={sponsor.img}
        alt={`${sponsor.name} logo`}
        className="sponsor-card-img"
      />
      <div className="sponsor-card-info">
        <p className="sponsor-card-level">{sponsor.level}</p>
        <h3 className="sponsor-card-name">{sponsor.name}</h3>
        <p className="sponsor-card-desc">{sponsor.description}</p>
        {sponsor.url && (
          <a
            href={sponsor.url}
            target="_blank"
            rel="noopener noreferrer"
            className="sponsor-card-link"
            aria-label={`Visit ${sponsor.name} website - opens in new tab`}
          >
            Visit Website
          </a>
        )}
      </div>
    </div>
  );
}

function CharityCard({ charity }) {
  return (
    <div className="sponsor-card">
      <img
        src={charity.img}
        alt={`${charity.name} logo`}
        className="sponsor-card-img"
      />
      <div className="sponsor-card-info">
        <h3 className="sponsor-card-name">{charity.name}</h3>
        <p className="sponsor-card-desc">{charity.description}</p>
        <a
          href={charity.url}
          target="_blank"
          rel="noopener noreferrer"
          className="sponsor-card-link"
          aria-label={`Visit ${charity.name} website - opens in new tab`}
        >
          Visit Website
        </a>
      </div>
    </div>
  );
}

function Sponsors() {
  return (
    <main className="sponsors-page">
      <h1 className="sponsors-title">2026 Sponsors</h1>
      <p className="sponsors-subtitle">Together we can make a difference.</p>

      <section aria-label="Captain level sponsors">
        <h2 className="sponsor-level-title">Captain Level</h2>
        {sponsors.captain.map((s) => (
          <SponsorCard key={s.id} sponsor={s} />
        ))}
      </section>

      <section aria-label="Commander level sponsors">
        <h2 className="sponsor-level-title">Commander Level</h2>
        {sponsors.commander.map((s) => (
          <SponsorCard key={s.id} sponsor={s} />
        ))}
      </section>

      <section aria-label="Lieutenant level sponsors">
        <h2 className="sponsor-level-title">Lieutenant Level</h2>
        {sponsors.lieutenant.map((s) => (
          <SponsorCard key={s.id} sponsor={s} />
        ))}
      </section>

      <section className="fan-sponsors" aria-label="Fan sponsors">
        <h2 className="sponsor-level-title">Fan Sponsors</h2>
        <p className="sponsors-subtitle">
          Thank you to all of our fan sponsors! These funds go straight to the
          convention to help with accessibility needs, technology and other
          costs.
        </p>
        <ul className="fan-sponsors-list" role="list">
          {sponsors.fanSponsors.map((name, index) => (
            <li key={index} className="fan-sponsor-name">
              {name}
            </li>
          ))}
        </ul>
        <a
          href="https://www.paypal.com/ncp/payment/8Q673KV7DGR8N"
          target="_blank"
          rel="noopener noreferrer"
          className="ticket-btn"
          aria-label="Become a 2026 Fan Sponsor - opens in new tab"
        >
          Become a Fan Sponsor!
        </a>
      </section>

      <section
        className="charities-section"
        aria-label="Charitable organizations"
      >
        <h2 className="sponsor-level-title">How We Spread the Kindness</h2>
        <p className="sponsors-subtitle">
          Every year Trek Long Island supports organizations and foundations
          that make a difference.
        </p>
        {charities.map((c) => (
          <CharityCard key={c.id} charity={c} />
        ))}
      </section>
    </main>
  );
}

export default Sponsors;
