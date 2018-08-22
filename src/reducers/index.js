const {combineReducers} = require('redux')
const {authentication} = require('./authentication.reducer')
const {registration} = require('./registration.reducer')
const {users} = require('./users.reducer')
const {alert} = require('./alert.reducer')

const rootReducer = combineReducers({
    authentication,
    registration,
    users,
    alert
});

export default rootReducer;