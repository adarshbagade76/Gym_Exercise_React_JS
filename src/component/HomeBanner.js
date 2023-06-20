import { Box,Typography,Button } from '@mui/material'
import React from 'react'

import banner from '../assests/images/banner.png'

const HomeBanner = () => {
  return (
    <Box sx={{mt:{lg:'212px',xs:'72px'},ml:{lg:'300px'}}}
   
    position='relative'p='20px'>
             <Typography sx={{fontWeight:"600",fontSize:'21px',color:'#FF2625'}}>Fitness Club</Typography>
             <Typography fontWeight={700} sx={{fontSize:{lg:'32px',xs:'24px'}}} >Sweat, Smile<br/>And Repeat </Typography>
             <Typography fontSize='13px'lineHeight='35px' marginTop='2px' marginBottom='14px'>Check out the most effective exercises personalized to you</Typography>
 
             <Button variant='contained' color='error'sx={{bgcolor:'#FF2625'}}>Explore Exercises</Button>
             <Typography fontWeight={600} color='#ff2625'fontSize='180px' sx={{opacity:0.1,display:{lg:'block',xs:'none'}}}>Exercises</Typography>
             <img src={banner}  alt='homePageImage'  className='hero-banner-img' />
     </Box>   
  )
}

export default HomeBanner