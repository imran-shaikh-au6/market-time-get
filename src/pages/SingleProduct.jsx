import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import isEmpty from "../utils/is-empty";
import axios from "axios";
import "./singleProduct.css";
import Spinner from "../components/Spinner";
import { withRouter } from "react-router-dom";
function SingleProduct(props) {
    const [products, setProducts] = useState(null);

    useEffect(() => {
        setProducts(props.product);
    }, [props.product]);
    const emailHander = async (e) => {
        e.preventDefault();
        if (localStorage.getItem("jwtToken")) {
            const id = props.history.location.search;
            const pId = id.split("=")[1];
            console.log(pId);
            const res = await axios.post(
                `https://market-time-be.herokuapp.com/userEmailDetails/${pId}`
            );
            console.log(res.data);
            if (res.data) {
                alert(
                    "Owner Details has been sent to your mail, Please Check inbox"
                );
            }
        } else {
            props.history.push("/login");
        }
    };
    const AddToFavo = async (e) => {
        e.preventDefault();
        const productId = e.target.id;
        console.log(productId);
        if (localStorage.getItem("jwtToken")) {
            const res = await axios.post(
                `https://market-time-be.herokuapp.com/user/addTowishlist/${productId}`
            );
            console.log(res.data.data);
            if (res.data) {
                alert("added to favourite list");
            }
        } else {
            props.history.push("/login");
        }
    };
    if (!isEmpty(products)) {
        const {
            title,
            photos,
            category,
            brand,
            city,
            date,
            description,
            price,
            year,
            _id,
        } = products;

        const { contactNo, image, name } = props.productOwner;
        const cutCont = contactNo.toString();
        const cutted = cutCont.slice(0, 6) + "XXXX";

        return (
            <div className="container-fluid mt-3">
                <div className="row">
                    <div className="col-md-1"></div>
                    <div className="col-md-6">
                        <div
                            id="carouselExampleIndicators"
                            className="carousel slide"
                            data-ride="carousel"
                        >
                            <ol className="carousel-indicators">
                                <li
                                    data-target="#carouselExampleIndicators"
                                    data-slide-to="0"
                                    className="active"
                                ></li>
                                <li
                                    data-target="#carouselExampleIndicators"
                                    data-slide-to="1"
                                ></li>
                            </ol>
                            <div className="carousel-inner">
                                {!products.photos
                                    ? ""
                                    : products.photos.map((photo, index) => (
                                          <div
                                              key={index}
                                              className={
                                                  index === 0
                                                      ? "carousel-item active"
                                                      : "carousel-item "
                                              }
                                          >
                                              <img
                                                  className="d-block w-100"
                                                  src={photo}
                                                  alt={index}
                                              />
                                          </div>
                                      ))}
                            </div>
                            <a
                                className="carousel-control-prev"
                                href="#carouselExampleIndicators"
                                role="button"
                                data-slide="prev"
                            >
                                <span
                                    className="carousel-control-prev-icon"
                                    aria-hidden="true"
                                ></span>
                                <span className="sr-only">Previous</span>
                            </a>
                            <a
                                className="carousel-control-next"
                                href="#carouselExampleIndicators"
                                role="button"
                                data-slide="next"
                            >
                                <span
                                    className="carousel-control-next-icon"
                                    aria-hidden="true"
                                ></span>
                                <span className="sr-only">Next</span>
                            </a>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="priceText">
                            <h3
                                style={{
                                    "text-align": "center",
                                    padding: "8px",
                                    color: " white",
                                }}
                            >
                                ₹ <b>{price}</b>
                            </h3>
                        </div>
                        <div className="title">
                            <h3 style={{ color: "white" }}>
                                <b>{title}</b>
                            </h3>
                            <table className="container">
                                <thead></thead>
                                <tbody>
                                    <tr>
                                        <td>Category</td>
                                        <td>{category}</td>
                                    </tr>
                                    <tr>
                                        <td>Location</td>
                                        <td>{city}</td>
                                    </tr>
                                    <tr>
                                        <td>Brand</td>
                                        <td>{brand}</td>
                                    </tr>
                                    <tr>
                                        <td>Year</td>
                                        <td>{year}</td>
                                    </tr>
                                    <tr>
                                        <td>Date</td>
                                        <td>
                                            {" "}
                                            {new Date(date)
                                                .toUTCString()
                                                .slice(4, 16)}
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="btns">
                            <button
                                style={{ width: " 190px" }}
                                className="btn btn-warning"
                                onClick={AddToFavo}
                                id={_id}
                            >
                                Add To WishList
                            </button>
                        </div>
                    </div>
                    <div className="col-md-1"></div>
                </div>

                <div className="row">
                    <div className="col-md-1"></div>
                    <div className="col-md-6 tabs">
                        <ul className="nav nav-tabs" id="myTab" role="tablist">
                            <li className="nav-item" role="presentation">
                                <a
                                    className="nav-link active"
                                    id="home-tab"
                                    data-toggle="tab"
                                    href="#home"
                                    role="tab"
                                    aria-controls="home"
                                    aria-selected="true"
                                    style={{}}
                                >
                                    Product Description
                                </a>
                            </li>
                            <li className="nav-item" role="presentation">
                                <a
                                    className="nav-link"
                                    id="profile-tab"
                                    data-toggle="tab"
                                    href="#profile"
                                    role="tab"
                                    aria-controls="profile"
                                    aria-selected="false"
                                    style={{}}
                                >
                                    Safety Tips for Buyers
                                </a>
                            </li>
                        </ul>
                        <div className="tab-content" id="myTabContent">
                            <div
                                className="tab-pane fade show active"
                                id="home"
                                role="tabpanel"
                                aria-labelledby="home-tab"
                            >
                                {description}
                            </div>
                            <div
                                className="tab-pane fade"
                                id="profile"
                                role="tabpanel"
                                aria-labelledby="profile-tab"
                            >
                                <ul>
                                    <li>Meet seller at a public place</li>
                                    <li>Check The item before you buy</li>
                                    <li>Pay only after collecting The item</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="seller">
                            <img
                                style={{
                                    height: "150px",
                                    width: "150px",
                                    borderRadius: "50%",
                                    marginLeft: "120px",
                                }}
                                src={image}
                                alt={image}
                            />
                            <h3>Seller information</h3>
                            <h4>Name: {name}</h4>
                            <h4>Location: {props.productOwner.city}</h4>
                            <h4>Contact No: {cutted}</h4>
                            <h4>
                                Active From:{" "}
                                {new Date(props.productOwner.date)
                                    .toUTCString()
                                    .slice(4, 16)}
                            </h4>
                            <button
                                onClick={emailHander}
                                className="btn btn-warning"
                            >
                                Get Owner Details By Mail
                            </button>
                        </div>
                    </div>
                    <div className="col-md-1"></div>
                </div>
            </div>
        );
    } else {
        return <Spinner />;
    }
}

const mapStateToProps = (state) => {
    return {
        product: state.product.particularProductDetail,
        productOwner: state.product.particularProductOwner,
    };
};
export default connect(mapStateToProps, null)(withRouter(SingleProduct));
