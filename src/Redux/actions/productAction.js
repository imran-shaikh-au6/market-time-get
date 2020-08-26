import {
    GetAllProduct,
    particularProduct,
    particularProductOwner,
} from "./productType";
import axios from "axios";
export const getProducts = () => async (dispatch) => {
    const res = await axios(
        "https://market-time-be.herokuapp.com/allProduct/1"
    );

    dispatch({ type: GetAllProduct, payload: res.data });
};
export const particularProductDetail = (id) => async (dispatch) => {
    const res = await axios.get(
        `https://market-time-be.herokuapp.com/singleProduct/${id}`
    );
    console.log(res.data);
    // const userId = res.data.data.user;

    dispatch({ type: particularProduct, payload: res.data.singleProductData });
    dispatch({
        type: particularProductOwner,
        payload: res.data.user,
    });
};
