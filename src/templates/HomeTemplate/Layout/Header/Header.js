/** @format */

import React, { Fragment, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Drawer } from "antd";

import logo from "../../../../assets/images/logo.png";
import { Acces_stoken } from "../../../../util/setting";
import { history } from "../../../../App";
import { ChiTietNguoiDungAction } from "../../../../redux/Actions/NguoiDungAction";
import { add_component } from "../../../../redux/Actions/ComponentAction";

import Login from "../../../../pages/Login/Login";
import Register from "../../../../pages/Register/Register"

import "./header.css";

export default function Header() {
    const { user } = useSelector((state) => state.nguoiDungReducer);
    const dispatch = useDispatch();
    const { Component, id } = useSelector((state) => state.ComponentReducer);


    const userID = localStorage.getItem("id");

    //Drawer ***
    const [visible, setVisible] = useState(false);

    const showDrawer = () => {
        setVisible(true);
    };

    const onClose = () => {
        setVisible(false);
    };
    //Drawer END

    useEffect(() => {
        dispatch(ChiTietNguoiDungAction(userID));
    }, []);

    const renderUserLogin = () => {
        if (localStorage.getItem("accessToken")) {
            return (
                <div className="dropdown">
                    <a
                        className="nav-link dropdown-toggle"
                        href="#"
                        id="navbarDropdown"
                        role="button"
                        data-toggle="dropdown"
                    >
                        <img
                            style={{
                                width: 35,
                                height: 35,
                                objectfit: "cover",
                                borderRadius: "50%",
                                margin: "0 10px",
                            }}
                            src={user.avatar}
                        />
                        <span className="text-dark">{user.name}</span>
                    </a>
                    <div className="dropdown-menu" style={{ left: "20px" }}>
                        <NavLink style={{ fontSize: '15px', margin: '5px 0' }} className="dropdown-item" to="/profile">
                            <i className="fa fa-info"></i>
                            Thông tin
                        </NavLink>
                        <button
                            style={{ fontSize: "15px" }}
                            className="dropdown-item"
                            onClick={() => {
                                localStorage.clear();
                                window.location.reload();
                                window.location.pathname = "/home";
                            }}
                        >
                            <i className="fa-solid fa-arrow-right-from-bracket"></i>
                            Đăng xuất
                        </button>
                    </div>
                </div>
            );
        } else {
            return (
                <>
                    <div className="header__login">
                        <a
                            onClick={async () => {
                                await dispatch(add_component(<Login />, "Đăng Nhập"));
                                await showDrawer();
                            }}
                        >
                            <i className="fa-solid fa-arrow-right-to-bracket" />
                            Đăng nhập
                        </a>

                    </div>
                    <div className="header__register">
                        <a
                            onClick={async () => {
                                await dispatch(add_component(<Register />, "Đăng Ký"));
                                await showDrawer();
                            }}
                        >
                            <i className="fa-solid fa-arrow-right-to-bracket" />
                            Đăng Ký
                        </a>
                    </div>
                </>
            );
        }
    };
    return (
        <Fragment>
            <div className="header py-3">
                <div className="container">
                    <nav className="navbar navbar-expand-lg ">
                        <NavLink className="navbar-brand" to="/home">
                            <img className="w-75" src={logo} alt="" />
                        </NavLink>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-toggle="collapse"
                            data-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <i style={{ fontSize: "20px" }} className="fa fa-bars"></i>
                        </button>
                        <div
                            className="collapse navbar-collapse"
                            id="navbarSupportedContent"
                        >
                            <ul className="navbar-nav mr-auto header__list">
                                <li className="nav-item active header__item">
                                    <a className="nav-link" href="#">
                                        Trang chủ
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        Blog
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        Liên hệ
                                    </a>
                                </li>
                            </ul>
                            <div className="header__right">{renderUserLogin()}</div>
                        </div>
                    </nav>
                </div>
            </div>
            <Drawer
                title={id}
                placement="right"
                onClose={onClose}
                visible={visible}
            >
                <div>{Component}</div>
            </Drawer>
        </Fragment>
    );
}