import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";
import GoogleLogin from "react-google-login";

import {
    NotificationContainer,
    NotificationManager,
} from "react-notifications";

class ResetPassword extends Component {
    constructor(props) {
        super(props);
        this.state = {
            linkDate: "",
            email: "",
            password: "",
            confirm_password: "",
            errors: {},
        };
    }
    componentDidMount() {
        let slugParam = this.props.match.params.slug;
        let splitSlug = slugParam.split("+++");
        let reqDate = splitSlug[0];
        let email = splitSlug[1];
        console.log(reqDate);
        console.log(email);
        this.setState({ email: email, linkDate: reqDate });
        let date1 = new Date(reqDate);
        let currentDate = new Date();
        let differenceinMS = currentDate - date1;
        if (differenceinMS > 3600000) {
            NotificationManager.error(
                "Link Not Valid link will be valid for 15 min.Please sent the reset link Again"
            );
            this.props.history.push("/login");
        }
    }
    handleInput = (e) => {
        e.preventDefault();
        const name = e.target.name;
        const value = e.target.value;
        this.setState({ [name]: value });
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
    handleForm = (e) => {
        e.preventDefault();
        if (this.state.email === "") {
            NotificationManager.warning("Email is Required");
            return false;
        }
        // const data = { email: this.state.email, };
        // console.log(data)
        axios
            .post(
                "https://market-time-be.herokuapp.com/updatePassword",
                this.state
            )
            .then((result) => {
                NotificationManager.success(result.data.msg);
                console.log(result.data);
                alert("Passwrod Has been Changed");
                this.props.history.push("/login");
            })
            .catch((err) => {
                console.log(err);
                if (err.response && err.response.status === 404)
                    NotificationManager.error(err.response.data.msg);
                else
                    NotificationManager.error(
                        "Something Went Wrong Or You Are Not Registered User"
                    );
                this.setState({ errors: err.response });
            });
    };
    render() {
        return (
            <div className="container-fluid register">
                <NotificationContainer />
                <div className="row mt-2">
                    <div className="col-md-2"></div>
                    <div className="col-md-3 ggle">
                        <div className="chilfggle">
                            <div>
                                <div class="signup-connect">
                                    <h2>Login With Google</h2>
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
                        <form onSubmit={this.handleForm}>
                            <div className="form-group">
                                <label for="exampleInputEmail1">Password</label>
                                <input
                                    type="password"
                                    id="exampleInputEmail1"
                                    aria-describedby="emailHelp"
                                    onChange={this.handleChange}
                                    name="email"
                                    className="form-control"
                                />
                            </div>
                            <div className="form-group">
                                <label for="exampleInputPassword1">
                                    Confirm Password
                                </label>
                                <input
                                    type="password"
                                    name="confirm_password"
                                    value={this.state.confirm_password}
                                    onChange={this.handleInput}
                                    className="form-control"
                                />
                            </div>

                            <div>
                                <button
                                    onClick={this.handleForm}
                                    className="btn btn-primary"
                                >
                                    Reset
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

export default withRouter(ResetPassword);
