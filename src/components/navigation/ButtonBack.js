import React, { Component } from "react";
import back_icon from "../../images/back_icon.png";
import { Link } from "react-router-dom";

class ButtonBack extends Component {
    constructor(props) {
        super(props);
    }



    render() {

        const bi_style = {
            height: "8vw",
        }


        return(
            <div>
                <Link to = {this.props.value}>
                    <img style={bi_style} src={back_icon}></img>
                </Link>
            </div>
        )
    }
}

export default ButtonBack;