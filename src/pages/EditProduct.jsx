import React, { Component } from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();
class EditProduct extends Component {
    state = {
        id: "",
        image: [],
        errors: {},
        token: null,
    };

    handleFormData = async (e) => {
        e.preventDefault();

        const id = this.props.history.location.state;
        console.log(id);
        const formData = new FormData(e.target);
        formData.append("id", id);

        const datas = await axios.post(
            "https://market-time-be.herokuapp.com/editproduct",
            formData
        );
        if (datas.data) {
            toast.success("Edited Successfully !", {
                position: toast.POSITION.TOP_CENTER,
            });
            this.props.history.push("/my-Ads");
        } else {
            toast.error("Server Issue check back later", {
                position: toast.POSITION.TOP_CENTER,
            });
        }
        console.log(datas.data);
    };

    handleChange = (event) => {
        const { value } = event.target;
        let newState = this.state;
        newState.image.push(value);
        this.setState(newState);
    };

    render() {
        return (
            <div className="container-fluid row">
                <div className="col-md-3"></div>
                <div className="col-md-6">
                    <h2
                        style={{ color: "rgba(249, 107, 126, 1)" }}
                        className="display-4 text-center my-2"
                    >
                        Edit Product
                    </h2>
                    <form
                        onSubmit={this.handleFormData}
                        encType="multipart/form-data"
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
                        {/* Description */}
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
                        {/* select category */}
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
                        {/* Select City */}
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

                        {/* Enter Brand */}
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
                        {/* Enter Amount */}
                        <div className="form-group">
                            <label
                                className="sr-only"
                                for="inlineFormInputGroup"
                            >
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
                        {/* Year */}
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
                        {/* Select Images */}

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
                                            required="true"
                                        />
                                        <label
                                            className="custom-file-label"
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
                <div className="col-md-3"></div>
            </div>
        );
    }
}

export default withRouter(EditProduct);
