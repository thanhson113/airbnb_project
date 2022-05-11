import React from 'react'

export default function Login() {
    return (
        <div id="sign-in-dialog" className="zoom-anim-dialog ">
            <div className="small-dialog-header">
                <h3>Sign In</h3>
            </div>
            {/*Tabs */}
            <div className="sign-in-form style-1">
                <div className="tabs-container alt">
                    {/* Login */}
                    <div className="tab-content" id="tab1" >
                        <form method="post" className="login">
                            <p className="form-row form-row-wide">
                                <label htmlFor="username">Username:
                                    <i className="im im-icon-Male" />
                                    <input type="text" className="input-text" name="username" id="username" defaultValue />
                                </label>
                            </p>
                            <p className="form-row form-row-wide">
                                <label htmlFor="password">Password:
                                    <i className="im im-icon-Lock-2" />
                                    <input className="input-text" type="password" name="password" id="password" />
                                </label>
                                <span className="lost_password">
                                    <a href="#">Lost Your Password?</a>
                                </span>
                            </p>
                            <div className="form-row">
                                <input type="submit" className="button border margin-top-5" name="login" defaultValue="Login" />
                                <div className="checkboxes margin-top-10">
                                    <input id="remember-me" type="checkbox" name="check" />
                                    <label htmlFor="remember-me">Remember Me</label>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>


    )
}
