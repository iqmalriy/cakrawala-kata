'use client'
import { Hourglass } from "lucide-react";
import { useGameStore } from "@/store";
import { useEffect} from "react";
export default function Countdown(){
    // const [countdown, setCountdown] = useState<number>(0)
    const {gameStatus,   setGameStop, countDown, setCountDown} = useGameStore((state)=> state)

    useEffect(()=>{

        if(countDown < 1){
            setGameStop()
            return
        }

        if(gameStatus == "started"){
            const timer = setInterval(()=>{
                setCountDown()
            }, 1000)

            return ()=> clearInterval(timer)
        }

    }, [gameStatus, countDown])
    return (
        <>
            <Hourglass/><p>{countDown} Detik</p>
        </>
    )
}