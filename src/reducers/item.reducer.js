import { itemContants } from '../constants/item.constants'

export function item(state = {}, action) {
    switch (action.type) {
        case itemContants.ADD_REQUEST:
            return {
                loading: true
            };
        case itemContants.ADD_SUCCESS:
            return {
                loading: false,
                state
            };
        case itemContants.ADD_FAILURE:
            return {
                loading: false,
                error : action.error
            };
        default: 
            return state;
    }
}