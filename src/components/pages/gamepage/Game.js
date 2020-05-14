import React from 'react'
import { useStore } from '../../../store';

const Game = () => {
    const { possibleAnswers } = useStore();

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

    const seconds = {
        fontSize: "20px",
        color: "#0C2074",
        fontWeight: 800,
        alignSelf: "center",
        fontFamily: "Montserrat",
    };

    const header = {
        marginBottom: 50,
        fontSize: "6vw",
        color: "#505050",
        fontWeight: 900,
        alignSelf: "center",
        fontFamily: "Montserrat",
    };

    const answer_container = {
        alignSelf: "center",
        width: "60%",
        backgroundColor: "#0C2074",
        padding: 20,
        borderRadius: "10px",
    };

    const answer_text = {
        color: "#fff",
    };

    return (
        <div style={bg}>
            <p style={seconds}>14 sec.</p>
            <p style={header}>Beantwoord de vraag</p>
            {possibleAnswers && possibleAnswers.map(answer => {
                return (
                    <div style={answer_container}>
                        <p style={answer_text}>{answer}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default Game
