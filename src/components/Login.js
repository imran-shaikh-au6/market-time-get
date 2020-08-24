import React, { Component } from "react";
import { loginUsers } from "../Redux/actions/userAction";
import { connect } from "react-redux";
import "./register.css";
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
        };

        const rgs = this.props.loginUsers(data);
        alert("Logged In Successfully");
        this.props.history.push("/");
        console.log(rgs);
    };
    render() {
        console.log(this.props.user);
        return (
            <div className="container-fluid register">
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label for="exampleInputPassword1">User Name</label>
                        <input
                            onChange={this.handleChange}
                            type="text"
                            className="form-control"
                            name="name"
                        />
                    </div>

                    <div className="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input
                            type="email"
                            className="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            onChange={this.handleChange}
                            name="email"
                        />
                        <small id="emailHelp" className="form-text text-muted">
                            We'll never share your email with anyone else.
                        </small>
                    </div>
                    <div className="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input
                            type="password"
                            className="form-control"
                            id="exampleInputPassword1"
                            onChange={this.handleChange}
                            name="password"
                        />
                    </div>

                    <button type="submit" className="btn btn-primary">
                        Submit
                    </button>
                </form>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return { user: state };
};

export default connect(mapStateToProps, { loginUsers })(Login);
