import React from "react";
import { Link } from "react-router-dom";

const Cards = ({ data, title }) => {
  return (
    <div className="flex flex-wrap w-full h-full p-[3%] bg-[#1F1E24] 
    ">
      {data.map((c, i) => (
        <Link className="realtive w-[35vh]  mr-[5%] mb-[5%] " key={i}>
          <img
            className="shadow-[8px_17px_38px_2px_rgba(0,0,0,0.5)] w-[50vh] object-cover"
            src={`https://image.tmdb.org/t/p/original/${
              c.poster_path || c.backdrop_path || c.profile_path
            }`}
            alt=""
          />
          <h1 className="text-2xl text-zinc-200 mt-3 font-semibold">
            {c.original_title || c.name || c.title || c.original_name}
          </h1>
            {c.vote_average && (
                 <div className="text-white w-[7vh] h-[7vh] flex justify-center items-center bg-yellow-700 rounded-full text-xl font-semibold relative right-[-91%]   bottom-[50%]">
             {(c.vote_average * 10).toFixed()} <sup>%</sup>
          </div>
            )}
         
        </Link>
      ))}
    </div>
  );
};

export default Cards;
