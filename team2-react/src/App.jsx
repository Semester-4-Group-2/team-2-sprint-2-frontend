import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      <header>
        <h1>Final Sprint, Team 2</h1>
        <nav>
          <Link to="/" className="links">
            Home
          </Link>
          <Link to="/videogames" className="links">
            Video Games
          </Link>
          <Link to="/binarysearch" className="links">
            Binary Search Tree
          </Link>
        </nav>
      </header>
    </Router>
  );
}

export default App;
