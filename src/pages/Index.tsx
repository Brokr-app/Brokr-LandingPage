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
