const initialState = {
    usersList: [],
    authUser: null
}

export default function filtersReducer(state = initialState, action) {
    switch (action.type) {
        case 'App/usersList': {
            return {
                // Again, one less level of nesting to copy
                ...state,
                usersList: action.payload
            }
        }
        case 'App/authUser': {
            return {
                // Again, one less level of nesting to copy
                ...state,
                authUser: action.payload
            }
        }
        default:
            return state
    }
}