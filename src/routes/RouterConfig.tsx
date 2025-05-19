import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from '../pages/Home'
import Page404 from '../components/404'
import Favorites from '../pages/Favorites'

interface SearchProps{
  searchTerm:string
}

export default function RouterConfig({searchTerm}:SearchProps) {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home searchTerm={searchTerm}/>} />
            <Route path='/favorite' element={<Favorites/>}/>
            <Route path='*' element={<Page404/>}/>
        </Routes>
    </div>
  )
}
