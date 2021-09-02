import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import clsx from 'clsx';

import { styles } from './styles';
import { Dock } from '../../common/Dock';

export const Achievements = () => {
  const classes = styles();

  return (
    <Dock>
      <Grid container justifyContent="center">
        <Grid container justifyContent="center" className={clsx(classes.maxWidth, classes.margin)}>
          <Grid item xs={12}>
            <Typography variant="h2" gutterBottom className={classes.centerify}>
              Education
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h6" className={classes.textCenter}>
              <u>University of California, San Diego</u>
            </Typography>
            <Typography variant="body1" className={classes.textCenter}>
              Sept 2019 - June, 2023
            </Typography>
            <Typography variant="body1" className={classes.textCenter}>
              BS in Computer Science
            </Typography>
            <Typography variant="body1" className={classes.textCenter}>
              Current GPA: 3.96
            </Typography>
          </Grid>
        </Grid>
        <Grid container justifyContent="center" className={clsx(classes.maxWidth, classes.margin)}>
          <Grid item xs={12}>
            <Typography variant="h2" gutterBottom className={classes.centerify}>
              Skills
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h6" className={classes.textCenter}>
              <u>Programming Languages</u>
            </Typography>
            <Typography variant="body1" gutterBottom className={classes.textCenter}>
              Python, Java, C++, SQL, NoSQL, HTML/CSS, JavaScript, TypeScript
            </Typography>
            <Typography variant="h6" className={classes.textCenter}>
              <u>Software</u>
            </Typography>
            <Typography variant="body1" gutterBottom className={classes.textCenter}>
              React.js, React Redux, Node.js, Material-UI, Formik, Yup, Express, GitHub, VSCode, IBM Cloud, LaTeX
            </Typography>
            <Typography variant="h6" className={classes.textCenter}>
              <u>Life Skills</u>
            </Typography>
            <Typography variant="body1" gutterBottom className={classes.textCenter}>
              Leadership, Problem Solving, Communication, User Experience, Teamwork, Debugging, Analytics, Presentation
            </Typography>
          </Grid>
        </Grid>
        <Grid container justifyContent="center" className={clsx(classes.maxWidth, classes.margin)}>
          <Grid item xs={12}>
            <Typography variant="h2" gutterBottom className={classes.centerify}>
              Awards and Honors
            </Typography>
          </Grid>
          <Grid item xs={12}>
          <Typography variant="h6" className={classes.textCenter}>
              <u>Revelle College Provost’s Honors Certificate, Sept 2020</u>
            </Typography>
            <Typography variant="body1" gutterBottom className={classes.textCenter}>
              Honored for achieving a minimum GPA of 3.5 for all quarters that I have been at UC San Diego
            </Typography>
            <Typography variant="h6" className={classes.textCenter}>
              <u>Outstanding Leadership Award, Dec 2019</u>
            </Typography>
            <Typography variant="body1" gutterBottom className={classes.textCenter}>
              Awarded for exceptional efforts in guiding others and ensuring the success of {"\'"}Pick-A-Pal{"\'"} event 
            </Typography>
            <Typography variant="h6" className={classes.textCenter}>
              <u>Exceptional Diligence Award, Dec 2019</u>
            </Typography>
            <Typography variant="body1" gutterBottom className={classes.textCenter}>
              For outstanding contribution to the events held in the Fall quarter by RHA
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Dock>
  );
};