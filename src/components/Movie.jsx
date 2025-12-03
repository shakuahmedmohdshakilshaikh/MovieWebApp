
import axios from '../utils/axios';
import  { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Loading from './Loading';
import Topnav from './partials/Topnav';
import Dropdown from './partials/Dropdown';
import InfiniteScroll from 'react-infinite-scroll-component';
import Cards from './partials/Cards';


const Movie = () => {
    const navigate = useNavigate();
    const [category,setcategory] = useState("now_playing");
    const [movie,setmovie] = useState([]);
    const [page,setpage] = useState(1);
    const [hasMore,sethasMore] = useState(true);
     document.title = "Movie - movieWeb "+ category.toUpperCase()+"'S"; 

    const GetMovie = async () => {
    try {
      // use /movie/popular or /tv/popular depending on category
      const { data } = await axios.get(`/movie/${category}?page=${page}`);
    //   console.log(data.results);
      
      if (data.results.length > 0) {
          setmovie((prevState) => [...prevState, ...data.results]);
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
    setmovie([]);
    try {
      const { data } = await axios.get(`/movie/${category}?page=1`);
      setmovie(data.results);
      setpage(2);
      sethasMore(true);
    } catch (error) {
      console.log("Error: ", error);
    }
};

  useEffect(()=>{
    refershHandler();
  },[category])

 return movie.length > 0 ? (
    <div className="h-screen w-screen   ">

      <div className=" px-[3%] w-full  flex justify-between items-center">
        <h1
          className="w-[20%] text-2xl text-zinc-400 font-semibold"
          onClick={() => navigate(-1)}
        >
          <i className="hover:text-[#6556CD] ri-arrow-left-line"></i>Movie<small className='ml-2 text-sm text-zinc-600'>({category})</small>
        </h1>
        <Topnav containerClass="w-[40%]" dropdownClass="w-[100%]" />
        <div className="flex">
          <Dropdown title="category" options={["popular", "top_rated","upcoming","now_playing"]} func={(e)=>{setcategory(e.target.value)}} />

          <div className="w-[2%]"></div>

         
        </div>

        
      </div>

   <InfiniteScroll
    dataLength={movie.length}
    next={GetMovie}
    hasMore={hasMore}
    loader={<h1 className=" ">Loading...</h1>}> 

     <Cards data={movie} title="movie" />
   </InfiniteScroll>
   

    </div>
  ): (
    <Loading/>
  )

}

export default Movie