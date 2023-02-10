import "./App.css";
import HomePage from "./pages/HomePage";
import MoviesPage from "./pages/MoviesPage";
import MovieDetailsPage from "./pages/MovieDetailsPage";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import axios from "axios";
function App() {
  return (
    <div className="box__app">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movie" element={<MoviesPage />} />
        <Route path="/movie/:id/*" element={<MovieDetailsPage />} />
      </Routes>
    </div>
  );
}

export default App;
