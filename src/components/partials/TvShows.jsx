import axios from '../utils/axios';
import  { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Loading from './Loading';
import Topnav from './Topnav';
import Dropdown from './Dropdown';
import InfiniteScroll from 'react-infinite-scroll-component';
import Cards from './Cards';


const TvShows = () => {
     const navigate = useNavigate();
    const [category,setcategory] = useState("airing_today");
    const [tv,settv] = useState([]);
    const [page,setpage] = useState(1);
    const [hasMore,sethasMore] = useState(true);
     document.title = "Tv Shows - movieWeb "+ category.toUpperCase()+"'S"; 

    const GetTv = async () => {
    try {
      // use /movie/popular or /tv/popular depending on category
      const { data } = await axios.get(`/tv/${category}?page=${page}`);
    //   console.log(data.results);
      
      if (data.results.length > 0) {
          settv((prevState) => [...prevState, ...data.results]);
          // use functional update to avoid stale closure
          setpage((p) => p + 1);
      } else {
        sethasMore(false);
      }
      
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  const refershHandler = async () => {
    setpage(1);
    settv([]);
    try {
      const { data } = await axios.get(`/tv/${category}?page=1`);
      settv(data.results);
      setpage(2);
      sethasMore(true);
    } catch (error) {
      console.log("Error: ", error);
    }
};

  useEffect(()=>{
    refershHandler();
  },[category])


 return tv.length > 0 ? (
    <div className="h-screen w-screen   ">

      <div className=" px-[3%] w-full  flex justify-between items-center">
        <h1
          className="w-[20%] text-2xl text-zinc-400 font-semibold"
          onClick={() => navigate(-1)}
        >
          <i className="hover:text-[#6556CD] ri-arrow-left-line"></i>TV Show<small className='ml-2 text-sm text-zinc-600'>({category})</small>
        </h1>
        <Topnav containerClass="w-[40%]" dropdownClass="w-[100%]" />
        <div className="flex">
          <Dropdown title="category" options={["airing_today", "on_the_air","popular","top_rated"]} func={(e)=>{setcategory(e.target.value)}} />

          <div className="w-[2%]"></div>

         
        </div>

        
      </div>

   <InfiniteScroll
    dataLength={tv.length}
    next={GetTv}
    hasMore={hasMore}
    loader={<h1 className=" ">Loading...</h1>}> 
     <Cards data={tv} title={category} />
   </InfiniteScroll>
   

    </div>
  ): (
    <Loading/>
  )
}

export default TvShows