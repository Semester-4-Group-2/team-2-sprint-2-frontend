import React from "react";

export default function FindByName() {
  const [name, setName] = React.useState("");
  const [videoGames, setVideoGames] = React.useState([]);

  const handleClickCheck = () => {
    fetch(`http://localhost:8080/videogames/getByName/${name}`)
      .then((res) => res.json())
      .then((result) => {
        setVideoGames(result);
      });
  };

  return (
    <div>
      <h2>Find Video Games by Name</h2>
      <input
        type="text"
        name="name-input"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={handleClickCheck}>Search</button>
      {videoGames.map((videoGame) => (
        <div>
          Name: {videoGame.name}
          <br />
          Developer(s): {videoGame.developers}
          <br />
          Platform(s): {videoGame.platforms}
          <br />
          Genre: {videoGame.genre}
          <br />
          <br />
        </div>
      ))}
    </div>
  );
}
