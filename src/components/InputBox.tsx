'use client'
import {
    InputOTP,
    InputOTPSlot,
  } from "@/components/ui/input-otp"

import { useEffect, useState } from "react"
import { usePlayerStore } from "@/store"
import { PartyPopper } from "lucide-react"
import { motion } from "motion/react"



export default function InputBox({text} : {text : string}){
    const [character, setCharacter] = useState<string[]>([])
    const [value, setValue] = useState<string>("")
    const [isVisible, setVisible] = useState<boolean>(true)
    const {incrementPoint} = usePlayerStore()
    useEffect(()=>{
        if(text){
            const char = text.split("")
            setCharacter(char)
        }
    }, [text])

    const handleInput = (input : string)=>{
        setValue(input)
        if(input.toLocaleUpperCase() == text.toLocaleUpperCase()){
            setVisible(true)
            setTimeout(()=>{
                incrementPoint()
                setValue("")
            },1000)
        }
    }

    return (
        <div className="flex">
            <InputOTP maxLength={character.length} onChange={handleInput} className="gap-4 " inputMode="text" value={value}>
                {character.map((char, index)=>(
                    <InputOTPSlot key={index} className="border-slate-300 text-xl text-white uppercase" index={index}  />
                ))}
            </InputOTP>
            {isVisible && (
                <motion.div 
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{
                    scale: [0, 1.5, 1], // Scale up and settle
                    opacity: [0, 1, 0], // Fade in and out
                    rotate: [0, 20, -20, 0], // Slight shake (rotation)
                    }}
                    transition={{
                    duration: 1, // Total duration of the animation
                    ease: "easeOut",
                    }}
                    onAnimationComplete={() => setVisible(false)}
                    className="self-start text-green-500">
                    <PartyPopper/>
                </motion.div>
            )}
        </div>

    )
}