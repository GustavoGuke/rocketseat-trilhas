import { CityAPIResponse } from "@services/getCityByNameService";

export const mockCityApiResponse: CityAPIResponse = {
    id: '1',
    name: 'São Paulo',
    sys: {
        country: 'BR',
    },
    coord: {
        lon: 123,
        lat: 456
    }
}