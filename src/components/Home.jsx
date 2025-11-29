import React, { useEffect, useState } from "react";
import SideNav from "./partials/SideNav";
import Topnav from "./partials/Topnav";
import axios from "../utils/axios";
import Header from "./partials/Header";
import HorizontalCards from "./partials/HorizontalCards";
import Dropdown from "./partials/Dropdown";

const Home = () => {
  document.title = "Home - movieWeb";
  const [wallpaper, setwallpaper] = useState(null);
  const [trending, settrending] = useState(null);
  const [category, setcategory] = useState("all");

  const GetHeaderWallpaper = async () => {
    try {
      const { data } = await axios.get(`/trending/all/day`);
      let randomdata =
        data.results[(Math.random() * data.results.length).toFixed()];

      setwallpaper(randomdata);
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  const GetTrending = async () => {
    try {
      const { data } = await axios.get(`/trending/${category}/day`);
      settrending(data.results);
    } catch (error) {
      console.log("Error: ", error);
    }
  };
  // console.log(wallpaper);
  useEffect(() => {
    !wallpaper && GetHeaderWallpaper();
     GetTrending();
  }, [category]);
  // console.log(trending);
  // console.log(category);

  return wallpaper && trending ? (
    <>
      <SideNav />
      <div className="w-[80%] h-full overflow-auto overflow-x-hidden ">
        <Topnav />
        <Header data={wallpaper} />

        <div className="p-5 flex justify-between">
          <h1 className="text-2xl text-zinc-400 font-semibold mb-2">
            Trending
          </h1>

          <Dropdown
            title="Filter"
            options={["tv", "movie", "all"]}
            func={(e) => setcategory(e.target.value)}
          />
        </div>

        <HorizontalCards data={trending} />
      </div>
    </>
  ) : (
    <h1>Loading.....</h1>
  );
};

export default Home;
