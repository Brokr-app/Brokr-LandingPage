import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const APP_URL = "https://www.brokrapp.se";

const documents = [
  {
    to: "/integritet",
    title: "Integritetspolicy",
    description: "Vilka personuppgifter vi behandlar, varför och vilka rättigheter du har.",
  },
  {
    to: "/villkor",
    title: "Användarvillkor",
    description: "Reglerna för att använda Brokr, inklusive köp och försäljning mellan användare.",
  },
  {
    to: "/cookies",
    title: "Cookies och lokal lagring",
    description: "Vad webbappen sparar i din webbläsare och hur du ändrar dina val.",
  },
  {
    to: "/support",
    title: "Support",
    description: "Hjälp med konto, säkerhet, innehåll och tekniska problem.",
  },
];

const Index = () => {
  useEffect(() => {
    document.title = "Brokr – villkor, integritet och support";
  }, []);

  return (
    <main className="landing-shell" id="top">
      <section className="hero-section">
        <div className="hero-wrap">
          <div className="hero-copy">
            <a className="brand-mark" href="#top">
              Brokr<span className="brand-dot">.</span>
            </a>

            <div className="hero-title-wrap">
              <h1 className="hero-title">
                Se hem.
                <br />
                <em>Innan de blir objekt.</em>
              </h1>
            </div>

            <p className="hero-lead">
              Brokr är ett socialt flöde för bostadsmarknaden. Se objekt innan de når de
              stora sajterna, följ verifierade profiler och utforska bostadsmarknaden — allt på ett ställe.
            </p>

            <div className={`capture-card ${submitState === "success" ? "done" : ""}`} id="access">
              <form className="capture-form" onSubmit={handleSubmit}>
                <input
                  aria-label="E-post"
                  autoComplete="email"
                  className="capture-input"
                  name="email"
                  placeholder="din@email.se"
                  required
                  type="email"
                />
                <input
                  aria-hidden="true"
                  autoComplete="off"
                  className="honeypot-field"
                  name="website"
                  tabIndex={-1}
                  type="text"
                />
                <button
                  className="capture-button"
                  disabled={submitState === "submitting" || submitState === "success"}
                  type="submit"
                >
                  {submitState === "submitting" ? "Skickar…" : "Få tidig tillgång"}
                  <ArrowRight size={16} strokeWidth={2.1} />
                </button>
              </form>

              <label className="capture-consent">
                <input name="privacyConsent" required type="checkbox" />
                <span>
                  Jag godkänner att min e-post behandlas för väntelistan enligt{" "}
                  <a href="/integritet">integritetspolicyn</a>.
                </span>
              </label>

              <div
                aria-live="polite"
                className={`capture-feedback ${submitState === "success" || submitState === "error" ? `visible ${submitState}` : ""}`}
              >
                {submitState === "success" ? <CheckCircle2 size={16} strokeWidth={2.1} /> : null}
                {submitState === "success"
                  ? "Tack! Du står nu på väntelistan."
                  : "Något gick fel. Försök igen om en stund."}
              </div>
            </div>
          </div>

          <div className="phone-stage">
            <div className="phone-shell">
              <div className="phone-notch" />

              <div
                className="phone-feed"
                onScroll={() => setScrollHintHidden(true)}
              >
                {feedCards.map((card) => {
                  const state = feedState[card.id];

                  return (
                    <article className="feed-card" key={card.id}>
                      <div
                        className="feed-media"
                        onDoubleClick={() => {
                          if (!state.liked) {
                            toggleLike(card.id);
                          }
                        }}
                      >
                        {card.mediaType === "video" ? (
                          <FeedVideo label={card.mediaAlt} src={card.mediaSrc} />
                        ) : (
                          <img alt={card.mediaAlt} className="feed-image" src={card.mediaSrc} />
                        )}
                      </div>

                      <div className="feed-scrim" />

                      <div className={`feed-tag ${card.live ? "live" : ""}`}>
                        {card.live ? <span className="live-dot" /> : null}
                      </div>

                      <div className="feed-rail">
                        <button
                          aria-label={`${state.liked ? "Sluta gilla" : "Gilla"} ${card.title}`}
                          className={`rail-action ${state.liked ? "active" : ""}`}
                          onClick={() => toggleLike(card.id)}
                          type="button"
                        >
                          <span className="rail-icon">
                            <Heart fill={state.liked ? "currentColor" : "none"} size={21} strokeWidth={2} />
                          </span>
                          <small>{state.liked ? "Gillad" : "Gilla"}</small>
                        </button>

                        <button
                          aria-label={`${state.saved ? "Ta bort sparning av" : "Spara"} ${card.title}`}
                          className={`rail-action ${state.saved ? "active save" : ""}`}
                          onClick={() => toggleSave(card.id)}
                          type="button"
                        >
                          <span className="rail-icon">
                            <Bookmark fill={state.saved ? "currentColor" : "none"} size={20} strokeWidth={2} />
                          </span>
                          <small>{state.saved ? "Sparad" : "Spara"}</small>
                        </button>

                        <button
                          aria-label={`Kopiera länk till ${card.title}`}
                          className="rail-action"
                          onClick={() => void copyCardLink(card)}
                          type="button"
                        >
                          <span className="rail-icon">
                            <Send size={20} strokeWidth={2} />
                          </span>
                          <small>Dela</small>
                        </button>
                      </div>

                      <div className="feed-info">
                        <div className="feed-agent">
                          <span className="agent-badge" style={{ background: `var(--avatar-${card.agentInitials.toLowerCase()})` }}>
                            {card.agentInitials}
                          </span>

                          <div className="agent-meta">
                            <div className="agent-name">{card.agentName}</div>
                            <div className="agent-area">{card.agentArea}</div>
                          </div>
                        </div>

                        <div className="feed-title">{card.title}</div>

                        <div className="feed-facts">
                          <span className="feed-price">{card.price}</span>
                          <span className="feed-detail">{card.facts}</span>
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>

              <div className={`scroll-hint ${scrollHintHidden ? "hidden" : ""}`}>
                <ChevronUp size={15} strokeWidth={2.2} />
                Svep
              </div>
              <div className={`floating-toast ${toast.visible ? "visible" : ""}`}>
                {toast.mode === "share" ? <Link2 size={16} strokeWidth={2.1} /> : <Bookmark size={16} strokeWidth={2.1} />}
                {toast.message}
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="landing-footer">
        <span>© 2026 Brokr — En del av <a href="https://www.vantir.se/ventures" target="_blank" rel="noopener noreferrer">Vantir Ventures</a></span>
        <nav aria-label="Sidfot">
          <a href="/integritet">Integritet</a>
          <a href="/villkor">Villkor</a>
          <a href="/cookies">Cookies och lagring</a>
          <a href="/support">Kontakt och support</a>
    <main className="legal-shell">
      <header className="legal-header">
        <Link className="brand-mark" to="/" aria-label="Brokr startsida">
          Brokr<span className="brand-dot">.</span>
        </Link>
        <a className="support-button" href={APP_URL}>
          Öppna Brokr <ArrowRight size={16} strokeWidth={2.1} />
        </a>
      </header>
      <article className="legal-article">
        <h1>Villkor, integritet och support</h1>
        <p className="legal-lead">
          Brokr är ett socialt flöde för bostadsmarknaden. Här hittar du våra policyer och hur
          du får hjälp. Själva tjänsten finns på <a href={APP_URL}>www.brokrapp.se</a> och i
          appen.
        </p>
        <nav aria-label="Dokument" className="docs-hub">
          {documents.map((doc) => (
            <Link className="docs-hub-card" key={doc.to} to={doc.to}>
              <h2>{doc.title}</h2>
              <p>{doc.description}</p>
            </Link>
          ))}
        </nav>
      </article>
      <footer className="landing-footer">
        <span>
          © 2026 Brokr — En del av{" "}
          <a href="https://www.vantir.se/ventures" target="_blank" rel="noopener noreferrer">
            Vantir Ventures
          </a>
        </span>
      </footer>
    </main>
  );
};

export default Index;
