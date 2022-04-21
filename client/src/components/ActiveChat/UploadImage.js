import { Box, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  labelUpload: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '&:hover': {
      cursor: 'pointer',
    },
    borderRadius: 4,
  },
  inputUpload: {
    visibility: 'hidden',
    position: 'fixed',
  },
}));

const UploadImage = ({ children, handleUploadImage }) => {
  const classes = useStyles();

  return (
    <>
      <Box component='label' htmlFor='image-upload'>
        <Box
          component='div'
          aria-label='media icon'
          className={classes.labelUpload}
        >
          {children}
        </Box>
      </Box>
      <Box
        component='input'
        multiple
        id='image-upload'
        type='file'
        accept='image/*'
        className={classes.inputUpload}
        onChange={handleUploadImage}
      />
    </>
  );
};

export default UploadImage;
