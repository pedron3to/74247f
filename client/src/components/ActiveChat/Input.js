import React, { useState, useRef } from 'react';

import {
  FormControl,
  FilledInput,
  InputAdornment,
  Button,
  Box,
  Tooltip,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Send from '@material-ui/icons/Send';

import PreviewUploadImage from './PreviewUploadImage';
import UploadImage from './UploadImage';

import UploadIcon from './assets/upload.svg';
import useOutsidePreviewUploadImage from '../../hooks/useOutsidePreviewUploadImage';
import axios from 'axios';

const cloudinaryInstance = axios.create();

const useStyles = makeStyles(() => ({
  root: {
    justifySelf: 'flex-end',
    marginTop: 15,
  },
  input: {
    height: 70,
    backgroundColor: '#F4F6FA',
    borderRadius: 8,
    marginBottom: 20,
  },
  upload: {
    cursor: 'pointer',
  },
  container: {
    position: 'relative',
  },
}));

const Input = ({ otherUser, conversationId, user, postMessage }) => {
  const classes = useStyles();
  const previewUploadImageRef = useRef(null);

  const [text, setText] = useState('');
  const [images, setImages] = useState(null);

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const previewUploadImageRefCallback = () => {
    setImages(null);
  };

  useOutsidePreviewUploadImage(
    previewUploadImageRef,
    previewUploadImageRefCallback
  );

  const handleUploadImage = async (event) => {
    const form = event.target.files;
    const formData = new FormData();

    const promises = await Object.values(form).map(async (file) => {
      formData.append('file', file);
      formData.append('upload_preset', `${process.env.REACT_APP_CLOUDPRESET}`);

      return new Promise((resolve) => {
        cloudinaryInstance
          .post(`${process.env.REACT_APP_CLOUDINARY}`, formData)
          .then((res) => {
            resolve(res.data.secure_url);
          })
          .catch((err) => console.error(err));
      });
    });

    const cloudinaryImages = await Promise.all(promises);

    setImages(cloudinaryImages);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formElements = form.elements;
    // add sender user info if posting to a brand new convo, so that the other user will have access to username, profile pic, etc.
    const reqBody = {
      text: formElements.text.value,
      recipientId: otherUser.id,
      conversationId,
      sender: conversationId ? null : user,
      attachments: images,
    };
    await postMessage(reqBody);
    setText('');
    setImages(null);
  };

  const handleDeleteCurrentData = (index) => {
    setImages((items) => items.filter((_, i) => i !== index));
  };

  return (
    <Box className={classes.container} ref={previewUploadImageRef}>
      {images && (
        <PreviewUploadImage
          images={images}
          handleDeleteImage={(index) => handleDeleteCurrentData(index)}
          handleUploadImage={(e) => {
            handleUploadImage(e);
          }}
        />
      )}

      <form className={classes.root} onSubmit={handleSubmit}>
        <FormControl fullWidth hiddenLabel>
          <FilledInput
            endAdornment={
              <InputAdornment position='end'>
                {images ? (
                  <Button type='submit'>
                    <Send />
                  </Button>
                ) : (
                  <>
                    <UploadImage handleUploadImage={handleUploadImage}>
                      <Tooltip title='Add image'>
                        <Box
                          component='img'
                          src={UploadIcon}
                          alt='upload'
                          aria-label='upload icon'
                          className={classes.upload}
                        />
                      </Tooltip>
                    </UploadImage>
                  </>
                )}
              </InputAdornment>
            }
            classes={{ root: classes.input }}
            disableUnderline
            placeholder='Type something...'
            value={text}
            name='text'
            onChange={handleChange}
          />
        </FormControl>
      </form>
    </Box>
  );
};

export default Input;
