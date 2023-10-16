'use client'

import React from 'react'
import '@/styles/loginForm.css'
import Image from "next/image";

interface PropsTypes {
  imgPath: string,
  transform: string
}

const BgBlurLoginImg = (props:PropsTypes) => {
  return (
    <div className={`w-[300px] ${props.transform} absolute aspect-video rounded-2xl z-[1px]`}>
      <Image src={props.imgPath} alt="Club GI" width={500} height={500} className="w-full aspect-video rounded-2xl z-[1px] absolute"/>
      <div className="w-full h-full rounded-2xl absolute z-[2px] img1"></div>
    </div>
  )
}

export default BgBlurLoginImg