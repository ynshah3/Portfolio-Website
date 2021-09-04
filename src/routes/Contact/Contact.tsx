import React from 'react';
import { Grid, Typography, Link, Box, CssBaseline, AppBar, Toolbar, useMediaQuery} from '@material-ui/core';
import clsx from 'clsx';
import EmailIcon from '@material-ui/icons/Email';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import Image from 'next/image';

import { styles } from './styles';
import Logo from '../../../public/favicon.ico';

/**
 * Display the socials and copyright information
 */
export const Contact = () => {
  const classes = styles();
  const matches800 = useMediaQuery('(min-width:800px)');
  const matches570 = useMediaQuery('(min-width:570px)');

  return (
    <Box className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        elevation={0}
        className={classes.appBar}
      >
        <Toolbar>
          <Grid className={classes.title}>
            <Image
              src={Logo}
              alt="Yash Shah's Logo"
              width={50}
              height={50}
            />
          </Grid>
        </Toolbar>
      </AppBar>
      <Grid container justifyContent="center">
        <Grid item xs={12}>
          <Typography variant="h1" className={classes.greeting}>
            Thanks for Visiting!
          </Typography>
        </Grid>
        <Grid item xs={12} className={
          matches800 ? classes.footer : (
            matches570 ? classes.footerSmall : classes.footerXSmall
          )
        }>
          <Grid container justifyContent="center">
            <Grid item xs={12}>
              <Grid container spacing={3} justifyContent="center">
                <Grid item xs={12} className={classes.flex}>
                  <Grid container spacing={3} justifyContent='center' className={classes.socials}>
                    <Grid item xs={4} className={classes.flex}>
                      <Link href="mailto:yashesperance3@gmail.com" className={classes.link} >
                        <EmailIcon />
                      </Link>
                    </Grid>
                    <Grid item xs={4} className={classes.flex}>
                      <Link href="https://www.linkedin.com/in/ynshah3" className={classes.link}>
                        <LinkedInIcon />
                      </Link>
                    </Grid>
                    <Grid item xs={4} className={classes.flex}>
                      <Link href="https://www.github.com/ynshah3" className={classes.link}>
                        <GitHubIcon />
                      </Link>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12} className={classes.flex}>
                  {matches570 && (
                    <Grid container className={classes.dock} alignItems='center'>
                      <Grid item xs={2} className={classes.centerify}>
                        <Link href="/" className={classes.link}>Home</Link>
                      </Grid>
                      <Grid item xs={2} className={classes.centerify}>
                        <Link href="/about" className={classes.link}>About</Link>
                      </Grid>
                      <Grid item xs={2} className={classes.centerify}>
                        <Link href="/achievements" className={classes.link}>Achievements</Link>
                      </Grid>
                      <Grid item xs={2} className={classes.centerify}>
                        <Link href="/portfolio" className={classes.link}>Portfolio</Link>
                      </Grid>
                      <Grid item xs={2} className={classes.centerify}>
                        <Link href="/paintings" className={classes.link}>Paintings</Link>
                      </Grid>
                      <Grid item xs={2} className={classes.centerify}>
                        <Link href="/contact" className={classes.link}>Contact</Link>
                      </Grid>
                    </Grid>
                  )}
                  {!matches570 && (
                    <Grid container direction='column' className={classes.dock} alignItems='center'>
                      <Grid item className={classes.centerify}>
                        <Link href="/home" className={classes.link}>Home</Link>
                      </Grid>
                      <Grid item className={classes.centerify}>
                        <Link href="/about" className={classes.link}>About</Link>
                      </Grid>
                      <Grid item className={classes.centerify}>
                        <Link href="/achievements" className={classes.link}>Achievements</Link>
                      </Grid>
                      <Grid item className={classes.centerify}>
                        <Link href="/portfolio" className={classes.link}>Portfolio</Link>
                      </Grid>
                      <Grid item className={classes.centerify}>
                        <Link href="/paintings" className={classes.link}>Paintings</Link>
                      </Grid>
                      <Grid item className={classes.centerify}>
                        <Link href="/contact" className={classes.link}>Contact</Link>
                      </Grid>
                    </Grid>
                  )}
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} className={clsx(classes.copyright, classes.centerify)}>
              <Typography variant="body1" gutterBottom>
                Copyright &copy; 2021 Yash Shah. All rights reserved.
              </Typography>
              <Typography variant="caption" gutterBottom>
                website created using React.js, TypeScript, Material-UI
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}