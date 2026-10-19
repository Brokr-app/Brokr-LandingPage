import { useEffect } from "react";

// The waitlist closed when the app launched; send old links to the app itself.
const APP_URL = "https://www.brokrapp.se";

const Waitlist = () => {
  useEffect(() => {
    window.location.replace(APP_URL);
  }, []);

  return (
    <main className="waitlist-redirect">
      <p>
        Brokr är lanserat. Du skickas vidare till <a href={APP_URL}>www.brokrapp.se</a>…
      </p>
    </main>
  );
};

export default Waitlist;
