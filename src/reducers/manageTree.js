
export const manageTree = (state = {
    trees: []
  }, action) => {
    switch (action.type) {
  
      case 'ADD_TREE':
  
        const tree = { text: action.text };
        return {
          ...state,
          trees: [ ...state.trees, tree]
        }
  
      case 'DELETE_TREE':
        const trees = state.trees.filter(tree => tree.id !== action.id);
        return { ...state, trees}
  
      default:
        return state;
  
    }
  };