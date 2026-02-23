import { celebrities, idicGuests } from "../data";

function Guests() {
  return (
    <main className="guests-page">
      <h1 className="guests-title">2026 Celebrity Guests</h1>
      <p className="guests-subtitle">Many More Announcements Coming Soon!</p>

      <section aria-label="Celebrity guests">
        <ul className="guests-grid" role="list">
          {celebrities.map((guest) => (
            <li className="guest-card" key={guest.id}>
              <img
                src={guest.img}
                alt={`Headshot of ${guest.name}`}
                className="guest-img"
              />
              <div className="guest-info">
                <h2 className="guest-name">
                  {guest.imdb ? (
                    <a
                      href={guest.imdb}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="guest-imdb-link"
                      aria-label={`View ${guest.name} on IMDB - opens in new tab`}
                    >
                      {guest.name}
                    </a>
                  ) : (
                    guest.name
                  )}
                </h2>
                <p className="guest-series">{guest.series}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section
        className="idic-section"
        aria-label="IDIC track guests and panelists"
      >
        <h2 className="idic-title">IDIC Track Guests & Panelists</h2>
        <ul className="guests-grid" role="list">
          {idicGuests.map((guest) => (
            <li className="guest-card" key={guest.id}>
              <img
                src={guest.img}
                alt={`Headshot of ${guest.name}`}
                className="guest-img"
              />
              <div className="guest-info">
                <h3 className="guest-name">
                  {guest.imdb ? (
                    <a
                      href={guest.imdb}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="guest-imdb-link"
                      aria-label={`View ${guest.name} on IMDB - opens in new tab`}
                    >
                      {guest.name}
                    </a>
                  ) : (
                    guest.name
                  )}
                </h3>
                <p className="guest-series">{guest.series}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Guests;
