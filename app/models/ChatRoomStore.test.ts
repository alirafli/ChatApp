import { ChatRoomStoreModel } from "./ChatRoomStore"

test("can be created", () => {
  const instance = ChatRoomStoreModel.create({})

  expect(instance).toBeTruthy()
})
