import React from "react";
import "./NotFound.css";
import { withRouter } from "react-router-dom";
function NotFound(props) {
    return (
        <div className="code">
            <div className="scene">
                <div className="box">
                    <div className="box__face front">4</div>
                    <div className="box__face back">0</div>
                    <div className="box__face right">4</div>
                    <div className="box__face left">0</div>
                    <div className="box__face top">0</div>
                    <div className="box__face bottom">0</div>
                </div>
                <div className="shadow"></div>
            </div>
            <div className="desc">
                <h2>Ooops No Product Found!</h2>
                <button
                    onClick={() => {
                        props.history.push("/");
                    }}
                >
                    BACK TO HOME PAGE
                </button>
            </div>
        </div>
    );
}

export default withRouter(NotFound);
