import React from 'react'
import { useStore } from '../../../store';
import { useTrail, a } from 'react-spring';

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

    const answer_text = {
        color: "#fff",
        fontSize: 15,
        fontFamily: "Montserrat",
    };

    const config = { mass: 5, tension: 2000, friction: 200 }


    const trailContainer = useTrail(possibleAnswers.length, {
        config,
        border: 'none',
        textDecoration: 'none',
        alignSelf: "center",
        width: "60%",
        backgroundColor: "#0C2074",
        padding: 20,
        borderRadius: "10px",
        opacity: 1,
        x: 0,
        delay: 500,
        marginBottom: 20,
        from: { opacity: 0, x: 20, height: 0 },
    })

    return (
        <div style={bg}>
            <p style={seconds}>14 sec.</p>
            <p style={header}>Geef het juiste antwoord</p>
            {trailContainer.map(({ x, height, ...rest }, index) => (
                <a.button style={{ ...rest, transform: x.interpolate(x => `translate3d(0,${x}px,0)`) }}>
                    <p style={answer_text}>{possibleAnswers[index]}</p>
                </a.button>
            ))}
        </div>
    )
}

export default Game
