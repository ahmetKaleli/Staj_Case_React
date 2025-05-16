import { Button } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Header() {
  const navigate:any = useNavigate()
  return (
    <div className='bg-blue-800 h-[120px] mb-10 flex justify-center'>
      <Button sx={{color:"white", marginRight:10}} onClick={()=>navigate("/")}>ANA SAYFA</Button>
      <Button sx={{color:"white"}} onClick={()=>navigate("/favorite")}>Favoriler</Button>
    </div>
  )
}
