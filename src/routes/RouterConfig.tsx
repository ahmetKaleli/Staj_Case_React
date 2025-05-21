import { Routes,Route } from 'react-router-dom'
import Home from '../pages/Home'
import Page404 from '../components/404'
import Favorites from '../pages/Favorites'
import DetailPage from "../pages/DetailPage"

interface SearchProps{
  searchTerm:string
}

export default function RouterConfig({searchTerm}:SearchProps) {
  return (
    <div className=' min-h-screen bg-gray-200'>
        <Routes>
            <Route path='/' element={<Home searchTerm={searchTerm}/>} />
            <Route path='/detail/:id' element={<DetailPage />} />
            <Route path='/favorite' element={<Favorites/>}/>
            <Route path='*' element={<Page404/>}/>
        </Routes>
    </div>
  )
}
