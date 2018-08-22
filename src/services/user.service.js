
export const userService = {
    login,
    logout,
    register,
    getAll,
    // getById,
    update,
    // delete: _delete
};
const url = 'localhost:5000/api';

function login(username, password) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    };

    return fetch(`${url}/users/authenticate`, requestOptions)
        .then(handleRespone)
        .then(user => {
            if (user.userID) {
                localStorage.setItem('user', JSON.stringify(user));
            }
            return user;
        });
}

function logout() {
    localStorage.removeItem('user');
}

function getAll() {
    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    };

    return fetch(`${url}/users`, requestOptions)
        .then(handleRespone)
}

function register(user) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Context-Type': 'application/json' },
        body: JSON.stringify(user)
    };
    return fetch(`${url}/users/register`, requestOptions)
    .then(handleRespone)

}

function update(user) {
    const requestOptions = {
        method: 'PUT',
        headers: { 'Context-Type': 'application/json' },
        body: JSON.stringify(user)
    };
    return fetch(`${url}/users/${user.userID}`, requestOptions)
        .then(handleRespone)
}

function handleRespone(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                logout();
                // location.reload(true);
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}