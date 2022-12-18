// ---
// patches:
//   - path: "app/models/RootStore.ts"
//     after: "from \"mobx-state-tree\"\n"
//     insert: "import { ChatRoomModel } from \"./ChatRoom\"\n"
//     skip: true
//   - path: "app/models/RootStore.ts"
//     after: "types.model(\"RootStore\").props({\n"
//     insert: "  chatRoom: types.optional(ChatRoomModel, {} as any),\n"
//     skip: true
//   - path: "app/models/index.ts"
//     append: "export * from \"./ChatRoom\"\n"
//     skip:
// ---
import { Instance, SnapshotIn, SnapshotOut, types } from "mobx-state-tree"
import { withSetPropAction } from "./helpers/withSetPropAction"

/**
 * Model description here for TypeScript hints.
 */
export const ChatRoomModel = types
  .model("ChatRoom")
  .props({
    id: "",
    createdAt: "", // Ex: 2022-08-12 21:05:36
    name: "",
    image: "",
  })
  .actions(withSetPropAction)
  .views((self) => ({})) // eslint-disable-line @typescript-eslint/no-unused-vars
  .actions((self) => ({})) // eslint-disable-line @typescript-eslint/no-unused-vars

export interface ChatRoom extends Instance<typeof ChatRoomModel> {}
export interface ChatRoomSnapshotOut extends SnapshotOut<typeof ChatRoomModel> {}
export interface ChatRoomSnapshotIn extends SnapshotIn<typeof ChatRoomModel> {}
export const createChatRoomDefaultModel = () => types.optional(ChatRoomModel, {})
