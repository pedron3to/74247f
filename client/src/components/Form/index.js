import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  loginFormWrapper: {
    display: "table-caption",
    width: 380,
    marginTop: ({ marginTop }) => (marginTop ? marginTop : 86),
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      width: "fit-content",
      padding: 16,
    },
  },
  title: {
    marginBottom: 8,
  },
}));

const Form = ({ handleSubmit, title, children, marginTop }) => {
  const classes = useStyles({ marginTop });
  return (
    <form onSubmit={handleSubmit}>
      <Box className={classes.loginFormWrapper}>
        <Typography variant='h1' className={classes.title}>
          {title}
        </Typography>
        {children}
      </Box>
    </form>
  );
};

export default Form;
