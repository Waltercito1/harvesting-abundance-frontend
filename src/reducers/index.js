import { combineReducers } from 'redux'
import authReducer from './auth'
import { manageTree } from './manageTree'

export const rootReducer = combineReducers({
    trees: manageTree,
    auth: authReducer
})