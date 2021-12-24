import { combineReducers } from 'redux'
import AppReducer from './reducer/appSlice'

const rootReducer = combineReducers({
  // Define a top-level state field named `todos`, handled by `todosReducer`
  Apps: AppReducer

})

export default rootReducer