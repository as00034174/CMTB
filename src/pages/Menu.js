import React from "react"
import { Link } from "react-router-dom"

export class Menu extends React.Component {
    render() {
        return (
            <div>
            <header className="header-mobile d-block d-lg-none">
            <div className="header-mobile__bar">
                <div className="container-fluid">
                    <div className="header-mobile-inner">
                        <Link className="logo" to="admin">
                            <img src="/assets/images/Logo-CMTB-Home.png" className="logoCMTB-home-mobie" alt="CoolAdmin" />
                        </Link>
                        <button className="hamburger hamburger--slider" type="button">
                            <span className="hamburger-box">
                                <span className="hamburger-inner"></span>
                            </span>
                        </button>
                    </div>
                </div>
            </div>
            <nav className="navbar-mobile">
                <div className="container-fluid">
                    <ul className="navbar-mobile__list list-unstyled">

                        <li>
                            <a href="chart.html">
                                <i className="fas fa-chart-bar"></i>Add new citizen</a>
                        </li>
                        <li>
                            <a href="table.html">
                                <i className="fas fa-table"></i>Manage citizen</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
        <aside className="menu-sidebar d-none d-lg-block">
            <div className="logo">
                <a href="/" className="link-image-logo">
                    <img src="/assets/images/Logo-CMTB-Home.png" className="logoCMTB-home-sm" alt="CMTB Logo Here" />
                </a>

            </div>
            <div className="menu-sidebar__content">
                <nav className="navbar-sidebar">
                    <ul className="list-unstyled navbar__list">
                        <li className="active">
                            <a href="form.html">
                                <i className="fas fa-table" ></i>Add new citizen</a>
                        </li>
                        <li>
                            <a href="admin.html">
                                <i className="fas fa-chart-bar"></i>Citizen</a>
                        </li>


                    </ul>
                </nav>
            </div>
        </aside>
        </div>
        )
    }
}