import axios from "../utils/axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import noimage from "/noimage.jpeg";

const Topnav = ({ containerClass = "w-[50%]", dropdownClass = "w-[50%]" }) => {
  const [query, setquery] = useState("");
  const [searches, setsearches] = useState([]);

  const GetSerches = async () => {
    try {
      const { data } = await axios.get(`/search/multi?query=${query}`);
      setsearches(data.results);
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  useEffect(() => {
    GetSerches();
  }, [query]);

  return (
    <div className="relative">
      <div className="flex justify-center items-center">
        <i className="text-3xl text-zinc-400 ri-search-line"></i>
        <input
          onChange={(e) => setquery(e.target.value)}
          value={query}
          className={`${containerClass} mx-10 bg-transparent p-5 outline-none border-none text-zinc-200`}
          type="text"
          placeholder="Search Anything"
        />
        {query.length > 0 && (
          <i
            onClick={() => setquery("")}
            className="text-3xl text-zinc-400 ri-close-fill cursor-pointer"
          ></i>
        )}
      </div>

      <div className={`${dropdownClass} max-h-[50vh] bg-zinc-900 absolute top-full left-1/2 transform -translate-x-1/2 overflow-auto rounded mt-2 ${query.length > 0 ? '' : 'hidden'}`}>
        {searches.map((s, i) => (
          <Link
            key={i}
            className="w-full p-3 flex items-center border-b-2 border-zinc-700 text-zinc-200 font-semibold hover:text-white hover:bg-zinc-800 duration-300"
          >
            <img
              className="w-12 h-16 bg-center bg-cover rounded mr-10 shadow-xl object-cover"
              src={
                s.backdrop_path || s.profile_path
                  ? `https://image.tmdb.org/t/p/original/${s.backdrop_path || s.profile_path}`
                  : noimage
              }
              alt=""
            />
            <p>{s.original_title || s.name || s.title || s.original_name}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Topnav;