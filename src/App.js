import React, { Component } from 'react';
import { Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { history } from './helpers/history'
import { LoginPage } from './LoginPage'
import { HomePage } from './HomePage'
import { PrivateRoute } from './PrivateRoute'
import { RegistrationPage } from './RegistrationPage'
import { AddNewCitizenDetailPage } from './AddNewCitizenDetailPage'

class App extends Component {
  constructor(props) {
    super(props);

    // const { dispatch } = this.props;
    // history.listen((location, action) => {
    //   dispatch(alertActions.clear());
    // });
  }
  render() {
    const { alert } = this.props;
    return (
      <div>
        <Router history={history}>
          <div>
            <Route exact path="/" component={HomePage} />
            <Route path="/login" component={LoginPage} />
            <Route path="/registration" component={RegistrationPage} />
            <Route path="/admin" component={AddNewCitizenDetailPage} />
          </div>
        </Router>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { alert } = state;
  return {
    alert
  };
}

const connectedApp = connect(mapStateToProps)(App);
export { connectedApp as App }; 
