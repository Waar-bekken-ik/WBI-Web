import React, { useState, useEffect } from 'react'
import { useStore } from '../../../store';
import { useTrail, a, useSpring } from 'react-spring';

const Game = () => {
    const { possibleAnswers, gamePhase, game, setGivenAnswer, givenAnswer } = useStore();
    const [timer, setTimer] = useState(game.time)

    useEffect(() => {
        if (!timer) {
            if (givenAnswer === undefined) setTimer(game.time)
            return;
        }

        const intervalId = setInterval(() => {
            setTimer(timer - 1);
        }, 1000);

        return () => clearInterval(intervalId);

    }, [timer, setGivenAnswer, givenAnswer]);

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

    const config = { mass: 5, tension: 2000, friction: 200 }
    console.log(possibleAnswers)
    const trailContainer = useTrail(possibleAnswers.length, {
        config,
        border: 'none',
        textDecoration: 'none',
        alignSelf: "center",
        display: 'flex',
        justifyContent: 'center',
        width: "80%",
        opacity: 1,
        x: 0,
        delay: 500,
        marginBottom: 20,
        from: { opacity: 0, x: 20, height: 0 },
    })

    const props = useSpring({
        width: `${timer / game.time * 100}%`,
        height: "20px",
        backgroundColor: '#0C2074'
    })

    return (
        <div style={bg}>
            {gamePhase === 'screen' ?
                <h1 style={header}>Kijk naar het scherm</h1>
                :
                <>
                    <a.div style={props}></a.div>
                    <p style={seconds}>{timer}</p>
                    <p style={header}>Geef het juiste antwoord</p>
                    {trailContainer.map(({ x, height, ...rest }, index) => (
                        <a.div style={{ ...rest, transform: x.interpolate(x => `translate3d(0,${x}px,0)`) }} >
                            <Button text={possibleAnswers[index]} />
                        </a.div>
                    ))}
                </>
            }
        </div >
    )
}

const Button = ({ text }) => {
    const [clicked, setClicked] = useState(false)
    const [disabled, setDisabled] = useState(false)
    const { setGivenAnswer, givenAnswer, game, player, correctAnswer } = useStore();

    useEffect(() => {
        if (givenAnswer) setDisabled(true)
    }, [givenAnswer])

    console.log(givenAnswer)

    function getWidth() {
        if (givenAnswer === undefined) {
            return 'scale(1)'
        } else if (clicked) {
            return 'scale(1.1)'
        } else {
            return 'scale(0)'
        }
    }

    function getBackgroundColor() {
        if (!correctAnswer) {
            return "#0C2074"
        } else if (correctAnswer === givenAnswer) {
            return '#63c45a'
        } else {
            return '#c45a5a'
        }
    }

    const props = useSpring({
        border: 'none',
        textDecoration: 'none',
        alignSelf: "center",
        justifyContent: 'center',
        width: '80%',
        transform: getWidth(),
        backgroundColor: getBackgroundColor(),
        padding: 20,
        borderRadius: "10px",
        marginBottom: 20,
    })

    return (
        <a.button disabled={disabled} onClick={() => {
            setClicked(true)
            setGivenAnswer(text)
            setDisabled(true)

            fetch(`http://${process.env.REACT_APP_URL}:8000/games/sendanswer`, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    pin: game.pin,
                    answer: text,
                    player: player
                })
            })

        }} style={props}>
            <p style={{
                color: "#fff",
                fontSize: 15,
                fontFamily: "Montserrat",
            }}>{text}</p>
        </a.button>
    )
}

export default Game
