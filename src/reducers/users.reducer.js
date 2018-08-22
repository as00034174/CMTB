const { userConstants } = require("../constants/user.constants")

export function users(state = {}, action) {
    switch (action.type) {
        case userConstants.GETALL_SUCCESS:
            return {
                loading: false
            };
        case userConstants.GETALL_FAILURE:
            return {
                error: action.error
            };
        case userConstants.GETALL_REQUEST:
            return {
                loading: true
            };
        case userConstants.DELETE_REQUEST:
        return {
            ...state,
            items: state.items.map(user =>
              user.id === action.id
                ? { ...user, deleting: true }
                : user
            )
          };
        case userConstants.DELETE_FAILURE:
            return {
                ...state,
                items: state.items.map(user => {
                    if (user.userID === action.userID) {
                        const { deleting, ...userCopy } = user;

                        return { ...userCopy, deleteError: action.err }
                    }
                    return user;
                })
            }
        default:
            return state;

    }
}