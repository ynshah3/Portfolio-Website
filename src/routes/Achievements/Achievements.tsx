import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import clsx from 'clsx';

import { styles } from './styles';
import { Dock } from '../../common/Dock';

/**
 * Display the achievements, education, and skills
 */
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
              Sept 2019 - June 2023
            </Typography>
            <Typography variant="body1" className={classes.textCenter}>
              B.S. in Computer Science
            </Typography>
            <Typography variant="body1" className={classes.textCenter}>
              Overall GPA: 3.971/4.0<br/>
              Computer Science GPA: 3.945/4.0
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
              Python, Ruby, Java, C++, C, ARM, x86, SQL, NoSQL, HTML/CSS, JavaScript, TypeScript
            </Typography>
            <Typography variant="h6" className={classes.textCenter}>
              <u>Software</u>
            </Typography>
            <Typography variant="body1" gutterBottom className={classes.textCenter}>
              PyTorch, Ruby on Rails, React.js, React Redux, Node.js, Material-UI, GitHub, VSCode, IBM Cloud, LaTeX
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
            <Typography variant="h2" gutterBottom className={clsx(classes.centerify, classes.textCenter)}>
              Awards and Honors
            </Typography>
          </Grid>
          <Grid item xs={12}>
          <Typography variant="h6" className={classes.textCenter}>
              <u>Revelle College Provost’s Honors Certificate, Sept 2020 and Sept 2021</u>
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
        <Grid container justifyContent="center" className={clsx(classes.maxWidth, classes.margin)}>
          <Grid item xs={12}>
            <Typography variant="h2" gutterBottom className={clsx(classes.centerify, classes.textCenter)}>
              Relevant Coursework
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h6" className={classes.textCenter}>
              <u>Computer Science</u>
            </Typography>
            <Typography variant="body1" gutterBottom className={classes.textCenter}>
              CSE 100: Advanced Data Structures<br />
              CSE 101: Algorithms<br />
              CSE 110: Software Engineering<br />
              CSE 120: Operating System<br />
              CSE 127: Computer Security<br />
              CSE 130: Programming Languages and Paradigms<br />
              CSE 142/L: Software Perspective of Computer Architecture<br />
              CSE 151A: Machine Learning<br />
              CSE 151B: Deep Learning<br />
              CSE 156: Natural Language Processing<br />
              CSE 170: Interaction Design<br /><br/>
            </Typography>
            <Typography variant="h6" className={classes.textCenter}>
              <u>Humanities</u>
            </Typography>
            <Typography variant="body1" gutterBottom className={classes.textCenter}>
              HUM 1: Foundations of Western Civilization: Israel and Greece<br />
              HUM 2: Rome, Christianity, and the Middle Ages<br />
              HUM 3: Renaissance, Reformation, and Early Modern Europe<br />
              HUM 5: Modern Culture<br />
              LTEN 107: Chaucer<br />
              LTEN 112: Shakespeare I: Elizabethan Period<br />
              LTEN 127: Victorian Poetry<br />
              VIS 121B: Church and Mosque: Medieval Art and Architecture<br />
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Dock>
  );
};