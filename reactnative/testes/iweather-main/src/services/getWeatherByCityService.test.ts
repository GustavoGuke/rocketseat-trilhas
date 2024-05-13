import { api } from "./api"
import { mockWeatherAPIResponse } from '@__tests__/mocks/mockWeatherApiResponse'
import { getWeatherByCityService } from "./getWeatherByCityService"
describe("Service: getWeatherByCityService", () => {
    it("should return weather api data formatted", async () => {

        jest.spyOn(api, "get").mockResolvedValue({ data: mockWeatherAPIResponse })

        const response = await getWeatherByCityService({latitude:123, longitude:345})

        expect(response).toHaveProperty("today")
        //console.log(response)
    })
})