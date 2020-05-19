import React from "react";
import ButtonBack from '../../navigation/ButtonBack';
import arrow_icon from "../../../images/arrows.png";
import time_icon from "../../../images/interface.png";
import InfoCard from "../lobbypage/InfoCard";
import { useStore } from "../../../store";

function Lobby() {
    const { game } = useStore();
    var vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
    const subtitle = "Wachten"
    const subtitle_two = "op de andere spelers..."
    const time_unit = "sec"

    const bg = {
        backgroundColor: "#F5F5F5",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "calc(var(--vh, 1vh)*100)",
        // ^^ for mobile browsers
        display: "flex",
        flexDirection: "column",
    };

    const menu = {
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "100%",
        display: "flex",
        flexDirection: "column",
    };

    const nav = {
        display: "flex",
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
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        width: "100%",
    }

    const info_section = {
        height: "70%",
        width: "80%",
        fontSize: "50px",
        alignSelf: "center",
        textAlign: "center",
        justifyContent: "center",
        display: "flex",
        flexDirection: "column",
        fontFamily: "Montserrat",
    }

    return (
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
                    <InfoCard card_src={arrow_icon} text={`${game?.rounds} ronde(s)`} />
                    <InfoCard card_src={time_icon} text={`${game?.time} ${time_unit} / ronde`} />
                </div>

            </div>
        </div>
    );
}

export default Lobby;
