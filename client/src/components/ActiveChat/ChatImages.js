import { Box, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  image: {
    width: 150,
    height: 150,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    objectFit: 'cover',
  },
  multipleImages: {
    width: 100,
    height: 100,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    objectFit: 'cover',
    paddingRight: 4,
    paddingBottom: 4,
  },
  imageWrapper: {
    display: 'flex',
    flexWrap: 'wrap',
    maxWidth: 350,
  },
  multipleImageWrapper: {
    display: 'flex',
    flexWrap: 'wrap',
    maxWidth: 230,
  },
}));

const ChatImages = ({ images, handleClickOpen }) => {
  const classes = useStyles();

  return (
    <Box
      className={
        images.length > 1 ? classes.multiplesImageWrapper : classes.imageWrapper
      }
    >
      {images.map((image) => (
        <Button onClick={() => handleClickOpen(image)}>
          <Box
            component='img'
            src={image}
            alt='attachment'
            className={
              images.length > 1 ? classes.multipleImages : classes.image
            }
          />
        </Button>
      ))}
    </Box>
  );
};

export default ChatImages;
