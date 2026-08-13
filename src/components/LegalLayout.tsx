import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { hasCompleteLegalIdentity, legalIdentity } from "@/lib/legalIdentity";

export default function LegalLayout({
  title,
  lead,
  children,
}: {
  title: string;
  lead: string;
  children: ReactNode;
}) {
  return (
    <main className="legal-shell">
      <header className="legal-header">
        <Link className="brand-mark" to="/" aria-label="Brokr startsida">
          Brokr<span className="brand-dot">.</span>
        </Link>
        <nav aria-label="Juridik och support" className="legal-nav">
          <Link to="/integritet">Integritet</Link>
          <Link to="/villkor">Villkor</Link>
          <Link to="/support">Support</Link>
        </nav>
      </header>
      <article className="legal-article">
        <p className="legal-updated">Senast uppdaterad 11 augusti 2026</p>
        <h1>{title}</h1>
        <p className="legal-lead">{lead}</p>
        {children}
      </article>
    </main>
  );
}

export function ControllerIdentity() {
  if (!hasCompleteLegalIdentity) return null;
  return (
    <address>
      {legalIdentity.name}<br />
      Organisationsnummer: {legalIdentity.organisationNumber}<br />
      {legalIdentity.postalAddress}<br />
      <a href="mailto:support@brokrapp.se">support@brokrapp.se</a>
    </address>
  );
}
