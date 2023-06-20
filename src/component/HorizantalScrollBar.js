import React, { useContext } from 'react'
import { Box,Typography } from '@mui/material';

import BodyPart from './BodyPart'
import ExercisesCard from './ExercisesCard';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import RightArrowIcon from '../assests/icons/RightArrowIcon.png'
import LeftArrowIcon from '../assests/icons/LeftArrowIcon.png';

const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollPrev()} className="right-arrow">
      <img src={LeftArrowIcon} alt="right-arrow" />
    </Typography>
  );
};

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollNext()} className="left-arrow">
      <img src={RightArrowIcon} alt="right-arrow" />
    </Typography>
  );
};



const HorizantalScrollBar = ({ data, bodyPart, setBodyPart,isBodyParts }) => {
  return (
    <>
     
      <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
      {
        data?.map((item)=>{
         return (
         <Box
        key={item.id || item}
        itemId={item.id || item}
        title={item.id || item}
        m="0 40px"
        >
        { isBodyParts ? <BodyPart item={item} bodyPart={bodyPart} setBodyPart={setBodyPart}/>: <ExercisesCard exercise={item}/>}
        
         </Box>
         )

        

        })
      }
      </ScrollMenu>
    </>
  )

}

export default HorizantalScrollBar