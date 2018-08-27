import React from "react"
import { Link } from "react-router-dom"

export class Menu extends React.Component {
    render() {
        return (
            <div>
            <header class="header-mobile d-block d-lg-none">
            <div class="header-mobile__bar">
                <div class="container-fluid">
                    <div class="header-mobile-inner">
                        <Link class="logo" to="admin">
                            <img src="/assets/images/Logo-CMTB-Home.png" class="logoCMTB-home-mobie" alt="CoolAdmin" />
                        </Link>
                        <button class="hamburger hamburger--slider" type="button">
                            <span class="hamburger-box">
                                <span class="hamburger-inner"></span>
                            </span>
                        </button>
                    </div>
                </div>
            </div>
            <nav class="navbar-mobile">
                <div class="container-fluid">
                    <ul class="navbar-mobile__list list-unstyled">

                        <li>
                            <a href="chart.html">
                                <i class="fas fa-chart-bar"></i>Add new citizen</a>
                        </li>
                        <li>
                            <a href="table.html">
                                <i class="fas fa-table"></i>Manage citizen</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
        <aside class="menu-sidebar d-none d-lg-block">
            <div class="logo">
                <a href="#" class="link-image-logo">
                    <img src="/assets/images/Logo-CMTB-Home.png" class="logoCMTB-home-sm" alt="CMTB Logo Here" />
                </a>

            </div>
            <div class="menu-sidebar__content">
                <nav class="navbar-sidebar">
                    <ul class="list-unstyled navbar__list">
                        <li class="active">
                            <a href="form.html">
                                <i class="fas fa-table" ></i>Add new citizen</a>
                        </li>
                        <li>
                            <a href="admin.html">
                                <i class="fas fa-chart-bar"></i>Citizen</a>
                        </li>


                    </ul>
                </nav>
            </div>
        </aside>
        </div>
        )
    }
}