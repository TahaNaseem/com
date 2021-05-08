const intitialState = {
    user: null,
    loader: false
}

export const userReducer = (state = intitialState, action) => {
    switch (action.type) {
        case "LOGIN_PROCESSING":
            return {
                ...state,
                loader: true,
            }
        case "LOGIN_PROCESSED":
            return {
                ...state,
                loader: false,
                user: action.payload
            }
        case "ERROR":
            return {
                ...state,
                loader: false,
            }
    
        default:
            return state;
    }
}