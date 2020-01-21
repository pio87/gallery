import React from 'react';
import classes from '../Gallery.module.scss';
import { Fade } from '@material-ui/core';
import { getThumbnailUrl } from '../../../utils/getAwsUrl';
import useImageLoader from '../../../utils/useImageLoader';
import { ImageItem } from '../../../store/types';


type GalleryImageItemProps = {
  image: ImageItem;
  onImageItemClick: (imageId: string) => void
};

const GalleryImageItem: React.FC<GalleryImageItemProps> = ({ image, onImageItemClick }) => {
  const imageUrl = getThumbnailUrl(image.id);
  const [loading] = useImageLoader(imageUrl);

  return (
    <div className={classes.galleryImageItem} onClick={() => onImageItemClick(image.id)} title={image.name}>
      {loading && <div className={classes.imageLoader}/>}

      <Fade in={!loading}>
        <div className={classes.imageWrapper} style={{ backgroundImage: `url(${imageUrl})`}}>
          <div className={classes.imageFiller} style={{ backgroundImage: `url(${imageUrl})`}} />
        </div>
      </Fade>
      <div className={classes.metaWrapper}>
        {image.name}
      </div>
    </div>
  );
}

export default GalleryImageItem;
