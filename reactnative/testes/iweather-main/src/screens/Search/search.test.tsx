import { render, screen, fireEvent, waitFor } from "@__tests__/utils/customRender"
import { Search } from "."
import { api } from "@services/api"
import { mockCityApiResponse } from "@__tests__/mocks/mckCityApiResponse"

describe("SEARCH", () => {
    it("should be show city option", async ()=> {
        jest.spyOn(api, 'get').mockResolvedValue({data: mockCityApiResponse})
        render(<Search />)

        const searchInput = screen.getByTestId("search-input")
        fireEvent.changeText(searchInput, "São Paulo")

        const option = await waitFor(() => screen.findByText(/são paulo/i))
        expect(option).toBeTruthy()
    })
})