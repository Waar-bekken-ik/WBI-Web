import React from "react";
import back_icon from "../../images/back_icon.png";
import { useStore } from "../../store";

function ButtonBack({ value }) {
    const { setGamePhase } = useStore();

    const bi_style = {
         height: "8vw",
         marginLeft: "10px",
         marginTop: "15px",
         
    }

    return (
        <div>
            <img onClick={() => setGamePhase(value)} alt="Back button" style={bi_style} src={back_icon}></img>
        </div>
    )
}

export default ButtonBack;