import React, { Component } from 'react';

export class Header extends Component {
    render() {
        return (
            <div>
                 <button type="button" className="mobile-nav-toggle d-xl-none"><i className="icofont-navigation-menu"></i></button>

            
<header id="header">
    <div className="d-flex flex-column">

    <div className="profile">
        <img src="assets/img/profile-img.jpg" alt="" className="img-fluid rounded-circle" />
        <h1 className="text-light"><a href="index.html">Vijai K A</a></h1>
        <div className="social-links mt-3 text-center">
        <a href="#" className="twitter"><i className="bx bxl-twitter"></i></a>
        <a href="#" className="facebook"><i className="bx bxl-facebook"></i></a>
        <a href="#" className="instagram"><i className="bx bxl-instagram"></i></a>
        <a href="https://github.com/vijai2504?tab=repositories" className="google-plus" target="_blank"><i className="bx bxl-github"></i></a>
        <a href="https://www.linkedin.com/in/vijai-k-a-a558991a3" className="linkedin" target="_blank"><i className="bx bxl-linkedin"></i></a>
        </div>
    </div>

    <nav className="nav-menu">
        <ul>
        <li className="active"><a href="index.html"><i className="bx bx-home"></i> <span>Home</span></a></li>
        <li><a href="#about"><i className="bx bx-user"></i> <span>About</span></a></li>
        <li><a href="#resume"><i className="bx bx-file-blank"></i> <span>Resume</span></a></li>
        <li><a href="#portfolio"><i className="bx bx-book-content"></i> Portfolio</a></li>
        <li><a href="#services"><i className="bx bx-server"></i> Services</a></li>
        <li><a href="#contact"><i className="bx bx-envelope"></i> Contact</a></li>

        </ul>
    </nav>
    <button type="button" className="mobile-nav-toggle d-xl-none"><i className="icofont-navigation-menu"></i></button>

    </div>
</header>
            </div>
        )
    }
}

export default Header;