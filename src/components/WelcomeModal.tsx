'use client'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
  } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"


import InputUsername from "./InputUsername"
import GameLevel from "./GameLevel"
import { usePlayerStore, useGameStore } from "@/store"
import { useState, useEffect } from "react"

export default function WelcomeModal(){
    const [disable, setDisable] = useState<boolean>(true)
    const [open, setOpen] = useState<boolean>(true)
    const {playerName, level} = usePlayerStore()
    const {setGameStart} = useGameStore()
    const handleStart = ()=>{
        setOpen(false)
        console.log(level)
        setGameStart()
    }

    useEffect(()=>{
        if(playerName.length < 13 && playerName.length > 4 && level){
            setDisable(false)
        } else {
            setDisable(true)
        }

    }, [playerName, level])
    return(
        <Dialog open={open} >
            <DialogContent className="bg-slate-200 border-none">
                <DialogHeader>
                    <DialogTitle>Selamat Datang</DialogTitle>
                <DialogDescription>
                    Untuk memulai permainan harap masukan Nama Pemain terlebih dahulu
                </DialogDescription>
                </DialogHeader>

                <InputUsername/>
                <div className="flex">
                    <div className="w-3/4 flex justify-start">
                        <GameLevel/>
                    </div>
                    <div className="w-1/4 flex justify-end">
                        <Button onClick={handleStart} disabled={disable}>Mulai</Button>
                    </div>
                </div>
            </DialogContent>
        </Dialog>

    )
}