import React from 'react'
import loader from '/loading.gif'
const Loading = () => {
  return (
    <div className='w-full h-full flex justify-center items-center'>
        <img className='w-[50%] object-cover' src={loader} alt="" />
    </div>
  )
}

export default Loading