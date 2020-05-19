import React from 'react';
import desktop_icon from '../../../images/desktop-monitor.png';

const title = {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    height: "100vh",
}

const header = {
    fontSize: "6vw",
    color: "#505050",
    fontWeight: 900,
    alignSelf: "center",
    fontFamily: "Montserrat",
    textAlign: "center",
    width: "70vw",
};

const icon = {
    height: "100px",
    width: "100px",
    alignSelf: "center",
}


function PauseCard() {
    return(
        <div style={title}>
            <img style={icon} src={desktop_icon}></img>
            <h1 style={header}>Kijk nu naar het bekken op het grote scherm!</h1>
        </div>
    );
}

export default PauseCard;