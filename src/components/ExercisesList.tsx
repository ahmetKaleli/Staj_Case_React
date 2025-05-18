import { useQuery } from '@tanstack/react-query'
import React, { useState } from 'react'
import { fetchData } from '../services/Api'
import type { Exercise } from '../types/Exercises'
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Exercises from "./Exercises"
import Page404 from './404';

export default function ExercisesList() {

    const { data, isLoading, error } = useQuery<Exercise[]>({
        queryKey: ["exercises"],
        queryFn: fetchData,
        staleTime: Infinity,
        refetchOnWindowFocus: false,
        retry: 1 

    })

    const [open, setOpen] = useState<boolean>(true)


    if (isLoading) {
        return (
            <Backdrop
                sx={(theme) => ({ color: '#fff', zIndex: theme.zIndex.drawer + 1 })}
                open={open}
            >
                <CircularProgress color="inherit" />
            </Backdrop>
        )
    }
    if (error){
        return(
            <Page404/>
        )
    }

    return (
        <div>
            
            {data && <Exercises data={data}/>}
        </div>
    )
}
