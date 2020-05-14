import create from 'zustand'
import Pusher from 'pusher-js';

export const [useStore] = create(set => ({
    pusher: new Pusher(process.env.REACT_APP_PUSHER, {
        cluster: process.env.REACT_APP_CLUSTER,
    }),
    gamePhase: undefined,
    possibleAnswers: undefined,
    game: undefined,
    setPossibleAnswers: array => {
        set({ possibleAnswers: array })
    },
    setGamePhase: phase => {
        set({ gamePhase: phase })
    },
    setGame: game => {
        set({ game: game })
    },
}))
