import React from 'react';
import { Grid, Link, Typography } from '@material-ui/core';
import Image from 'next/image';

import { styles } from './styles';
import { Dock } from '../../common/Dock';
import Headshot from '../../../public/images/Headshot.png';

/**
 * Display who I am and what I do, and a pic
 */
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
              width={400}
              height={400}
            />
          </Grid>
          <Grid item xs={12} className={classes.flexify}>
            <Typography variant="body1" paragraph className={classes.justify}>
              Hi, I am <Link href="https://www.linkedin.com/in/ynshah3" underline="always">Yash</Link>, and I have designed and developed this website to showcase my portfolio projects.
            </Typography>
            <Typography variant="body1" paragraph className={classes.justify}>
              I have always loved drawing, painting, and creative writing and I still continue to follow
              my talents. I am really interested in Artificial Intelligence and Deep Learning and I have 
              gotten involved in a lot of different things to grow my skills holistically. I have been an undergraduate researcher twice,
              a tutor for <Link href="https://catalog.ucsd.edu/courses/CSE.html" underline="always">CSE 151B</Link>--a Deep Learning course at UCSD, an intern at <Link href="https://optum.com" underline="always">Optum</Link> and <Link href="https://paypal.com" underline="always">PayPal</Link>, and Secretary at <Link href="https://tbp.org" underline="always">Tau Beta Pi</Link>--an engineering honors society. An important aspect of who I am is
              thinking carefully about <Link href="https://www.theatlantic.com/technology/archive/2015/11/programmers-should-not-call-themselves-engineers/414271/" underline="always">not only the Whats of good software development 
              practices, but also the Whys</Link>. I strive to focus on the best <Link href="https://www.nngroup.com/articles/ten-usability-heuristics/" underline="always">User Experience</Link> that a user can get, and I do so through 
              a <Link href="https://www.sciencedirect.com/science/article/abs/pii/S0142694X06000160#:~:text=Designers%20using%20a%20solution%20driven,overall%20solution%20quality%20and%20creativity." underline="always">problem-driven rather than a solution-driven approach</Link>.
            </Typography>
            <Typography variant="body1" paragraph className={classes.justify}>
              Alongside, I like to read books based on the <Link href="https://www.neh.gov/divisions/fedstate/resource/the-humanities-belong-everyone" underline="always">Humanities</Link> - so, genres like History, 
              Literature, Philosophy, Science, etc. I have also ameliorated my writing skills in 
              terms of writing argumentative essays by minoring in Humanities. I bring my knowledge about the importance
              of Diversity, Equity, Inclusion, and Belonging by reading about and researching the lived experiences
              of underrepresented communities and people from different periods throughout history and I use that knowledge to 
              inform my work.
            </Typography>
            <Typography variant="body1" className={classes.justify}>
              I have been really interested in interpretable AI by modeling primate cognition and perception as they relate to 
              vision and understanding how processes within the primate visual cortex allow them to classify visual stimuli very 
              quickly and accurately.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Dock>
  );
}
