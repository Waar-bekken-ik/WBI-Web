import React, { useState, useEffect, useCallback } from 'react'
import { useStore } from '../../../store';
import { useTrail, a, useSpring } from 'react-spring';
import PauseCard from '../gamepage/PauseCard';
import shallow from 'zustand/shallow'

const Game = () => {
    let { setGamePhase, possibleAnswers, gamePhase, game, setGivenAnswer, givenAnswer, setScore, score, correctAnswer, setPossibleAnswers, scoreCounted, setScoreCounted, player } = useStore();
    const { timer, setTimer } = useStore(state => ({ timer: state.timer, setTimer: state.setTimer }), shallow)

    const sendScore = useCallback(() => {
        fetch(`http://${process.env.REACT_APP_URL}:8000/games/sendscore`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                player: player,
                score: score,
                pin: game.pin
            })
        })
    }, [game, player, score])

    useEffect(() => {
        if (gamePhase === 'highscore') sendScore()
    }, [gamePhase, sendScore])

    useEffect(() => {
        if (!possibleAnswers.length) {
            return
        }

        if (!timer) {
            setScore(score += 0)
            setTimer(game.time)
            return;
        }

        if (givenAnswer && !correctAnswer) return;
        else if (givenAnswer && givenAnswer === correctAnswer) {
            if (!scoreCounted) {
                setScore(score += (timer * 10))
                setScoreCounted(true)
            }
            return
        }

        const intervalId = setInterval(() => {
            setTimer(timer - 1);
        }, 1000);

        return () => clearInterval(intervalId);

    }, [timer, setGivenAnswer, givenAnswer, correctAnswer, possibleAnswers, setPossibleAnswers]);

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

    function getGameScreen(gamePhase) {
        switch (gamePhase) {
            case 'screen':
                return <PauseCard />
            case 'game':
                return <>
                    {/* <a.div style={props}></a.div>
                    <p style={seconds}>{timer}</p> */}
                    <p style={header}>Geef het juiste antwoord</p>
                    {trailContainer.map(({ x, height, ...rest }, index) => (
                        <a.div style={{ ...rest, transform: x.interpolate(x => `translate3d(0,${x}px,0)`) }} >
                            <Button text={possibleAnswers[index]} />
                        </a.div>
                    ))}
                </>
            case 'highscore':
                return <>
                    <p style={{
                        marginBottom: 20,
                        fontSize: "6vw",
                        color: "#505050",
                        fontWeight: 900,
                        alignSelf: "center",
                        fontFamily: "Montserrat",
                    }}>Jouw score:</p>
                    <p style={header}>{score}</p>

                    <p onClick={() => {
                        setGamePhase(undefined)
                        setScore(0)
                    }} style={{
                        color: "#0C2074",
                        fontSize: "6vw",
                        fontWeight: 900,
                        alignSelf: "center",
                        fontFamily: "Montserrat",
                    }}>Naar het startscherm</p>
                </>
            default:
                break;
        }
    }

    return (
        <div style={bg}>
            {getGameScreen(gamePhase)}
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
