export type ApplicationState = {
  images: ImageItem[];
};

export type ImageItem = {
  id: string;
  name: string;
}

export type RenameFilePayload = {
  imageId: string;
  filename: string;
};

export type RemoveFileAction = {
  type: ImagesActionConstants.REMOVE;
  payload: { imageId: string; }
};

export type RenameFileAction = {
  type: ImagesActionConstants.RENAME;
  payload: RenameFilePayload;
};

export enum ImagesActionConstants {
  RENAME = 'IMAGES/RENAME',
  REMOVE = 'IMAGES/REMOVE'
}

export type ImagesActionType = RemoveFileAction | RenameFileAction;
