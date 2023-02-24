"use client"
import Image from "next/image"
import { useState } from "react"

function cn(...classes){
    return classes.filter(Boolean).join(' ')
}

function lazyImage({img}){
    const [isLoading, setLoading] =  useState(true)
    return(
     <div>
          <Image 
          className={cn('rounded-t-lg w-fulls object-cover duration-700 ease-in-out',
          isLoading
          ? 'grayscale blur-2xl scale-110'
          : 'grayscale-0 blur-0 scale-100'
          )}
          onLoadingComplete={()=>setLoading(false)}
          alt="leeerob"
           src={img}
            width={500}
            height={500}
            />
          </div>
    )
}

export default lazyImage