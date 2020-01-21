import React from 'react';
import classes from './ImageDetailsModal.module.scss';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { getPreviewUrl } from '../../../utils/getAwsUrl';
import { CircularProgress, Fade, Grid } from '@material-ui/core';
import useImageLoader from '../../../utils/useImageLoader';
import useOpenHandler from '../../../utils/useOpenHandler';
import RenameFileWindow from '../Windows/RenameFileWindow';
import RemoveFileWindow from '../Windows/RemoveFileWindow';
import { ImageItem } from '../../../store/types';


type ImageDetailsModalProps = {
  activeImage: ImageItem;
  onClose: () => void;
};

const ImageDetailsModal: React.FC<ImageDetailsModalProps> = ({ activeImage, onClose }) => {
  const imageUrl = getPreviewUrl(activeImage && activeImage.id);
  const [loading] = useImageLoader(imageUrl);

  const [renameFileWindowOpen, onRenameFileWindowOpen, onRenameFileWindowClose] = useOpenHandler();
  const [removeFileWindowOpen, onRemoveFileWindowOpen, onRemoveFileWindowClose] = useOpenHandler();

  if (!activeImage) {
    return null;
  }

  return (
    <div className={classes.wrapper}>
      <IconButton title="Close" className={classes.closeButton} onClick={() => onClose()}><CloseIcon/></IconButton>
      <IconButton title="Rename" className={classes.renameButton} onClick={onRenameFileWindowOpen}><EditIcon/></IconButton>
      <IconButton title="Delete" className={classes.removeButton} onClick={onRemoveFileWindowOpen}><DeleteIcon/></IconButton>

      <Grid container className={classes.content}>
        <Grid item xs={6} className={classes.imageWrapper}>
          {loading && <CircularProgress />}
          <Fade in={!loading}>
            <img src={getPreviewUrl(activeImage.id)} alt={activeImage.name}/>
          </Fade>
        </Grid>

        <Grid item xs={6} className={classes.metaWrapper}>
          <h4>Image meta data:</h4>
          <div className={classes.list}>
            <p><strong>File name:</strong> {activeImage.name}</p>
            <p><strong>File extension:</strong> JPG</p>
            <p><strong>Lorem ipsum:</strong> dolor sit amet</p>
            <p><strong>Consectetur:</strong> adipiscing elit</p>
            <p><strong>Consectetur:</strong> adipiscing elit</p>
            <p><strong>Consectetur:</strong> adipiscing elit</p>
            <p><strong>Consectetur:</strong> adipiscing elit</p>
            <p><strong>Consectetur:</strong> adipiscing elit</p>
            <p><strong>Consectetur:</strong> adipiscing elit</p>
            <p><strong>Consectetur:</strong> adipiscing elit</p>
            <p><strong>Consectetur:</strong> adipiscing elit</p>
            <p><strong>Consectetur:</strong> adipiscing elit</p>
            <p><strong>Consectetur:</strong> adipiscing elit</p>
            <p><strong>Consectetur:</strong> the end</p>
          </div>
        </Grid>
      </Grid>

      <RenameFileWindow
        open={renameFileWindowOpen}
        onCloseClick={onRenameFileWindowClose}
        image={activeImage}
      />
      <RemoveFileWindow
        open={removeFileWindowOpen}
        onCloseClick={onRemoveFileWindowClose}
        image={activeImage}
      />
    </div>
  );
}

export default ImageDetailsModal;
