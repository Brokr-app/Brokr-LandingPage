import LegalLayout, { ControllerIdentity } from "@/components/LegalLayout";
import { TERMS_UPDATED } from "@/lib/policyVersion";

const Terms = () => (
  <LegalLayout
    title="Användarvillkor"
    lead="Villkoren gäller när du skapar ett konto eller använder Brokrs app och webbplats."
    updated={TERMS_UPDATED}
  >
    <section>
      <h2>Avtalspart och åldersgräns</h2>
      <p>Du måste ha fyllt 13 år och lämna korrekta kontouppgifter. Avtalsparten anges nedan.</p>
      <ControllerIdentity />
    </section>

    <section>
      <h2>Tjänstens omfattning</h2>
      <p>
        Brokr är ett socialt bostadsflöde där alla användare, både privatpersoner och
        mäklare, kan publicera och upptäcka inlägg och bostadsobjekt, tagga produkter som
        säljs, kommunicera och spara innehåll. Mäklare som verifierats av Brokr visas med
        en verifieringsmärkning. Fastighetskontakt och eventuell affär sker utanför Brokr
        mellan berörda parter.
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
        Det är också förbjudet att:
      </p>
      <ul className="list-disc pl-6 pt-4 pb-4">
        <li>bedra eller försöka bedra andra användare, till exempel genom bluffannonser, falska betalningslänkar eller förskottsbedrägerier,</li>
        <li>erbjuda varor eller bostäder som inte finns, som du inte har rätt att sälja, eller som är förfalskade, stulna eller olagliga,</li>
        <li>utge dig för att vara någon annan person, mäklare, butik eller organisation,</li>
        <li>skicka spam eller oönskade massutskick, eller trakassera andra i kommentarer eller direktmeddelanden.</li>
      </ul>
      <p>
        Uppgifter om objekt och marknad är informationsmaterial och kan vara ofullständiga
        eller inaktuella. Kontrollera alltid väsentliga uppgifter med ansvarig mäklare eller
        annan professionell rådgivare.
      </p>
    </section>

    <section>
      <h2>Köp och försäljning mellan användare</h2>
      <p>
        Användare kan tagga produkter i sina inlägg och hänvisa köpare antingen till en
        extern webbplats eller till ett direktmeddelande. Brokr är en mötesplats och är
        inte part i köp eller försäljning mellan användare. Brokr hanterar inga betalningar,
        förmedlar inga leveranser och lämnar inga garantier för varor, säljare eller externa
        webbplatser. Avtalet om ett köp ingås direkt mellan köpare och säljare.
      </p>
      <p>
        Som köpare ansvarar du själv för att kontrollera att en vara är äkta och i det skick
        som uppges, att säljaren är pålitlig och att betalnings- och leveranssättet är säkert
        innan du betalar. Betala aldrig via länkar eller kontouppgifter som du inte kan
        kontrollera. Länkar till externa webbplatser leder till tredje part och där gäller den
        webbplatsens egna villkor och integritetspolicy.
      </p>
      <p>
        Som säljare ansvarar du för att uppgifter om vara, pris och skick är korrekta och
        aktuella, att du har rätt att sälja varan, att försäljningen följer gällande lag och
        att du markerar varan som såld när den inte längre är tillgänglig. Säljer du i
        näringsverksamhet ansvarar du för att uppfylla de skyldigheter du har mot konsumenter,
        till exempel information om ångerrätt. Säljare som vilseleder eller bedrar köpare kan
        rapporteras, få innehåll borttaget och stängas av från Brokr.
      </p>
    </section>

    <section>
      <h2>Moderering, rapportering och blockering</h2>
      <p>
        Innehåll får granskas före och efter publicering. Vi får avvisa, begränsa eller ta
        bort innehåll, inklusive produkttaggar, och stänga av konton tillfälligt eller
        permanent när de bryter mot villkoren eller hotar användare och tjänsten. I appen kan
        du rapportera inlägg, produkter, bostadsobjekt, kommentarer, meddelanden och profiler
        samt blockera konton. Misstänker du bedrägeri, rapportera det i appen och kontakta
        polisen om du har förlorat pengar.
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
