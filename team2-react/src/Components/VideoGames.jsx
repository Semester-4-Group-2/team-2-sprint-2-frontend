import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

export default function VideoGames() {
  return (
    <main>
      Select which function.
      <nav>
        <Link to="/videogames/getAll" className="links">
          Get Full List
        </Link>
      </nav>
    </main>
  );
}
