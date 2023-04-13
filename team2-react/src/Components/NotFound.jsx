import React from 'react';

const NotFound = () => {
  const jokes = [
    "Why did the web page go to the gym? To get more hits!",
    "What do you call a web page that doesn't exist? A 404 error!",
    "Why was the web page always late? It took too long to load!",
    "Why did the web page go on a diet? It had too many cookies!",
  ];

  const getRandomJoke = () => {
    return jokes[Math.floor(Math.random() * jokes.length)];
  };

  return (
    <div className="not-found-container">
      <h1 className="not-found-title">404 - Page Not Found</h1>
      <img
        className="not-found-image"
        src="https://media.giphy.com/media/YQitE4YNQNahy/giphy.gif"
        alt="Confused Travolta"
      />
      <p className="not-found-text">
        Uh oh! It seems like this page doesn't exist. But hey, here's a joke to cheer you up:
      </p>
      <p className="not-found-joke">{getRandomJoke()}</p>
      <a href="/" className="not-found-home">Back to Home</a>
    </div>
  );
};

export default NotFound;