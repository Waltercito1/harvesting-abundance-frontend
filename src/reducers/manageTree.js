import {ADD_TREE, REMOVE_TREE, FETCH_TREES, DATABASE_INSPECTING, DATABASE_SAVING, ERROR} from '../actions/actionTypes' 

export const manageTree = (state = {
    trees: []
  }, action) => {
    switch (action.type) {
        
        case DATABASE_INSPECTING:
            return {...state, loading: action.payload}
        case DATABASE_SAVING:
            return {...state, loading: action.payload}
        case FETCH_TREES:
            debugger
            return {trees: action.payload, loading: false, error: ""}
        case ERROR:
            return {...state, error: action.payload}
        case ADD_TREE:
            debugger
            const tree = { text: action.text };
            return {...state, trees: [ ...state.trees, tree]}
        case REMOVE_TREE:
            const trees = state.trees.filter(tree => tree.id !== action.id);
            return { ...state, trees}
  
        default:
            return state;
    
    }
  };