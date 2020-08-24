import React, { Component } from "react";
import "./category.css";
class Category extends Component {
    render() {
        return (
            <div className="container custom">
                <div className="row">
                    {/* <div className="col-12" > */}
                    <div className="card border-secondary bg-light mb-3 col-md-3 ">
                        <div className="card-header">Property</div>
                        <div className="card-body text-secondary">
                            <h5 className="card-title">Secondary card title</h5>
                            <p className="card-text">
                                Some quick example text to build on the card
                                title and make up the bulk of the card's
                                content.
                            </p>
                        </div>
                    </div>
                    <div className="card border-secondary bg-light mb-3 col-md-3">
                        <div className="card-header">Furniture</div>
                        <div className="card-body text-secondary">
                            <h5 className="card-title">Secondary card title</h5>
                            <p className="card-text">
                                Some quick example text to build on the card
                                title and make up the bulk of the card's
                                content.
                            </p>
                        </div>
                    </div>
                    <div className="card border-secondary bg-light mb-3 col-md-3">
                        <div className="card-header">Electronics</div>
                        <div className="card-body text-secondary">
                            <h5 className="card-title">Secondary card title</h5>
                            <p className="card-text">
                                Some quick example text to build on the card
                                title and make up the bulk of the card's
                                content.
                            </p>
                        </div>
                    </div>
                    <div className="card border-secondary bg-light mb-3 col-md-3">
                        <div className="card-header">Educational</div>
                        <div className="card-body text-secondary">
                            <h5 className="card-title">Secondary card title</h5>
                            <p className="card-text">
                                Some quick example text to build on the card
                                title and make up the bulk of the card's
                                content.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="card border-secondary bg-light mb-3 col-md-3 ">
                        <div className="card-header">Pets</div>
                        <div className="card-body text-secondary">
                            <h5 className="card-title">Secondary card title</h5>
                            <p className="card-text">
                                Some quick example text to build on the card
                                title and make up the bulk of the card's
                                content.
                            </p>
                        </div>
                    </div>
                    <div className="card border-secondary bg-light mb-3 col-md-3">
                        <div className="card-header">Computer Accesseries</div>
                        <div className="card-body text-secondary">
                            <h5 className="card-title">Secondary card title</h5>
                            <p className="card-text">
                                Some quick example text to build on the card
                                title and make up the bulk of the card's
                                content.
                            </p>
                        </div>
                    </div>
                    <div className="card border-secondary bg-light mb-3 col-md-3">
                        <div className="card-header">Car and Bike</div>
                        <div className="card-body text-secondary">
                            <h5 className="card-title">Secondary card title</h5>
                            <p className="card-text">
                                Some quick example text to build on the card
                                title and make up the bulk of the card's
                                content.
                            </p>
                        </div>
                    </div>
                    <div className="card border-secondary bg-light mb-3 col-md-3">
                        <div className="card-header">Fashion</div>
                        <div className="card-body text-secondary">
                            <h5 className="card-title">Secondary card title</h5>
                            <p className="card-text">
                                Some quick example text to build on the card
                                title and make up the bulk of the card's
                                content.
                            </p>
                        </div>
                    </div>
                </div>
                {/* </div> */}
            </div>
        );
    }
}

export default Category;
