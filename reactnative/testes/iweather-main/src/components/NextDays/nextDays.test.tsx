import { render, screen } from '@testing-library/react-native'

import clearDay from "@assets/clear_day.svg"
import { NextDays } from '.'

describe("Component: NEXTDAY", () => {
    it("should be render day", () => {
        render(
            <NextDays
                data={[
                    { day: '01/08', max: '30ºc', min: '21ºc', weather: 'céu limpo', icon: clearDay },
                    { day: '02/08', max: '25ºc', min: '17ºc', weather: 'nublado', icon: clearDay },
                    { day: '03/08', max: '20', min: '15ºc', weather: 'chuva fraca', icon: clearDay },
                    { day: '04/08', max: '30ºc', min: '21ºc', weather: 'céu limpo', icon: clearDay },
                    { day: '05/08', max: '30ºc', min: '21ºc', weather: 'céu limpo', icon: clearDay },
                ]}
            />
        )
        expect(screen.getByText('02/08')).toBeTruthy()
    })
})