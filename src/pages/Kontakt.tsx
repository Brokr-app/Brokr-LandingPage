import LegalLayout from "@/components/LegalLayout";

const Kontakt = () => (
  <LegalLayout
    title="Support"
    lead="Vi hjälper dig med konto, säkerhet, integritet, innehåll och tekniska problem."
  >
    <section>
      <h2>Kontakta oss</h2>
      <p>
        <a className="support-button" href="mailto:support@brokrapp.se">Skicka e-post till support@brokrapp.se</a>
      </p>
      <p>
        Beskriv problemet och vilken del av appen det gäller. Skicka aldrig lösenord,
        åtkomsttoken, fullständiga identitetshandlingar eller andra hemligheter via e-post.
      </p>
    </section>
    <section>
      <h2>Rapportera skadligt innehåll</h2>
      <p>
        Använd i första hand Rapportera i appen så att rätt profil, inlägg, objekt,
        kommentar, glimt eller meddelande följer med.
      </p>
    </section>
    <section>
      <h2>Radera konto</h2>
      <p>
        Öppna Profil → Inställningar → Integritet och säkerhet → Radera konto permanent.
        Kontot inaktiveras direkt och raderingen fortsätter även om du stänger appen.
      </p>
    </section>
  </LegalLayout>
);

export default Kontakt;
