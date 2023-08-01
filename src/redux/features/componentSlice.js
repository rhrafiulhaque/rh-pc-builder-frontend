import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    processor: '',
    motherboard: '',
    ram: '',
    storage: '',
    psu: '',
    monitor: ''
}

export const componentSlice = createSlice({
    name: 'component',
    initialState,
    reducers: {
        addComponent: (state, action) => {
            if (action.payload.category === 'processor') {
                state.processor = action.payload
            } else if (action.payload.category === 'motherboard') {
                state.motherboard = action.payload
            } else if (action.payload.category === 'RAM') {
                state.ram = action.payload
            } else if (action.payload.category === 'power supply unit') {
                state.psu = action.payload
            } else if (action.payload.category === 'storage device') {
                state.storage = action.payload
            } else if (action.payload.category === 'monitor') {
                state.monitor = action.payload
            }
        },
        removeComponent: (state, action) => {
            if (action.payload.category === 'processor') {
                state.processor = ""
            } else if (action.payload.category === 'motherboard') {
                state.motherboard = ""
            } else if (action.payload.category === 'RAM') {
                state.ram = ""
            } else if (action.payload.category === 'power supply unit') {
                state.psu = ""
            } else if (action.payload.category === 'storage device') {
                state.storage = ""
            } else if (action.payload.category === 'monitor') {
                state.monitor = ""
            }
        },
        clearComponent: (state) => {
            state.processor = '';
            state.monitor = '';
            state.motherboard = '';
            state.psu = '';
            state.ram = '';
            state.storage = '';
        }

    },
})

export const { addComponent, removeComponent, clearComponent } = componentSlice.actions

export default componentSlice.reducer