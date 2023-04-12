import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AddVideoGame from "./AddVideoGame files/AddVideoGame";
import FindByID from "./FindBy/FindByID";

export default function VideoGames() {
  return (
    <main>
      <h1>Select which function.</h1>
      <nav>
        <Link to="/videogames/getAll" className="links">
          Get Full List
        </Link>
      </nav>
      <AddVideoGame />
      <FindByID />
    </main>
  );
}
