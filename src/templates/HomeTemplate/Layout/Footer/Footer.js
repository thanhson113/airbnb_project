import React from 'react'

export default function Footer() {
    return (
        <>
            <div id="footer">
                {/* Main */}
                <div className="container">
                    <div className="row">
                        <div className="col-md-5 col-sm-6">
                            <img className="footer-logo" src="images/logo.png"  />
                            <br /><br />
                            <p>Morbi convallis bibendum urna ut viverra. Maecenas quis consequat libero, a feugiat eros. Nunc ut lacinia tortor morbi ultricies laoreet ullamcorper phasellus semper.</p>
                        </div>
                        <div className="col-md-4 col-sm-6 ">
                            <h4>Helpful Links</h4>
                            <ul className="footer-links">
                                <li><a href="#">Login</a></li>
                                <li><a href="#">Sign Up</a></li>
                                <li><a href="#">My Account</a></li>
                                <li><a href="#">Add Listing</a></li>
                                <li><a href="#">Pricing</a></li>
                                <li><a href="#">Privacy Policy</a></li>
                            </ul>
                            <ul className="footer-links">
                                <li><a href="#">FAQ</a></li>
                                <li><a href="#">Blog</a></li>
                                <li><a href="#">Our Partners</a></li>
                                <li><a href="#">How It Works</a></li>
                                <li><a href="#">Contact</a></li>
                            </ul>
                            <div className="clearfix" />
                        </div>
                        <div className="col-md-3  col-sm-12">
                            <h4>Contact Us</h4>
                            <div className="text-widget">
                                <span>12345 Little Lonsdale St, Melbourne</span> <br />
                                Phone: <span>(123) 123-456 </span><br />
                                E-Mail:<span> <a href="#">office@example.com</a> </span><br />
                            </div>
                            <ul className="social-icons margin-top-20">
                                <li><a className="facebook" href="#"><i className="icon-facebook" /></a></li>
                                <li><a className="twitter" href="#"><i className="icon-twitter" /></a></li>
                                <li><a className="gplus" href="#"><i className="icon-gplus" /></a></li>
                                <li><a className="vimeo" href="#"><i className="icon-vimeo" /></a></li>
                            </ul>
                        </div>
                    </div>
                    {/* Copyright */}
                    <div className="row">
                        <div className="col-md-12">
                            <div className="copyrights">© 2021 Listeo. All Rights Reserved.</div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Back To Top Button */}
            <div id="backtotop"><a href="#" /></div>
        </>

    )
}
