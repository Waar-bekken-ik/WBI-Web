import React from "react";
import back_icon from "../../images/back_icon.png";
import { Link } from "react-router-dom";

function ButtonBack(props) {
        const bi_style = {
            height: "8vw",
        }

        return(
            <div>
                <Link to = {props.value}>
                    <img alt="Back button" style={bi_style} src={back_icon}></img>
                </Link>
            </div>
        )
    }

export default ButtonBack;