'use client'
import { Input } from "@/components/ui/input"
import { usePlayerStore } from "@/store"
import { useEffect, useState } from "react"
import { cn, Prefix} from "@/lib/utils"

export default function InputUsername(){
    const setPlayerName = usePlayerStore((state) => state.updatePlayerName)
    const [inputError, setInputError] = useState<boolean>(false)
    const [prefix, setPrefix] = useState<string>("")

    const handleChange = (e : React.ChangeEvent<HTMLInputElement>)=>{
        const playerName = `${prefix}-${e.target.value.toUpperCase()}`
        setPlayerName(playerName)
        setInputError(false)
        if(playerName.length > 12){
            setInputError(true)
        } 
    }
    useEffect(()=>{
        setPrefix(Prefix())
    }, [])
    return(
        <div className="flex w-full items-center gap-2">
            <p className="text-lg font-semibold text-slate-900">{prefix}</p>
            <p>-</p>
            <Input className={cn("font-semibold text-lg uppercase", inputError && "border-red-500")}  type="text" placeholder="Nama Pemain (Max 8 Karakter)" onChange={handleChange} />
        </div>
    )
}