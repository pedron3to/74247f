import React from 'react';
import { Box, Typography } from '@material-ui/core';
import PeopleImage from './assets/bg-img.png';
import Bubble from './assets/bubble.svg';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    position: 'absolute',
    height: '100vh',
    width: 425,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    mixBlendMode: 'normal',
    backgroundImage: `url(${PeopleImage})`,
  },
  overlay: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundImage: 'linear-gradient(180deg, #3A8DFF 0%, #86B9FF 85% )',
    height: '100vh',
    width: 425,
    opacity: 0.85,
  },
  content: {
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: '100vh',
    width: 425,
    opacity: 1,
  },
  bubble: {
    width: 66,
    marginTop: 199.5,
  },
  slogan: {
    width: 269,
    fontSize: 26,
    lineHeight: '40px',
    textAlign: 'center',
    color: '#fff',
    marginTop: 40,
  },
}));

const SideBanner = () => {
  const classes = useStyles();

  return (
    <>
      <Box className={classes.root} />
      <Box className={classes.overlay} />

      <Box className={classes.content}>
        <Box
          component='img'
          className={classes.bubble}
          src={Bubble}
          alt='bubble'
          aria-label='bubble image'
        />
        <Typography className={classes.slogan}>
          Converse with anyone with any language
        </Typography>
      </Box>
    </>
  );
};

export default SideBanner;
