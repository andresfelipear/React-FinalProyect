import { ADD_ISSUE, UPDATE_ISSUE, DELETE_ISSUE, FILTER_ISSUES } from "./actions"
import ISSUES from "../assets/issues"
const initState = {
    list: ISSUES,
    searchList: 0
}

const reducer = (state = initState, action) => {
    switch (action.type) {
        case ADD_ISSUE:
            return {
                ...state,
                list: [...state.list, action.payload],
                searchList: 0
            }
        case UPDATE_ISSUE:
            return {
                ...state,
                list: state.list.map((issue) => {
                    if (issue.id === action.id) {
                        issue = action.data;
                    }
                    return (issue)
                }),
                searchList: 0


            }
        case DELETE_ISSUE:
            return {
                ...state,
                list: state.list.filter((issue) => (issue.id !== action.payload)),
                searchList: 0
            }

        case FILTER_ISSUES:
            const dataFilter = state.list.filter((issue) => (
                String(issue.id).includes(action.payload) || issue.title.includes(action.payload) || issue.url.includes(action.payload) || issue.state.includes(action.payload)
                || issue.created_at.includes(action.payload) || issue.updated_at.includes(action.payload)
            ))

            const noData = [{
                id:"",
                title:"",
                url:"",
                state:"",
                created_at:"",
                updated_at:""
            }]

            return {
                ...state,
                searchList: dataFilter==0?noData:dataFilter
            }

        default:
            return state
    }
}

export default reducer