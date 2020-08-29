import React, { useState, useEffect } from "react";
import "./image.css";
import Typical from "react-typical";
import GetAllProducts from "../pages/GetAllProducts";
import { getProducts } from "../Redux/actions/productAction";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Spinner from "../components/Spinner";
import axios from "axios";
import Pagination from "./Pagination";
import isEmpty from "../utils/is-empty";
const Image = (props) => {
    const [NormalChange, setNormalChange] = useState(false);
    const [SearchedProduct, setSearchedProduct] = useState(null);
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(12);
    useEffect(() => {
        const fetchPosts = async () => {
            setLoading(true);
            const res = await axios.get(
                "https://market-time-be.herokuapp.com/allProduct"
            );
            console.log(res.data);
            setPosts(res.data.allProduct);
            setLoading(false);
        };
        fetchPosts();
    }, []);
    const handleSubmit = async (e) => {
        e.preventDefault();
        e.persist();
        if (e.target.title === "") {
            const res = await axios(
                `https://market-time-be.herokuapp.com/filterProduct/1?city=${e.target.city.value}&category=${e.target.category.value}&title="undefined"`
            );
            setNormalChange(true);
            setSearchedProduct(res.data.data[0]);
            props.history.push({
                pathname: `/filter-product-be/?category=${e.target.category.value}?city=${e.target.city.value}?title=${e.target.title.value}`,
                state: {
                    data: res.data.data,
                },
            });
        } else {
            const res = await axios(
                `https://market-time-be.herokuapp.com/filterProduct/1?city=${e.target.city.value}&category=${e.target.category.value}&title=${e.target.title.value}`
            );

            setNormalChange(true);
            setSearchedProduct(res.data.data[0]);
            props.history.push({
                pathname: `/filter-product/?category=${e.target.category.value}?city=${e.target.city.value}?title=${e.target.title.value}`,
                state: {
                    data: res.data.data,
                },
            });
        }
    };

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
    console.log(currentPosts);
    const paginate = (pageNumber) => setCurrentPage(pageNumber);
    return (
        <div className=" ">
            <div className="background">
                <div className="child-back">
                    <Typical
                        loop={Infinity}
                        wrapper="p"
                        steps={[
                            "Buy Anything You Want !!",
                            5000,
                            "Shopping the way you like it !!!",
                            6000,
                            "Need it. Want it. Get it ",
                            5000,
                        ]}
                    />

                    <div className="">
                        <form
                            className="formData child-back2"
                            onSubmit={handleSubmit}
                        >
                            <div className="form-group ">
                                <div>
                                    <select
                                        className="form-control wC "
                                        name="category"
                                    >
                                        <option
                                            value="undefined"
                                            defaultValue="selected"
                                            // selected="selected"
                                        >
                                            Search By Category
                                        </option>
                                        <option>Property</option>
                                        <option>Electronics</option>
                                        <option>Educational</option>
                                        <option>Pets</option>
                                        <option>Computer Accesseries</option>
                                        <option>Car and Bike</option>
                                        <option>Fashion</option>
                                        <option>Furniture</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-group">
                                <select className="form-control wC" name="city">
                                    <option
                                        value="undefined"
                                        defaultValue="selected"
                                        // selected="selected"
                                    >
                                        Search By City
                                    </option>
                                    <option>Mumbai</option>
                                    <option>Banglore</option>
                                    <option>Chennai</option>
                                    <option>Delhi</option>
                                    <option>Hydrabaad</option>
                                    <option>Pune</option>
                                </select>
                            </div>

                            <div className="input-group mb-3 ">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Search By Title"
                                    aria-label="Example text with button addon"
                                    aria-describedby="button-addon1"
                                    name="title"
                                />
                                <div className="input-group-prepend">
                                    <button
                                        className="btn btn-warning"
                                        type="submit"
                                        id="button-addon1"
                                    >
                                        Button
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

                <br />
            </div>

            <div className="container-fluid">
                <div className="row">
                    {isEmpty(posts) ? (
                        <Spinner />
                    ) : (
                        currentPosts.map((data, index) => (
                            <GetAllProducts
                                data={data}
                                loading={loading}
                                key={index}
                            />
                        ))
                    )}
                </div>
                <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-md-8">
                        <Pagination
                            postsPerPage={postsPerPage}
                            totalPosts={posts.length}
                            paginate={paginate}
                        />
                    </div>
                    <div className="col-md-2"></div>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        pro: state.product.getAllProducts.allProduct,
    };
};

export default connect(mapStateToProps, { getProducts })(withRouter(Image));
