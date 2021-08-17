import {ADD_TREE, REMOVE_TREE, FETCH_TREES, DATABASE_INSPECTING, LOADING_DATA, DATABASE_SAVING, ERROR} from './actionTypes' 

const getToken = () => {
    const now = new Date(Date.now()).getTime()
    const timeAllowed = 1000 * 60 * 30;
    const timeSinceLastLogin = now - localStorage.getItem("lastLoginTime")
    if (timeSinceLastLogin < timeAllowed) {
        return localStorage.getItem("token")
    }
}

export function addTree(tree){

    return(dispatch) => {
        const configObj = {
            method: 'POST',
            headers: {
                accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: getToken()
            },
            body: JSON.stringify(tree)
        }

    dispatch({type: DATABASE_SAVING, payload: true})
    fetch("http://localhost:3000/trees", configObj)
        .then(resp => {
            if (resp.ok) {
                return resp
                        .json()
                        .then(json => dispatch({type: ADD_TREE, payload: json.data}))
            } else {
                return resp
                        .json()
                        .then((errors) => {
                            dispatch({type: ERROR, payload: errors})
                            return Promise.reject(errors);
                        })
            }
        })
        .catch(err => dispatch({type: ERROR, payload: err})) 
    }
}

export function fetchTrees() {
    return(dispatch) => {
        dispatch({type: LOADING_DATA})
        fetch("http://localhost:3000/trees", {
            headers: {
              "Content-Type": "application/json"
            },
        })
        .then(resp => {
            if (resp.ok) {
                return resp
                        .json()
                        .then(json => {
                            //debugger
                            dispatch( {type: FETCH_TREES, payload: json} ) 
                        }
                            )
            } else {
                return resp
                        .json()
                        .then((errors) => {
                            dispatch({type: ERROR, payload: errors})
                            return Promise.reject(errors);
                        });
            }
        })
        .catch(err => dispatch({type: ERROR, payload: err}))      
    }
}

export function removeTree() {
    
}