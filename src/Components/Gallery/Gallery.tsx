import React, { useState } from 'react';
import GalleryGridView from './Grid/GalleryGridView';
import classes from './Gallery.module.scss';
import ImageDetailsModal from './Details/ImageDetailsModal';
import { ImageItem } from '../../store/types';
import useTypedSelector from '../../utils/useTypedSelector';


// TODO: show X images per page for better performance (implement pagination)

const Gallery: React.FC = () => {
  const [activeImageId, setActiveImageId] = useState<string | null>(null);
  const images = useTypedSelector(store => store.images);

  const onImageDetailsWindowOpen = (imageId: string) => {
    setActiveImageId(imageId);
  };
  const onImageDetailsWindowClose = () => {
    setActiveImageId(null);
  };

  return (
    <div className={classes.gallery}>
      <GalleryGridView
        images={images}
        onImageItemClick={onImageDetailsWindowOpen}
      />
      {activeImageId && (
        <ImageDetailsModal
          onClose={onImageDetailsWindowClose}
          activeImage={images.find(img => img.id === activeImageId) as ImageItem}
        />
      )}
    </div>
  );
}

export default Gallery;
