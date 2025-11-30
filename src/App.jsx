import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Loading from './components/partials/Loading'
import Trending from './components/partials/Trending'
import Popular from './components/partials/Popular'
import Movie from './components/partials/Movie'

function App() {
 
  return (
    <>
      <div className='bg-[#1F1E24] w-screen h-screen flex'>
       
       <Routes>
          <Route path='/' element={<Home />} /> 
          <Route path='/trending' element={<Trending />} /> 
          <Route path='/popular' element={<Popular />} /> 
          <Route path='/movie' element={<Movie />} /> 
       </Routes>

      </div>
    </>
  )
}

export default App
