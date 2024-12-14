import {create} from 'zustand'

type Player = {
    playerName: string
    point: number
    level : "mudah" | "sedang" | "sulit"
}

type PlayerAction = {
    updateLevel : (lvl : Player['level'])=> void
    updatePlayerName : (name : Player['playerName']) => void
    incrementPoint : () => void
    resetPoint : () => void
    
}

export const usePlayerStore = create<Player & PlayerAction>((set) => ({
    playerName : "",
    point : 0,
    level : 'mudah',
    updateLevel : (level) =>  set(()=>({level : level})),
    updatePlayerName : (name) =>  set(()=>({playerName : name})),
    incrementPoint : () =>  set((state)=>{
        switch (state.level) {
            case "sulit":
                return {point : state.point + 15}
            case "sedang" :
                return {point : state.point + 12}
            default:
                return {point : state.point + 10}
        } 
    }),
    resetPoint : () => set(()=>({point : 0}))
}))

type GameState = {
    gameStatus : "ready" | "started" | "end"
    countDown : number
    setCountDown : () => void
    restartCountDown : () => void
    setGameStart : () => void
    setGameStop : () => void
}

export const useGameStore = create<GameState>((set)=>{
    return {
        gameStatus : "ready",
        countDown : 120,
        setCountDown : () => set((state) => ({countDown : state.countDown - 1})),
        restartCountDown : () => set(() => ({countDown : 120})),
        setGameStart : () => set(() => ({gameStatus : "started"})),
        setGameStop : () => set(() => ({gameStatus : "end"}))
    }
})
