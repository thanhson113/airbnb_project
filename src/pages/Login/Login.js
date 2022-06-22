/** @format */

import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";


import { add_component } from "../../redux/Actions/ComponentAction";
import { LoginAction } from "../../redux/Actions/XacThucNguoiDungAction";
import Register from "../Register/Register";

import "../../asset/css/login.css";

 function Login() {
   
  let [user, setUserAccount] = useState({
    email: "",
    password: "",
  });
  
  const dispatch = useDispatch();

  

  const hanleInput = (event) => {
    let { value, name } = event.target;

    setUserAccount({
      ...user,
      [name]: value,
    });
    
  };

  const handleSubmit = (values) => {
    values.preventDefault();

    const { email, password } = values;
    setUserAccount({
      email: email,
      password: password,
    });
    dispatch(LoginAction(user));
  };

  return (
   
      <div className="login-box">
        <h2>SIGN IN</h2>
        <form
          onSubmit={(values) => {
            handleSubmit(values);
          }}
          style={{ witdh: "100%" }}
        >
          <div className="user-box">
            <input
              defaultValue=""
              onChange={(event) => {
                hanleInput(event);
              }}
              type="email"
              name="email"
              required
            />
            <label>Email</label>
          </div>
          <div className="user-box">
            <input
              defaultValue=""
              onChange={(event) => {
                hanleInput(event);
              }}
              type="password"
              name="password"
              required
            />
            <label>Password</label>
          </div>
          <div className="d-flex justify-content-between">
            <div className="btn_login">
              <button type="submit">
                <span />
                <span />
                <span />
                <span />
                Login
              </button>
            </div>
            <div className="register">
              <a className=" custom-btn btn-register" onClick={()=>{
                 dispatch(add_component(<Register />, "Đăng Ký"))
              }} >
                Register
              </a>
            </div>
          </div>
        </form>
      </div>
  );
}

export default Login