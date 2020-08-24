import React, { Component } from "react";
import axios from "axios";
import "./addProduct.css";
import { connect } from "react-redux";
import { addPro } from "../Redux/actions/productAction";
import { withRouter } from "react-router-dom";
class AddNewPost extends Component {
    state = {
        image: [],
        errors: {},
        token: null,
    };
    componentDidMount() {
        if (localStorage) {
            const id = localStorage.getItem("jwtToken");
            this.setState({ token: id });
        }
    }
    handleFormData = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const datas = await axios.post("/addProducts", formData);
        if (datas.status === 200) {
            alert("Uploaded Successfully");
            this.props.history.push("/my-Ads");
        }
    };
    handleChange = (event) => {
        const { value } = event.target;
        let newState = this.state;
        newState.image.push(value);
        this.setState(newState);
    };
    render() {
        return (
            <div className="container-fluid w-50">
                <form
                    onSubmit={this.handleFormData}
                    enctype="multipart/form-data"
                >
                    <div className="form-group ">
                        <label for="exampleInputEmail1">Add Title</label>
                        <input
                            type="text"
                            name="title"
                            className="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            placeholder="Title"
                        />
                    </div>
                    <div className="form-group">
                        <label for="exampleFormControlTextarea1">
                            Post Description
                        </label>
                        <textarea
                            className="form-control"
                            id="exampleFormControlTextarea1"
                            rows="3"
                            name="description"
                        ></textarea>
                    </div>
                    <div className="form-group">
                        <label for="exampleFormControlSelect1">
                            Select Category
                        </label>
                        <select
                            className="form-control"
                            id="exampleFormControlSelect1"
                            name="category"
                        >
                            <option>Property</option>
                            <option>Electronics</option>
                            <option>Educational</option>
                            <option>Pets</option>
                            <option>Computer Accesseries</option>
                            <option>Car and Bike</option>
                            <option>Fashion</option>
                            <option>Furniture</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label for="exampleFormControlSelect1">
                            Select City
                        </label>
                        <select
                            className="form-control"
                            id="exampleFormControlSelect1"
                            name="city"
                        >
                            <option>Mumbai</option>
                            <option>Banglore</option>
                            <option>Chennai</option>
                            <option>Delhi</option>
                            <option>Hydrabaad</option>
                            <option>Pune</option>
                        </select>
                    </div>

                    <div className="form-group ">
                        <label for="exampleInputEmail1">Enter Brand</label>
                        <input
                            type="text"
                            className="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            placeholder="Ex.Samsung"
                            name="brand"
                        />
                    </div>
                    <div className="form-group">
                        <label className="sr-only" for="inlineFormInputGroup">
                            Enter Selling Price
                        </label>
                        <label for="exampleFormControlSelect1">
                            Enter Amount
                        </label>
                        <div className="input-group mb-2">
                            <div className="input-group-prepend">
                                <div className="input-group-text">₹</div>
                            </div>
                            <input
                                type="text"
                                className="form-control"
                                id="inlineFormInputGroup"
                                placeholder="Enter Amount"
                                name="price"
                            />
                        </div>
                    </div>
                    <div className="form-group ">
                        <label for="exampleInputEmail1">Enter Year</label>
                        <input
                            type="text"
                            className="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            placeholder="Ex.2020"
                            name="year"
                        />
                    </div>
                    <h3>Select Images</h3>

                    <div>
                        <h2>Select Images</h2>
                        <div className="form-group">
                            <br />
                            <div className="input-group">
                                <div className="custom-file">
                                    <input
                                        type="file"
                                        id="inputGroupFile01"
                                        aria-describedby="inputGroupFileAddon01"
                                        name="image"
                                        onChange={this.handleChange}
                                    />
                                    <label
                                        class="custom-file-label"
                                        for="inputGroupFile01"
                                    >
                                        {!this.state.image[0]
                                            ? "Choose Image"
                                            : this.state.image[0]}
                                    </label>
                                </div>
                            </div>

                            <small className="form-text text-muted">
                                Primary Photo
                            </small>
                        </div>
                        {/*  */}
                        <div className="form-group">
                            <br />
                            <div className="input-group">
                                <div className="custom-file">
                                    <input
                                        type="file"
                                        className="custom-file-input"
                                        id="inputGroupFile01"
                                        aria-describedby="inputGroupFileAddon01"
                                        name="image"
                                        onChange={this.handleChange}
                                    />
                                    <label
                                        className="custom-file-label"
                                        for="inputGroupFile01"
                                    >
                                        {!this.state.image[1]
                                            ? "Choose Image"
                                            : this.state.image[1]}
                                    </label>
                                </div>
                            </div>
                        </div>
                        {/*  */}
                        <div className="form-group">
                            <br />
                            <div className="input-group">
                                <div className="custom-file">
                                    <input
                                        type="file"
                                        className="custom-file-input"
                                        id="inputGroupFile01"
                                        aria-describedby="inputGroupFileAddon01"
                                        name="image"
                                        onChange={this.handleChange}
                                    />
                                    <label
                                        className="custom-file-label"
                                        for="inputGroupFile01"
                                    >
                                        {!this.state.image[2]
                                            ? "Choose Image"
                                            : this.state.image[2]}
                                    </label>
                                </div>
                            </div>
                        </div>
                        {/*  */}
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
    return {
        auth: state,
    };
};

export default connect(mapStateToProps, { addPro })(withRouter(AddNewPost));
