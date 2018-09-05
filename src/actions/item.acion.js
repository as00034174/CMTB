import { itemContants } from '../constants/item.constants'
import { itemService } from '../services/item.service'
import { alertActions } from './alert.actions';
import { history } from '../helpers/history';


export const itemAction = {
    addNewItem,
    getItem,
    getItems,
    getAllItems
}

function addNewItem(state) {
    return dispatch => {
        dispatch(request(state));

        itemService.addNewItem(state)
            .then(item => {
                if (item != null) {
                    dispatch(success(item));
                    history.push('/home');
                }
                else
                    dispatch(failure('Add item have been failed'));
                dispatch(alertActions.error('ADD ITEM FAILURE'));
            })
    };
    function success(user) {
        return { type: itemContants.ADD_SUCCESS, user }
    };
    function request(user) {
        return { type: itemContants.ADD_REQUEST, user }
    };
    function failure(error) {
        return { type: itemContants.ADD_FAILURE, error }
    };
}


function getItem() {
}

function getItems() {
}

function getAllItems() {
}