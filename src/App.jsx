import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Schedule from "./Components/Schedule";
import Guests from "./Components/Guests";
import Venue from "./Components/Venue";
import Sponsors from "./Components/Sponsors";
import Contact from "./Components/Contact";

function App() {
  return (
    <div>
      <Navbar />
      <main id="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/guests" element={<Guests />} />
          <Route path="/venue" element={<Venue />} />
          <Route path="/sponsors" element={<Sponsors />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
