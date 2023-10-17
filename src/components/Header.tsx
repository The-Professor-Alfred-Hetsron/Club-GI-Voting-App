'use client'

import React from 'react'
import Image from "next/image";
import { nameInitials } from '@/hooks/myhooks';

const Header = () => {
    const username = "The-Professor"
    const userInitals = nameInitials(username)
  return (
    <header className='w-full bg-white drop-shadow-md py-3 px-10 flex flex-row justify-between text-primary4 items-center'>
        <div className="w-full flex flex-row gap-4 items-center">
            <Image src='/assets/img/votehub-primary.png' priority alt="Club GI" width={500} height={500} className="w-[80px] drop-shadow-2xl"/>
            <Image src='/assets/img/clubgi2.png' alt="Club GI" width={500} height={500} className="w-[200px]"/>
        </div>

        <div className="w-full flex flex-row gap-4 justify-end">
            <span className="w-[60px] p-2 aspect-square text-2xl bg-primary1 rounded-full flex justify-center items-center text-white font-whiskygirls">{userInitals}</span>
            <span className="flex justify-center items-center text-black text-2xl font-normal font-prototype">{username}</span>
        </div>
    </header>
  )
}

export default Header