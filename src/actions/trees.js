import {ADD_TREE, REMOVE_TREE, FETCH_TREES, DATABASE_INSPECTING, LOADING_DATA, DATABASE_SAVING, ERROR} from './actionTypes' 

const getToken = () => {
    const now = new Date(Date.now()).getTime()
    const timeAllowed = 1000 * 60 * 30;
    const timeSinceLastLogin = now - localStorage.getItem("lastLoginTime")
    if (timeSinceLastLogin < timeAllowed) {
        return localStorage.getItem("token")
    }
}

const checkForType = (json) => {
    for (const el in json) {
        if (el === "id") {
            json[el] = parseInt(json[el])
        }
        else if (typeof json[el] === 'object') {
            checkForType(json[el])
        }
    }
    return json  
}

export function addTree(tree){
    return(dispatch) => {
        const configObj = {
            method: 'POST',
            headers: {
                accept: 'application/json',
                Authorization: getToken()
            },
            body: tree
        }
    dispatch({type: DATABASE_SAVING, payload: true})
    return fetch("http://localhost:3000/trees", configObj)
        .then(resp => {
            if (resp.ok) {
                return resp
                        .json()
                        .then(json => {
                            checkForType(json)    
                            dispatch({type: ADD_TREE, payload: json.data})
                        })
            } else {
                return resp
                        .json()
                        .then((errors) => {
                            dispatch({type: ERROR, payload: errors})
                            return Promise.reject(errors);
                        })
            }
        })
        // .catch(err => dispatch({type: ERROR, payload: err})) 
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
                            console.log(json)
                            checkForType(json)
                            dispatch( {type: FETCH_TREES, payload: json} ) 
                        })
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

export const removeTree = (treeId) => (dispatch) => {
        const configObj = {
            method: "DELETE",
            headers: {
                accept: "application/json",
                Authorization: getToken()
            }
        }
        dispatch({type: DATABASE_INSPECTING, payload: true})
        fetch(`http://localhost:3000/trees/${treeId}`, configObj)
        .then(resp => {
            if (resp.ok) {
                return resp
                .json()
                .then(dispatch({type: REMOVE_TREE, payload: parseInt(treeId)}))
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
