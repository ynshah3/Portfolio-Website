import React, { ReactNode } from 'react';
import clsx from 'clsx';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import {
  Drawer,
  CssBaseline,
  AppBar,
  Toolbar,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Box,
  Grid,
  Link
} from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ImageIcon from '@material-ui/icons/Image';
import ContactsIcon from '@material-ui/icons/Contacts';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Image from 'next/image';

import Logo from '../../../public/favicon.ico';
import { colors } from '../theme/colors';

const drawerWidth = 200;

const styles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      backgroundColor: colors.white,
      minHeight: '100vh'
    },
    appBar: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginRight: drawerWidth,
      backgroundColor: colors.white
    },
    appBarMargin: {
      marginTop: 64,
    },
    margin: {
      marginLeft: 50,
      marginRight: 50
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0
    },
    drawerPaper: {
      width: drawerWidth,
      border: 'none',
      backgroundColor: colors.lightGold
    },
    drawerContainer: {
      overflow: 'auto'
    },
    toolbar: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      padding: theme.spacing(3)
    },
    title: {
      flexGrow: 1
    },
    goldColor: {
      color: colors.darkGold
    }
  })
);

/**
 * The title bar consisting of the logo and the side drawer containing
 * links to different pages
 */
export const Dock = (props: { children: ReactNode }) => {
  const classes = styles();

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
      <Box className={clsx(classes.content, classes.appBarMargin)}>
        {props.children}
      </Box>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        anchor="right"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <List className={classes.appBarMargin}>
          <Link href="/" color="inherit" underline="hover">
            <ListItem button key="Home">
              <ListItemIcon><HomeIcon className={classes.goldColor} /></ListItemIcon>
              <ListItemText primary="Home" />
            </ListItem>
          </Link>
          <Link href="/about" color="inherit" underline="hover">
            <ListItem button key="About">
              <ListItemIcon><InfoIcon className={classes.goldColor} /></ListItemIcon>
              <ListItemText primary="About" />
            </ListItem>
          </Link>
          <Link href="/achievements" color="inherit" underline="hover">
            <ListItem button key="Achievements">
              <ListItemIcon><FavoriteIcon className={classes.goldColor} /></ListItemIcon>
              <ListItemText primary="Achievements" />
            </ListItem>
          </Link>
          <Link href="/portfolio" color="inherit" underline="hover">
            <ListItem button key="Portfolio">
              <ListItemIcon><DashboardIcon className={classes.goldColor} /></ListItemIcon>
              <ListItemText primary="Portfolio" />
            </ListItem>
          </Link>
          <Link href="/paintings" color="inherit" underline="hover">
            <ListItem button key="Paintings">
              <ListItemIcon><ImageIcon className={classes.goldColor} /></ListItemIcon>
              <ListItemText primary="Paintings" />
            </ListItem>
          </Link>
          <Link href="/contact" color="inherit" underline="hover">
            <ListItem button key="Contact">
              <ListItemIcon><ContactsIcon className={classes.goldColor} /></ListItemIcon>
              <ListItemText primary="Contact" />
            </ListItem>
          </Link>
        </List>
      </Drawer>
    </Box>
  );
}