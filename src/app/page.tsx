'use client'
import Image from "next/image";
import { Flame, Hourglass } from "lucide-react";
import GameLevel from "@/components/GameLevel";
import LeaderBoard from "@/components/LeaderBoard";
import UserName from "@/components/UserName";
import TextBox from "@/components/TextBox";
import InputBox from "@/components/InputBox";
import WelcomeModal from "@/components/WelcomeModal";
import Countdown from "@/components/Countdown";
import EndGameModal from "@/components/EndGameModal";
import {useGameStore, usePlayerStore } from "@/store"
import dataset from '@/dataset.json'
import { useEffect, useState } from "react";
import { RandomId } from "@/lib/utils";

type GameDataType = {
  id : number
  kata : string
  arti : string
  level : string
}

export default function Home() {
  // const {gameStatus} = useGameStore()
  const {level, point} = usePlayerStore()
  const [gameData, setGameData] = useState<GameDataType>({id : 0, kata : "", arti : "", level : ""})

  useEffect(()=>{
    const randomId = RandomId()
    const kata = dataset[level].find((txt)=>(txt.id == randomId ))
    if(kata){
      setGameData(kata)
    }
  }, [point])


  return (
    <>
      <nav className="flex justify-between w-full items-center" >
        <div className="flex w-1/3">
          <p className="text-white text-3xl whitespace-pre-wrap">{`Cakrawala \nKata.`}</p>
        </div>
        <div className="flex gap-2w-1/3 justify-center gap-4 ">
            <div className="flex items-center text-2xl font-semibold text-green-500">
              <Flame/><p>{point}</p>
            </div>
            <div className="flex items-center text-2xl font-semibold text-white">
              <Countdown/>
            </div>
        </div>
        <div className="flex align-middle items-center gap-4 w-1/3 justify-end">
            <div className="flex">
              <UserName/>
            </div>
        </div>
      </nav>
      <div className="flex flex-col items-center gap-10">
        <TextBox text={gameData.arti}/>
        <InputBox text={gameData.kata}/>
      </div>
      <WelcomeModal/>
      <EndGameModal/>
    </>
  );
}
