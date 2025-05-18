import { Container } from '@mui/material'
import ExercisesList from '../components/ExercisesList'
import Filter from '../components/Filter'
import mockData from "../data/mocData.json"
import { fetchData } from '../services/Api'
import { useQuery } from '@tanstack/react-query'

export default function Home() {
  const {data} = useQuery({
    queryKey:['exercises'],
    queryFn:fetchData
  })
  return (
    <div>
        {data && <Filter data={data}/>}
        <Container>
            <ExercisesList/>

        </Container>
    </div>
  )
}
