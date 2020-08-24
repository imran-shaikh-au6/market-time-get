import React, { Component } from "react";
import GetAllProducts from "../pages/GetAllProducts";
import isEmpty from "../utils/is-empty";
class FilteredProducts extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    {!isEmpty(this.props.history.location.state.data) ? (
                        this.props.history.location.state.data.map(
                            (key, index) => (
                                <GetAllProducts data={key} index={index} />
                            )
                        )
                    ) : (
                        <h1>Not Found Any Product</h1>
                    )}
                </div>
            </div>
        );
    }
}

export default FilteredProducts;
