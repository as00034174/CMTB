const { userConstants } = require("../constants/user.constants")

let user = JSON.parse(localStorage.getItem('user'))
const initialState = user ? { loggingIn: true, user } : {};
export function authentication(state = initialState, action) {
    switch (action.type) {
        case userConstants.LOGIN_REQUEST:
            return {
                loggingIn: true,
                user: action.user
            }
        case userConstants.LOGIN_SUCCESS:
            return {
                loggingIn: false,
                user: action.user
            }
        case userConstants.LOGIN_FAILURE:
            return {
                loggingIn: false,
                user: action.user
            };

        case userConstants.LOGOUT:
            return {};
        default:
            return state;
    }


}