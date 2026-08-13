import { FormEvent, useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  Bookmark,
  CheckCircle2,
  ChevronUp,
  Heart,
  Link2,
  Send,
} from "lucide-react";

type SubmitState = "idle" | "submitting" | "success" | "error";

type FeedCard = {
  id: string;
  mediaType: "image" | "video";
  mediaSrc: string;
  mediaAlt: string;
  live?: boolean;
  agentInitials: string;
  agentName: string;
  agentArea: string;
  title: string;
  price: string;
  facts: string;
};

type FeedState = {
  liked: boolean;
  saved: boolean;
};

type ToastState = {
  visible: boolean;
  message: string;
  mode: "save" | "share";
};

const feedCards: FeedCard[] = [
  {
    id: "grand",
    mediaType: "image",
    mediaSrc: "/landing-assets/hero-grand.png",
    mediaAlt: "Paradvåning vid vattnet",
    agentInitials: "BM",
    agentName: "Brokr mäklare",
    agentArea: "Konceptprofil · Vasastan",
    title: "Ljus paradvåning vid Vasaparken",
    price: "18,9 Mkr",
    facts: "112 m² · 4 rok",
  },
  {
    id: "ostermalm",
    mediaType: "image",
    mediaSrc: "/landing-assets/hero-ostermalm.png",
    mediaAlt: "Sekelskiftesvåning med utsikt",
    agentInitials: "BM",
    agentName: "Brokr mäklare",
    agentArea: "Konceptprofil · Östermalm",
    title: "Sekelskiftesvåning med sjöutsikt",
    price: "55,0 Mkr",
    facts: "184 m² · 6 rok",
  },
  {
    id: "skargarden",
    mediaType: "video",
    mediaSrc: "/landing-assets/hero-skargarden.mp4",
    mediaAlt: "Sjötomt med brygga",
    agentInitials: "BM",
    agentName: "Brokr mäklare",
    agentArea: "Konceptprofil · Skärgården",
    title: "Sjötomt med egen brygga",
    price: "14,5 Mkr",
    facts: "140 m² · 5 rok",
  },
];

const initialFeedState = feedCards.reduce<Record<string, FeedState>>((acc, card) => {
  acc[card.id] = { liked: false, saved: false };
  return acc;
}, {});

const FeedVideo = ({ src, label }: { src: string; label: string }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return undefined;

    if (!("IntersectionObserver" in window)) {
      return undefined;
    }

    const observer = new window.IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.35 },
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!("IntersectionObserver" in window)) return;

    if (!video || !isVisible) {
      video?.pause();
      return;
    }

    void video.play();
  }, [isVisible]);

  return (
    <video
      aria-label={label}
      className="feed-video"
      loop
      muted
      playsInline
      preload="none"
      ref={videoRef}
      src={isVisible ? src : undefined}
    />
  );
};

const Index = () => {
  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const [feedState, setFeedState] = useState<Record<string, FeedState>>(initialFeedState);
  const [toast, setToast] = useState<ToastState>({
    visible: false,
    message: "",
    mode: "save",
  });
  const [scrollHintHidden, setScrollHintHidden] = useState(false);

  useEffect(() => {
    document.title = "Brokr";
  }, []);

  useEffect(() => {
    if (!toast.visible) {
      return undefined;
    }

    const timeout = window.setTimeout(() => {
      setToast((current) => ({ ...current, visible: false }));
    }, 1700);

    return () => window.clearTimeout(timeout);
  }, [toast.visible]);

  const showToast = (message: string, mode: "save" | "share") => {
    setToast({ visible: true, message, mode });
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const email = String(formData.get("email") ?? "").trim();
    const website = String(formData.get("website") ?? "");

    if (!email) {
      setSubmitState("error");
      return;
    }

    if (website) {
      setSubmitState("success");
      form.reset();
      return;
    }

    setSubmitState("submitting");

    try {
      const formId = import.meta.env.VITE_FORMSPREE_FORM_ID?.trim();
      if (!formId) throw new Error("Waitlist is not configured");
      const response = await fetch(`https://formspree.io/f/${formId}`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          privacyAccepted: true,
          privacyVersion: "2026-08-11",
          acceptedAt: new Date().toISOString(),
        }),
      });

      if (!response.ok) {
        throw new Error("Waitlist submission failed");
      }

      setSubmitState("success");
      form.reset();
    } catch {
      setSubmitState("error");
    }
  };

  const toggleLike = (cardId: string) => {
    setFeedState((current) => ({
      ...current,
      [cardId]: {
        ...current[cardId],
        liked: !current[cardId].liked,
      },
    }));
  };

  const toggleSave = (cardId: string) => {
    setFeedState((current) => {
      const nextSaved = !current[cardId].saved;

      if (nextSaved) {
        showToast("Sparad i din lista", "save");
      }

      return {
        ...current,
        [cardId]: {
          ...current[cardId],
          saved: nextSaved,
        },
      };
    });
  };

  const copyCardLink = async (card: FeedCard) => {
    const url = new URL(window.location.href);
    url.hash = card.id;

    try {
      await navigator.clipboard.writeText(url.toString());
      showToast("Länk kopierad", "share");
    } catch {
      showToast("Kunde inte kopiera länken", "share");
    }
  };

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
          <a href="/support">Kontakt och support</a>
        </nav>
      </footer>
    </main>
  );
};

export default Index;
