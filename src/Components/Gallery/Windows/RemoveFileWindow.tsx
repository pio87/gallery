import React from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@material-ui/core';
import classes from './Windows.module.scss';
import { ImageItem } from '../../../store/types';
import { removeImage } from '../../../store/actions';
import { useDispatch } from 'react-redux';


type RemoveFileWindowProps = {
  open: boolean;
  onCloseClick: () => void;
  image: ImageItem;
};

const RenameFileWindow: React.FC<RemoveFileWindowProps> = ({ open, onCloseClick, image }) => {
  const dispatch = useDispatch();

  const onSubmit = () => {
    dispatch(removeImage({ imageId: image.id }));
    onCloseClick();
  };

  return (
    <Dialog
      open={open}
      scroll={'paper'}
      onBackdropClick={onCloseClick}
      PaperProps={{
        classes: {
          root: classes.dialogPaper
        }
      }}
    >
      <DialogTitle>Remove image?</DialogTitle>
      <DialogContent>
        <p>Are you sure?</p>
      </DialogContent>
      <DialogActions>
        <Button variant="contained" onClick={onCloseClick}>Cancel</Button>
        <Button variant="contained" color="primary" onClick={onSubmit}>Submit</Button>
      </DialogActions>
    </Dialog>
  );
};

export default RenameFileWindow;
