import { createSlice } from '@reduxjs/toolkit'

export const elementSlice = createSlice({
    name: 'counter',
    initialState: {
      elements: [],
      selectedElement: 0,
      selected: false
    },
    reducers: {
      setElement: (state, action) => action.elements,
    //   decrement: (state) => {
    //     state.value -= 1
    //   },
    //   incrementByAmount: (state, action) => {
    //     state.value += action.payload
    //   },
    },
  })

  export const { setElement } = elementSlice.actions;

  export default elementSlice.reducer
