import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { history } from '../helpers/history'

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fullName: '',
            email: '',
            userName: '',
            notices: [],
            messages: [],
            searchKey: '',

        },
            this.handleSubmit = this.handleSubmit.bind(this),
            this.handleChange = this.handleChange.bind(this)
    }


    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value })
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log(localStorage.getItem('user'));
    }

    componentWillMount() {
        if (typeof localStorage.getItem('user') === 'undefined')
            history.push('/login');
    }

    componentDidMount() {
        const script = document.createElement("script");
        script.src = 'assets/js/animsition.min.js';
        script.async = true;
        document.body.appendChild(script);

        const script2 = document.createElement("script");
        script2.src = 'assets/js/main.js';
        script2.async = true;
        document.body.appendChild(script2);
    
        const script3 = document.createElement("script");
        script3.src = 'assets/js/bootstrap.min.js';
        script3.async = true;
        document.body.appendChild(script3);

        const script4 = document.createElement("script");
        script4.src = 'assets/js/jquery.min.js';
        script4.async = true;
        document.body.appendChild(script4);
    }

    render() {
        const data = JSON.parse(localStorage.getItem('user'));
        const { fullName, email, userID } = data;
        return (
            <div>
                <div className="page-container">
                    <header className="header-desktop">
                        <div className="section__content section__content--p30">
                            <div className="container-fluid">
                                <div className="header-wrap">
                                    <form className="form-header" action="" method="POST">
                                        <input className="au-input au-input--xl" type="text" value={this.state.searchKey} name="search" placeholder="Search for datas &amp; reports..." />
                                        <button className="au-btn--submit" type="submit">
                                            <i className="zmdi zmdi-search"></i>
                                        </button>
                                    </form>
                                    <div className="header-button">
                                        <div className="noti-wrap">
                                            <div className="noti__item js-item-menu">
                                                <i className="zmdi zmdi-comment-more"></i>
                                                <span className="quantity">1</span>
                                                <div className="mess-dropdown js-dropdown">
                                                    <div className="mess__title">
                                                        <p>You have 2 news message</p>
                                                    </div>
                                                    <div className="mess__item">
                                                        <div className="image img-cir img-40">
                                                            <img src="/assets/images/icon/avatar-06.jpg" alt="Michelle Moreno" />
                                                        </div>
                                                        <div className="content">
                                                            <h6>Michelle Moreno</h6>
                                                            <p>Have sent a photo</p>
                                                            <span className="time">3 min ago</span>
                                                        </div>
                                                    </div>
                                                    <div className="mess__item">
                                                        <div className="image img-cir img-40">
                                                            <img src="/assets/images/icon/avatar-04.jpg" alt="Diane Myers" />
                                                        </div>
                                                        <div className="content">
                                                            <h6>Diane Myers</h6>
                                                            <p>You are now connected on message</p>
                                                            vnvn<span className="time">Yesterday</span>
                                                        </div>
                                                    </div>
                                                    <div className="mess__footer">
                                                        <a href="/">View all messages</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="noti__item js-item-menu">
                                                <i className="zmdi zmdi-email"></i>
                                                <span className="quantity">1</span>
                                                <div className="email-dropdown js-dropdown">
                                                    <div className="email__title">
                                                        <p>You have 3 New Emails</p>
                                                    </div>
                                                    <div className="email__item">
                                                        <div className="image img-cir img-40">
                                                            <img src="images/icon/avatar-06.jpg" alt="Cynthia Harvey" />
                                                        </div>
                                                        <div className="content">
                                                            <p>Meeting about new dashboard...</p>
                                                            <span>Cynthia Harvey, 3 min ago</span>
                                                        </div>
                                                    </div>
                                                    <div className="email__item">
                                                        <div className="image img-cir img-40">
                                                            <img src="images/icon/avatar-05.jpg" alt="Cynthia Harvey" />
                                                        </div>
                                                        <div className="content">
                                                            <p>Meeting about new dashboard...</p>
                                                            <span>Cynthia Harvey, Yesterday</span>
                                                        </div>
                                                    </div>
                                                    <div className="email__item">
                                                        <div className="image img-cir img-40">
                                                            <img src="images/icon/avatar-04.jpg" alt="Cynthia Harvey" />
                                                        </div>
                                                        <div className="content">
                                                            <p>Meeting about new dashboard...</p>
                                                            <span>Cynthia Harvey, April 12,,2018</span>
                                                        </div>
                                                    </div>
                                                    <div className="email__footer">
                                                        <a href="/">See all emails</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="noti__item js-item-menu">
                                                <i className="zmdi zmdi-notifications"></i>
                                                <span className="quantity">3</span>
                                                <div className="notifi-dropdown js-dropdown">
                                                    <div className="notifi__title">
                                                        <p>You have 3 Notifications</p>
                                                        vn</div>
                                                    <div className="notifi__item">
                                                        <div className="bg-c1 img-cir img-40">
                                                            <i className="zmdi zmdi-email-open"></i>
                                                        </div>
                                                        <div className="content">
                                                            <p>You got a email notification</p>
                                                            <span className="date">April 12, 2018 06:50</span>
                                                        </div>
                                                    </div>
                                                    <div className="notifi__item">
                                                        <div className="bg-c2 img-cir img-40">
                                                            <i className="zmdi zmdi-account-box"></i>
                                                        </div>
                                                        <div className="content">
                                                            <p>Your account has been blocked</p>
                                                            <span className="date">April 12, 2018 06:50</span>
                                                        </div>
                                                    </div>
                                                    <div className="notifi__item">
                                                        <div className="bg-c3 img-cir img-40">
                                                            <i className="zmdi zmdi-file-text"></i>
                                                        </div>
                                                        <div className="content">
                                                            <p>You got a new file</p>
                                                            <span className="date">April 12, 2018 06:50</span>
                                                        </div>
                                                    </div>
                                                    <div className="notifi__footer">
                                                        <a href="/">All notifications</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="account-wrap">
                                            <div className="account-item clearfix js-item-menu">
                                                <div className="header-user-option">
                                                    <div className="image-top-show">
                                                        <img src="/assets/images/icon/avatar-01.jpg" alt="Nam Tran" />
                                                    </div>
                                                    <div className="content">
                                                        <a className="js-acc-btn" href="/">{fullName}</a>
                                                    </div>
                                                </div>
                                                <div className="box-option-account">
                                                    <div className="info clearfix">
                                                        <div className="image">
                                                            <a href="/">
                                                                <img src="/assets/images/icon/avatar-01.jpg" alt="Nam Tran" />
                                                            </a>
                                                        </div>
                                                        <div className="content">
                                                            <h5 className="name">
                                                                <a href="/">{userID}</a>
                                                            </h5>
                                                            <span className="email">{email}</span>
                                                        </div>
                                                    </div>
                                                    <div className="account-dropdown__body">
                                                        <div className="account-dropdown__item">
                                                            <a href="/">
                                                                <i className="zmdi zmdi-account"></i>Account</a>
                                                        </div>
                                                        <div className="account-dropdown__item">
                                                            <a href="/">
                                                                <i className="zmdi zmdi-settings"></i>Setting</a>
                                                        </div>
                                                    </div>
                                                    <div className="account-dropdown__footer">
                                                        <Link to="login">
                                                            <i className="zmdi zmdi-power"></i>Logout</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </header>

                </div>
            </div>

        )
    }
}
function mapStateToProps(state) {
    const { user } = state.authentication;
    try {
        const { data } = localStorage.getItem('user');
    } catch (e) {
        history.push('login');
    }
    return { user };
}

const connectHeader = connect(mapStateToProps)(Header);
export { connectHeader as Header }