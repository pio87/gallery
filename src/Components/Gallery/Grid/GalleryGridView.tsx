import React from 'react';
import classes from '../Gallery.module.scss';
import GalleryImageItem from './GalleryImageItem';
import { Grid } from '@material-ui/core';
import { ImageItem } from '../../../store/types';

type GalleryGridViewProps = {
  images: ImageItem[];
  onImageItemClick: (imageId: string) => void
};

const GalleryGridView: React.FC<GalleryGridViewProps> = ({ images, onImageItemClick }) => {
  return (
    <Grid container>
      {images.length === 0 && <div className={classes.noResults}>No results...</div>}
      {images.map(image => (
        <Grid key={image.id} item xs={12} md={4} lg={2}>
          <GalleryImageItem image={image} onImageItemClick={onImageItemClick} />
        </Grid>
      ))}
    </Grid>
  );
}

export default GalleryGridView;
