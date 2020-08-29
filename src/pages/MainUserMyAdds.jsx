import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./MainUserMyAdds.css";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();

class MainUserMyAdds extends Component {
    editProduct = (e) => {
        e.preventDefault();
        const id = e.target.id;

        // this.props.particularProductEdit(id)
        this.props.history.push({ pathname: "/edit-product", state: id });
    };
    deletProduct = async (e) => {
        const id = e.target.id;
        await axios.post(
            `https://market-time-be.herokuapp.com/deleteProduct/${id}`
        );
        toast.success("Deleted Successfully !", {
            position: toast.POSITION.TOP_CENTER,
        });
        window.location.reload();
    };
    render() {
        console.log(this.props.product);
        return (
            <div className="col-md-3 cot">
                <div className="card cotm1">
                    <img
                        src={this.props.product.photos[0]}
                        className="card-img-top"
                        alt="..."
                    />
                    <div className="card-body">
                        <h3 className="card-title" style={{ color: "yellow" }}>
                            {this.props.product.title}
                        </h3>
                        <p style={{ color: "white" }} className="card-text">
                            <i class="fas fa-street-view fa-2x fa-fw"></i>
                            Add is From {this.props.product.city}
                        </p>
                    </div>
                    <div style={{ color: "white" }} className="card-footer">
                        <small className="t">
                            Last updated{" "}
                            {new Date(this.props.product.date)
                                .toUTCString()
                                .slice(4, 16)}{" "}
                        </small>
                    </div>
                    <div className="btnn">
                        <button
                            id={this.props.product._id}
                            onClick={this.editProduct}
                            className="btn btn-warning m-2"
                        >
                            Edit Product
                        </button>
                        <button
                            id={this.props.product._id}
                            onClick={this.deletProduct}
                            className="btn btn-warning m-2"
                        >
                            Delet Product
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(MainUserMyAdds);
