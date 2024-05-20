import { Instance, SnapshotIn, SnapshotOut, types } from "mobx-state-tree"
import { withSetPropAction } from "./helpers/withSetPropAction"
import { PhotoModel } from "./Photo"
import { api } from "app/services/api"

/**
 * Model description here for TypeScript hints.
 */
export const PhotoStoreModel = types
  .model("PhotoStore")
  .props({
    photos: types.array(PhotoModel),
  })
  .actions(withSetPropAction)
  .views((store) => ({
    get allPhotos() {
      return store.photos
    },
  })) // eslint-disable-line @typescript-eslint/no-unused-vars
  .actions((store) => ({
    async fetchPhotos() {
      const response = await api.getEpisodes()
      if (response.kind === "ok") {
        store.setProp("photos", response.photos)
      } else {
        console.error(`Error fetching photos: ${JSON.stringify(response)}`)
      }
    },
  })) // eslint-disable-line @typescript-eslint/no-unused-vars

export interface PhotoStore extends Instance<typeof PhotoStoreModel> {}
export interface PhotoStoreSnapshotOut extends SnapshotOut<typeof PhotoStoreModel> {}
export interface PhotoStoreSnapshotIn extends SnapshotIn<typeof PhotoStoreModel> {}
export const createPhotoStoreDefaultModel = () => types.optional(PhotoStoreModel, {})
