import LegalLayout, { ControllerIdentity } from "@/components/LegalLayout";

const Privacy = () => (
  <LegalLayout
    title="Integritetspolicy"
    lead="Här beskriver vi vilka personuppgifter Brokr behandlar, varför de behövs och vilka val du har."
    updated="17 oktober 2026"
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
        <li>Frågor du skickar till vår AI-assistent Bo, Bos svar och vilka bostadsobjekt, inlägg och mäklare som visades i samtalet.</li>
      </ul>
    </section>

    <section>
      <h2>AI-assistenten Bo</h2>
      <p>
        Bo är en AI-assistent som hjälper dig att söka bostäder och svarar på frågor om
        bostadsobjekt i appen. När du skriver till Bo behandlar vi dina meddelanden och
        Bos svar för att kunna tillhandahålla funktionen du har bett om. Grunden är avtal.
      </p>
      <ul className="list-disc pl-6 pt-4 pb-4">
        <li>Samtalen sparas i högst 30 dagar och raderas tidigare om du startar ett nytt samtal eller raderar ditt konto.</li>
        <li>
          Meddelandena behandlas av en språkmodell via Amazon Bedrock (AWS) inom EU. Innehållet
          används inte för att träna modeller och delas inte med modellens leverantör.
        </li>
        <li>
          När du frågar om närliggande platser, t.ex. matbutiker eller skolor, skickas endast
          bostadsobjektets position till Google Places – aldrig dina meddelanden.
        </li>
        <li>
          Bo fattar inga beslut som har rättsliga följder för dig eller på liknande sätt
          påverkar dig i betydande grad (artikel 22 GDPR). Svaren är automatiskt genererade
          och kan innehålla fel – kontrollera viktiga uppgifter med mäklaren.
        </li>
        <li>
          Bo behöver inga känsliga personuppgifter enligt artikel 9 GDPR, t.ex. om hälsa,
          etniskt ursprung, religion eller politiska åsikter, och vi efterfrågar eller använder
          dem inte. Skriv därför inte sådana uppgifter, eller uppgifter om din ekonomi, till Bo.
          Om du ändå gör det behandlas uppgifterna bara för att besvara just det meddelandet,
          används aldrig för något annat ändamål (t.ex. profilering, rekommendationer eller
          marknadsföring) och raderas med samtalet. Du kan radera samtalet direkt genom att
          starta ett nytt.
        </li>
      </ul>
    </section>

    <section>
      <h2>Leverantörer och överföringar</h2>
      <p>Brokr använder följande tredjepartsleverantörer för att driva de beskrivna funktionerna:</p>
      <ul className="list-disc pl-6 pt-4 pb-4">
        <li>AWS för autentisering, API, databaser, loggning, köer, privat lagring och automatiserad mediehantering/moderering samt AI-assistenten Bo (Amazon Bedrock, behandling inom EU).</li>
        <li>Expo för leverans av pushnotiser och bygg-/distributionsstöd.</li>
        <li>Google Maps för kart- och platsfunktioner som användaren aktivt öppnar, samt Google Places för Bos svar om närliggande platser (endast bostadsobjektets position skickas).</li>
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
