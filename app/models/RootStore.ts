import { Instance, SnapshotOut, types } from "mobx-state-tree"
import { ChatRoomStoreModel } from "./ChatRoomStore"

/**
 * A RootStore model.
 */
export const RootStoreModel = types.model("RootStore").props({
  // @demo remove-current-line
  chatRoomStore: types.optional(ChatRoomStoreModel, {}),
})

/**
 * The RootStore instance.
 */
export interface RootStore extends Instance<typeof RootStoreModel> {}
/**
 * The data of a RootStore.
 */
export interface RootStoreSnapshot extends SnapshotOut<typeof RootStoreModel> {}
