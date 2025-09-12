import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import GuestsList from "./pages/GuestsList";
import AddGuest from "./pages/AddGuest";
import GuestDetail from "./pages/GuestDetail";

function App() {
  return (
    <Router>
      <div className="p-6">
        <nav className="mb-6 flex gap-4">
          <Link to="/" className="text-blue-600">Guests</Link>
          <Link to="/add" className="text-blue-600">Add Guest</Link>
        </nav>
        <Routes>
          <Route path="/" element={<GuestsList />} />
          <Route path="/add" element={<AddGuest />} />
          <Route path="/guest/:id" element={<GuestDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
