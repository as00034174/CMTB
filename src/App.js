import React, { Component } from 'react';
import { Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { alertActions } from './actions/alert.actions'
import { history } from './helpers/history'
import { LoginPage } from './LoginPage'
import { HomePage } from './HomePage'
import { PrivateRoute } from './PrivateRoute'
import { RegistrationPage } from './RegistrationPage'
import  {AddNewCitizenDetailPage} from './AddNewCitizenDetailPage'

class App extends Component {
  constructor(props) {
    super(props);

    const { dispatch } = this.props;
    // history.listen((location, action) => {
    //   dispatch(alertActions.clear());
    // });
  }
  render() {
    const { alert } = this.props;
    return (
      <div className="jumbotron">
        <div className="container">
          <div className="col-sm-8 col-sm-offset-2">
            {alert.message &&
              <div className={`alert ${alert.type}`}>{alert.message}</div>
            }
            <Router history={history}>
              <div>
                <PrivateRoute exact path="/" component={HomePage} />
                <Route path="/login" component={LoginPage} />
                <Route path="/registration" component={RegistrationPage} />
                <Route path="/admin" component= {AddNewCitizenDetailPage} />
              </div>
            </Router>
          </div>
        </div>
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
