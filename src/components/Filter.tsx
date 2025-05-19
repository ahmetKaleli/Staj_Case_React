import React, { useState } from 'react'
import { Button, Checkbox, FormControlLabel, FormGroup } from '@mui/material'
import type { Exercise } from '../types/Exercises'
import FilterListAltIcon from '@mui/icons-material/FilterListAlt';

interface FilterProps {
  data: Exercise[];
  selected: string[];
  setSelected: React.Dispatch<React.SetStateAction<string[]>>
}

export default function Filter({ data, selected, setSelected }: FilterProps) {
  const repeat = [...new Set(data.map(da=>da.target))]
  const [open ,setOpen] = useState<boolean>(false)

  const handleClick = ()=>{
    if(!open){
      setOpen(true)
    }else{
      setOpen(!open)
      
    }
  }

  const handleChange = (target:string)=>{
    setSelected(prev => prev.includes(target)
    ? prev.filter(t=> t !== target)
    :[...prev, target]
    )
  }

  return (
    <div >
      {!open ?
        <div className='flex justify-end w-full px-4 mb-4'>
          <Button sx={{color:"white",float:"right", marginTop:-3 ,marginRight:5}} variant='contained'  color='info'
          onClick={handleClick} className='text-3xl font-bold mb-2'>
            FİLTRELE
            <FilterListAltIcon sx={{color:"white"}}/>
          </Button>
        </div>
        : open &&
        <div className='flex flex-col sm:flex-row sm:items-center  p-2 gap-4 w-full justify-center items-center mb-10'>
          <FormGroup sx={{display:"flex", flexDirection:"row", flexWrap:"wrap", gap:"12px", flexGrow:1,
            justifyContent:"center" ,alignItems:"center"}}>

            {repeat.map((target)=>(
            
                <FormControlLabel key={target} className='m-0' control={<Checkbox checked={selected.includes(target)} onChange={()=>handleChange(target)}/>} label={target}/>
              
            ))}

            <Button variant='contained' className='w-[20px] h-[30px]' onClick={()=>setOpen(!open)} color='error'>X</Button>
          </FormGroup>
        </div>
      }
    </div>
  )
}
