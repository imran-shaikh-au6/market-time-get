import { GetAllProduct, particularProduct,particularProductOwner } from "../actions/productType";
const initialState = {
    getAllProducts: {},
    particularProductDetail: {},
    particularProductOwner:null
};
const productReducer = (state = initialState, actions) => {
    const { type, payload } = actions;
    switch (type) {
        case GetAllProduct:
            return {
                ...state,
                getAllProducts: payload,
            };
        case particularProduct:
            return {
                ...state,
                particularProductDetail: payload,
            };
        case particularProductOwner:
            return {
                ...state,
                particularProductOwner: payload
            };
        default:
            return state;
    }
};

export default productReducer;
