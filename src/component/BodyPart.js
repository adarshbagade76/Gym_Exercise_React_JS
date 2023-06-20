import {  Stack, Typography } from '@mui/material'
// import React, { useState } from 'react';
import gym from '../assests/icons/gym.png' 

const BodyPart = ({item,setBodyPart,bodyPart}) => {
  
  return (
   
                          
  <Stack  
    display='flex'
    justifyContent="center"
    alignItems="center"  
     className='bodyPart-card' 
     sx={{ 
    borderTop:bodyPart === item ? '4px solid red':'',
    backgroundColor:'#fff',
    borderBottomLeftRadius:'20px',
    width:'270px',
    height:'280px',
    cursor:'pointer',
    gap:'47px'
  }}
  onClick={()=>{
    setBodyPart(item);
    // window.scrollTo({top:1800,left:100,behavior:'smooth'})
  
  }}
  >
   
   <img src={gym} alt='noimg' style={{width:'40px',height:'40px'}}/>
   <Typography mt={2} fontSize='18px' fontWeight='bold' fontFamily="Alegreya" color='#3A1212'textTransform='capitalize' >{item}</Typography>
 
    </Stack>


   

  )
}

export default BodyPart