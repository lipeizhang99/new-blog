// redux/rootReducer.ts
import { combineReducers } from '@reduxjs/toolkit'
import modeReducer from './mode/index'

const rootReducer = combineReducers({
  mode: modeReducer,
})

export default rootReducer
