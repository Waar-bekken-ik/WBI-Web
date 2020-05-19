import create from 'zustand'
import Pusher from 'pusher-js';
export const [useStore] = create(set => ({
    pusher: new Pusher(process.env.REACT_APP_PUSHER, {
        cluster: process.env.REACT_APP_CLUSTER,
    }),
    gamePhase: "screen",
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
    game: {
        closed: false,
        pin
            :
            248,
        players
            :
            (20)["Henk", "Thomas", "Thomass", "sd", "th", "asd", "asdsd", "asdff", "kk", "2sdas", "12q", "h", "123", "dawd", "kkkkk", "kkkk", "nono", "123123", "12312312", "234343"],
        questions
            :
            ["vagina"],
        rounds
            :
            20,
        time
            :
            20,
        __v
            :
            19,
        _id
            :
            "5ec3bac14d35db62d00243cc",
    },
}))
