import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  buttonWrapper: {
    display: "flex",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    marginTop: (props) => props.marginTop,
  },
}));

const ButtonWrapper = (props) => {
  const classes = useStyles(props);

  return <Box className={classes.buttonWrapper}>{props.children}</Box>;
};

export default ButtonWrapper;
