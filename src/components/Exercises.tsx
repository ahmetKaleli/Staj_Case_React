import React, { useEffect, useState } from 'react'
import '../App.css'
import type { Exercise } from '../types/Exercises'
import { Card, CardContent, CardHeader, CardMedia, IconButton, Typography } from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite';
import { toast } from 'react-toastify'

export interface propsData{
    data:Exercise[]
}


export default function Exercises({data}:propsData) {

        const handleClick = (exercises:Exercise)=>{
        try {
              const save:Exercise[] = JSON.parse(localStorage.getItem("favorites") || "[]")
              const control = save.find(item=>item.id === exercises.id) !== undefined

              if(!control){
                const updated:Exercise[] = [...save,exercises]
                localStorage.setItem("favorites",JSON.stringify(updated))
                toast.success("Favorilere eklendi")
                
            }else{
                toast.dark("zaten favorilerde")
            }
        } catch (error) {
            toast.error("favorilere eklenirken hata oluştu") 
        }

    }

  return (
    <div className='w-full mx-auto px-4 '>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 justify-items-center">
        {
            data.map((dt)=>(
                <div key={dt.id}>
                    <Card sx={{width:300, height:500, display:'flex', flexDirection:"column", borderRadius:5, marginBottom:5}}>
                        <CardHeader title={dt.name} subheader={dt.bodyPart}/>
                        <CardMedia
                            component="img"
                            image={dt.gifUrl}
                            sx={{height:250, width:250, objectFit:"cover", margin:"auto"}}
                        />
                        <CardContent>
                            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                Target : {dt.target}
                            </Typography>
                            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                Equiment : {dt.equipment}   
                            </Typography>
                        </CardContent>
                        <IconButton onClick={()=>handleClick(dt)} aria-label='add to favorites' sx={{"&:hover":{backgroundColor:"transparent"}, marginBottom:1}}>
                            <FavoriteIcon sx={{color:"#1976d2", transition:"0.4s", "&:hover":{color:"#0d47a1"}}}/>
                        </IconButton>

                    </Card>
                </div>
            ))
        } 

    </div>

    </div>
    
  )
}
