import { RegisterUser, LoginUser } from "./userType";
import jwt_decode from "jwt-decode";
import setAuthToken from "./setAuthToken";

import axios from "axios";
export const RegisterUsers = (data1) => async (dispatch) => {
    const res = await axios.post(
        "https://market-time-be.herokuapp.com/user/register",
        data1.newUser
    );

    dispatch({ type: RegisterUser, payload: res.data.user });
};
export const loginUsers = (data) => async (dispatch) => {
    const data1 = await axios.post(
        "https://market-time-be.herokuapp.com/user/login",
        data.newUser
    );

    setToken(data1.data.token, dispatch);
};
export const userProfile = (id) => async (dispatch) => {
    await axios.get("/userProfile");
};
export const editProfile = (data) => (dispatch) => {
    axios
        .post("/user/editprofile", data.editData)
        .then(async (res) => {
            console.log(res);
            if (res.status === 200) {
                alert("Profile Edited Successfully");
                data.history.push("/user-dashboard");
                await setToken(res.data.token, dispatch);
            }
        })
        .catch((err) => console.log(err));
};

export const GoogleLoginAuth = (data) => async (dispatch) => {
    const res = await axios.post("/google", data);
    setToken(res.data.token, dispatch);
};
const setToken = (res, dispatch) => {
    // Save token to local storage
    const token = res;
    // Set token to ls
    localStorage.setItem("jwtToken", token);
    // Set token to Auth header
    setAuthToken(token);
    // Decode jwt token
    const decode = jwt_decode(token);
    // Set current user
    dispatch(setCurrentUser(decode));
};
export const setCurrentUser = (decode) => {
    return { type: LoginUser, payload: decode };
};
export const logoutUser = () => (dispatch) => {
    // Remove token from localStorage
    localStorage.removeItem("jwtToken");
    // Remove auth header for future request
    setAuthToken(false);
    // Set current user to {} and isAuthenticator to false
    dispatch(setCurrentUser({}));
};
