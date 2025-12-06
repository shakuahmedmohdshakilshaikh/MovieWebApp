
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Trending from "./components/Trending";
import Popular from "./components/Popular";
import TvShows from "./components/TvShows";
import Movie from "./components/Movie";
import MovieDetails from "./components/MovieDetails";
import TvDetails from "./components/TvDetails";
import People from "./components/People";
import PersonDetails from "./components/PersonDetails";



function App() {
  return (
    <>
      <div className="bg-[#1F1E24] w-screen h-screen flex">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/trending" element={<Trending />} />
          <Route path="/popular" element={<Popular />} />
          
          <Route path="/movie" element={<Movie />} />
          <Route path="/movie/details/:id" element={<MovieDetails />} />

            
          <Route path="/tv" element={<TvShows />} />
          <Route path="/tv/details/:id" element={<TvDetails />} />

          <Route path="/people" element={<People />} />
        <Route path="/people/details/:id" element={<PersonDetails />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
