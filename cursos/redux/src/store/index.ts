import { configureStore, createSlice } from "@reduxjs/toolkit";

import {useSelector,TypedUseSelectorHook} from 'react-redux'

// const todoSlice = createSlice({
//     name: 'Todo',
//     initialState: ['estudar redux', 'estudar React query'],

//     reducers: {
//         add: (state, action) => {
//             //console.log(state, action)
//             state.push(action.payload.newTodo)
//         }
//     }
// })

export const store = configureStore({
    // reducer: {
    //     todo: todoSlice.reducer
    // }
    reducer:{}
})

// export const { add } = todoSlice.actions


export type RootState= ReturnType<typeof store.getState>
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector