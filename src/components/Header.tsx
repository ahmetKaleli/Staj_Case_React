import { Button } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import Search from './Search'

interface HeaderProps{
    onSearch:(value:string)=>void
  }
export default function Header({onSearch}:HeaderProps) {

  const navigate = useNavigate()
  return (
    <div className='bg-gray-800 shadow-lg hover:shadow-2xl transition-shadow h-[120px] mb-10 px-4 flex justify-between'>
        <div className='flex flex-row justify-center items-center'>
          <Button sx={{color:"white", marginRight:5}} onClick={()=>navigate("/")}>ANA SAYFA</Button>
          <Button sx={{color:"white",marginRight:5}} onClick={()=>navigate("/favorite")}>Favoriler</Button>
        </div>

      <div className="flex flex-row justify-end items-center ">
         <Search onSearch={onSearch}/>
      </div>
    </div>
  )
}
