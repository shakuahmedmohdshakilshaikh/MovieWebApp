// ...existing code...
import React from 'react'
import { Link } from 'react-router-dom';

const Header = ({data}) => {
 
const bgImage = `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.7), rgba(0,0,0,0.9)), url(https://image.tmdb.org/t/p/original/${data.backdrop_path || data.profile_path})`;

  return (
    <div
       style={{
        backgroundImage: bgImage,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
      className="w-full h-[88vh] bg-center bg-cover object-center bg-no-repeat flex flex-col justify-end items-start p-[7%]"
    >
      <h1 className='text-white text-5xl font-black w-[70%]'>{data.original_title || data.name || data.title || data.original_name}</h1>
      <p className='w-[70%] mt-5 mb-5 text-white'>{data.overview.slice(0,300)}...<Link className='text-blue-400'>more</Link></p>
      <p className='text-white '>
        <i className="ri-megaphone-fill  text-yellow-500 "></i> {data.release_date || "no information"}
        <i className="ri-album-fill  text-yellow-500 m-1"></i> {data.media_type.toUpperCase()}
      </p>
      <Link className='bg-[#6556CD] p-3 rounded text-white font-semibold m-1'> Watch Trailer</Link>
    </div>
  )
}

export default Header
// ...existing code...