import React from "react";
import ButtonBack from '../../navigation/ButtonBack';
import user_icon from "../../../images/user.png";
import arrow_icon from "../../../images/arrows.png";
import time_icon from "../../../images/interface.png";

function Lobby() {
    
    var vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
    const subtitle = "Wachten"
    const subtitle_two = "op de andere spelers..."
    const player_count = 6
    const player_total = 10
    const rounds = 1
    const time = 2
    const time_unit = "min"

    const bg = {
        backgroundColor: "#F5F5F5",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height:"calc(var(--vh, 1vh)*100)",
        // ^^ for mobile browsers
        display: "flex",
        flexDirection: "column",
    };

    const menu = {
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height:"100%",
        display: "flex",
        flexDirection: "column",
    };

    const nav = {
        display:"flex",
        justifyContent: "flext-start",
        width: "100%",
        height: "8vw",
        flexDirection: 'row',     
    }


    const sbt = {
        fontSize: "8vw",
        height: "8vw",
        alignSelf: "center",
        color: "#505050",
        fontFamily: "Montserrat",
    }

    const sbt_two = {
        fontSize: "5vw",
        color: "#505050",
        alignSelf: "center",
        marginTop: "0px",
        display: 'flex',
        textAlign: 'center',
        fontFamily: "Montserrat",
    }

    const sbt_div = {
        alignContent: "center",
        alignSelf: "center",
        display:"flex",
        justifyContent: "center",
        flexDirection: "column",
        width: "100%",
    }

    const info_section = {
        height:"70%",
        width: "80%",
        fontSize: "50px",
        alignSelf: "center",
        textAlign:"center",
        justifyContent: "center",
        display:"flex",
        flexDirection: "column",
        fontFamily: "Montserrat",
    }

    const info_card = {
        fontSize: "20px",
        height:"20%",
        width: "100%",
        border: "2px solid #CECECE",
        borderRadius: "10px",
        color: "#0B2073",
        alignSelf: "center",
        paddingLeft:"0px",
        paddingRight:"0px",
        textAlign:"center",
        margin:"10px",
        fontFamily: "Montserrat",
        display:"flex",
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

    return(
        <div style={bg}>
            <div style={menu}>
                <div style={sbt_div}>
                    <div style={nav}>
                        <ButtonBack value="/start" />
                    </div>
                    <h1 style={sbt}>{subtitle}</h1>
                    <h2 style={sbt_two}>{subtitle_two}</h2>
                </div>
                <div style={info_section}>
                    <div style={info_card}>
                        <img style={icon} src={user_icon}></img>
                        <p style={info}>{player_count} / {player_total}</p>
                    </div>
                    <div style={info_card}>
                        <img style={icon} src={arrow_icon}></img>
                        <p style={info}>{rounds} ronde(s)</p>
                    </div>
                    <div style={info_card}>
                        <img style={icon} src={time_icon}></img>
                        <p style={info}>{time} {time_unit} / ronde</p>
                    </div>
                </div>
            
            </div>
        </div>
    );
}

export default Lobby;
