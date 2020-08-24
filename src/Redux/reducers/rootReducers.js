import { combineReducers } from "redux";
import userReducer from "./userReducer";
import productReducer from "./productReducers";
// import { persistReducer } from "redux-persist";

// import { persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage";

// import authReducer from "./auth/auth-reducer";
// import productReducer from "./product/product-reducer";
// import wishlistReducer from "./wishlist/wishlist-reducer";

// const persistConfig = {
//     key: "root",
//     storage,
//     wishlist: ["product", "wishlist"],
// };

// const rootReducer = combineReducers({
//     auth: authReducer,
//     product: productReducer,
//     wishlist: wishlistReducer,
// });

// export default persistReducer(persistConfig, rootReducer);

const rootReducer = combineReducers({
    user:userReducer,
    product:productReducer
})

export default rootReducer