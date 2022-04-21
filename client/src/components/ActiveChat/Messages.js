import React, { useEffect, useRef } from 'react';
import { Box } from '@material-ui/core';
import { SenderBubble, OtherUserBubble } from '.';
import moment from 'moment';
import ViewImage from './ViewImage';

const Messages = (props) => {
  const { messages, otherUser, userId } = props;
  const boxMessages = useRef(null);
  const [openViewImage, setOpenViewImage] = React.useState(false);
  const [url, setUrl] = React.useState('');

  const handleClickOpen = (image) => {
    setOpenViewImage(true);
    setUrl(image);
  };

  const handleClose = () => {
    setOpenViewImage(false);
  };

  useEffect(() => {
    const domNode = boxMessages.current;
    if (domNode) {
      domNode.scrollTop = domNode.scrollHeight;
    }
  });

  return (
    <Box
      sx={{ height: '68vh', overflow: 'auto', paddingRight: 8 }}
      ref={boxMessages}
    >
      <ViewImage open={openViewImage} handleClose={handleClose} url={url} />
      {messages.map((message) => {
        const time = moment(message.createdAt).format('h:mm');

        return message.senderId === userId ? (
          <SenderBubble
            key={message.id}
            text={message.text}
            time={time}
            images={message.attachments}
            handleClickOpen={handleClickOpen}
          />
        ) : (
          <OtherUserBubble
            key={message.id}
            text={message.text}
            time={time}
            otherUser={otherUser}
            images={message.attachments}
            handleClickOpen={handleClickOpen}
          />
        );
      })}
    </Box>
  );
};

export default Messages;
