import { Box } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Detail from '../component/Detail';
import SimilarExercises from '../component/SimilarExercises';
import ExerciseVideos from '../component/ExerciseVideos'
import { useParams } from 'react-router-dom';
import { exercisesOptions, fetchData,youtubeOptions } from '../utils/FetchData';

const ExerciseDetail = () => {
const [exerciseDeatil,setExerciseDeatil]=useState({})
const [exerciseVideos,setExerciseVideos]=useState([])
const [targetMuscleExercises,setTargetMuscleExercises]=useState([])
const [equipmentExercises, setEquipmentExercises]=useState([]);



const id=useParams()
useEffect(()=>{
const fetchExercisesData = async()=>{
const exerciseDbUrl='https://exercisedb.p.rapidapi.com';
const youtubeSearchUrl='https://youtube-search-and-download.p.rapidapi.com';

const exerciseDeatilData=await fetchData(`${exerciseDbUrl}/exercises/exercise/${id.id}`,exercisesOptions)
setExerciseDeatil(exerciseDeatilData)

const exerciseVediosData=await fetchData(`${youtubeSearchUrl}/search?query=${exerciseDeatilData.name}exercise`,youtubeOptions)
setExerciseVideos(exerciseVediosData.contents)

const targetMuscleExercisesData=await fetchData(`${exerciseDbUrl}/exercises/target/${exerciseDeatilData.target}`,exercisesOptions)
setTargetMuscleExercises(targetMuscleExercisesData)

const equimentExercisesData=await fetchData(`${exerciseDbUrl}/exercises/equipment/${exerciseDeatilData.equipment}`,exercisesOptions)
setEquipmentExercises(equimentExercisesData)
}
fetchExercisesData();
  },[id])


  return (
  <Box>
  <Detail exerciseDeatil={exerciseDeatil}/>
  <ExerciseVideos  exerciseVideos={exerciseVideos} name={exerciseDeatil.name}/>
  <SimilarExercises targetMuscleExercises={targetMuscleExercises} equipmentExercises={equipmentExercises}/>
  </Box> 
  
  )
}

export default ExerciseDetail
