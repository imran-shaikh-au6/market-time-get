import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import MainMyWishList from "./MainMyWishList";
import axios from "axios";
import Spinner from "../components/Spinner";
import isEmpty from "../utils/is-empty";
class MyWishList extends Component {
    state = {
        data: null,
    };

    async componentDidMount() {
        const fetch = await axios.get("/userWishList");
        // this.setState(fetch.data)
        console.log(fetch.data);

        const arr2 = fetch.data.flat();
        this.setState({ data: arr2 });

        console.log(this.state.data);
    }

    render() {
        if (this.state.data !== null) {
            console.log(isEmpty(this.state.data));
            if (isEmpty(this.state.data)) {
                return (
                    <div className="container-fluid">
                        <img
                            src="https://res.cloudinary.com/dlcckjhpj/image/upload/v1598105518/tenor_vcbjih.gif"
                            alt="img"
                        />
                        <h1>NO Product Added to Favourite List</h1>
                    </div>
                );
            } else {
                return this.state.data.map((d, index) => (
                    <div>
                        <MainMyWishList product={d} key={d._id} />
                    </div>
                ));
            }
        } else {
            return <Spinner />;
        }
    }
}

const mapStateToProps = (state) => {
    return { user: state.user };
};

export default connect(mapStateToProps)(withRouter(MyWishList));
