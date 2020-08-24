import React, { Component } from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";
class MainMyWishList extends Component {
    deleteProduct = async (e) => {
        const id = e.target.id;
        await axios.post(`/user/deleteFromWishList/${id}`);
        alert("Deleted product from Wishlist ");
        this.props.history.push("/user-dashboard");
    };

    render() {
        if (this.props.product.length !== 0) {
            return (
                <div>
                    <div className="col-md-3">
                        <div className="card">
                            <img
                                src={this.props.product.photos[0]}
                                className="card-img-top"
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
                                    Last updated {this.props.product.date}
                                </small>
                            </div>
                            <button
                                id={this.props.product._id}
                                onClick={this.deleteProduct}
                                className="btn btn-primary"
                            >
                                Delet From Wishlist
                            </button>
                        </div>
                    </div>
                </div>
            );
        } else {
            return (
                <div>
                    <h1>No Product Added to WishList</h1>
                </div>
            );
        }
    }
}

export default withRouter(MainMyWishList);
