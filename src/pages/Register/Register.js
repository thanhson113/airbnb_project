import React from 'react'

export default function Register() {
    return (
        <div id="sign-in-dialog" className="zoom-anim-dialog">
            <div className="small-dialog-header">
                <h3>Register</h3>
            </div>
            {/*Tabs */}
            <div className="sign-in-form style-1">
                <div className="tabs-container alt">
                    {/* Register */}
                    <div className="tab-content" id="tab2" style={{ display: 'none' }}>
                        <form method="post" className="register">
                            <p className="form-row form-row-wide">
                                <label htmlFor="username2">Username:
                                    <i className="im im-icon-Male" />
                                    <input type="text" className="input-text" name="username" id="username2" defaultValue />
                                </label>
                            </p>
                            <p className="form-row form-row-wide">
                                <label htmlFor="email2">Email Address:
                                    <i className="im im-icon-Mail" />
                                    <input type="text" className="input-text" name="email" id="email2" defaultValue />
                                </label>
                            </p>
                            <p className="form-row form-row-wide">
                                <label htmlFor="password1">Password:
                                    <i className="im im-icon-Lock-2" />
                                    <input className="input-text" type="password" name="password1" id="password1" />
                                </label>
                            </p>
                            <p className="form-row form-row-wide">
                                <label htmlFor="password2">Repeat Password:
                                    <i className="im im-icon-Lock-2" />
                                    <input className="input-text" type="password" name="password2" id="password2" />
                                </label>
                            </p>
                            <input type="submit" className="button border fw margin-top-10" name="register" defaultValue="Register" />
                        </form>
                    </div>
                </div>
            </div>

        </div>
    )
}
