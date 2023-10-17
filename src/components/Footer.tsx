'use client'

import React from 'react'
import { pageXMargin } from '@/constant/appInfo'
import Image from 'next/image'

function Footer() {
  return (
    <footer className={`w-full bg-white border-t-2 border-grayToneStroke py-4 px-10 flex flex-row justify-between text-primary4 items-center`}>
        <div className="w-full flex flex-row gap-2 items-center">
          <Image src='/assets/img/votehub2.png' alt="Club GI" width={500} height={500} className="w-[200px] drop-shadow-2xl"/>
          <span className="">© 2023. All Rights Reserved to <span className="font-whiskygirls text-primary1 text-lg">Club GI</span>.</span>
        </div>
        <Image src='/assets/img/enspy/logo.png' alt="Club GI" width={500} height={500} className="w-[60px] aspect-square drop-shadow-2xl"/>
    </footer>
  )
}

export default Footer