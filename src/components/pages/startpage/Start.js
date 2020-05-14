import React, { useState } from "react";
import ButtonStart from '../startpage/ButtonStart';
import ButtonBack from '../../navigation/ButtonBack';
import { useForm } from "react-hook-form";
import TextBox from "../startpage/TextBox";
import { useStore } from "../../../store";

function Start() {
    const [error, setError] = useState(undefined);
    var vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
    const subtitle = "Voer de code in"
    const subtitle_two = "om aan de sessie deel te nemen"
    const info = "Tip: de code staat op het beeldscherm."

    const { register, handleSubmit, errors } = useForm();
    const { pusher, setPossibleAnswers, setGamePhase, setGame } = useStore();

    const onSubmit = values => {
        console.log(process.env.REACT_APP_URL)
        fetch(`http://${process.env.REACT_APP_URL}:8000/games/joingame`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(values)
        }).then(res => res.json())
            .then(game => {
                if (game.err) {
                    setError(game.err)
                } else {
                    setGamePhase('lobby')
                    setGame(game)
                    console.log(game)
                    const channel = pusher.subscribe(game.pin.toString());
                    channel.bind('game-start', function (data) {
                        setGamePhase('game')
                        setPossibleAnswers(data.possibleAnswers)
                    });
                }
            })
    }

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

    const header = {
        fontSize: "40px",
        color: "#505050",
        alignSelf: "center",
        fontFamily: "Montserrat",
    };

    const nav = {
        display: "flex",
        justifyContent: "flext-start",
        width: "100%",
        height: "8vw",
        flexDirection: 'row',
        marginTop: "-4vh",

    }

    const sbt = {
        fontSize: "8vw",
        height: "8vw",
        alignSelf: "center",
        color: "#505050",
        fontFamily: "Montserrat",
    }

    const error_msg = {
        fontSize: "3vw",
        alignSelf: "center",
        color: "#eb4034",
        fontFamily: "Montserrat",
    }

    const sbt_two = {
        fontSize: "5vw",
        color: "#505050",
        alignSelf: "center",
        marginTop: "0px",
        display: 'flex',
        textAlign: 'center',
        width: '80%',
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

    const form = {
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

    const hint = {
        fontSize: "3vw",
        color: "#0B2073",
        alignSelf: "center",
        marginBottom: "10px",
        display: 'flex',
        textAlign: 'center',
        fontFamily: "Montserrat",
    }

    console.log(errors.player)

    return (
        <div style={bg}>
            <h1 style={header}>
            </h1>
            <div style={menu}>
                <div style={sbt_div}>
                    <div style={nav}>
                        <ButtonBack value={undefined} />
                    </div>
                    <h1 style={sbt}>{subtitle}</h1>
                    <h2 style={sbt_two}>{subtitle_two}</h2>
                    {error && <h3 style={error_msg}>{error}</h3>}
                </div>

                <form style={form} onSubmit={handleSubmit(onSubmit)}>
                    <TextBox
                        text="Naam invoeren"
                        tb_ref={
                            register({
                                required: "Verplicht",
                            })
                        }
                        tb_name="player"
                    />
                    {errors.player && errors.player.message && <p style={{ color: 'red', fontSize: 10 }}>{errors.player.message}</p>}
                    <TextBox
                        text="Room pin invoeren"
                        tb_ref={
                            register({
                                required: "Verplicht",
                            })
                        }
                        tb_name="pin"
                    />
                    {errors.pin && errors.pin.message && <p style={{ color: 'red', fontSize: 10 }}>{errors.pin.message}</p>}
                    <ButtonStart name="Doe mee!" />
                </form>
                <p style={hint}>{info}</p>
            </div>
        </div >
    );
}

export default Start;