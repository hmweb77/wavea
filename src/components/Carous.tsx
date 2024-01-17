"use client"
import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Image from "next/image";
import { Reviews } from '@/constants/ReviewCons';
import Star from "../assets/star.svg";
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";

export default function Carous() {
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = Reviews.length;
    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
      };
    
      const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
      };
  return (
    <Box sx={{ maxWidth: 400, flexGrow: 1 }}>
        <div className="flex justify-center items-center mt-5">
              <Image  src={Star} alt="star" />
              <Image src={Star} alt="star" />
              <Image src={Star} alt="star" />
              <Image src={Star} alt="star" />
              <Image src={Star} alt="star" />
            </div>
    <Paper
      square
      elevation={0}
      sx={{
        display: 'flex',
        alignItems: 'center',
        height: 50,
        pl: 2,
        marginTop:"10px",
        bgcolor: 'background.default',
      }}
    >  
      <Typography>{Reviews[activeStep].feedback}</Typography>
    </Paper>
    <Box sx={{  maxWidth: 400, width: '100%', p: 3 }}>
      {Reviews[activeStep].customerName}
    </Box>
    <MobileStepper
      variant="text"
      steps={maxSteps}
      position="static"
      activeStep={activeStep}
      nextButton={
        <Button
          size="small"
          onClick={handleNext}
          disabled={activeStep === maxSteps - 1}
        >   
          {theme.direction === 'rtl' ? (
           <FaAngleLeft/>
          ) : (
            <FaAngleRight/>
          )}
        </Button>
      }
      backButton={
        <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
          {theme.direction === 'rtl' ? (
           <FaAngleRight/>
            
          ) : (
            <FaAngleLeft/>
          )}
        
        </Button>
      }
    />
  </Box>
  )
}
