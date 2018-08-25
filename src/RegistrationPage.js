import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { userActions } from './actions/user.actions'

class RegistrationPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            fullname: '',
            email: '',
            password: '',
            submitted: false
        }
        this.handlerSubmit = this.handlerSubmit.bind(this);
        this.handlerChange = this.handlerChange.bind(this);
    }

    handlerSubmit(event) {
        event.preventDefault();
        this.setState({ submitted: true });
        const { dispatch } = this.props;
        const { username, fullname, email, password } = this.state;
        if (username && fullname && email && password) {
            dispatch(userActions.register(this.state));
        }
    }

    handlerChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    render() {

        const { registering } = this.props;

        return (
            <div className="">
                <div className="page-content">
                    <div className="container">
                        <div className="login-wrap" >
                            <div className="login-content">
                                <div className="login-logo">
                                    <a href="#">
                                        <img src="../public/images/LogoCMTB.png" alt="CMTB" />
                                    </a>
                                </div>
                                <div className="login-form">
                                    <div className="form-group">
                                        <label>Username</label>
                                        <input className="au-input au-input--full" type="text" name="username" onChange={this.handlerChange} placeholder="Username" />
                                    </div>
                                    <div className="form-group">
                                        <label>Fullname</label>
                                        <input className="au-input au-input--full" type="text" name="fullname" onChange={this.handlerChange} placeholder="Fullname" />
                                    </div>
                                    <div className="form-group">
                                        <label>Email Address</label>
                                        <input className="au-input au-input--full" type="email" name="email" onChange={this.handlerChange} placeholder="Email" />
                                    </div>
                                    <div className="form-group">
                                        <label>Password</label>
                                        <input className="au-input au-input--full" type="password" name="password" onChange={this.handlerChange} placeholder="Password" />
                                    </div>
                                    {registering ? <div className="row container">
                                        <button className="au-btn au-btn--block au-btn--green m-b-20 col-10" type="submit" onClick={this.handlerSubmit}>register</button>
                                        <div className="lds-css ng-scope"><div className="lds-rolling"><div></div></div></div>
                                    </div> : <button className="au-btn au-btn--block au-btn--green m-b-20" type="submit" onClick={this.handlerSubmit}>register</button>
                                    }
                                    <div className="social-login-content">
                                        <div className="social-button">
                                            <button className="au-btn au-btn--block au-btn--blue m-b-20">register with facebook</button>
                                        </div>
                                    </div>

                                    <div className="register-link">
                                        <p>
                                            Already have account?
                                        <a href="./login.html">Sign In</a>
                                        </p>
                                    </div>
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
    const { registering } = state.registration;
    return { registering };
}

const connectRegisterPage = connect(mapStateToProps)(RegistrationPage)
export { connectRegisterPage as RegistrationPage }

