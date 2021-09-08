import React from 'react';
import clsx from 'clsx';
import {
  Typography,
  Paper,
  Link,
  Grid
} from '@material-ui/core';
import Image from 'next/image';

import { ImageData} from './ImageData';
import { styles } from './styles';
import { Dock } from '../../common/Dock';

/**
 * Display the projects as a grid
 */
export const Portfolio = () => {
  const classes = styles();

  return (
    <Dock>
      <Typography variant="h2" gutterBottom className={classes.centerify}>
        Portfolio Projects
      </Typography>
      <Grid container justifyContent="center" className={classes.root}>
        {ImageData.map((project, index) => (
          <Grid item key={index} className={classes.card}>
            <Image
              src={project.img}
              alt={project.description}
              height={300}
              width={500}
            />
            <Typography variant="h6" className={classes.centerify}>
              {project.title}
            </Typography>
            <Typography variant="body1" className={classes.centerify}>
              {project.description}
            </Typography>
            <Typography variant="caption" className={classes.centerify}>
              ({project.techStack})
            </Typography>
            {project.link !== "" && (
              <Typography variant="body1" className={classes.centerify}>
                Link:{'\ '}
                <Link href={project.link}>
                  {project.link}
                </Link>
              </Typography>
            )}
          </Grid>
        ))}
      </Grid>
    </Dock>
  );
}
