import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import Image from 'next/image';

import { styles } from './styles';
import { Dock } from '../../common/Dock';
import Painting_V from '../../../public/images/Paintings_V.png';

/**
 * Display the paintings as a collage
 */
export const Paintings = () => {
  const classes = styles();
  return (
    <Dock>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12}>
          <Typography variant="h2" gutterBottom className={classes.verticalCenterify}>
            Paintings
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} className={classes.verticalCenterify}>
          <Image src={Painting_V} alt="Paintings" />
        </Grid>
      </Grid>
    </Dock>
  )
}