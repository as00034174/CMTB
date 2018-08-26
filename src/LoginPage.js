import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { userActions } from './actions/user.actions'
import { stat } from 'fs';

class LoginPage extends React.Component {
    constructor(props) {
        super(props);

        this.props.dispatch(userActions.logout());

        this.state = {
            username: '',
            password: '',
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleSubmit() {
        this.setState({ submitted: true });
        const { username, password } = this.state;
        const { dispatch } = this.props;

        if (username && password)
            dispatch(userActions.login(username, password));
    }
    render() {
        const { loggingIn } = this.props;
        const { alert } = this.props;

        const { username, password, submitted } = this.state
        return (
            <div className="page-content--bge5">
                <div className="container">
                    <div className="login-wrap">
                        <div className="login-content">
                            <div className="login-logo">
                            <a href="#">
                                    <img src="/assets/images/LogoCMTB.png" alt="CoolAdmin" />
                                </a>
                            </div>
                            <div className="login-form">
                                <div className="form-group">
                                    <label>Email Address</label>
                                    <input className="au-input au-input--full" type="email" name="username" value={username} onChange={this.handleChange} placeholder="Email" />
                                    {submitted && !username && <div className="text-danger">User is required</div>}
                                </div>
                                <div className="form-group">
                                    <label>Password</label>
                                    <input className="au-input au-input--full" type="password" value={password} onChange={this.handleChange} name="password" placeholder="Password" />
                                </div>
                                <div className="login-checkbox">
                                    <label>
                                        <a href="#" className="text-info">Forgotten Password?</a>
                                    </label>
                                </div>
                                {loggingIn ? <div className="row container">
                                    <button className="au-btn au-btn--block au-btn--green m-b-20 col-10" type="submit" onClick={this.handleSubmit}>Sign In</button>
                                    <div className="lds-css ng-scope"><div className="lds-rolling"><div></div></div></div>
                                </div> : <button className="au-btn au-btn--block au-btn--green m-b-20" type="submit" onClick={this.handleSubmit}>Sign In</button>
                                }
                                {/* <div className="social-login-content">
                                <div className="social-button">
                                    <button className="au-btn au-btn--block au-btn--blue m-b-20">sign in with facebook</button>
                                    <button className="au-btn au-btn--block au-btn--blue2">sign in with twitter</button>
                                </div>
                            </div> */}
                                <div className="register-link">
                                    <p>
                                        Don't you have account?
                                    <Link to="/registration">Sign Up Here</Link>
                                    </p>
                                </div>
                                <div className=" col-sm-offset-2">
                                    {alert.message && <div className={`alert ${alert.type}`}>
                                        {alert.message}
                                    </div>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
function mapStateToProps(state) {
    const { loggingIn } = state.authentication;
    const { alert } = state;
    return { loggingIn, alert };
}

const connectedLoginPage = connect(mapStateToProps)(LoginPage)
export { connectedLoginPage as LoginPage }