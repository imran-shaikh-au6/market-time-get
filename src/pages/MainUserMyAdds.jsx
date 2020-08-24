import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./MainUserMyAdds.css";
import axios from "axios";
class MainUserMyAdds extends Component {
    editProduct = (e) => {
        e.preventDefault();
        const id = e.target.id;

        // this.props.particularProductEdit(id)
        this.props.history.push({ pathname: "/edit-product", state: id });
    };
    deletProduct = async (e) => {
        const id = e.target.id;
        await axios.post(`/deleteProduct/${id}`);

        alert("Add Deleted Successfully");
        window.location.reload();
    };
    render() {
        console.log(this.props.product);
        return (
            <div className="col-md-3 cotm">
                <div className="card cotm1">
                    <img
                        src={this.props.product.photos[0]}
                        className="card-img-top"
                        alt="..."
                    />
                    <div className="card-body">
                        <h5 className="card-title">{this.props.product.title}</h5>
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
                        onClick={this.editProduct}
                        className="btn btn-primary"
                    >
                        Edit
                    </button>
                    <button
                        id={this.props.product._id}
                        onClick={this.deletProduct}
                        className="btn btn-primary"
                    >
                        Delet Product
                    </button>
                </div>
            </div>
        );
    }
}

export default withRouter(MainUserMyAdds);