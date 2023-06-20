import React, { useState } from 'react'
import HomeBanner from '../component/HomeBanner';
import SearchExercises from '../component/SearchExercises';
import Exercises from '../component/Exercises'

const Home = () => {
  const[bodyPart,setBodyPart]=useState('all')
  const[exercises,setExercises]=useState([])

  console.log(bodyPart)
  return (
    <>
    <HomeBanner/>
    <SearchExercises setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart} />
    <Exercises setExercises={setExercises}  bodyPart={bodyPart}  exercises={exercises} />
    </>
  )
}

export default Home