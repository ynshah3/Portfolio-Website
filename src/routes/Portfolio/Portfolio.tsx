import React, { useState } from 'react';
import clsx from 'clsx';
import {
  Typography,
  Box,
  Button,
  Paper,
  MobileStepper,
  Link
} from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import Image from 'next/image';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

import { ImageData} from './ImageData';
import { styles } from './styles';
import { Dock } from '../../common/Dock';

/**
 * Auto-Swipe the images
 */
const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

/**
 * Display the projects as a swipeable view with auto-play
 */
export const Portfolio = () => {
  const classes = styles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = ImageData.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };

  return (
    <Dock>
      <Typography variant="h2" gutterBottom className={classes.centerify}>
        Portfolio Projects
      </Typography>
      <Box className={clsx(classes.root, classes.centerify)}>
        <Paper square elevation={0} className={classes.header}>
          <Typography variant="h6">{ImageData[activeStep].title}</Typography>
          <Typography variant="body1">{ImageData[activeStep].description}</Typography>
          <Typography variant="caption">({ImageData[activeStep].techStack})</Typography>
          {ImageData[activeStep].link !== "" && (
            <Typography variant="body1">
              Link:{'\ '}
              <Link href={ImageData[activeStep].link}>
                {ImageData[activeStep].link}
              </Link>
            </Typography>
          )}
        </Paper>
        <AutoPlaySwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
        >
          {ImageData.map((step, index) => (
            <Box key={step.description}>
              {Math.abs(activeStep - index) <= 2 ? (
                <Image
                  src={step.img}
                  alt={step.description}
                  height={300}
                  width={500}
                />
              ) : null}
            </Box>
          ))}
        </AutoPlaySwipeableViews>
        <MobileStepper
          className={classes.lightGold}
          steps={maxSteps}
          position="static"
          variant="text"
          activeStep={activeStep}
          nextButton={
            <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
              Next
              {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
            </Button>
          }
          backButton={
            <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
              {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
              Back
            </Button>
          }
        />
      </Box>
    </Dock>
  );
}
