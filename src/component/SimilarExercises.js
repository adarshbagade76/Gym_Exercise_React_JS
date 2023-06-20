import {  Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import HorizantalScrollBar from './HorizantalScrollBar'
import Loader from '../pages/Loader'

const SimilarExercises = ({targetMuscleExercises,equipmentExercises}) => {
  console.log("targetMuscleExercises11",targetMuscleExercises)

  return (
    <Grid container mt={5} >
    <Grid xs={12} mb={5}>
    <Typography  sx={{ fontSize: { lg: '38px', xs: '25px' }, ml: '20px' }} fontWeight={700} color="#000" mb="23px">
      Similar <span style={{color:"#FF2625",textTransform:"capitalize"}}>Target Muscle</span> exercises
    </Typography>
    <Stack direction={'row'} sx={{p:2,position:'relative'}}>
    {targetMuscleExercises?.length !==0 ?<HorizantalScrollBar data={targetMuscleExercises}/>:<Loader/>} 
    </Stack>
   </Grid>
    <Grid xs={12} >
    <Typography sx={{fontSize:{lg:'38px',xs:'25px'},ml:'20px',}} fontWeight={700}color="#000" mb="23px">
      Similar <span style={{color:'#FF2625',textTransform:'capitalize'}}>equipment</span>
    </Typography>
    <Stack direction={'row'} sx={{p:2,position:'relative'}}>
    {equipmentExercises?.length !==0 ? <HorizantalScrollBar data={equipmentExercises}/>:<Loader/>}
    </Stack>
    
    </Grid>
    </Grid>
 
  )
}

export default SimilarExercises