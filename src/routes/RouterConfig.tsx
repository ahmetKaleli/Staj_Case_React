import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from '../pages/Home'
import Page404 from '../components/404'

export default function RouterConfig() {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='*' element={<Page404/>}/>
        </Routes>
    </div>
  )
}
