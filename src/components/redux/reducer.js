import {ADD_ISSUE, UPDATE_ISSUE, DELETE_ISSUE} from "./actions"

const initState = {

}

const reducer = (state = initState, action) => {
    switch (action.type) {
        case ADD_ISSUE:
            return {
                ...state,
                
            }
        case UPDATE_ISSUE:
            return {
                ...state,
                
            }
        case DELETE_ISSUE:
            return{
                ...state,
                
            }

        default:
            return state
    }
}

export default reducer