import { ChatStoreModel } from "./ChatStore"

test("can be created", () => {
  const instance = ChatStoreModel.create({})

  expect(instance).toBeTruthy()
})
