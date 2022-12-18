// ---
// patches:
//   - path: "app/models/RootStore.ts"
//     after: "from \"mobx-state-tree\"\n"
//     insert: "import { ChatRoomStoreModel } from \"./ChatRoomStore\"\n"
//     skip: false
//   - path: "app/models/RootStore.ts"
//     after: "types.model(\"RootStore\").props({\n"
//     insert: "  chatRoomStore: types.optional(ChatRoomStoreModel, {} as any),\n"
//     skip: false
//   - path: "app/models/index.ts"
//     append: "export * from \"./ChatRoomStore\"\n"
//     skip:
// ---
import { Instance, SnapshotIn, SnapshotOut, types } from "mobx-state-tree"
import { ChatRoomModel } from "./ChatRoom"
import { withSetPropAction } from "./helpers/withSetPropAction"

/**
 * Model description here for TypeScript hints.
 */
export const ChatRoomStoreModel = types
  .model("ChatRoomStore")
  .props({
    chatRooms: types.array(ChatRoomModel),
  })
  .actions(withSetPropAction)
  .views((self) => ({})) // eslint-disable-line @typescript-eslint/no-unused-vars
  .actions((self) => ({})) // eslint-disable-line @typescript-eslint/no-unused-vars

export interface ChatRoomStore extends Instance<typeof ChatRoomStoreModel> {}
export interface ChatRoomStoreSnapshotOut extends SnapshotOut<typeof ChatRoomStoreModel> {}
export interface ChatRoomStoreSnapshotIn extends SnapshotIn<typeof ChatRoomStoreModel> {}
export const createChatRoomStoreDefaultModel = () => types.optional(ChatRoomStoreModel, {})
