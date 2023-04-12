import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import FindByDev from "./Components/FindBy/FindByDev";
import FindByGenre from "./Components/FindBy/FindByGenre";
import FindByID from "./Components/FindBy/FindByID";
import FindByName from "./Components/FindBy/FindByName";
import FindByPlatform from "./Components/FindBy/FindByPlatform";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import VideoGames from "./Components/VideoGames";

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
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/videogames" element={<VideoGames />} />
        {/* confirm search specific */}
        <Route path="/videogames/getById/{id}" element={<FindByID />} />
        <Route path="/videogames/getByName/{name}" element={<FindByName />} />
        <Route
          path="/videogames/getByGenre/{genre}"
          element={<FindByGenre />}
        />
        <Route
          path="/videogames/getByDevelopers/{developers}"
          element={<FindByDev />}
        />
        <Route
          path="/videogames/getByPlatform?platform={platform}"
          element={<FindByPlatform />}
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
