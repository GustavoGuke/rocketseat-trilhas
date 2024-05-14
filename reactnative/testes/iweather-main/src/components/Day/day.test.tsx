import { render, screen } from "@testing-library/react-native"
import { Day } from "."

import clearDay from '@assets/clear_day.svg'
describe("Component: DAY", () => {
    it("should be render day", () => {
     render(<Day 
        data={
            {
                day: '01/08',
                max: '30ºc',
                min: '21ºc',
                weather: 'céu limpo',
                icon: clearDay
            }
        }
        />)
        expect(screen.getByText('01/08')).toBeTruthy()
    })
})