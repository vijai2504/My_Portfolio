import React, { Component } from 'react';

export class Footer extends Component {
    render() {
        return (
            <div>
                <footer id="footer">
                <div className="container">
                <div className="copyright">
                    &copy; Copyright <strong><span>Dream.com</span></strong>
                </div>
                <div className="credits">
                    Designed by <a href="http://drapjdream.in/" rel="noreferrer"  target="_blank">Vijai k A</a>
                </div>
                </div>
            </footer>
            <a href="#" className="back-to-top"><i className="icofont-simple-up"></i></a>
            </div>
        )
    }
}

export default Footer;
