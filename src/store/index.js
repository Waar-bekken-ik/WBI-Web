import create from 'zustand'
import Pusher from 'pusher-js';
export const [useStore] = create(set => ({
    pusher: new Pusher(process.env.REACT_APP_PUSHER, {
        cluster: process.env.REACT_APP_CLUSTER,
    }),
    gamePhase: undefined,
    possibleAnswers: [],
    game: undefined,
    givenAnswer: undefined,
    player: undefined,
    correctAnswer: undefined,
    setPossibleAnswers: array => {
        set({ possibleAnswers: array })
    },
    setGamePhase: phase => {
        set({ gamePhase: phase })
    },
    setGame: game => {
        set({ game: game })
    },
    setGivenAnswer: givenAnswer => {
        set({ givenAnswer: givenAnswer })
    },
    setPlayer: player => {
        set({ player: player })
    },
    setCorrectAnswer: correctAnswer => {
        set({ correctAnswer: correctAnswer })
    },
}))
