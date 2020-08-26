import React, { Component } from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";
import NotFound from "../components/NotFound";
import "./MainMyWishList.css";
class MainMyWishList extends Component {
    deleteProduct = async (e) => {
        const id = e.target.id;
        await axios.post(
            `https://market-time-be.herokuapp.com/user/deleteFromWishList/${id}`
        );
        alert("Deleted product from Wishlist ");
        this.props.history.push("/user-dashboard");
    };

    render() {
        if (this.props.product.length !== 0) {
            return (
                <div className="col-md-3 cot">
                    <div className="card cotm1">
                        <img
                            src={this.props.product.photos[0]}
                            className="card-img-top img"
                            alt="..."
                        />
                        <div className="card-body">
                            <h5 className="card-title">
                                {this.props.product.title}
                            </h5>
                            <p className="card-text">
                                Add is From {this.props.product.city}
                            </p>
                        </div>
                        <div className="card-footer">
                            <small className="text-muted">
                                Last updated{" "}
                                {new Date(this.props.product.date)
                                    .toUTCString()
                                    .slice(4, 16)}{" "}
                            </small>
                        </div>
                        <button
                            id={this.props.product._id}
                            onClick={this.deleteProduct}
                            className="btn btn-warning"
                        >
                            Delete From Wishlist
                        </button>
                    </div>
                </div>
            );
        } else {
            return (
                <div>
                    <NotFound />
                </div>
            );
        }
    }
}

export default withRouter(MainMyWishList);
