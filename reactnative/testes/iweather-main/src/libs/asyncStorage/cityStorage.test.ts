import { getStorageCity } from "./cityStorage";

describe("Storage: CityStorage", () => {
    it("should be return null when don´t have a city storaged", async () => {
        const response = await getStorageCity()
        console.log(response)
    })
})