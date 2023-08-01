import { configureStore } from '@reduxjs/toolkit'
import componentReducer from './features/componentSlice'

export const store = configureStore({
    reducer: {
        component: componentReducer
    },
})