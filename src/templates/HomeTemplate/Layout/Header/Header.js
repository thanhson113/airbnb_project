import React from 'react'
import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import logo from '../../../../assets/images/logo.png'
import './header.css'
import { Acces_stoken } from '../../../../util/setting'
import {history} from '../../../../App'
export default function Header() {
    const { userLogin } = useSelector(state => state.nguoiDungReducer);
    const dispatch = useDispatch()
    const renderUserLogin = () => {
        if (localStorage.getItem('accessToken')) {
            return <a className="header__logout" onClick={() => {
                localStorage.removeItem('accessToken');
                window.location.reload();
            }}>Đăng xuất</a>
        } else {
            return (
                <>
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
                </>
            )
        }
    }
    return (
        <div className="header py-3">
            <div className="container">
                <nav className="navbar navbar-expand-lg ">
                    <NavLink className="navbar-brand" to="/home">
                        <img className="w-75" src={logo} alt="" />
                    </NavLink>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <i style={{ fontSize: '20px' }} className="fa fa-bars"></i>
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
                                <a className="nav-link" onClick={() =>{history.push('/profile')}}>Thông tin</a>
                            </li>
                        </ul>
                        <div className="header__right">
                            {renderUserLogin()}
                        </div>
                    </div>

                </nav>

            </div>
        </div>

    )
}
