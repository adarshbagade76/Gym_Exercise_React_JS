import { Margin } from '@mui/icons-material';
import { Stack, Typography } from '@mui/material'
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assests/images/Logo.png'

const Navbar = () => {
  return (
    <>
  <Stack direction={'row'} justifyContent='space-around' sx={{gap:{xs:"32px",sm:'40px'},mt:{sm:"32px",xs:"20px"},justifyContent:'none'}}>
    <Stack>
    <Link to='/' href='excerise'>
       <img src={Logo} alt='No img' style={{width:'48px',height:'48px',margin:'0 20px'}}/>
     </Link>
        </Stack>
        
    
    
        <Link to='/' style={{color:'black',textDecoration:'none'}}>
        <Stack direction={'row'} mt={3} >
        <Typography borderBottom='3px solid #FF2625' >Home</Typography>
        <Typography ml={2}>Exercises</Typography>
        </Stack>
        </Link>
       
   
        </Stack>
 
   
    
        </>
  )
}

export default Navbar