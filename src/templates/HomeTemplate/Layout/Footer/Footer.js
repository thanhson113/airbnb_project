import React from 'react'
import './footer.css'
import logo from '../../../../assets/images/logo/AirBNb.png'
export default function Footer() {
    return (
        <>
            <div id="footer">
                {/* Main */}
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 col-sm-6 pb-5 div_logo">
                            <a href="#" > <img className="footer-logo" src={logo}   /></a>
                           
                            <p style={{color:'#66676b',padding:10}}>Là một cộng đồng trực tuyến cho việc đặt và cho thuê phòng, căn hộ, có trụ sở tại Đà Nẵng, Việt Nam được thành lập trong năm 2008.</p>
                        </div>
                        <div className="col-md-4 col-sm-6 ">
                            <h4>Helpful Links</h4>
                            <ul className="footer-links">
                                <li><a href="#">Đăng nhập</a></li>
                                <li><a href="#">Đăng kí</a></li>
                                <li><a href="#">Tài khoản</a></li>
                                <li><a href="#">Địa điểm</a></li>
                                <li><a href="#">Định giá</a></li>
                                <li><a href="#">Chính sách bảo mật</a></li>
                            </ul>
                            <ul className="footer-links">
                                <li><a href="#">FAQ</a></li>
                                <li><a href="#">Blog</a></li>
                                <li><a href="#">Cộng sự</a></li>
                                <li><a href="#">How It Works</a></li>
                                <li><a href="#">Liên hệ</a></li>
                            </ul>
                            <div className="clearfix" />
                        </div>
                        <div className="col-md-4  col-sm-12">
                            <h4>Liên hệ với chúng tôi</h4>
                            <div className="text-widget">
                                Địa chỉ:   <span>12345 TP.Đà Nẵng</span> <br />
                                Phone: <span>(123) 123-456 </span><br />
                                E-Mail:<span> <a href="#" className='px-1 textMail' > airBNB@example.com</a> </span><br />
                            </div>
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
