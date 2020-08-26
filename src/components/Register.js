import React, { Component } from "react";
import { RegisterUsers, GoogleLoginAuth } from "../Redux/actions/userAction";
import { connect } from "react-redux";
import GoogleLogin from "react-google-login";
import "./register.css";
import classnames from "classnames";
class Register extends Component {
    state = {
        name: "",
        email: "",
        password: "",
        city: "",
        contactNo: "",
        facebook: "",
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
            city: this.state.city,
            contactNo: this.state.contactNo,
        };
        const data = {
            newUser: newUser,
        };

        const rgs = this.props.RegisterUsers(data);
        console.log(rgs);
    };
    componentWillReceiveProps(nextprops) {
        console.log(nextprops);
        if (nextprops.auth.RegisterUser._id) {
            this.props.history.push("/login");
        }
    }
    render() {
        const { errors } = this.props.auth;
        console.log(errors);
        return (
            <div className="container-fluid ">
                <div className="row mt-2">
                    <div className="col-md-2"></div>
                    <div className="col-md-3 ggle">
                        <div className="chilfggle">
                            <div>
                                <div class="signup-connect">
                                    <h2>Create An Account</h2>
                                    <GoogleLogin
                                        clientId="1072465421731-uvep08evonm2cc003a31g791m73tonhi.apps.googleusercontent.com"
                                        buttonText="Login"
                                        onSuccess={this.responseGoogle}
                                        onFailure={this.responseGoogle}
                                        cookiePolicy={"single_host_origin"}
                                        className="gbtn"
                                    ></GoogleLogin>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-5 text1">
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group form-group-sm">
                                <label for="exampleInputPassword1">
                                    User Name
                                </label>
                                <input
                                    onChange={this.handleChange}
                                    type="text"
                                    className={classnames(
                                        "form-control input-sm ",
                                        {
                                            "is-invalid": errors.name,
                                        }
                                    )}
                                    name="name"
                                />
                                {errors.name && (
                                    <div className="invalid-feedback">
                                        {errors.name}
                                    </div>
                                )}
                            </div>
                            <div className="form-group">
                                <div class="form-group">
                                    <label for="exampleFormControlSelect1">
                                        Choose Your City
                                    </label>
                                    <select
                                        class="form-control"
                                        id="exampleFormControlSelect1"
                                        onChange={this.handleChange}
                                        name="city"
                                    >
                                        <option>Mumbai</option>
                                        <option>Pune</option>
                                        <option>Banglore</option>
                                        <option>Delhi</option>
                                        <option>Hydrabad</option>
                                        <option>Chennai</option>
                                    </select>
                                </div>
                            </div>
                            <label for="exampleInputPassword1">
                                Contact Number
                            </label>
                            <div class="input-group ">
                                <br />
                                <div class="input-group-prepend">
                                    <div class="input-group-text">+91</div>
                                </div>

                                <input
                                    type="text"
                                    class="form-control"
                                    id="inlineFormInputGroup"
                                    onChange={this.handleChange}
                                    name="contactNo"
                                />
                            </div>
                            <div className="form-group">
                                <label for="exampleInputEmail1">
                                    Email address
                                </label>
                                <input
                                    type="email"
                                    className={classnames("form-control ", {
                                        "is-invalid": errors.email,
                                    })}
                                    id="exampleInputEmail1"
                                    aria-describedby="emailHelp"
                                    onChange={this.handleChange}
                                    name="email"
                                />
                                {errors.email && (
                                    <div className="invalid-feedback">
                                        {errors.email}
                                    </div>
                                )}
                                <small
                                    id="emailHelp"
                                    className="form-text text-muted"
                                >
                                    We'll never share your email with anyone
                                    else.
                                </small>
                            </div>
                            <div className="form-group">
                                <label for="exampleInputPassword1">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    className={classnames("form-control ", {
                                        "is-invalid": errors.password,
                                    })}
                                    id="exampleInputPassword1"
                                    onChange={this.handleChange}
                                    name="password"
                                />
                                {errors.password && (
                                    <div className="invalid-feedback">
                                        {errors.password}
                                    </div>
                                )}
                            </div>
                            <div>
                                {errors.message && (
                                    <div className="invalid-feedback">
                                        {errors.message}
                                    </div>
                                )}
                                <button
                                    type="submit"
                                    className={classnames(
                                        "btn btn-warning form-control",
                                        {
                                            "is-invalid": errors.message,
                                        }
                                    )}
                                >
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className="col-md-2"></div>
                </div>
            </div>
        );
    }
}

const mapstateToProps = (state) => {
    return { auth: state.user };
};

export default connect(mapstateToProps, { RegisterUsers, GoogleLoginAuth })(
    Register
);
