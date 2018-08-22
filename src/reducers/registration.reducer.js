const { userConstants } = require("../constants/user.constants")

export function registration (state ={}, action) {
    switch(action.type) {
        case userConstants.REGISTER_REQUEST:
            return {
                registering: true
            }
        case userConstants.REGISTER_SUCCESS:
            return {
                registering: false
            }
        case userConstants.REGISTER_FAILURE:
            return {
                err: action.err
            }
        default: 
            return state;
    }
}