import { combineReducers } from 'redux'
import AppReducer from './Reducer/AppSlice'

const rootReducer = combineReducers({
  // Define a top-level state field named `todos`, handled by `todosReducer`
  Apps: AppReducer

})

export default rootReducer