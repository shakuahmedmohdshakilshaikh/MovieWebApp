
// import React, { useEffect } from 'react'
// import { useDispatch, useSelector } from 'react-redux';
// import { asyncloadmovie, removemovie } from '../store/actions/movieActions';
// import { Link, useNavigate, useParams } from 'react-router-dom';
// import Loading from './Loading';

// const MovieDetails = () => {
//   const navigate = useNavigate();
//   const {id} = useParams();
//   const dispatch = useDispatch();
//  const {info} = useSelector(state => state.movie);
//   console.log(info);
  

//   const bgImage = `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.7), rgba(0,0,0,0.9)), url(https://image.tmdb.org/t/p/original/${info.detail.backdrop_path})`

//   useEffect(() => {
//     // Fetch movie details using the id from the URL params
//      dispatch(asyncloadmovie(id));
//      return () => {
//     // Cleanup if necessary
//       dispatch(removemovie());
//   }
//   }, [])
//   return info  ?  (
//     <div 
//       style={{
//         backgroundImage: bgImage,
//         backgroundPosition: 'center',
//         backgroundSize: 'cover',
//       }}
//       className="w-full h-[88vh] bg-center bg-cover object-center bg-no-repeat flex flex-col justify-end items-start p-[7%]"
//     >
//       <nav className='w-full text-zinc-400'>
//       <Link onClick={() => navigate(-1)}
//       className="hover:text-[#6556CD] ri-arrow-left-line text-2xl text-zinc-400 font-semibold">
//         Movie Details
//       </Link>
//       <a href="">
//         <i className='ri-external-link-fill'></i>
//       </a>
//       <a href="">
//         <i className='ri-earth-fill'></i>
//       </a>
       
//        <a href="">imdb</a>
//       </nav>
//     </div>
//   ) : <Loading />;
// }

// export default MovieDetails

import React from 'react'

const MovieDetails = () => {
  return (
    <div>MovieDetails</div>
  )
}

export default MovieDetails