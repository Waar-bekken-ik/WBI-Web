import React, { useState } from "react";
import ButtonStart from '../startpage/ButtonStart';
import ButtonBack from '../../navigation/ButtonBack';
import { useForm } from "react-hook-form";
import TextBox from "../startpage/TextBox";
import { useStore } from "../../../store";
import shallow from 'zustand/shallow'

function Start() {
    const [error, setError] = useState(undefined);
    var vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
    const subtitle = "Voer de code in"
    const subtitle_two = "om aan de sessie deel te nemen"
    const info = "Tip: de code staat op het grote scherm."

    const { register, handleSubmit, errors } = useForm();
    const { pusher, setPossibleAnswers, setGamePhase, setGame, setPlayer, setCorrectAnswer, setGivenAnswer, setScoreCounted } = useStore();
    const { timer, setTimer, givenAnswer } = useStore(state => ({ timer: state.timer, setTimer: state.setTimer, givenAnswer: state.givenAnswer }), shallow)

    console.log(givenAnswer);

    const onSubmit = values => {
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
                    setPlayer(values.player)
                    const channel = pusher.subscribe(game.pin.toString());
                    channel.bind('game-start', function () {
                        setGamePhase('screen')
                    });
                    channel.bind('send-question', function (data) {
                        setGamePhase('game')
                        function shuffle(possibleAnswers) {
                            var i, j, k;
                            for (i = possibleAnswers.length - 1; i > 0; i--) {
                                j = Math.floor(Math.random() * i)
                                k = possibleAnswers[i]
                                possibleAnswers[i] = possibleAnswers[j]
                                possibleAnswers[j] = k
                            }
                            return possibleAnswers
                        }
                        setPossibleAnswers(shuffle(data.possibleAnswers))
                    })
                    channel.bind('send-correct-answer', function (data) {
                        setCorrectAnswer(data.correctAnswer)
                        setTimer(game.time)

                        setTimeout(() => {
                            setPossibleAnswers([])
                            setScoreCounted(false)
                            setGamePhase('screen')
                            setGivenAnswer(undefined)
                            setCorrectAnswer(undefined)
                        }, 3000);
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
                                maxLength: 26,
                                minLength: 2
                            })
                        }
                        tb_name="player"
                    />
                    {errors.player && errors.player.message && <p style={{ color: 'red', fontSize: 10 }}>{errors.player.message}</p>}
                    {errors.player?.type === "maxLength" && <p style={{ color: 'red', fontSize: 10 }}>maximaal 50 letters</p>}
                    {errors.player?.type === "minLength" && <p style={{ color: 'red', fontSize: 10 }}>minimaal 2 letters</p>}

                    <TextBox
                        text="Room pin invoeren"
                        tb_ref={
                            register({
                                required: "Verplicht",
                                maxLength: 4,
                                minLength: 3
                            })
                        }
                        tb_name="pin"
                    />
                    {errors.pin && errors.pin.message && <p style={{ color: 'red', fontSize: 10 }}>{errors.pin.message}</p>}
                    {errors.pin?.type === "maxLength" && <p style={{ color: 'red', fontSize: 10 }}> geen 4 cijferige code</p>}
                    {errors.pin?.type === "minLength" && <p style={{ color: 'red', fontSize: 10 }}> geen 4 cijferige code</p>}

                    <ButtonStart name="Doe mee!" />
                </form>
                <p style={hint}>{info}</p>
            </div>
        </div >
    );
}

export default Start;