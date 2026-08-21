import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { hasCompleteLegalIdentity, legalIdentity } from "@/lib/legalIdentity";
import { LEGAL_PAGES_UPDATED } from "@/lib/policyVersion";

/**
 * The date this page was last substantively revised.
 *
 * Per page, not shared. It used to be one hard-coded date in this layout, so
 * revising one policy either left it stale on that page or silently redated
 * the others — and a reader cannot tell which version of a policy they agreed
 * to if the date does not track the text.
 */
const DEFAULT_UPDATED = LEGAL_PAGES_UPDATED;

export default function LegalLayout({
  title,
  lead,
  updated = DEFAULT_UPDATED,
  children,
}: {
  title: string;
  lead: string;
  updated?: string;
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
        <p className="legal-updated">Senast uppdaterad {updated}</p>
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
