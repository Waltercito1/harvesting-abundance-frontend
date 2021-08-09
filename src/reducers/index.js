import { combineReducers } from 'redux'
import { manageTree } from './manageTree'

export const rootReducer = combineReducers({
    trees: manageTree
})