import React from 'react'
import { Stack, Typography,Box} from '@mui/material';
import Loader from '../pages/Loader';


const ExerciseVideos = ({exerciseVideos,name}) => {
  // console.log("youtube",exerciseVideos)


if(exerciseVideos?.length) return <Loader/>

  return (
   <Box>
    <Typography>
      Watch <span style={{color:'#ff2625',textTransform:'capitalize'}}>{name}</span>
      exercise vidoes
    </Typography>
    <Stack justifyContent="flex-start" flexWrap='wrap' alignItems='center'
    sx={{flexDirection:{lg:'row'},gap:{lg:'110px',xs:'0'}}}
    >

{/* {

exerciseVideos?.slice(0,3)?.map((item,index)=>(

  <a 
  key={index}
  className='exercise-video'
  href={`https://www.youtube.com/watch?v=${item.video.videoId}`}  
  target='_blank'
  rel='noreferrer'
  >
  
 <img  style={{ borderTopLeftRadius: '20px' }} src={item.video.thumbnails[0].url} alt={item.video.title}/>
  </a>
))

} */}
{
  exerciseVideos?.slice(0,3)?.map((item,index)=>{
    debugger
    return(
      <a 
      key={index}
      className='exercise-video'
      href={`https://www.youtube.com/watch?v=${item.video.videoId}`}  
      target='_blank'
      rel='noreferrer'
      >
      
      <img style={{ borderTopLeftRadius: '20px' }} src={item.video.thumbnails[0].url} alt={item.video.title} />
      <Box>
        <Typography variant='h5'color="#000">{item.video.title}</Typography>
        <Typography variant='h6'color="#000">{item.video.name}</Typography>
      </Box>
      </a>
    )
  })
}


</Stack>
</Box>
  )
}

export default ExerciseVideos