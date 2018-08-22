import React from 'react';
// import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { userActions } from './actions/user.actions'

class LoginPage extends React.Component {
    constructor(props) {
        super(props);

        this.props.dispatch(userActions.logout());

        this.state = {
            username: '',
            passsword: '',
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange() {
        
    }

    handleSubmit(){

    }
    render() {
        const { loggingIn } = this.props;
        const { username, passsword, submitted } = this.state
        return (
            <div class="page-content--bge5">
                <div class="container">
                    <div class="login-wrap">
                        <div class="login-content">
                            <div class="login-logo">authentication
                            <a href="#">
                                    <img src="../public/images/LogoCMTB.png" alt="CoolAdmin" />
                                </a>
                            </div>
                            <div class="login-form">
                                <form action="" method="post">
                                    <div class="form-group">
                                        <label>Email Address</label>
                                        <input class="au-input au-input--full" type="email" name="email" placeholder="Email" />
                                    </div>
                                    <div class="form-group">
                                        <label>Password</label>
                                        <input class="au-input au-input--full" type="password" name="password" placeholder="Password" />
                                    </div>
                                    <div class="login-checkbox">
                                        <label>
                                            <a href="#">Forgotten Password?</a>
                                        </label>
                                    </div>
                                    <button class="au-btn au-btn--block au-btn--green m-b-20" type="submit">sign in</button>
                                    <div class="social-login-content">
                                        <div class="social-button">
                                            <button class="au-btn au-btn--block au-btn--blue m-b-20">sign in with facebook</button>
                                            <button class="au-btn au-btn--block au-btn--blue2">sign in with twitter</button>
                                        </div>
                                    </div>
                                </form>
                                <div class="register-link">
                                    <p>
                                        Don't you have account?
                                    <a href="./register.html">Sign Up Here</a>
                                    </p>
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
    return { loggingIn };
}

const connectedLoginPAge = connect(mapStateToProps)(LoginPage)
export { connectedLoginPAge as LoginPage }