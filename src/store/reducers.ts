import update from 'immutability-helper';
import { ApplicationState, ImageItem, ImagesActionConstants, ImagesActionType } from './types';
import { app } from '../config';

const initialState: ApplicationState = {
  images: app.imagesData as ImageItem[]
};

export default function reducer(state = initialState, action: ImagesActionType) {
  switch (action.type) {
    case ImagesActionConstants.REMOVE:
      return update(state, {
        images: { $set: state.images.filter(item => item.id !== action.payload.imageId) }
      });

    case ImagesActionConstants.RENAME:
      return update(state, {
        images: {
          $set: state.images.map((item) => {
            if (item.id === action.payload.imageId) {
              item.name = action.payload.filename;
            }
            return item;
          })
        }
      });

    default: {
      return state;
    }
  }
}
