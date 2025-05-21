import { Container } from '@mui/material'
import ExercisesList from '../components/ExercisesList'

interface HomeProps{
  searchTerm:string
}

export default function Home({searchTerm}:HomeProps) {
  return (
    <div>
        <Container>
            <ExercisesList searchTerm={searchTerm}/>
        </Container>
    </div>
  )
}
