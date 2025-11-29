import axios from "../../utils/axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import noimage from "/noimage.jpeg";

const Topnav = () => {
  const [query, setquery] = useState("");
  const [searches, setsearches] = useState([]);

  const GetSerches = async () => {
    try {
      const { data } = await axios.get(`/search/multi?query=${query}`);
      // console.log(data.results);
      setsearches(data.results);
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  useEffect(() => {
    GetSerches();
  }, [query]);

  //  console.log(query);

  return (
    <div className="w-full h-[10vh] realtive flex justify-center items-center ">
      <i className="text-3xl text-zinc-400 ri-search-line"></i>
      <input
        onChange={(e) => setquery(e.target.value)}
        value={query}
        className="w-[50%] mx-10 bg-transparent p-5 outline-none border-none text-zinc-200 "
        type="text"
        placeholder="Search Anything"
      />
      {query.length > 0 && (
        <i
          onClick={() => setquery("")}
          className="text-3xl text-zinc-400 ri-close-fill"
        ></i>
      )}

           <div className={`w-[50%] h-[50vh] bg-zinc-500 absolute top-[10%] overflow-auto ${query.length > 0 ? '' : 'hidden'}`}>
        {searches.map((s, i) => (
          <Link
            key={i}
            className=" w-full  p-10 flex  items-center border-b-2 border-zinc-100 text-zinc-700 font-semibold hover:text-zinc-950 hover:bg-zinc-300 duration-300"
          >
             <img
              className="w-[15vw] h-[20vh] bg-center bg-cover  rounded mr-10 shadow-xl"
              src={
                s.backdrop_path || s.profile_path
                  ? `
                    https://image.tmdb.org/t/p/original/${
                      s.backdrop_path || s.profile_path}`
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

