import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Close from '@material-ui/icons/Close';

const useStyles = makeStyles(() => ({
  container: {
    width: 250,
    height: 250,
    position: 'relative',
    marginRight: 16,
    '&:nth-child(1)': {
      marginRight: 0,
    },
    '&:last-child': {
      marginRight: 0,
    },
    '&:nth-child(2)': {
      marginLeft: 16,
    },
  },
  image: {
    borderRadius: 4,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  close: {
    position: 'absolute',
    display: 'block',
    top: 16,
    right: 16,
  },
}));

const CardImage = ({ key, url, handleDeleteCurrentData }) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <img src={url} alt='uploaded' className={classes.image} />

      <Close
        arial-label='Close icon'
        onClick={handleDeleteCurrentData}
        className={classes.close}
      />
    </div>
  );
};
export default CardImage;
