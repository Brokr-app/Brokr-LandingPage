import LegalLayout from "@/components/LegalLayout";

const Cookies = () => (
  <LegalLayout
    title="Cookies och lokal lagring"
    lead="Här beskriver vi vilken information Brokr sparar i webbläsaren och vilka val du har."
    updated="20 oktober 2026"
  >
    <section>
      <h2>Cookies och webbläsarlagring</h2>
      <p>
        Brokr lägger inte till reklam- eller spårningscookies i webbappen. Webbappen sparar vissa
        uppgifter i webbläsarens lokala lagring för att hantera inloggning och appens funktioner.
        Den lokala lagringen finns på din enhet och används inte för att följa dig på andra
        webbplatser.
      </p>
    </section>

    <section>
      <h2>Nödvändig lagring</h2>
      <p>Den här lagringen behövs för att webbappen ska fungera och används utan ett separat val:</p>
      <ul className="list-disc pl-6 pt-4 pb-4">
        <li>Inloggningssession och pågående inloggningsflöde.</li>
        <li>Ditt godkännande av villkor när du skapar ett konto.</li>
        <li>Ditt val om lokal lagring och en versionsuppgift för appkonfigurationen.</li>
      </ul>
      <p>
        Valet om pushnotiser sparas bara i mobilappen och används inte av webbversionen.
      </p>
    </section>

    <section>
      <h2>Funktionell lagring</h2>
      <p>
        Med ditt godkännande sparar webbappen funktionella uppgifter så att vissa val och resultat
        finns kvar när du kommer tillbaka:
      </p>
      <ul className="list-disc pl-6 pt-4 pb-4">
        <li>Bästa resultat i minispel. Servern är källan till resultaten; den lokala kopian används för att visa dem snabbare.</li>
        <li>Ditt val av värdeskala på priskartan.</li>
      </ul>
      <p>
        Om du väljer endast nödvändig lagring sparas inte dessa uppgifter i webbläsaren. Då används
        standardvärdet för priskartan och minispelsresultat hämtas från servern. Om du senare tar
        tillbaka ditt godkännande raderar vi den funktionella lagring som webbappen känner till.
      </p>
    </section>

    <section>
      <h2>Google Maps</h2>
      <p>
        Googles karttjänst laddas när du öppnar en karta. Google tar då emot din IP-adress,
        information om webbläsaren och det område du visar. Googles tjänst kan använda
        egna cookies och annan lagring enligt{" "}
        <a href="https://policies.google.com/technologies/cookies" target="_blank" rel="noopener noreferrer">Googles information om cookies</a>
        {" "}och{" "}
        <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">integritetspolicy</a>.
        Du kan hantera cookies från tredje part i webbläsarens inställningar.
      </p>
    </section>

    <section>
      <h2>Ändra eller radera ditt val</h2>
      <p>
        Du kan öppna valet igen under Integritet och säkerhet → Cookies och lagring i appen. Du kan
        också radera webbplatsdata i webbläsarens inställningar. Det kan logga ut dig och återställa
        lokalt sparade val.
      </p>
      <p>
        Frågor om lokal lagring? Kontakta oss på{" "}
        <a href="mailto:support@brokrapp.se">support@brokrapp.se</a>.
      </p>
    </section>
  </LegalLayout>
);

export default Cookies;
