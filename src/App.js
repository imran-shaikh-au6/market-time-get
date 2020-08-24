import React, { Component } from "react";
import Register from "./components/Register";
import "./App.css";
import Navbar from "./components/Navbar";
import Image from "./components/Image";
import Category from "./components/Category";
import { Route, Switch } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./Redux/actions/setAuthToken";
import { setCurrentUser } from "./Redux/actions/userAction";
import Login from "./components/Login";
import { connect } from "react-redux";
import SingleProduct from "./pages/SingleProduct";
import AddNewPost from "./pages/AddNewPost";
import FilteredProducts from "./pages/FilteredProducts";
import UserDashboard from "./pages/UserDashboard";
import EditProfile from "./pages/EditProfile";
import MyAddsPage from "./pages/MyAddsPage";
import EditProduct from "./pages/EditProduct";
import MyWishList from "./pages/MyWishList";
class App extends Component {
    componentDidMount() {
        if (localStorage.jwtToken) {
            setAuthToken(localStorage.jwtToken);
            const decode = jwt_decode(localStorage.jwtToken);
            this.props.setCurrentUser(decode);
        }
    }
    render() {
        return (
            <div className="App">
                <Navbar />
                <Switch>
                    <Route exact path="/" component={Image} />
                    <Route exact path="/" component={Category} />
                    <Route exact path="/register" component={Register} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/addPost" component={AddNewPost} />
                    <Route exact path="/search-result" component={AddNewPost} />
                    <Route exact path="/my-wishlist" component={MyWishList} />
                    <Route
                        exact
                        path="/user-dashboard"
                        component={UserDashboard}
                    />
                    <Route exact path="/editProfile" component={EditProfile} />
                    <Route exact path="/my-Ads" component={MyAddsPage} />
                    <Route
                        exact
                        path="/filter-product/:search"
                        component={FilteredProducts}
                    />
                    <Route exact path="/edit-product" component={EditProduct} />
                    <Route
                        exact
                        path="/singleProduct"
                        component={SingleProduct}
                    />
                </Switch>
            </div>
        );
    }
}
export default connect(null, { setCurrentUser, setAuthToken })(App);
