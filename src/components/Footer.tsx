'use client'

import React from 'react'
import { pageXMargin } from '@/constant/appInfo'

function Footer() {
  return (
    <footer className={`bg-white border-t-2 border-grayToneStroke py-4 px-8 flex flex-row gap-2 text-primary4 items-center`}>
        <span className="text-primary2">VoteHub</span>
        <span className="">All Rights Reserved to <span className="font-whiskygirls text-primary1 text-lg">Club GI</span>.</span>
    </footer>
  )
}

export default Footer