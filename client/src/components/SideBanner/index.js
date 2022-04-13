import React from "react";
import { Box, Typography } from "@material-ui/core";
import PeopleImage from "./assets/bg-img.png";
import Bubble from "./assets/bubble.svg";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: "100vh",
    width: "41.5vw",
    backgroundImage: `linear-gradient(180deg, rgba(58, 141, 255, 0.9), rgba(134, 185, 255, 0)  ), url(${PeopleImage})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    mixBlendMode: "normal",
    OpacityTwoTone: 0.85,
  },
  bubble: {
    width: 66,
    marginTop: "28vh",
  },
  slogan: {
    width: 269,
    fontSize: 26,
    lineHeight: "40px",
    textAlign: "center",
    color: "#fff",
    marginTop: 40,
  },
}));

const SideBanner = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <img
        className={classes.bubble}
        src={Bubble}
        alt='bubble'
        aria-label='bubble image'
      />
      <Typography className={classes.slogan}>
        Converse with anyone with any language
      </Typography>
    </Box>
  );
};

export default SideBanner;
