'use client'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

import {useGameStore, usePlayerStore } from "@/store"
import { useState, useEffect } from "react"
import { Flame } from "lucide-react"
import LeaderBoard from "./LeaderBoard"

type User = {
    playerName : string,
    point : number
}
export default function EndGameModal(){
    const [open, setOpen] = useState<boolean>(true)
    const [topUsers, setTopUsers] = useState<Array<User>>([{playerName : "", point : 0}])
    const {setGameStart, gameStatus, restartCountDown} = useGameStore()
    const {point, resetPoint, playerName} = usePlayerStore()
    const handleRestart = ()=>{
        setOpen(false)
        restartCountDown()
        setGameStart()
        resetPoint()
    }


    useEffect(()=>{
        if(gameStatus == "end"){
            setOpen(true)
            const user = async ()=>{
                const user = {
                    playerName : playerName,
                    point : point
                }
                try {
                    const result = await fetch("/api/user", {
                        method : "POST",
                        body : JSON.stringify(user)
                    })
                    
                } catch (error) {
                    console.log(error)
                }
            }

            const topFiveUser = async () => {
                try {
                    const result  = await fetch("/api/user", {
                        method : "GET"
                    })
                    const user = await result.json()
                    setTopUsers(user)
                    
                } catch (error) {
                    console.log(error)
                }
            }

            user()
            setTimeout(()=>{
                topFiveUser()
            },2000)

        } else {
            setOpen(false)
        }
    }, [gameStatus])

    return(
        <Dialog open={open} >
            <DialogContent className="bg-slate-200 border-none">
                <DialogHeader >
                    <DialogTitle className="text-center">Waktu Habis</DialogTitle>
                </DialogHeader>
                <div className="flex flex-col items-center">
                    <p className="font-semibold text-green-500 mb-2">Point anda</p>
                    <div className="flex mb-2 text-green-500 text-5xl font-semibold justify-center items-center">
                        <Flame size="48px"/> {point}
                    </div>
                    {/* <p>Anda berada pada urutan ke <span className="font-semibold">120</span> dari <span className="font-semibold">350</span> Pemain</p> */}
                </div>
                <LeaderBoard data={topUsers}/>


                <Button onClick={handleRestart}>Mulai Lagi</Button>
                
            </DialogContent>
        </Dialog>

    )
}