import React, {useState} from 'react';
import {Link } from "react-router-dom";

function Button({value, name}){
    const [clicked, setClicked] = useState(false);
    const handleClick = () => {
        setClicked(!clicked)
    };

        var btn;
        if(clicked) {
            btn = {
                fontFamily: "Montserrat",
                fontSize: "20px",
                borderRadius: "20px",
                border:"none",
                width: "100%",
                height: "100%",
                alignSelf: "center",
                backgroundColor:'#AEB8FE',
                color:'white',
            }
        } else {
            btn = {
                fontFamily: "Montserrat",
                fontSize: "20px",
                borderRadius: "20px",
                border: "none",
                width: "100%",
                height: "100%",
                alignSelf: "center",
                backgroundColor:'#85D1EB',
                color:'white',
            }
        }

        const lnk = {
            fontFamily: "Montserrat",
            fontSize: "40px",
            borderRadius: "20px",
            border: "none",
            width: "80%",
            height: "30%",
            margin: "10px",
            alignSelf: "center",
            backgroundColor:'white',
            color:'white',
            textDecoration: 'none',
        }

        return(
            <Link to = {value} onClick = {()=> handleClick()}
            style={lnk} >
            <button 
            onClick = {()=> handleClick()}
            style={btn} >
                {name}
            </button>
            </Link>
        )
}

export default Button;