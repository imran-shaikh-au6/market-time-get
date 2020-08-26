import React, { Component } from "react";
import axios from "axios";
import {
    NotificationContainer,
    NotificationManager,
} from "react-notifications";
import "./ForgetPassword.css";
export default class ForgetPassword extends Component {
    constructor(props) {
        super(props);
        this.state = { email: "", errors: {} };
        this.handleInput = this.handleInput.bind(this);
    }
    handleInput = (e) => {
        // e.preventDefault();
        console.log(e.target.value);
        e.preventDefault();
        const name = e.target.name;
        const value = e.target.value;
        this.setState({ [name]: value });
    };
    handleForm = (e) => {
        e.preventDefault();
        if (this.state.email === "") {
            NotificationManager.warning("Email is Required");
            return false;
        }
        const data = { email: this.state.email };
        axios
            .post(
                "https://market-time-be.herokuapp.com/userForgetPassword",
                data
            )
            .then((result) => {
                NotificationManager.success(
                    "Password Reset link sent to yout email .Please check the your email.Link Will be Valid For 30 min"
                );
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
            <div class="container-center">
                <h2>Don't Worry!</h2>
                <form onSubmit={this.handleForm}>
                    <h4>Just provide your email and we can do the rest</h4>
                    <div style={{ marginBottom: "10px" }}>
                        {" "}
                        <NotificationContainer />
                    </div>
                    <formgroup>
                        <input
                            type="email"
                            name="email"
                            value={this.state.email}
                            onChange={this.handleInput}
                        />
                        <label for="email">Email</label>
                        <span>enter your email</span>
                    </formgroup>

                    <button onClick={this.handleForm} id="login-btn">
                        Next
                    </button>
                </form>

                <p>
                    Did you remember? <a href="/login">Sign In</a>
                </p>
            </div>
        );
    }
}
