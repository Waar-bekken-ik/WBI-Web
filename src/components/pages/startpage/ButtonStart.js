import React, { useState } from "react";
import {Link } from "react-router-dom";

function ButtonStart(props) {

    const [clicked, setClicked] = useState(false);
    const handleClick = () => {
        console.log("clicked");
        setClicked(!clicked)
    };
    
        const lnk = {
            fontFamily: "Montserrat",
            fontSize: "30px",
            borderRadius: "20px",
            border: "none",
            width: "80%",
            height: "20%",
            margin: "10px",
            alignSelf: "center",
            backgroundColor:'#85D1EB',
            color:'white',
            textDecoration: 'none',
            textAlign:'center',
            display:'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            paddingLeft:"10px",
            paddingRight:"10px",
            marginTop: "20px",
        }

        return(
            <Link to = {props.value} onClick = {()=> handleClick()}
            style={lnk} >
                {props.name}
            </Link> 
        )
}

export default ButtonStart;