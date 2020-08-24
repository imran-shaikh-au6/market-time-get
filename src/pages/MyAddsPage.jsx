import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import MainUserMyAdds from "./MainUserMyAdds";
import Spinner from "../components/Spinner";
import axios from "axios";
import isEmpty from "../utils/is-empty";
class MyAddsPage extends Component {
    state = {
        data: null,
    };
    async componentDidMount() {
        const fetch = await axios.get("/userMyPro");
        const arr1 = fetch.data;
        const arr2 = arr1.flat();
        this.setState({ data: arr2 });
    }
    async componentWillReceiveProps() {
        const fetch = await axios.get("/userMyPro");
        const arr1 = fetch.data;
        const arr2 = arr1.flat();
        this.setState({ data: arr2 });
    }
    render() {
        console.log(isEmpty(this.state.data));
        if (this.state.data !== null) {
            if (isEmpty(this.state.data)) {
                return (
                    <div>
                        <h1>No product Added</h1>
                    </div>
                );
            }
            return (
                <div className="container-fluid">
                    <div className="row">
                        {this.state.data.map((d, index) => (
                            <MainUserMyAdds product={d} key={d._id} />
                        ))}
                    </div>
                </div>
            );
        }

        return <Spinner />;
    }
}

const mapStateToProps = (state) => {
    return { user: state.user };
};

export default connect(mapStateToProps)(withRouter(MyAddsPage));
