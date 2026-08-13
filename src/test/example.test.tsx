import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { MemoryRouter } from "react-router-dom";
import Index from "@/pages/Index";
import Privacy from "@/pages/Privacy";
import Terms from "@/pages/Terms";
import Support from "@/pages/Kontakt";

describe("landing page", () => {
  it("renders the rewritten hero copy", () => {
    render(
      <MemoryRouter>
        <Index />
      </MemoryRouter>,
    );

    expect(screen.getByRole("link", { name: /^Brokr/ })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /Se hem/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Få tidig tillgång/i })).toBeInTheDocument();
    expect(screen.getByRole("checkbox", { name: /integritetspolicy/i })).toBeRequired();
    expect(screen.queryByText(/toppmäklare/i)).not.toBeInTheDocument();
  });

  it("publishes the privacy disclosures and support contact", () => {
    render(
      <MemoryRouter>
        <Privacy />
      </MemoryRouter>,
    );

    expect(screen.getByRole("heading", { name: "Integritetspolicy" })).toBeInTheDocument();
    expect(screen.getByText(/inte end-to-end-krypterade/i)).toBeInTheDocument();
    expect(screen.getByText(/Formspree/i)).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "support@brokrapp.se" })).toHaveAttribute(
      "href",
      "mailto:support@brokrapp.se",
    );
  });

  it("states that practice guesses are free and nonbinding", () => {
    render(
      <MemoryRouter>
        <Terms />
      </MemoryRouter>,
    );

    expect(screen.getByText(/gratis, icke-bindande övning/i)).toBeInTheDocument();
    expect(screen.getByText(/inget verkligt bud/i)).toBeInTheDocument();
  });

  it("provides an accessible support route", () => {
    render(
      <MemoryRouter>
        <Support />
      </MemoryRouter>,
    );

    expect(screen.getByRole("heading", { name: "Support" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /Skicka e-post/i })).toHaveAttribute(
      "href",
      "mailto:support@brokrapp.se",
    );
  });
});
