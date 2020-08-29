import React, { Component } from "react";
import "./navbar.css";
import { connect } from "react-redux";
import { logoutUser } from "../Redux/actions/userAction";
import { withRouter } from "react-router-dom";
import img from "../images/Market Time.gif";

class Navbar extends Component {
    handleLogout = (e) => {
        e.preventDefault();
        this.props.logoutUser();
        this.props.history.push("/");
    };
    userDashboard = () => {
        this.props.history.push({
            pathname: "/user-dashboard",
            state: this.props.user.user.user,
        });
    };

    render() {
        const { isAuthenticated } = this.props.user.user;
        console.log(this.props.user.user.user.image);
        const registerLogin = (
            <>
                <li className="nav-item">
                    <a className="nav-link" href="/register">
                        <i className="fas fa-user-plus fa-3x fa-fw"></i>
                        Register
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/login">
                        <i className="fas fa-sign-in-alt fa-3x fa-fw"></i>
                        Login
                    </a>
                </li>
            </>
        );
        const Logout = (
            <>
                <li className="nav-item">
                    <a
                        className="nav-link"
                        href="#/"
                        onClick={this.userDashboard}
                    >
                        <img
                            src={this.props.user.user.user.image}
                            alt={this.props.user.user.user.image}
                            style={{
                                height: "50px",
                                width: "50px",
                                "border-radius": "50%",
                            }}
                        />

                        {/* <p>Profile</p> */}
                        <span className="spa"> Profile</span>
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/addPost">
                        <i className="fas fa-plus-circle fa-3x fa-fw"></i>
                        Add New Post
                    </a>
                </li>
                <li className="nav-item">
                    <a
                        className="nav-link"
                        onClick={this.handleLogout.bind(this)}
                        href="/login"
                    >
                        <i className="fas fa-sign-out-alt fa-3x fa-fw"></i>
                        Logout
                    </a>
                </li>
            </>
        );
        return (
            <div className="  fix">
                <nav className="navbar navbar-expand-lg navbar-dark back">
                    <img
                        style={{ width: "150px", height: "100px" }}
                        src={img}
                        alt={img}
                    />
                    <button
                        className="navbar-toggler"
                        data-toggle="collapse"
                        data-target="#navbar-menu"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbar-menu">
                        <div
                            className="collapse navbar-collapse"
                            id="navbar-menu"
                        ></div>
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="/">
                                    <i className="fas fa-home fa-3x fa-fw"></i>
                                    Home{" "}
                                    <span className="sr-only">(current)</span>
                                </a>
                            </li>
                        </ul>

                        <ul className="navbar-nav mr-0 my-2 my-lg-0">
                            {" "}
                            {isAuthenticated === false ? registerLogin : Logout}
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        user: state,
    };
};

export default connect(mapStateToProps, { logoutUser })(withRouter(Navbar));
