'use client'

import Image from "next/image";
import { Footer } from "@/components";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Admin(params:{credentials:string}) {
  const credentials = decodeURI(params.credentials)
  const router = useRouter()
  
    return (
      <main className="h-screen w-screen flex flex-col items-center justify-between overflow-y-auto">
        <header className='w-full bg-white drop-shadow-md py-3 px-10 flex flex-row justify-between text-primary4 items-center'>
          <div className="w-full flex flex-row gap-4 items-center">
              <Image src='/assets/img/votehub-primary.png' priority alt="Club GI" width={500} height={500} className="w-[80px] drop-shadow-2xl"/>
              <Image src='/assets/img/clubgi2.png' alt="Club GI" width={500} height={500} className="w-[200px]"/>
          </div>

          <div className="w-full flex flex-row gap-4 justify-end">
              <span className="w-[60px] p-2 aspect-square text-2xl bg-primary1 rounded-full flex justify-center items-center text-white font-whiskygirls">A</span>
              <span className="flex justify-center items-center text-black text-2xl font-normal font-prototype">Admin</span>
          </div>
        </header>

        <div className="w-full h-full flex flex-col py-4 px-10 items-center gap-3">
          <span className="font-prototype text-4xl">ADMINISTRATOR</span>
          <span className="text-xl">Welcome Back</span>

          <div className="w-full h-full flex flex-col">
            <span className="w-full font-bold text-lg text-left">Administrator &gt;&gt; <span className="text-primary2">Task</span></span>

            <div className="">
              
            </div>
          </div>
        </div>

        <Footer/>
      </main>
    )
  }
  