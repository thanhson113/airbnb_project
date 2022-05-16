import React from 'react'
import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import logo from '../../../../assets/images/logo.png'
import './header.css'
export default function Header() {
    const { userLogin } = useSelector(state => state.nguoiDungReducer);
    const dispatch = useDispatch()
    const renderUserLogin = () => {
       
    }
    return (
        <div className="header py-3">
            <div className="container">
                <nav className="navbar navbar-expand-lg ">
                    <NavLink className="navbar-brand" to="/home">
                        <img className="w-75" src={logo} alt="" />
                    </NavLink>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <i style={{fontSize:'20px'}} class="fa fa-bars"></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto header__list">
                            <li className="nav-item active header__item">
                                <a className="nav-link" href="#">Trang chủ</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Blog</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Liên hệ</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Thông tin</a>
                            </li>
                        </ul>
                        <div className="header__right">
                            <div className="header__login">
                                <NavLink to="/login">
                                <i className="fa-solid fa-arrow-right-to-bracket" />
                                    Đăng nhập
                                </NavLink>
                            </div>
                            <div className="header__register">
                                <NavLink to="/register">
                                <i className="fa-solid fa-pen-to-square"></i>
                                    Đăng ký
                                </NavLink>

                            </div>
                            {/* <div className=" d-flex">
                                <div class="dropdown">
                                    <div>
                                        <div style={{ width: 50, height: 50, lineHeight: 3.5, cursor: 'pointer' }} className="text-white bg-primary rounded-circle text-center" id="dropdownMenuButton" data-toggle="dropdown" aria-expanded="false">{userLogin.taiKhoan.substr(0, 1)}</div>
                                        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
                                            <a className="dropdown-item" onClick={() => {
                                                localStorage.removeItem(USER_LOGIN);
                                                localStorage.removeItem(ACCESS_TOKEN);
                                                history.push('/home');
                                                window.location.reload();
                                            }}>Đăng xuất</a>
                                            <NavLink className="dropdown-item" to="/profile">Thông tin</NavLink>
                                        </div>
                                    </div>

                                </div>
                            </div> */}

                        </div>
                    </div>

                </nav>

            </div>
        </div>

    )
}
