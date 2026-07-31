import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { MemoryRouter } from "react-router-dom";
import Index from "@/pages/Index";

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
  });
});
