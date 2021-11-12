import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="page-footer font-small blue pt-4 bg-dark text-light">
            <div className="container-fluid text-center text-md-left">
                <div className="row">
                    <div className="col-md-6 mt-md-0 mt-3">
                        <h5 className="text-uppercase">Dream Tours & Travel</h5>
                        <p>Getting more interesting offer stay with us.</p>
                        <h5>Contact:</h5>
                        <p>Mobile: 01710390529</p>
                        <a gmail="dreamtour@gmail.com">Gmail:dreamtour@gmail.com</a>
                    </div>

                    <hr className="clearfix w-100 d-md-none pb-0" />

                    <div className="col-md-3 mb-md-0 mb-3">
                        <h5 className="text-uppercase">Quick Access</h5>
                        <ul className="list-unstyled">
                            <li><Link to="/home">Home </Link></li>
                            <li><Link to="/services">Services</Link></li>
                            <li><Link to="/doctors">Doctors</Link></li>
                            <li><Link to="/aboutus">About</Link></li>
                        </ul>
                    </div>


                </div>
            </div>

            <div className="footer-copyright text-center py-3">© 2021 Copyright:
                all right are reserved by Dream Tours & Travel
            </div>

        </footer>
    );
};

export default Footer;