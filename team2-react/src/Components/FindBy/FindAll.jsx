import React from "react";

export default function FindAll() {
  const [videoGames, setVideoGames] = React.useState([]);
  React.useEffect(() => {
    fetch("http://localhost:8080/videogames/getAll")
      .then((res) => res.json())
      .then((result) => {
        setVideoGames(result);
      });
  }, []);
  return (
    <div>
      <h2>List of All Video Games</h2>
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
        </div>
      ))}
    </div>
  );
}
