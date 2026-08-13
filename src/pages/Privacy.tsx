import LegalLayout, { ControllerIdentity } from "@/components/LegalLayout";

const Privacy = () => (
  <LegalLayout
    title="Integritetspolicy"
    lead="Här beskriver vi vilka personuppgifter Brokr behandlar, varför de behövs och vilka val du har."
  >

    <section>
      <h2>Uppgifter vi behandlar</h2>
      <p>
        Vi behandlar uppgifter för att tillhandahålla kontot och tjänstens funktioner,
        visa relevant innehåll, upprätthålla säkerhet, moderera innehåll, hantera support
        och uppfylla rättsliga skyldigheter. Grunden är i huvudsak avtal, berättigat
        intresse, samtycke för valfri plats, push och väntelista samt rättslig förpliktelse. Följande uppgifter behandlas:
      </p>
      <ul className="list-disc pl-6 pt-4 pb-4">
        <li>Konto och profil: namn, användarnamn, e-post, födelsedatum, valfritt telefonnummer, roll, profilbild och verifieringsstatus.</li>
        <li>Användargenererat innehåll: profiler, inlägg, bostadsobjekt, kommentarer, glimtar, hemuppgifter, meddelanden, bilder, videor och bildtexter.</li>
        <li>Privata bostads- och ekonomiuppgifter: hem, lån och bankkontakter som du själv registrerar.</li>
        <li>Valfri grov plats när appen används, valda städer, enhetsuppgifter, säkerhetsloggar och frivilligt registrerad push-token.</li>
        <li>Rapporter, blockeringar och modereringsbeslut som behövs för en trygg tjänst.</li>
        <li>Väntelistans e-postadress och tidpunkt för samtycke när du anmäler dig på webbplatsen.</li>
      </ul>
    </section>

    <section>
      <h2>Leverantörer och överföringar</h2>
      <p>Brokr använder följande tredjepartsleverantörer för att driva de beskrivna funktionerna:</p>
      <ul className="list-disc pl-6 pt-4 pb-4">
        <li>AWS för autentisering, API, databaser, loggning, köer, privat lagring och automatiserad mediehantering/moderering.</li>
        <li>Expo för leverans av pushnotiser och bygg-/distributionsstöd.</li>
        <li>Google Maps för kart- och platsfunktioner som användaren aktivt öppnar.</li>
        <li>Formspree för väntelistans formulär.</li>
      </ul>
      <p>
        Uppgifter kan behandlas där respektive leverantör bedriver verksamhet. Vi använder oss av tillämpliga personuppgiftsbiträdesavtal och lagliga överföringsmekanismer.
      </p>
    </section>

    <section>
      <h2>Meddelanden, spårning och annonser</h2>
      <p>
        Direktmeddelanden är inte end-to-end-krypterade. Behöriga system och ett begränsat
        antal behöriga personer kan därför behandla dem för leverans, säkerhet, rapporter
        och lagkrav. Brokr använder inte tredjepartsspårning och säljer inte personuppgifter.
      </p>
    </section>

    <section>
      <h2>Lagring, dokument och radering</h2>
      <p>
        Vi behåller uppgifter så länge kontot eller ändamålet kräver det och därefter
        endast under dokumenterad säkerhets-, tvist- eller lagstadgad tid. Identitetshandlingar
        lagras privat, visas för behörig granskare med kortlivad åtkomst och ska raderas
        direkt när verifieringen avgjorts. Du kan radera kontot i appen under Integritet och säkerhet. Kontot inaktiveras
        omedelbart.
      </p>
      <p>
         Du kan också begära tillgång eller radering av dina uppgifter genom att kontakta oss på <a href="mailto:support@brokrapp.se">support@brokrapp.se</a>.
      </p>
    </section>
  </LegalLayout>
);

export default Privacy;
