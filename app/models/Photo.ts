import { Instance, SnapshotIn, SnapshotOut, types } from "mobx-state-tree"
import { withSetPropAction } from "./helpers/withSetPropAction"

/**
 * Model description here for TypeScript hints.
 */
export const PhotoModel = types
  .model("Photo")
  .props({
    albumId: types.number,
    id: types.number,
    title: types.string,
    url: types.string,
    thumbnailUrl: types.string,
  })
  .actions(withSetPropAction)
  .views((self) => ({})) // eslint-disable-line @typescript-eslint/no-unused-vars
  .actions((self) => ({})) // eslint-disable-line @typescript-eslint/no-unused-vars

export interface Photo extends Instance<typeof PhotoModel> {}
export interface PhotoSnapshotOut extends SnapshotOut<typeof PhotoModel> {}
export interface PhotoSnapshotIn extends SnapshotIn<typeof PhotoModel> {}
