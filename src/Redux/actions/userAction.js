import { RegisterUser, LoginUser, Get_Error } from "./userType";
import jwt_decode from "jwt-decode";
import setAuthToken from "./setAuthToken";

import axios from "axios";
export const RegisterUsers = (data1) => async (dispatch) => {
    console.log(data1.newUser);

    await axios
        .post(
            "https://market-time-be.herokuapp.com/user/register",
            data1.newUser
        )
        .then((res) => {
            if (res.status === 200) {
                alert("Registered successfully.");
                dispatch({ type: RegisterUser, payload: res.data.user });
            }
            dispatch({ type: RegisterUser, payload: res.data.user });
        })
        .catch((err) => {
            dispatch({ type: Get_Error, payload: err.response.data });
        });
};
export const loginUsers = (data) => async (dispatch) => {
    console.log(data.newUser);
    await axios
        .post("https://market-time-be.herokuapp.com/user/login", data.newUser)
        .then((data1) => {
            if (data1.status === 200) {
                setToken(data1.data.token, dispatch);
                data.history.push("/");
            }
            console.log(data1.data);
            // setToken(data1.data.token, dispatch);
        })
        .catch((err) => {
            console.log(err.response.data);
            dispatch({ type: Get_Error, payload: err.response.data });
        });
};
export const userProfile = (id) => async (dispatch) => {
    await axios.get("https://market-time-be.herokuapp.com/userProfile");
};
export const editProfile = (data) => (dispatch) => {
    axios
        .post(
            "https://market-time-be.herokuapp.com/user/editprofile",
            data.editData
        )
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
    const res = await axios.post(
        "https://market-time-be.herokuapp.com/google",
        data.data
    );
    console.log(res.data);
    if (res.data.token) {
        setToken(res.data.token, dispatch);
        data.history.push("/");
    } else {
        alert("Please Try Again");
    }
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
