import React, { Component } from "react";
import { loginUsers, GoogleLoginAuth } from "../Redux/actions/userAction";
import { connect } from "react-redux";
import GoogleLogin from "react-google-login";

import "./register.css";
import classnames from "classnames";
class Login extends Component {
    state = {
        name: "",
        email: "",
        password: "",
    };
    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    };
    handleSubmit = async (e) => {
        e.preventDefault();
        const newUser = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
        };
        const data = {
            newUser: newUser,
            history: this.props.history,
        };

        const rgs = this.props.loginUsers(data);

        console.log(rgs);
    };
    responseGoogle = (response) => {
        const { name, googleId, email, imageUrl } = response.profileObj;
        console.log(response.profileObj);
        const data = {
            name: name,
            image: imageUrl,
            id: googleId,
            email: email,
        };
        console.log(data);
        this.props.GoogleLoginAuth({ data: data, history: this.props.history });
    };
    componentWillReceiveProps(nextprops) {
        console.log(nextprops.auth.user.id);
        if (nextprops.auth.user.id) {
            this.props.history.push("/");
        }
    }
    render() {
        const { errors } = this.props.auth;
        console.log(this.props.auth);
        return (
            <div className="container-fluid register">
                <div className="row mt-2">
                    <div className="col-md-2"></div>
                    <div className="col-md-3 ggle">
                        <div className="chilfggle">
                            <div>
                                <div class="signup-connect">
                                    <h2>Login With Google</h2>
                                    <GoogleLogin
                                        clientId="1072465421731-uvep08evonm2cc003a31g791m73tonhi.apps.googleusercontent.com"
                                        buttonText="Login with Google"
                                        onSuccess={this.responseGoogle}
                                        onFailure={this.responseGoogle}
                                        cookiePolicy={"single_host_origin"}
                                        className="btn btn-success"
                                    ></GoogleLogin>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-5 text1">
                        <h3 className="display-6 text-center my-2">
                            Login Form
                        </h3>

                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <label for="exampleInputEmail1">
                                    <b>Email address</b>
                                </label>
                                <input
                                    type="email"
                                    className={classnames(
                                        "form-control form-control-lg",
                                        {
                                            "is-invalid": errors.email,
                                        }
                                    )}
                                    id="exampleInputEmail1"
                                    aria-describedby="emailHelp"
                                    onChange={this.handleChange}
                                    name="email"
                                    placeholder="Enter Your Registered Email Address"
                                />
                                <small
                                    id="emailHelp"
                                    className="form-text text-muted"
                                >
                                    We'll never share your email with anyone
                                    else.
                                </small>
                                {errors.email && (
                                    <div className="invalid-feedback">
                                        {errors.email}
                                    </div>
                                )}
                            </div>
                            <div className="form-group">
                                <label for="exampleInputPassword1">
                                    <b>Password</b>
                                </label>
                                <input
                                    type="password"
                                    className={classnames(
                                        "form-control form-control-lg",
                                        {
                                            "is-invalid": errors.message,
                                        }
                                    )}
                                    id="exampleInputPassword1"
                                    onChange={this.handleChange}
                                    name="password"
                                    placeholder="Enter Your Password"
                                />
                                {errors.message && (
                                    <div className="invalid-feedback">
                                        {errors.password}
                                    </div>
                                )}
                            </div>

                            <div>
                                <button
                                    type="submit"
                                    className={classnames("btn btn-primary", {
                                        "is-invalid": errors.message,
                                    })}
                                >
                                    Submit
                                </button>
                                <button
                                    className="btn btn-danger "
                                    style={{ marginLeft: "280px" }}
                                >
                                    <a
                                        style={{ color: "black" }}
                                        href="/forget-password"
                                    >
                                        Forget Password?
                                    </a>
                                </button>
                                {errors.message && (
                                    <div className="invalid-feedback">
                                        {errors.message}
                                    </div>
                                )}
                            </div>
                        </form>
                    </div>
                    <div className="col-md-2"></div>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return { auth: state.user };
};

export default connect(mapStateToProps, { loginUsers, GoogleLoginAuth })(Login);
