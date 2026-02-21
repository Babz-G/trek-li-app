import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Schedule from "./Components/Schedule";
import Guests from "./Components/Guests";
import Venue from "./Components/Venue";
import Sponsors from "./Components/Sponsors";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/guests" element={<Guests />} />
        <Route path="/venue" element={<Venue />} />
        <Route path="/sponsors" element={<Sponsors />} />
      </Routes>
    </div>
  );
}

export default App;
