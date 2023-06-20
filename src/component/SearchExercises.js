import { Button, Container, Grid, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import TextField from '@mui/material/TextField';
import { SearchExercisesPage } from '../assests/Styles.css/stylecss';
import { fetchData, exercisesOptions } from '../utils/FetchData';
import HorizantalScrollBar from './HorizantalScrollBar';



const SearchExercises = ({ bodyPart, setBodyPart, setExercises }) => {
  console.log("bodyPart11111",bodyPart)
  const [Search, setSearch] = useState('')
  const [bodyParts, setBodyParts] = useState([])


  useEffect(() => {
    debugger
    const BodyPartExercises = async () => {
      const bodyPartData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exercisesOptions)
      setBodyParts(['all', ...bodyPartData])
      console.log('bodypartlist',bodyPartData)
    }
    BodyPartExercises();
  },[])



  const handleSearch = async () => {
    // debugger
    if (Search) {

      const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exercisesOptions)
      console.log('data of', exercisesData)

      const SearchedExercises = exercisesData.filter((exercise) => exercise.bodyPart?.toLowerCase().includes(Search)
        || exercise.equipment?.toLowerCase().includes(Search)
        || exercise.name?.toLowerCase().includes(Search)
        || exercise.target?.toLowerCase().includes(Search)

      )
      setSearch('')
      setExercises(SearchedExercises)
      console.log("search Exercises Data", SearchedExercises)

    }


  }


  

  return (
    <Container>
      <Grid container>
        <Grid xs={12}>
          <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: "30px" }, textAlign: 'center', mb: '50px' }}>Awesome Exercises You<br />Should Know</Typography>

        </Grid>
        <Grid item lg={10} xs={8} mb={12}>
          <TextField value={Search} onChange={(e) => setSearch(e.target.value.toLowerCase())} placeholder='Search Exercises' fullWidth sx={SearchExercisesPage.TextField1} />
        </Grid>
        <Grid item lg={2} xs={4}>
          <Button variant='contained' color='error' sx={{ height: '3.5rem', width: { lg: '10rem', xs: '6rem' }, borderRadius: '0.2rem', textTransform: 'none', fontSize: '18px' }} onClick={() => handleSearch()} >Search</Button>
        </Grid>
        <Grid item xs={12}>
          <HorizantalScrollBar data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart} isBodyParts/>

        </Grid>
      </Grid>
    </Container>
  )
}

export default SearchExercises