import { celebrities, idicGuests } from "../data";

function Guests() {
  return (
    <div className="guests-page">
      <h1 className="guests-title">2026 Celebrity Guests</h1>
      <p className="guests-subtitle">Many More Announcements Coming Soon!</p>
      <div className="guests-grid">
        {celebrities.map((guest) => (
          <div className="guest-card" key={guest.id}>
            <img src={guest.img} alt={guest.name} className="guest-img" />
            <div className="guest-info">
              <h3 className="guest-name">
                {guest.imdb ? (
                  <a
                    href={guest.imdb}
                    target="_blank"
                    className="guest-imdb-link"
                  >
                    {guest.name}
                  </a>
                ) : (
                  guest.name
                )}
              </h3>
              <p className="guest-series">{guest.series}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="idic-section">
        <h2 className="idic-title">IDIC Track Guests & Panelists</h2>
        <div className="guests-grid">
          {idicGuests.map((guest) => (
            <div className="guest-card" key={guest.id}>
              <img src={guest.img} alt={guest.name} className="guest-img" />
              <div className="guest-info">
                <h3 className="guest-name">
                  {guest.imdb ? (
                    <a
                      href={guest.imdb}
                      target="_blank"
                      className="guest-imdb-link"
                    >
                      {guest.name}
                    </a>
                  ) : (
                    guest.name
                  )}
                </h3>
                <p className="guest-series">{guest.series}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Guests;
