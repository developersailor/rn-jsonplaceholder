import { PhotoStoreModel } from "./PhotoStore"

test("can be created", () => {
  const instance = PhotoStoreModel.create({})

  expect(instance).toBeTruthy()
})
