import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { customAlphabet } from 'nanoid'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function Prefix(){
  const nanoid = customAlphabet('ABCDEFGHIJKLMNOPQRSTUVWXYZ', 3)
  const prefix = nanoid()
  return prefix
}

export function RandomId(){
  const id = Math.floor(Math.random() * 50)
  return id

}
