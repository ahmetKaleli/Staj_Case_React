import axios from 'axios'
import type { Exercise } from '../types/Exercises'

    const url = import.meta.env.VITE_URL
    const options = {
        method:"GET",
        headers:{
            "x-rapidapi-key":import.meta.env.VITE_KEY,
            "x-rapidapi-host": import.meta.env.VITE_HOST
        }
    }

    export const fetchData = async():Promise<Exercise[]>=>{
         const res = await axios.get(`${url}/exercises`,options)
         console.log(res.data);
         return res.data
        
    }

