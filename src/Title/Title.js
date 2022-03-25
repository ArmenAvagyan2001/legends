import React from "react";
import img from "../images/FCBLegends.jpg"
import "./Title.css"

function Title() {
    return (
        <div id="title">
            <h1 id="titleHeader">FCB LEGENDS</h1>
            <img id="titliImg" src={img} alt="Title" />
        </div>
    )
}

export default Title