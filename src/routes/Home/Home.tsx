import React from 'react';
import { Box, Typography } from '@material-ui/core';
import clsx from 'clsx';

import { Dock } from '../../common/Dock';
import { styles } from './styles';

/**
 * Displays my name and caption
 */
export const Home = () => {
  const classes = styles();

  return (
    <Dock>
      <Box className={clsx(classes.centerify, classes.margin)}>
        <Typography variant="h2" className={classes.cursiveFont}>Yash Shah</Typography>
        <Typography variant="h4" className={classes.condensedFont}>DESIGNER. DEVELOPER. THINKER.</Typography>
      </Box>
    </Dock>
  );
}