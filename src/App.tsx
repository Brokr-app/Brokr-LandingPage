import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Waitlist from "./pages/Waitlist";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Kontakt from "./pages/Kontakt";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/waitlist" element={<Waitlist />} />
      <Route path="/integritet" element={<Privacy />} />
      <Route path="/villkor" element={<Terms />} />
      <Route path="/support" element={<Kontakt />} />
      <Route path="/Kontakt" element={<Kontakt />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default App;
