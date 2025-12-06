import React from 'react'
import Dropdown from './Dropdown'
import { Link } from 'react-router-dom';


const HorizontalCards = ({data}) => {
  // console.log(data);
  

  return (
  
       
       
        <div className='w-full h-[40vh] flex  overflow-y-hidden mb-5 p-4'>
            {data.map((d,i)=>(
                <Link to={`/${d.media_type}/details/${d.id}`} key={i}className='min-w-[15%] h-[35vh] mr-5 mb-15 bg-zinc-900'>
                    <img className='w-full h-[40%] object-cover'
                    src={`https://image.tmdb.org/t/p/original/${d.backdrop_path || d.poster_path}`} alt="" />

                  <div className='text-white p-3'>
                     <h1 className=' text-xl font-semibold  '>{d.original_title || d.name || d.title || d.original_name}</h1>

                    <p className=' mt-5 mb-5 '>{d.overview.slice(0,50)}...<span className='text-zinc-400'>more</span>
                    </p>
                  </div>
                </Link>
            ))}

        </div>

 
  )
}

export default HorizontalCards