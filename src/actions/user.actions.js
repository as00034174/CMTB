// const { request } = require('https');

const { userConstants } = require('../constants/user.constants')
const { userService } = require('../services/user.service')
const { alertActions } = require('../actions/alert.actions')
const { history } = require('../helpers/history')

export const userActions = {
    login,
    logout,
    register,
    // getAll,
    // delete: _delete
};

function login(username, password) {
    return dispatch => {
        dispatch(request({ username }))


        userService.login(username, password)
            .then(
                user => {

                    console.log(user);
                    if (user.length !== 0) {
                        history.push('/home');
                        dispatch(alertActions.success("LOGIN ACCESS"));
                        dispatch(success(user));
                    }
                    else {
                        dispatch(alertActions.error("Login failure"));
                        dispatch(failure("NOT FOUND USER"));
                    }
                },
                err => {
                    dispatch(failure(err.toString()));
                    dispatch(alertActions.error(err.toString()));
                }
            );
    };
    function request(user) { return { type: userConstants.LOGIN_REQUEST, user } }
    function success(user) { return { type: userConstants.LOGIN_SUCCESS, user } }
    function failure(error) { return { type: userConstants.LOGIN_FAILURE, error } }
}

function logout() {
    userService.logout();
    return { type: userConstants.LOGOUT };
}

function register(user) {
    return dispatch => {
        dispatch(request(user));
        userService.register(user)
        .then(
            user => {
                console.log(user);
                dispatch(success(user));
                history.push('/login');
                dispatch(alertActions.success("Registration success"));
            },
            error => {
                dispatch(failure(error.toString()));
                dispatch(alertActions.error(error.toString()));
            }
        );

    };
    function request(user) { return { type: userConstants.REGISTER_REQUEST, user } }
    function success(user) { return { type: userConstants.REGISTER_SUCCESS, user } }
    function failure(error) { return { type: userConstants.REGISTER_FAILURE, error } }
}

