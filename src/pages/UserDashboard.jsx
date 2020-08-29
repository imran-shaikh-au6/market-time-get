import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { userProfile } from ".././Redux/actions/userAction";
import { logoutUser } from "../Redux/actions/userAction";
import "./UserDashboard.css";
const UserDashboard = (props) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        setUser(props.users);

        console.log(props.users);
        // console.log(props.history.location.state)
    }, [props.users]);

    const handleEdit = async () => {
        // const a = await props.userProfile();

        props.history.push({ pathname: "/editProfile", state: user });
    };
    const handleLogout = async (e) => {
        e.preventDefault();
        props.logoutUser();
        alert("Logout Successfully");
        props.history.push("/");
    };
    const handleMyAdds = async (e) => {
        e.preventDefault();
        props.history.push("/my-Ads");
    };
    const handleMyFavo = async (e) => {
        e.preventDefault();
        props.history.push("/my-wishlist");
    };
    return (
        <div>
            {user !== null ? (
                <div className="container-fluid cost">
                    <div className="row">
                        <div className="col-md-1"></div>
                        <div className="col-md-3 main">
                            <ul style={{ "list-style-type": "none" }}>
                                <div className="li2">
                                    <li>
                                        <h4>
                                            <b>Menu</b>
                                        </h4>
                                    </li>
                                </div>
                                <div className="li3">
                                    <li>Dashboard</li>
                                </div>
                                <hr className="hr" />
                                <div onClick={handleMyFavo} className="li1">
                                    <li>My WishList</li>
                                </div>
                                <hr className="hr" />
                                <div onClick={handleMyAdds} className="li1">
                                    <li>My Listing</li>
                                </div>
                                <hr className="hr" />
                                <div onClick={handleEdit} className="li1">
                                    <li>Edit Profile</li>
                                </div>
                                <hr className="hr" />
                                <div onClick={handleLogout} className="li1">
                                    <li>Logout</li>
                                </div>
                            </ul>
                        </div>
                        <div className="col-md-6 mid">
                            <img
                                className="image"
                                src={user.image}
                                alt={user.image}
                            />
                            <div className="name">
                                <h2 style={{ color: "yellow" }}>
                                    Hello, {user.name}
                                </h2>
                                <h4>{user.email}</h4>
                            </div>
                            <div className="details">
                                <h3 style={{ color: "yellow" }}>
                                    <b>Your Profile Details</b>{" "}
                                </h3>
                                <h4>City: {user.city}</h4>
                                <h4>Contact Details: {user.contactNo}</h4>
                                <h4>Facebook Profile: {user.facebook}</h4>
                                <h4>Instagram Profile: {user.instagram}</h4>
                            </div>
                        </div>
                        <div className="col-md-2 "></div>
                    </div>
                </div>
            ) : (
                <h2>Loading</h2>
            )}
        </div>
    );
};
const mapStatetoprops = (state) => {
    return {
        users: state.user.user,
        pro: state,
    };
};
export default connect(mapStatetoprops, { userProfile, logoutUser })(
    withRouter(UserDashboard)
);
