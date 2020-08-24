import React, { Component } from "react";
import { connect } from "react-redux";
import { editProfile } from "../Redux/actions/userAction";
import { withRouter } from "react-router-dom";
class EditProfile extends Component {
    state = {
        id: "",
        name: "",
        image: "",
        city: "",
        contactNo: "",
        facebook: "",
        youtube: "",
        instagram: "",
    };
    textHandle = (e) => {
        e.preventDefault();
        this.setState({ id: this.props.history.location.state.id });
        const { name, value } = e.target;
        this.setState({ [name]: value });
    };

    textSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        this.props.editProfile({
            editData: formData,
            history: this.props.history,
        });
    };
    render() {
        console.log(this.props.history.location);
        return (
            <div className="create-profile mt-4">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <h1 className="display-3 text-center my-2">
                                Edit Your Profile
                            </h1>
                            <p className="lead text-center">
                                Let's get some information to make your profile
                                stand out
                            </p>

                            <form
                                onSubmit={this.textSubmit}
                                encType="multipart/form-data"
                            >
                                <input
                                    type="file"
                                    name="image"
                                    onChange={this.textHandle}
                                />
                                <div className="form-group">
                                    <input
                                        type="text"
                                        className="form-control form-control-lg"
                                        placeholder="My Name"
                                        name="name"
                                        onChange={this.textHandle}
                                        required
                                    />
                                    <small className="form-text text-muted">
                                        Enter Your Name
                                    </small>
                                </div>
                                <div className="form-group">
                                    <select
                                        className="form-control form-control-lg"
                                        name="city"
                                        onChange={this.textHandle}
                                    >
                                        <option value=""></option>
                                        <option value="Delhi">Delhi</option>
                                        <option value="Bangalore">
                                            Bangalore
                                        </option>
                                        <option value="Mumbai"> Mumbai</option>
                                        <option value="Kolkata">Kolkata</option>
                                        <option value="Chennai">Chennai</option>
                                    </select>
                                    <small className="form-text text-muted">
                                        Select your city onChange=
                                    </small>
                                </div>
                                <div className="input-group mb-0">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">
                                            <h5>+91</h5>
                                        </span>
                                    </div>
                                    <input
                                        type="number"
                                        className="form-control form-control-lg"
                                        placeholder="Enter Your Contact Number"
                                        name="contactNo"
                                        onChange={this.textHandle}
                                    />
                                </div>
                                <small className="form-text text-muted mb-4">
                                    Enter Your Contact Number
                                </small>

                                <div className="mb-3">
                                    <button
                                        type="button"
                                        className="btn btn-light"
                                        disabled
                                    >
                                        Add Social Network Links
                                    </button>
                                    <span className="text-muted">Optional</span>
                                </div>

                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">
                                            <i className="fab fa-facebook"></i>
                                        </span>
                                    </div>
                                    <input
                                        type="text"
                                        className="form-control form-control-lg"
                                        placeholder="Facebook Page URL"
                                        name="facebook"
                                        onChange={this.textHandle}
                                    />
                                </div>

                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">
                                            <i className="fab fa-youtube"></i>
                                        </span>
                                    </div>
                                    <input
                                        type="text"
                                        className="form-control form-control-lg"
                                        placeholder="YouTube Channel URL"
                                        name="youtube"
                                        onChange={this.textHandle}
                                    />
                                </div>

                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">
                                            <i className="fab fa-instagram"></i>
                                        </span>
                                    </div>
                                    <input
                                        type="text"
                                        className="form-control form-control-lg"
                                        placeholder="Instagram Page URL"
                                        name="instagram"
                                        onChange={this.textHandle}
                                    />
                                </div>
                                <br />
                                <div className="d-flex justify-content-around">
                                    <button
                                        id="saveButton"
                                        type="submit"
                                        className="btn btn-info col-5"
                                    >
                                        Save
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(null, { editProfile })(withRouter(EditProfile));
