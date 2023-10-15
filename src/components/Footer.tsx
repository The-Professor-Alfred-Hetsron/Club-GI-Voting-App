'use client'

import React from 'react'
import { pageXMargin } from '@/constant/appInfo'
import Image from 'next/image'

function Footer() {
  return (
    <footer className={`bg-white border-t-2 border-grayToneStroke py-4 px-8 flex flex-row gap-2 text-primary4 items-center`}>
        <Image src='/assets/img/votehub2.png' alt="Club GI" width={500} height={500} className="w-[200px] drop-shadow-2xl"/>
        <span className="">All Rights Reserved to <span className="font-whiskygirls text-primary1 text-lg">Club GI</span>.</span>
    </footer>
  )
}

export default Footer