import { render, screen } from '@testing-library/react-native'

import { Input } from '@components/Input'

describe("Component Input", () => {
    it("should be render without activity indicator if is loading prop undefined", () => {
        render(<Input />)

        const activitindicator = screen.queryByTestId("activity-indicator")
        expect(activitindicator).toBeNull()
        //console.log(activitindicator)
    })

    it("should be render without activity indicator if is loading prop true", () => {
        render(<Input isLoading/>)

        const activitindicator = screen.queryByTestId("activity-indicator")
        expect(activitindicator).toBeTruthy()
        //console.log(activitindicator)
    })
})