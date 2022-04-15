import React from "react";
import { Box } from "@material-ui/core";

import SideBanner from "../SideBanner";
import useDesktop from "../../hooks/useDesktop";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  boxContainer: {
    display: "flex",
    height: "100vh",
    width: "100vw",
  },
  contentContainer: {
    flex: 1,
    marginRight: "auto",
    marginLeft: "auto",
    [theme.breakpoints.down("sm")]: {
      alignItems: "center",
    },
  },
  contentWrapper: {
    width: 460,
    marginLeft: "auto",
    marginRight: 42,
    [theme.breakpoints.down("sm")]: {
      width: "fit-content",
      marginRight: "auto",
    },
    [theme.breakpoints.up("lg")]: {
      marginRight: "auto",
    },
  },
}));

const Layout = ({ children }) => {
  const classes = useStyles();
  const { isDesktop } = useDesktop();

  return (
    <Box className={classes.boxContainer}>
      {isDesktop && <SideBanner />}
      <Box className={classes.contentContainer}>
        <Box className={classes.contentWrapper}>{children}</Box>
      </Box>
    </Box>
  );
};

export default Layout;
