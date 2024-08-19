import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  all: false,
  withoutTransfers: false,
  oneTransfers: false,
  twoTransfers: false,
  threeTransfers: false,
}

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setFilter: (state, action) => {
        const key = action.payload
        if (key === 'all') {
            const value = !state.all
            state.withoutTransfers = value
            state.oneTransfers = value
            state.twoTransfers = value
            state.threeTransfers = value
            state.all = value
        } else {
            state[key] = !state[key]
            if (state.withoutTransfers && state.oneTransfers && state.twoTransfers && state.threeTransfers) {
                state.all = true
            } else {
                state.all = false
            }
        }
    }
  },
})

export const { setFilter } = filterSlice.actions

export default filterSlice.reducer