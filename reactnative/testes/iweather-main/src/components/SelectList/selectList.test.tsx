import {render, screen, fireEvent } from '@testing-library/react-native'
import { SelectList } from "@components/SelectList"
describe("Component: SelecList", () => {
    it("should be return city details selected", () => {
        const data = [
            {id: '1', name: 'Campinas', latitude: 123, longitude: 456},
            {id: '2', name: 'Campo Grande', latitude: 789, longitude: 987}
        ]

        const onPress = jest.fn()
        render(
            <SelectList 
                data={data}
                onChange={() => {}}
                onPress={onPress}
            />
        )
        //const selectedCity = screen.getAllByText("campinas", {exact: false}) 
        const selectedCity = screen.getByText(/campinas/i) // regex
        //console.log(selectedCity)
        fireEvent.press(selectedCity)
        
        // quantidades de vezes que é chamada
        //expect(onPress).toHaveBeenCalledTimes(1)

        // quem foi chamado    
        expect(onPress).toHaveBeenCalledWith(data[0])
    })

    it("not should be show options when data props  is empty.", () => {
        render(
            <SelectList 
                data={[]}
                onChange={() => {}}
                onPress={() => {}}
            /> 
        )

        const options = screen.getByTestId("options")
        expect(options.children).toHaveLength(0)
        //console.log(options)
    })
})