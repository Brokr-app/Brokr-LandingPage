import { Link } from "react-router-dom";
import LegalLayout, { ControllerIdentity } from "@/components/LegalLayout";
import { COOKIES_POLICY_UPDATED } from "@/lib/policyVersion";

type StorageItem = {
  name: string;
  keys: string;
  purpose: string;
  category: "Nödvändig" | "Funktionell";
  lifetime: string;
};

// Keep in sync with the storage registry in Brokr-App (app/_config/storageRegistry.ts).
const storageItems: StorageItem[] = [
  {
    name: "Inloggningssession",
    keys: "CognitoIdentityServiceProvider.*",
    purpose: "Håller dig inloggad och förnyar sessionen på ett säkert sätt.",
    category: "Nödvändig",
    lifetime: "Tills du loggar ut eller sessionen löper ut (högst ett dygn på webben).",
  },
  {
    name: "Inloggningsflöde",
    keys: "@brokr/auth/redirectAttemptInFlight",
    purpose: "Håller reda på en pågående inloggning så att den kan slutföras.",
    category: "Nödvändig",
    lifetime: "Tas bort när inloggningen är klar.",
  },
  {
    name: "Godkännande av villkor under registrering",
    keys: "@brokr/onboarding/<användarnamn>",
    purpose: "Sparar att du godkänt villkor och integritetspolicy tills kontot är färdigregistrerat.",
    category: "Nödvändig",
    lifetime: "Tills registreringen är slutförd.",
  },
  {
    name: "Appkonfiguration",
    keys: "@brokr/app-config-revision",
    purpose: "Avgör om appens inställningar har ändrats och behöver laddas om.",
    category: "Nödvändig",
    lifetime: "Tills den ersätts av en ny version.",
  },
  {
    name: "Ditt lagringsval",
    keys: "@brokr/storage-consent",
    purpose: "Sparar vilka kategorier av lagring du har godkänt.",
    category: "Nödvändig",
    lifetime: "Tills du ändrar ditt val eller policyn uppdateras.",
  },
  {
    name: "Bästa resultat i minispel",
    keys: "@brokr/minigames/<användare>/<spel>/best",
    purpose: "Visar ditt bästa resultat i minispelen utan att hämta det på nytt.",
    category: "Funktionell",
    lifetime: "Tills du återkallar samtycket eller rensar webbläsardata.",
  },
];

const Cookies = () => (
  <LegalLayout
    title="Cookies och lokal lagring"
    lead="Här beskriver vi vad Brokrs webbapp sparar i din webbläsare, varför och hur du ändrar dina val."
    updated={COOKIES_POLICY_UPDATED}
  >
    <section>
      <h2>Ingen användning av cookies</h2>
      <p>
        Brokrs webbapp på <a href="https://www.brokrapp.se">www.brokrapp.se</a> sätter inga
        cookies. I stället sparas ett fåtal uppgifter i webbläsarens lokala lagring
        (localStorage). Lagen behandlar lokal lagring på samma sätt som cookies, så vi
        redovisar den här. Brokr använder inga cookies eller spårare från tredje part och
        ingen analys- eller annonsspårning. Den här webbplatsen (docs.brokrapp.se) sparar
        ingenting i din webbläsare.
      </p>
    </section>

    <section>
      <h2>Vad som sparas</h2>
      <div className="storage-table-wrap">
        <table className="storage-table">
          <thead>
            <tr>
              <th scope="col">Uppgift</th>
              <th scope="col">Ändamål</th>
              <th scope="col">Kategori</th>
              <th scope="col">Lagringstid</th>
            </tr>
          </thead>
          <tbody>
            {storageItems.map((item) => (
              <tr key={item.keys}>
                <td>
                  {item.name}
                  <br />
                  <code>{item.keys}</code>
                </td>
                <td>{item.purpose}</td>
                <td>{item.category}</td>
                <td>{item.lifetime}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>

    <section>
      <h2>Nödvändig och funktionell lagring</h2>
      <p>
        Nödvändig lagring behövs för att tillhandahålla tjänsten du uttryckligen har begärt,
        till exempel för att hålla dig inloggad. Enligt 9 kap. 28 § lagen (2022:482) om
        elektronisk kommunikation krävs inget samtycke för sådan lagring.
      </p>
      <p>
        Funktionell lagring gör tjänsten bekvämare men är inte nödvändig. Den används bara om
        du har samtyckt till den. Om du inte samtycker hålls sådana uppgifter bara i minnet
        medan sidan är öppen och sparas inte i webbläsaren.
      </p>
    </section>

    <section>
      <h2>Ändra eller återkalla ditt val</h2>
      <p>
        Första gången du besöker webbappen får du välja mellan att godkänna all lagring eller
        endast nödvändig lagring. Du kan när som helst ändra ditt val under Profil →
        Inställningar → Integritet och säkerhet → Cookies och lagring i webbappen. När du återkallar samtycket raderas
        uppgifterna i den kategorin. Du kan också rensa webbplatsdata i webbläsarens
        inställningar, men då loggas du ut.
      </p>
    </section>

    <section>
      <h2>Personuppgiftsansvarig</h2>
      <ControllerIdentity />
      <p>
        Läs mer om hur vi behandlar personuppgifter i vår{" "}
        <Link to="/integritet">integritetspolicy</Link>. Frågor besvaras på{" "}
        <a href="mailto:support@brokrapp.se">support@brokrapp.se</a>.
      </p>
    </section>
  </LegalLayout>
);

export default Cookies;
