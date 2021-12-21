import { ADD_ISSUE, UPDATE_ISSUE, DELETE_ISSUE } from "./actions"
import ISSUES from "../assets/issues"
const initState = {
    list: ISSUES
}

const reducer = (state = initState, action) => {
    switch (action.type) {
        case ADD_ISSUE:
            return {
                ...state,
                list: [...state.list, action.payload],

            }
        case UPDATE_ISSUE:
            return {
                ...state,
                list: state.list.map((issue) => {
                        if (issue.id === action.id) {
                            issue = action.data;
                        }
                        return(issue)
                    })


            }
        case DELETE_ISSUE:
            return {
                ...state,
                list: state.list.filter((issue) => (issue.id !== action.payload))
            }

        default:
            return state
    }
}

export default reducer