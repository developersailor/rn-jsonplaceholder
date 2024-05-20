import { PhotosModel } from "./Photo"

test("can be created", () => {
  const instance = PhotosModel.create({})

  expect(instance).toBeTruthy()
})
