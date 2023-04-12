import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export default function VideoGames() {
    const handleSubmit = (e) => e.preventDefault()
  return (
    <header>
      <form className="search" onSubmit={handleSubmit}>
        <input className="search__input" type="text" id="search" />
        <button className="search__button" type="submit">
        Submit
          {/* <FontAwesomeIcon icon={faMagnifyingGlass} /> */}
        </button>
      </form>
    </header>
  );
}
