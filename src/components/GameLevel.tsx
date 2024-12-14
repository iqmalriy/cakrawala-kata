'use client'

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { usePlayerStore } from "@/store"

export default function GameLevel() {
  const level = usePlayerStore((state) => state.level)  
  const SetLevel = usePlayerStore((state) => state.updateLevel)
  
  const handleChange = (lvl : "mudah" | "sedang" | "sulit")=>{
    SetLevel(lvl)
  }
  return (
    <ToggleGroup type="single" value={level} onValueChange={handleChange} variant="outline" >
      <ToggleGroupItem className="focus-visible:bg-green-500" value="mudah">Mudah</ToggleGroupItem>
      <ToggleGroupItem value="sedang">Sedang</ToggleGroupItem>
      <ToggleGroupItem value="sulit">Sulit</ToggleGroupItem>
    </ToggleGroup>
    )
}