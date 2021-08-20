import {ADD_TREE, REMOVE_TREE, FETCH_TREES, DATABASE_INSPECTING, DATABASE_SAVING, ERROR} from '../actions/actionTypes' 

export const manageTree = (state = {
    trees: [],
    loading: false
  }, action) => {
    switch (action.type) {
        
        case DATABASE_INSPECTING:
            return {...state, loading: action.payload}
        case DATABASE_SAVING:
            return {...state, loading: action.payload}
        case FETCH_TREES:
            return {trees: action.payload.data, loading: false, error: ""}
        case ERROR:
            return {...state, error: action.payload, loading: false}
        case ADD_TREE:
            return {...state, trees: [ ...state.trees, action.payload], loading: false}
            case REMOVE_TREE:
                const trees = state.trees.filter(tree => tree.id !== action.id);
                debugger
            return { ...state, trees}
  
        default:
            return state;
    
    }
  };