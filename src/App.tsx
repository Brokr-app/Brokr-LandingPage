import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Waitlist from "./pages/Waitlist";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/waitlist" element={<Waitlist />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default App;
