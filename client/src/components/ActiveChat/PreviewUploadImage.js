import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';
import CardImage from './CardImage';
import UploadImage from './UploadImage';
import { AddAPhoto } from '@material-ui/icons';

const useStyles = makeStyles(() => ({
  mediaContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    position: 'absolute',
    bottom: 100,
    height: '73vh',
    width: '100%',
    borderRadius: 8,
    backgroundColor: '#f4f4f4',
    marginRight: '16px',
  },
  imagesWrapper: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    marginRight: '16px',
    marginBottom: 32,
  },
  imagesContainer: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
  },
  upload: {
    '&:hover': {
      cursor: 'pointer',
    },
  },
}));

const PreviewUploadImage = ({
  images,
  handleDeleteImage,
  handleUploadImage,
}) => {
  const classes = useStyles();
  return (
    <Box component='div' className={classes.mediaContainer}>
      <Box className={classes.imagesWrapper}>
        <Box className={classes.imagesContainer}>
          {images?.map((image, index) => (
            <CardImage
              key={index}
              url={image}
              handleDeleteCurrentData={() => handleDeleteImage(index)}
            />
          ))}
        </Box>
      </Box>
      <UploadImage handleUploadImage={handleUploadImage}>
        <AddAPhoto
          className={classes.upload}
          aria-label='upload icon'
          fontSize='large'
        />
      </UploadImage>
    </Box>
  );
};

export default PreviewUploadImage;
