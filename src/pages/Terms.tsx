import LegalLayout, { ControllerIdentity } from "@/components/LegalLayout";

const Terms = () => (
  <LegalLayout
    title="Användarvillkor"
    lead="Villkoren gäller när du skapar ett konto eller använder Brokrs app och webbplats."
  >
    <section>
      <h2>Avtalspart och åldersgräns</h2>
      <p>Du måste ha fyllt 13 år och lämna korrekta kontouppgifter. Avtalsparten anges nedan.</p>
      <ControllerIdentity />
    </section>

    <section>
      <h2>Tjänstens omfattning</h2>
      <p>
        Brokr är ett socialt bostadsflöde där användare och mäklare kan publicera och
        upptäcka socialt innehåll och bostadsobjekt, kommunicera och spara innehåll.
        Fastighetskontakt och eventuell affär sker utanför Brokr mellan berörda parter.
      </p>
      <p>
        ”Gissa slutpris” och ”Övningsbud” är en gratis, icke-bindande övning utan insats,
        pris eller avtal. Funktionen skapar inget verkligt bud och förmedlar ingen
        bindande viljeförklaring till säljare eller mäklare.
      </p>
    </section>

    <section>
      <h2>Ditt innehåll och ditt ansvar</h2>
      <p>
        Du behåller de rättigheter du har till ditt innehåll men ger Brokr den begränsade
        rätt som behövs för att lagra, moderera, anpassa och visa det i tjänsten. Du får
        endast publicera material du har rätt att använda och får inte publicera olagligt,
        vilseledande, kränkande, diskriminerande, hotfullt eller integritetskänsligt innehåll.
      </p>
      <p>
        Uppgifter om objekt och marknad är informationsmaterial och kan vara ofullständiga
        eller inaktuella. Kontrollera alltid väsentliga uppgifter med ansvarig mäklare eller
        annan professionell rådgivare.
      </p>
    </section>

    <section>
      <h2>Moderering, rapportering och blockering</h2>
      <p>
        Innehåll får granskas före och efter publicering. Vi får avvisa, begränsa eller ta
        bort innehåll och stänga av konton som bryter mot villkoren eller hotar användare
        och tjänsten. I appen kan du rapportera innehåll eller profiler och blockera konton.
      </p>
    </section>

    <section>
      <h2>Tillgänglighet och ansvar</h2>
      <p>
        Vi arbetar för en säker och stabil tjänst men garanterar inte oavbruten tillgång.
        Ingenting i villkoren begränsar rättigheter som följer av tvingande konsumenträtt.
        I övrigt ansvarar Brokr endast i den utsträckning som följer av tillämplig lag.
      </p>
    </section>

    <section>
      <h2>Avsluta kontot, ändringar och lag</h2>
      <p>
        Du kan när som helst begära permanent kontoradering i appen. Vi kan uppdatera
        villkoren och kräver då ett nytt, versionsbundet godkännande när ändringen är
        väsentlig. Svensk lag gäller, med de rättigheter du alltid har som konsument.
      </p>
      <p>Frågor skickas till <a href="mailto:support@brokrapp.se">support@brokrapp.se</a>.</p>
    </section>
  </LegalLayout>
);

export default Terms;
