import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GuestsList from "./pages/GuestsList";
import AddGuest from "./pages/AddGuest";
import GuestDetail from "./pages/GuestDetail";  
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/guests" element={<GuestsList />} />
        <Route path="/guests/new" element={<AddGuest />} />
        <Route path="/guests/:id" element={<GuestDetail />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
