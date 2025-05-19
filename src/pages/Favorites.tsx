import  { useEffect, useState } from 'react'
import type { Exercise } from '../types/Exercises'
import { Button } from '@mui/material'

export default function Favorites() {
    const [fav, setFav] = useState<Exercise[]>([])

    useEffect(() => {
        const favotires = localStorage.getItem("favorites")
        if (favotires) {
            try {
                const parsed: Exercise[] = JSON.parse(favotires)
                setFav(parsed)
            } catch (error) {
                console.log(error);
            }
        }
    }, [])

    const handleDelete = (exerciseId:string)=>{
        const del = fav.filter(favo=> favo.id !== exerciseId)
        localStorage.setItem("favorites",JSON.stringify(del))
        setFav(del)

    }

    return (
        <div>
            <p className='text-5xl flex items-center justify-center  '>Favori Egzersizler</p>
            {
                fav.length === 0 ? (<p className='mt-10 text-red-700 text-5xl flex items-center flex-col justify-center'>Favori Egzersiziniz yok
                                    <img className='rounded-3xl pt-10 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto' src="https://media1.tenor.com/m/jE6gUHstZvsAAAAC/door-smash-door.gif" /></p>)
                    :
                    (
                        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center mt-5 mb-5'>
                         {
                            fav && fav.map((f,id)=>(
                            <div key={id} className='flex flex-col items-center border rounded-2xl p-4 w-[250px] bg-white shadow-md'>
                                <p className='text-lg font-semibold text-center mb-2'>{f.name}</p>
                                <img src={f.gifUrl} width={250} height={300}></img>
                                <div>
                                    <div><Button variant='outlined' onClick={()=>handleDelete(f.id)} color='error'>Sil</Button></div>
                                </div>
                            </div>
                        ))}
                        </div>
                    )
            }
        </div>
    )
}
