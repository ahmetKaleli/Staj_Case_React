import { Container } from '@mui/material'
import ExercisesList from '../components/ExercisesList'
import Filter from '../components/Filter'

export default function Home() {
  return (
    <div>
        <Filter/>
        <Container>
            <ExercisesList/>
        </Container>
    </div>
  )
}
