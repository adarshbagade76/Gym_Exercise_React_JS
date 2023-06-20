import React from 'react'
import { Stack, Typography,Button, Grid } from '@mui/material'
import BodypartImage from '../assests/icons/BodypartImage.png'
import TargetImage from '../assests/icons/TargetImage.png';
import EquipmentImage from '../assests/icons/TargetImage.png'

const Detail = ({ exerciseDeatil }) => {
  
 return (

    <Stack gap='60px' sx={{ flexDirection: { lg: 'row' }, p: '20px', alignItems: 'center' }}>
      <img src={exerciseDeatil.gifUrl} alt={exerciseDeatil.name} loading='lazy' className='detail-image' />
      <Stack sx={{gap:{lg:'35px',xs:'20px'}}}>
      <Typography variant='h6'>{exerciseDeatil.name}</Typography>
      <Typography>
        Exercises keep you strong.{exerciseDeatil.name} bup is one pf the best<br></br>exercise to target your {exerciseDeatil.target}.it will<br></br>help you improve your<br></br>mood and gain energy.
      </Typography>

      {/* <Stack  direction='row' alignItems='center'> */}
        <Grid container >
          <Grid xs={6}>
          <Button>
          <Stack direction='column'sx={{gap:'30px'}}>
         
          <img src={BodypartImage} alt='no image' sx={{width:'50px',height:'50px'}}/>
          <img src={TargetImage} alt='no image' sx={{width:'50px',height:'50px'}}/>
          <img src={EquipmentImage} alt='no image' sx={{width:'50px',height:'50px'}}/>
          
            </Stack>
            </Button>

          </Grid>
          <Grid xs={6}>
          <Stack direction='column'sx={{gap:'65px'}}>
            <Typography  fontweight='bold' variant='h6' textTransform='capitalize'>{exerciseDeatil.bodyPart}</Typography>
            <Typography  fontweight='bold' variant='h6' textTransform='capitalize'>{exerciseDeatil.target}</Typography>
            <Typography  fontweight='bold' variant='h6' textTransform='capitalize'>{exerciseDeatil.equipment}</Typography>
          </Stack>


          </Grid>

        </Grid>
          <Button sx={{background:'fff2b',borderRadius:'50%',width:'100px', height:'100px'}}>
          
         <Typography></Typography>
          </Button>
        

         </Stack>
     
      
      </Stack>
     
    // </Stack>

  )
}

export default Detail