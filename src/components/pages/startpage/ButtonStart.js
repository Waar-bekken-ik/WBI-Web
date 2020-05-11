import React from "react";
// import {Link } from "react-router-dom";

function ButtonStart(props) {

    const lnk = {
        fontFamily: "Montserrat",
        fontSize: "30px",
        borderRadius: "20px",
        border: "2px #85D1EB solid",
        width: "100%",
        height: "40%",
        margin: "10px",
        alignSelf: "center",
        backgroundColor:'#85D1EB',
        color:'white',
        textDecoration: 'none',
        textAlign:'center',
        paddingLeft:"10px",
        paddingRight:"10px",
        marginTop: "20px",
    }

        return(
            // <Link to = "props.value" type="submit" onClick = {()=> handleClick()}
            // style={lnk} >
            //     {props.name}
            // </Link> 

            // <button style={lnk}>{props.name}</button>

            <input type="submit" style={lnk} value={props.name}/>
        )
}

export default ButtonStart;