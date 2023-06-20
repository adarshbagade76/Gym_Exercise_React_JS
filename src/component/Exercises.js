import React, { useEffect, useState } from 'react'
import { Grid, Container, Typography, Stack, Pagination } from '@mui/material';
import ExercisesCard from './ExercisesCard';
import { Link } from 'react-router-dom';
import { fetchData, exercisesOptions } from '../utils/FetchData';



const Exercises = ({ setExercises, exercises, bodyPart }) => {
  console.log("excersises of result",exercises)
     const[currentPage,setcurrentPage]=useState(1);
    const exercisesPerPage=9;

  // Pagination
  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercises = exercises.slice(indexOfFirstExercise, indexOfLastExercise);

   const paginate=(e,value)=>{
    setcurrentPage(value)
    window.scrollTo({top:1800,behavior:'smooth'})
  }

  useEffect(()=>{
    const fetchExercisesData= async()=>{
      let exercisesData=[]
      if(bodyPart ==='all'){
        exercisesData= await fetchData('https://exercisedb.p.rapidapi.com/exercises', exercisesOptions)
      }else{
        exercisesData=await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`, exercisesOptions)
      }
      setExercises(exercisesData)
    }
    
    fetchExercisesData()

  },[bodyPart])

  return (
    <>

      <Container>
        <Grid container>
          <Grid item xs={12}>
            <Typography fontWeight={'bold'} ml={3} mb='46px' variant='h4'>Showing Results</Typography>
          </Grid>
        </Grid>
      </Container>

      <Stack direction='row' sx={{ gap: { lg: '110px', xs: '50px' } }} flexWrap={'wrap'} justifyContent={'center'}>

           {
          currentExercises.map((exercise,index)=>(
             <ExercisesCard key={index} exercise={exercise}/>
          ))
        } 

      </Stack>
      <Stack mt='100px' alignItems='center'>
         {exercises.length>9 && (
           <Pagination  
           color="standard"
           shape='rounded' 
           defaultPage={1}
           count={Math.ceil(exercises.length/exercisesPerPage)}
           page={currentPage}
           onChange={paginate}
           size='large'

           />
         
         )}

      </Stack>



    </>
  )
}

export default Exercises;