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
      <p>
        För att visa relevant innehåll analyserar vi hur du interagerar med tjänsten
        (t.ex. vilka bostadsobjekt du visar, sparar eller markerar intresse för) och tar
        fram en individuellt anpassad rekommendationsprofil av bostadsobjekt. Denna
        profilering sker med berättigat intresse som grund och påverkar endast i vilken
        ordning innehåll visas för dig i appen.
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

    <section>
      <h2>Dina rättigheter</h2>
      <p>
        Enligt dataskyddsförordningen (GDPR) har du rätt att:
      </p>
      <ul className="list-disc pl-6 pt-4 pb-4">
        <li>få tillgång till de personuppgifter vi behandlar om dig,</li>
        <li>få felaktiga uppgifter rättade,</li>
        <li>få dina uppgifter raderade, inom ramen för vad lag och dokumenterad
          säkerhets- eller tvisteskyldighet tillåter,</li>
        <li>begära att behandlingen begränsas i vissa situationer,</li>
        <li>invända mot behandling som stödjer sig på berättigat intresse,
          inklusive den profilering som beskrivs ovan,</li>
        <li>få ut de uppgifter du själv lämnat till oss i ett strukturerat,
          allmänt använt och maskinläsbart format (dataportabilitet), och</li>
        <li>när behandlingen bygger på samtycke, när som helst återkalla det
          samtycket.</li>
      </ul>
      <p>
        Kontakta <a href="mailto:support@brokrapp.se">support@brokrapp.se</a> för
        att utöva någon av dessa rättigheter. Du har också rätt att lämna in ett
        klagomål till Integritetsskyddsmyndigheten (IMY), <a href="https://www.imy.se" target="_blank" rel="noreferrer">imy.se</a>, om
        du anser att vi behandlar dina personuppgifter i strid med gällande rätt.
      </p>
    </section>
  </LegalLayout>
);

export default Privacy;
