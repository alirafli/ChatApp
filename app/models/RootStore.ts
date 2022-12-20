import { Instance, SnapshotOut, types } from "mobx-state-tree"
import { ChatRoomModel } from "./ChatRoom"
import { ChatRoomStoreModel } from "./ChatRoomStore"
import { ChatStoreModel } from "./ChatStore"

/**
 * A RootStore model.
 */
export const RootStoreModel = types.model("RootStore").props({
  // @demo remove-current-line
  chatRoomStore: types.optional(ChatRoomStoreModel, {}),
  chatStore: types.optional(ChatStoreModel, {}),
  chatRoom: types.optional(ChatRoomModel, {}),
})

/**
 * The RootStore instance.
 */
export interface RootStore extends Instance<typeof RootStoreModel> {}
/**
 * The data of a RootStore.
 */
export interface RootStoreSnapshot extends SnapshotOut<typeof RootStoreModel> {}
