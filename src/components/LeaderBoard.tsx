'use client'
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "@/components/ui/popover"

import { ChartColumnBig } from "lucide-react"
type Props = {
    playerName : string,
    point : number
}

export default function LeaderBoard({data} : {data : Props[] }) {
    return(
        <div className="">
            <div className="p-4 border-t-black/80 border-[1px]   text-slate-800 flex gap-2 flex-col">
                <div className="flex gap-4 items-center">
                    <p className="w-1/5 font-semibold text-center">Rank</p>
                    <p className="w-2/5 font-semibold">Username</p>
                    <p className="w-2/5 font-semibold text-center">Point</p>
                </div>
                {data.map((user, index)=>(
                    <div key={index} className="flex gap-4 items-center">
                        <p className=" w-1/5 text-center">{index+1}</p>
                        <p className="w-2/5">{user.playerName}</p>
                        <p className="w-2/5 text-center">{user.point}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}