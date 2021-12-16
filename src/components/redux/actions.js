
export const ADD_ISSUE = "ADD_ISSUE"
export const UPDATE_ISSUE = "UPDATE_ISSUE"
export const DELETE_ISSUE = "DELETE_ISSUE"

export const add_issue = (issue) =>{
    return{type:ADD_ISSUE,payload:issue}
}

export const update_issue = (issue) =>{
    return{type:UPDATE_ISSUE,payload:issue}
}


export const delete_issue = (issue) =>{
    return{type:DELETE_ISSUE,payload:issue}
}
