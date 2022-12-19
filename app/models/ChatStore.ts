// ---
// patches:
//   - path: "app/models/RootStore.ts"
//     after: "from \"mobx-state-tree\"\n"
//     insert: "import { ChatStoreModel } from \"./ChatStore\"\n"
//     skip: false
//   - path: "app/models/RootStore.ts"
//     after: "types.model(\"RootStore\").props({\n"
//     insert: "  chatStore: types.optional(ChatStoreModel, {} as any),\n"
//     skip: false
//   - path: "app/models/index.ts"
//     append: "export * from \"./ChatStore\"\n"
//     skip:
// ---
import { Instance, SnapshotIn, SnapshotOut, types } from "mobx-state-tree"
import { api } from "../services/api"
import { ChatModel } from "./Chat"
import { withSetPropAction } from "./helpers/withSetPropAction"

/**
 * Model description here for TypeScript hints.
 */
export const ChatStoreModel = types
  .model("ChatStore")
  .props({
    chats: types.array(ChatModel),
  })
  .actions(withSetPropAction)
  .views((self) => ({})) // eslint-disable-line @typescript-eslint/no-unused-vars
  .actions((self) => ({
    async fetchChats(id) {
      const response = await api.getChats(id)
      // console.log(response.kind)

      if (response.kind === "ok") {
        self.setProp("chats", response.chats)
      } else {
        console.tron.error(`Error fetching episodes: ${JSON.stringify(response)}`, [])
      }
    },
  })) // eslint-disable-line @typescript-eslint/no-unused-vars

export interface ChatStore extends Instance<typeof ChatStoreModel> {}
export interface ChatStoreSnapshotOut extends SnapshotOut<typeof ChatStoreModel> {}
export interface ChatStoreSnapshotIn extends SnapshotIn<typeof ChatStoreModel> {}
export const createChatStoreDefaultModel = () => types.optional(ChatStoreModel, {})
