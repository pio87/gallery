import React, { useState } from 'react';
import classes from './Windows.module.scss';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@material-ui/core';
import { ImageItem } from '../../../store/types';
import { renameImage } from '../../../store/actions';
import { useDispatch } from 'react-redux';


type RenameFileWindowProps = {
  open: boolean;
  onCloseClick: () => void;
  image: ImageItem;
};

const RenameFileWindow: React.FC<RenameFileWindowProps> = ({ open, onCloseClick, image }) => {
  const [filename, setFilename] = useState(image.name);
  const dispatch = useDispatch();

  const onSubmit = () => {
    dispatch(renameImage({ filename, imageId: image.id }));
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
      <DialogTitle>Rename file</DialogTitle>
      <DialogContent>
        <TextField
          fullWidth
          label="File name"
          value={filename}
          onChange={(e) => setFilename(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button variant="contained" onClick={onCloseClick}>Cancel</Button>
        <Button
          variant="contained"
          color="primary"
          onClick={onSubmit}
          disabled={filename.trim().length === 0}
        >Submit</Button>
      </DialogActions>
    </Dialog>
  );
};

export default RenameFileWindow;
