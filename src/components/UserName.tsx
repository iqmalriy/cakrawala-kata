'use client'

import { AtSign } from "lucide-react"
import { usePlayerStore } from "@/store"
export default function UserName(){
    const playerName = usePlayerStore((state)=>state.playerName)
    return (
        <div className="flex items-center font-semibold text-white gap-1">
            <AtSign/><p>{playerName}</p>
        </div>
    )
}