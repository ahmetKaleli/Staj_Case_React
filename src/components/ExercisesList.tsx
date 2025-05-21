import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'
import { fetchData } from '../services/Api'
import type { Exercise } from '../types/Exercises'
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Filter from "./Filter"
import Page404 from './404';
import Exercises from './Exercises';

interface PropsExe {
    searchTerm: string;
}

export default function ExercisesList({ searchTerm }: PropsExe) {

    const { data, isLoading, error } = useQuery<Exercise[]>({
        queryKey: ["exercises"],
        queryFn: fetchData,
        staleTime: Infinity,
        refetchOnWindowFocus: false,
        retry: 1
    })

    const [open] = useState<boolean>(true)
    const [selectedTarget, setSelectedTarget] = useState<string[]>([])

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

        if(!data || error ){
            return (
            <Page404 />
            )
        }


    const filteredData = data?.filter((dt) => {
        const a = dt.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())
        const b = selectedTarget.length === 0 || selectedTarget.includes(dt.target)
        return a && b
    })

    return (
        <div className="flex flex-col gap-6 px-2">
            <Filter data={data} selected={selectedTarget} setSelected={setSelectedTarget} />
            <Exercises data={filteredData} />
        </div>
    )
}
