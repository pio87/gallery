import { app } from '../config';

export const getThumbnailUrl = (imageId: string) => {
  return `${app.imagesBaseUrl}/${imageId}-tl.jpeg`
};

export const getPreviewUrl = (imageId: string) => {
  return `${app.imagesBaseUrl}/${imageId}-u.jpg`
};
