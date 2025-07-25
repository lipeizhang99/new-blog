// redux/slices/modeSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface ModeState {
  mode: number
}

const initialState: ModeState = {
  mode: 0,
}

const modeSlice = createSlice({
  name: 'mode',
  initialState,
  reducers: {
    setMode(state, action: PayloadAction<number>) {
      state.mode = action.payload
    },
  },
})

export const { setMode } = modeSlice.actions
export default modeSlice.reducer
