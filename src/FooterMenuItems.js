import React from 'react';
import { Route, Link } from 'react-router-dom';

function FooterMenuItems(){
    return(
        <div className="footer navbar">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-3 col-md-6">
                        <div className="footer-widget">
                            <h2>Get in Touch</h2>
                            <div className="contact-info">
                                <p><i className="fa fa-map-marker"></i>Address Line 1</p>
                                <p><i className="fa fa-envelope"></i>TeQuestSol@gmail.com</p>
                                <p><i className="fa fa-phone"></i>+xxx-xxx-xxx-xxxx</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-lg-3 col-md-6">
                        <div className="footer-widget">
                            <h2>Follow Us</h2>
                            <div className="contact-info">
                                <div className="social">
                                    <a href="index.html"><i className="fab fa-twitter"></i></a>
                                    <a href="index.html"><i className="fab fa-facebook-f"></i></a>
                                    <a href="index.html"><i className="fab fa-linkedin-in"></i></a>
                                    <a href="index.html"><i className="fab fa-instagram"></i></a>
                                    <a href="index.html"><i className="fab fa-youtube"></i></a>                                
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                        <div className="footer-widget">
                            <h2>Company Info</h2>
                            <ul>
                                <li><Link to="/about" >About Us</Link></li>
                                <li><Link to="privacypolicy">Privacy Policy</Link></li>
                                <li><Link to="tnc">Terms and Condition</Link></li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                        <div className="footer-widget">
                            <h2>Purchase Info</h2>
                            <ul>
                                <li><Link to="paymentpolicy">Payment Policy</Link></li>
                                <li><Link to="shippingpolicy">Shipping Policy</Link></li>
                                <li><Link to="returnPolicy">Return Policy</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <p>
                &nbsp;<br/>
            </p>
        </div>

    )
}

export default FooterMenuItems
