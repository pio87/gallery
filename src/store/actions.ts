import { ImagesActionConstants, RemoveFileAction, RenameFileAction, RenameFilePayload } from './types';

export const renameImage = (payload: RenameFilePayload): RenameFileAction => ({
  type: ImagesActionConstants.RENAME,
  payload
});

export const removeImage = (payload: { imageId: string; }): RemoveFileAction => ({
  type: ImagesActionConstants.REMOVE,
  payload
});
