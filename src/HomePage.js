import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

// import {userActions} from './actions/user.actions'

export class HomePage extends React.Component {

    componentDidMount() {
        const script = document.createElement("script");

        script.src = "/assets/js/Stats.js";
        script.async = true;

        document.body.appendChild(script);

        const script2 = document.createElement("script");
        script2.src = "/assets/js/distributed-animation.js";
        script2.async = true;

        document.body.appendChild(script2);
    }

    render() {
        return (
            <div>
                {/* <nav className="navbar navbar-light bg-light static-top">
                    <div className="container">
                        <a className="navbar-brand" href="#">Start CMTB</a>
                        <a className="btn btn-primary" href="#">Sign In</a>
                    </div>
                </nav> */}

                <div className="masthead text-white text-center">
                    <div className="overlay">
                        <canvas>
                            <script src='Stats.js'></script>
                        </canvas>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-9 mx-auto">
                                <h1 className="mb-5 introduce-custom">Citizen records Management Tool base on Blockchain</h1>
                            </div>
                            <div className="col-md-10 col-lg-8 col-xl-7 mx-auto">
                                <div className="form-row">
                                    <div className="col-12 col-md-9 mb-2 mb-md-0">
                                        <input type="email" className="form-control form-control-lg" placeholder="Enter your email..." />
                                    </div>
                                    <div className="col-12 col-md-3">
                                        <Link to="login" type="submit" className="btn btn-block btn-lg btn-primary">Sign up!</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="features-icons bg-light text-center">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                                    <div className="features-icons-icon d-flex">
                                    <a href="#imutable" className=" m-auto" >
                                        <i className="icon-screen-desktop m-auto text-primary fa fa-lock"></i>
                                        </a>
                                    </div>
                                    <h3>Immutable</h3>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                                    <div className="features-icons-icon d-flex">
                                        <a href="#security" className=" m-auto" >
                                            <i className="icon-layers m-auto text-primary fa fa-address-book"></i>
                                        </a>
                                    </div>
                                    <h3>Security</h3>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="features-icons-item mx-auto mb-0 mb-lg-3">
                                    <div className="features-icons-icon d-flex">
                                        <a href="#control" className=" m-auto" >
                                            <i className="icon-check m-auto text-primary fa fa-users"></i>
                                        </a>
                                    </div>
                                    <h3>Control</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="showcase">
                    <div className="container-fluid p-0">
                        <div id="imutable" className="row no-gutters">

                            <div className="col-lg-6 order-lg-2 text-white showcase-img">
                                <img src="/assets/images/imagesHome/Ecommerce-with-blockchain.jpg" />
                            </div>
                            <div className="col-lg-6 order-lg-1 my-auto showcase-text">
                                <h2>Immutable</h2>
                                <p className="lead mb-0">Unlike a traditional database where records can be updated or deleted,
                                    entries on the blockchain are immutable,
                                    this means once they have been written they cannot be updated or tampered with</p>
                            </div>
                        </div>
                        <div id="security" className="row no-gutters">
                            <div className="col-lg-6 text-white showcase-img">
                                <img src="/assets/images/imagesHome/security-bl.jpg" />
                            </div>
                            <div className="col-lg-6 my-auto showcase-text">
                                <h2>Security</h2>
                                <p className="lead mb-0">Blockchains are secure by design with their immutable chain,
                                    proof of work to ensure consensus and many copies of the
                                    data to ensure that there is not a single point of attack.</p>
                            </div>
                        </div>
                        <div id="control" className="row no-gutters">
                            <div className="col-lg-6 order-lg-2 text-white showcase-img">
                                <img src="/assets/images/imagesHome/Blockchain.jpg" />
                            </div>
                            <div className="col-lg-6 order-lg-1 my-auto showcase-text">
                                <h2>Control</h2>
                                <p className="lead mb-0">Blockchains were designed to be used between untrusted parties
                                    so the multiple copies of data and consensus mechanisms ensure that it is not
                                    possible for any individual to manipulate records or attack the system</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="testimonials text-center bg-light">
                    <div className="container">
                        <h2 className="mb-5">What people are saying...</h2>
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="testimonial-item mx-auto mb-5 mb-lg-0">
                                    <img className="img-fluid rounded-circle mb-3" src="/assets/images/imagesHome/testimonials-1.jpg" alt="" />
                                    <h5>Margaret E.</h5>
                                    <p className="font-weight-light mb-0">"This is fantastic! Thanks so much guys!"</p>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="testimonial-item mx-auto mb-5 mb-lg-0">
                                    <img className="img-fluid rounded-circle mb-3" src="/assets/images/imagesHome/testimonials-2.jpg" alt="" />
                                    <h5>Fred S.</h5>
                                    <p className="font-weight-light mb-0">"Bootstrap is amazing. I've been using it to create lots of super nice landing pages."</p>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="testimonial-item mx-auto mb-5 mb-lg-0">
                                    <img className="img-fluid rounded-circle mb-3" src="/assets/images/imagesHome/testimonials-3.jpg" alt="" />
                                    <h5>Sarah W.</h5>
                                    <p className="font-weight-light mb-0">"Thanks so much for making these free resources available to us!"</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
