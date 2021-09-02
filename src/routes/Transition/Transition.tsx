import { Grid, Paper, Fade } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';

import { styles } from './styles';
import Logo from '../../../public/favicon.ico';

/**
 * The Transition page that displays the logo
 */
export const Transition = () => {
  const classes = styles();
  const [hasMounted, setHasMounted] = useState(false);

  /**
   * OnComponentDidMount
   */
  useEffect(() => {
    setHasMounted(true);
  }, []);

  return (
    <Grid item xs={12} sm={12} className={classes.grid}>
      <Fade in={hasMounted} timeout={2000}>
        <Paper elevation={10} className={classes.logoContainer}>
          <Image
            src={Logo}
            alt="Yash Shah's Logo"
            width={100}
            height={100}
          />
        </Paper>
      </Fade>
    </Grid>
  );
}
