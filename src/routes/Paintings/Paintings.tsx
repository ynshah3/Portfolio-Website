import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import Image from 'next/image';

import { styles } from './styles';
import { Dock } from '../../common/Dock';
import Painting from '../../../public/images/Paintings.png';

/**
 * Display the paintings as a collage
 */
export const Paintings = () => {
  const classes = styles();
  return (
    <Dock>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} className={classes.marginBottom50}>
          <Typography variant="h2" gutterBottom className={classes.verticalCenterify}>
            Paintings
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12}>
          <Image src={Painting} alt="Paintings" />
        </Grid>
      </Grid>
    </Dock>
  )
}