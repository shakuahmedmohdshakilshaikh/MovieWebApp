import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Topnav from "./partials/Topnav";
import Dropdown from "./partials/Dropdown";
import axios from "../utils/axios";
import Cards from "./partials/Cards";
import Loading from "./Loading";
import InfiniteScroll from 'react-infinite-scroll-component';

const Trending = () => {
    
 
  const navigate = useNavigate();
    const [category,setcategory] = useState("all");
    const [duration,setduration] = useState("day");
    const [trending,settrending] = useState([]);
    const [page,setpage] = useState(1);
    const [hasMore,sethasMore] = useState(true);
     document.title = "Trending - movieWeb "+ category.toUpperCase()+"'S";

     const GetTrending = async () => {
    try {
      const { data } = await axios.get(`/trending/${category}/${duration}?page=${page}`);
    //   settrending(data.results);
      if(data.results.length>0){
          settrending((prevState)=>[...prevState,...data.results]);
          setpage(page + 1);

      }else{
        sethasMore(false);
      }
    //   console.log(data);
      
    } catch (error) {
      console.log("Error: ", error);
    }
  };

//   const refershHandler = async () =>{
//     if(trending.length === 0){
//         GetTrending()
//     }else{
//          setpage(1);
//          settrending([]);
//          GetTrending();
//     }
//   }

const refershHandler = async () => {
    setpage(1);
    settrending([]);
    try {
      const { data } = await axios.get(`/trending/${category}/${duration}?page=1`);
      settrending(data.results);
      setpage(2);
      sethasMore(true);
    } catch (error) {
      console.log("Error: ", error);
    }
};

  useEffect(()=>{
    refershHandler();
  },[category,duration])

//   console.log(trending);
  
  return trending.length > 0 ? (
    <div className="h-screen w-screen   ">

      <div className=" px-[3%] w-full  flex justify-between items-center">
        <h1
          className="w-[20%] text-2xl text-zinc-400 font-semibold"
          onClick={() => navigate(-1)}
        >
          <i className="hover:text-[#6556CD] ri-arrow-left-line"></i>trending
        </h1>
        <Topnav containerClass="w-[40%]" dropdownClass="w-[100%]" />
        <div className="flex">
          <Dropdown title="category" options={["tv", "movie", "all"]} func={(e)=>{setcategory(e.target.value)}} />

          <div className="w-[2%]"></div>

          <Dropdown title="Duration" options={["week", "day"]} func={(e)=>{setduration(e.target.value)}} />
        </div>

        
      </div>

   <InfiniteScroll
    dataLength={trending.length}
    next={GetTrending}
    hasMore={hasMore}
    loader={<h1 className=" ">Loading...</h1>}> 
     <Cards data={trending} title={category} />
   </InfiniteScroll>
   

    </div>
  ): (
    <Loading />
  )
};

export default Trending;
