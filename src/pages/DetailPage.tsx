import { useQuery } from '@tanstack/react-query'
import { useNavigate, useParams } from 'react-router-dom'
import type { Exercise } from '../types/Exercises'
import { fetchData } from '../services/Api'
import { Button, Card, CardContent, CardHeader, CardMedia, Typography } from '@mui/material'

export default function DetailPage() {

  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()

  const { data } = useQuery<Exercise[]>({
    queryKey: ["detail"],
    queryFn: fetchData
  })

  const detail: Exercise | undefined = data?.find(item => item.id === id)

  return (
    <div className='flex flex-col justify-center items-center'>
      <Card sx={{
        width: 500, height: 650, display: 'flex',flexDirection: "column", borderRadius: 5,
        marginBottom: 5, boxShadow: 8, "&:hover": { boxShadow: 20 }
      }}>
        <CardHeader title={detail?.name} subheader={detail?.bodyPart} />
        <CardMedia
          component="img"
          image={detail?.gifUrl}
          sx={{ height: 250, width: 250, objectFit: "cover", margin: "auto" }}
        />
        <CardContent>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Target : {detail?.target}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Equiment : {detail?.equipment}
          </Typography>
          <Typography variant="body1" sx={{textAlign:"center" ,color: "text.secondary",marginTop:2}} >
           instructions 
          </Typography>
          <Typography variant="body2" sx={{ color: "black"}} >
           {detail?.instructions}
          </Typography>
        </CardContent>
        <Button  variant='contained' onClick={() => navigate(-1)}>Geri Dön</Button>
      </Card>
      
    </div>
  )
}
