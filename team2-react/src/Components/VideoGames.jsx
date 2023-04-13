import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AddVideoGame from "./AddVideoGame files/AddVideoGame";

export default function VideoGames() {
  const handleGoBack = () => {
    window.history.back();
  };
  return (
    <main>
      <button onClick={handleGoBack}>Previous Page</button>
      <h1>Select which function.</h1>
      <nav>
        <Link to="/videogames/getAll">Get Full List</Link>
        <Link to="/videogames/getById/">Search By ID</Link>
        <Link to={"/videogames/getByName/"}>Search By Name</Link>
        <Link to={"/videogames/getByDevelopers/"}>Search By Developer</Link>
        <Link to={"/videogames/getByPlatforms/"}>Search By Platform</Link>
        <Link to={"/videogames/getByGenre/"}>Search By Genre</Link>
      </nav>
      <AddVideoGame />
    </main>
  );
}
