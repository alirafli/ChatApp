import { ChatRoomModel } from "./ChatRoom"

test("can be created", () => {
  const instance = ChatRoomModel.create({})

  expect(instance).toBeTruthy()
})
