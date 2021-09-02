import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import Image from 'next/image';

import { styles } from './styles';
import { Dock } from '../../common/Dock';
import Headshot from '../../../public/images/Headshot.png';

export const About = () => {
  const classes = styles();

  return (
    <Dock>
      <Grid container justifyContent="center">
        <Grid item xs={12} sm={12}>
          <Typography variant="h2" gutterBottom className={classes.centerify}>
            About Me
          </Typography>
        </Grid>
        <Grid container spacing={3} direction="row" className={classes.maxWidth}>
          <Grid item xs={12} className={classes.centerify}>
            <Image
              src={Headshot}
              alt="headshot"
              width={300}
              height={400}
            />
          </Grid>
          <Grid item xs={12} className={classes.flexify}>
            <Typography variant="body1" paragraph className={classes.justify}>
              Hi, I am <strong><u>Yash</u></strong>, and I have <u>designed and developed</u> this website as a Portfolio
              to demonstrate my projects.
            </Typography>
            <Typography variant="body1" paragraph className={classes.justify}>
              I have always <strong>loved</strong> <u>drawing and painting</u> and I continue that passion by being
              a <u>Software Engineer / Front End Web Developer</u>. An important aspect of who I am is
              thinking carefully about not only the <code>What</code>s of good software development 
              practices, but also the <code>Why</code>s. I strive to focus on <strong><u>the best</u></strong>
              <em> User Experience</em> that a user can get, and I do so through a <del>solution-driven</del> 
              <strong> problem-driven</strong> approach.
            </Typography>
            <Typography variant="body1" paragraph className={classes.justify}>
              Alongside, I like to read books based on the <strong>Humanities</strong> - so, genres like <u>History, 
              Literature, Philosophy, Science</u>, etc. I have also ameliorated my writing skills in 
              terms of <u>writing argumentative essays</u> by minoring in Humanities.
            </Typography>
            <Typography variant="body1" className={classes.justify}>
              Being a <strong>Computer Science major and a Humanities minor</strong> helps me develop complex web 
              pages by designing them using a user-first approach. Whatever I do is for <strong><u>you all</u> </strong>
              and I keep <strong><u>you all</u></strong> in mind always.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Dock>
  );
}
