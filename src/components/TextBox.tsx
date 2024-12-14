'use client'

export default function TextBox({text} : {text : string}){
    return(
        <div className="mt-16 h-fit flex items-center w-[630px] text-white font-semibold text-xl border-l-8 border-green-500">
            <p className="ml-1">{text}</p>
        </div>
    )
}