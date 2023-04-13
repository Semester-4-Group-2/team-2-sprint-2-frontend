import React from "react";
import { Link } from "react-router-dom";

export default function AddVideoGame() {
  const [name, setName] = React.useState("");
  const [developers, setDevelopers] = React.useState("");
  const [platforms, setPlatforms] = React.useState("");
  const [genre, setGenre] = React.useState("");

  const handleClick = (e) => {
    e.preventDefault();
    if (!name || !developers || !platforms || !genre) {
      alert("Please fill out all fields.");
      return;
    }
    const videoGame = { name, developers, platforms, genre };
    fetch("http://localhost:8080/videogames/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(videoGame),
    })
      .then(() => {
        // Redirect the user to the "/videogames/added" page
        window.location.href = "/videogames/added";
      })
      .catch((error) => {
        console.error("Error adding video game: ", error);
      });
  };

  return (
    <div>
      <h3>Add a Video Game</h3>
      <form onSubmit={handleClick}>
        <label>
          Name
          <input value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <br />
        <label>
          Developer(s)
          <input
            value={developers}
            onChange={(e) => setDevelopers(e.target.value)}
          />
        </label>
        <br />
        <label>
          Platform(s)
          <input
            value={platforms}
            onChange={(e) => setPlatforms(e.target.value)}
          />
        </label>
        <br />
        <label>
          Genre
          <input value={genre} onChange={(e) => setGenre(e.target.value)} />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
      <br />
    </div>
  );
}
