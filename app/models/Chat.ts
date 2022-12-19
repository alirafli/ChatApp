// ---
// patches:
//   - path: "app/models/RootStore.ts"
//     after: "from \"mobx-state-tree\"\n"
//     insert: "import { ChatModel } from \"./Chat\"\n"
//     skip: true
//   - path: "app/models/RootStore.ts"
//     after: "types.model(\"RootStore\").props({\n"
//     insert: "  chat: types.optional(ChatModel, {} as any),\n"
//     skip: true
//   - path: "app/models/index.ts"
//     append: "export * from \"./Chat\"\n"
//     skip:
// ---
import { Instance, SnapshotIn, SnapshotOut, types } from "mobx-state-tree"
import { withSetPropAction } from "./helpers/withSetPropAction"

/**
 * Model description here for TypeScript hints.
 */
export const ChatModel = types
  .model("Chat")
  .props({
    id: "",
    RoomId: "",
    createdAt: "",
    name: "",
    avatar: "",
    message: "",
  })
  .actions(withSetPropAction)
  .views((self) => ({})) // eslint-disable-line @typescript-eslint/no-unused-vars
  .actions((self) => ({})) // eslint-disable-line @typescript-eslint/no-unused-vars

export interface Chat extends Instance<typeof ChatModel> {}
export interface ChatSnapshotOut extends SnapshotOut<typeof ChatModel> {}
export interface ChatSnapshotIn extends SnapshotIn<typeof ChatModel> {}
export const createChatDefaultModel = () => types.optional(ChatModel, {})
