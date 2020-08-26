import React, { Component } from "react";
import GetAllProducts from "../pages/GetAllProducts";
import isEmpty from "../utils/is-empty";
import NotFound from "../components/NotFound";
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
                        <NotFound />
                    )}
                </div>
            </div>
        );
    }
}

export default FilteredProducts;
