
export const ADD_ISSUE = "ADD_ISSUE"
export const UPDATE_ISSUE = "UPDATE_ISSUE"
export const DELETE_ISSUE = "DELETE_ISSUE"
export const FILTER_ISSUES = "FILTER_ISSUES"

export const add_issue = (issue) =>{
    return{type:ADD_ISSUE,payload:issue}
}

export const update_issue = (oldId, issue) =>{
    return{type:UPDATE_ISSUE,id:oldId,data:issue}
}


export const delete_issue = (issue) =>{
    return{type:DELETE_ISSUE,payload:issue}
}

export const filter_issues = (filterData) =>{
    return{type:FILTER_ISSUES, payload:filterData}
}