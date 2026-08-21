import LegalLayout, { ControllerIdentity } from "@/components/LegalLayout";

const Privacy = () => (
  <LegalLayout
    title="Integritetspolicy"
    lead="Här beskriver vi vilka personuppgifter Brokr behandlar, varför de behövs och vilka val du har."
    updated="21 augusti 2026"
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
      <h2>Rekommendationer och profilering</h2>
      <p>
        För att kunna visa ett relevant flöde analyserar vi hur du använder tjänsten —
        vilka bostäder du tittar på, sparar, gillar eller väljer bort, samt de områden och
        bostadstyper du valt. Utifrån detta skapas en avledd profil som styr vilka objekt
        och inlägg som rankas högst för dig. Grunden är berättigat intresse av att
        tillhandahålla en fungerande tjänst, samt samtycke för valfri plats.
      </p>
      <p>
        Profileringen påverkar endast vilket innehåll du ser. Den används inte för
        automatiserat beslutsfattande med rättsliga följder eller liknande betydande
        inverkan för dig, och inte för annonsering. Du kan när som helst ändra dina
        områdes- och platsval under Integritet och säkerhet i appen, och du har rätt att
        invända mot behandlingen enligt nedan. Profilen raderas när kontot raderas.
      </p>
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
    </section>

    <section>
      <h2>Dina rättigheter</h2>
      <p>Enligt dataskyddsförordningen har du rätt att:</p>
      <ul className="list-disc pl-6 pt-4 pb-4">
        <li>Få tillgång till de personuppgifter vi behandlar om dig, och en kopia av dem.</li>
        <li>Få felaktiga uppgifter rättade och ofullständiga uppgifter kompletterade.</li>
        <li>Få uppgifter raderade, exempelvis när de inte längre behövs för ändamålet.</li>
        <li>Begära att behandlingen begränsas, till exempel medan en invändning eller en rättelse utreds, om behandlingen är olaglig men du hellre vill begränsa den än få uppgifterna raderade, eller om vi inte längre behöver uppgifterna men du behöver dem för att kunna fastställa, göra gällande eller försvara ett rättsligt anspråk.</li>
        <li>Invända mot behandling som sker med stöd av berättigat intresse, inklusive den profilering som beskrivs ovan.</li>
        <li>Få ut de uppgifter du själv lämnat i ett maskinläsbart format och överföra dem till en annan leverantör (dataportabilitet). Rätten gäller uppgifter som behandlas automatiserat med stöd av samtycke eller avtal — den omfattar alltså inte behandling som vilar på berättigat intresse eller rättslig förpliktelse.</li>
        <li>När som helst återkalla ett samtycke du lämnat, exempelvis för plats, push eller väntelista. Återkallelsen påverkar inte behandling som redan skett.</li>
      </ul>
      <p>
        Kontakta oss på <a href="mailto:support@brokrapp.se">support@brokrapp.se</a> för att
        utöva någon av rättigheterna. Du kan radera kontot direkt i appen under Integritet
        och säkerhet.
      </p>
      <p>
        Om du anser att vi behandlar dina personuppgifter felaktigt har du rätt att lämna
        in ett klagomål till tillsynsmyndigheten{" "}
        <a href="https://www.imy.se" target="_blank" rel="noopener noreferrer">
          Integritetsskyddsmyndigheten (IMY)
        </a>
        .
      </p>
    </section>
  </LegalLayout>
);

export default Privacy;
