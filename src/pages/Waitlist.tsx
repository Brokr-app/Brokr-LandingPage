import { useEffect } from "react";

const Waitlist = () => {
  useEffect(() => {
    window.location.replace("/#access");
  }, []);

  return (
    <main className="waitlist-redirect">
      <p>Redirecting to the waitlist…</p>
    </main>
  );
};

export default Waitlist;
