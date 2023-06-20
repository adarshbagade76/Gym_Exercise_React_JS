
import { Button, Stack, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const ExercisesCard = ({ exercise }) => {

  return (
    <>
         
          <Link className='exercise-card' to={`/exercise/${exercise.id}`} >
            <img src={exercise.gifUrl} alt={exercise.name} loading='lazy' />
            <Stack direction={'row'}>
            <Button sx={{ bgcolor: "#ffa9a9", mb: "42px", ml: '21px', borderRadius: "20px",color:"#fff",textTransform:'capitalize',fontSize:"14px" }}>{exercise.bodyPart}</Button>
            <Button sx={{ bgcolor: "#fcc757", mb: "42px", ml: '21px', borderRadius: "20px",color:"#fff",textTransform:'capitalize',fontSize:"14px" }}>{exercise.target}</Button>
            </Stack>
            <Typography ml={'21px'} color='#000' fontWeight={"bold"} mt={"11px"} pb={"10px"} textTransform="capitalize">{exercise.name}</Typography>
          </Link>
      


    </>
  )
}

export default ExercisesCard