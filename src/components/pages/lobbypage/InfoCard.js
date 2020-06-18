import React from "react";

function InfoCard({ card_src, text }) {

    const info_card = {
        fontSize: "20px",
        height: "20%",
        width: "100%",
        border: "2px solid #CECECE",
        borderRadius: "10px",
        color: "#0B2073",
        alignSelf: "center",
        paddingLeft: "0px",
        paddingRight: "0px",
        textAlign: "center",
        margin: "10px",
        fontFamily: "Montserrat",
        display: "flex",
        justifyContent: "flex-start",
        backgroundColor: "white",
    }

    const icon = {
        height: "70%",
        alignSelf: "center",
        color: "red",
        marginLeft: "5%",
    }

    const info = {
        fontFamily: "Montserrat",
        alignSelf: "center",
        marginLeft: "5%",
    }

    return (
        <div style={info_card}>
            <img alt='infocard' style={icon} src={card_src}></img>
            <p style={info}>{text}</p>
        </div>
    )
}

export default InfoCard;