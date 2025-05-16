import React from 'react'
import '../App.css'
import type { Exercise } from '../types/Exercises'
import { Card, CardContent, CardHeader, CardMedia, IconButton, Typography } from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite';


interface propsData{
    data:Exercise[]
}

export default function Exercises({data}:propsData) {
  return (
    <div className='w-full mx-auto px-4 '>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 justify-items-center">
        {
            data && data.map((dt)=>(
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
                        <IconButton aria-label='add to favorites' sx={{"&:hover":{backgroundColor:"transparent"}, marginBottom:1}}>
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
