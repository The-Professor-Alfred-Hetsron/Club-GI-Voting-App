'use client'

import { useRouter, usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Image from 'next/image'

export default function Vote() {
  const router = useRouter()
  const pathname = usePathname()

  const [ username, setUsername ] = useState<string>("")


    useEffect(()=>{
      const temp = localStorage.getItem('user')
      setUsername(temp!=null?temp:"")
  },[])

  const routeToCategories = () =>{
    router.push(`${pathname}/categories`)
  }
    return (
      <main className="w-full h-full relative flex flex-col items-center justify-center gap-10">
        
        <Image src='/assets/img/background/voting2.png' alt="Background" width={600} height={600} className='w-[400px] absolute left-0 z-0'/>
        <Image src='/assets/img/background/voting3.png' alt="Background" width={600} height={600} className='w-[350px] absolute right-4 z-0'/>

        <div className="flex flex-col items-center justify-center gap-10 z-10">
          <div className="flex flex-col gap-4 text-primary3 font-prototype text-5xl text-center">
            <span className="">Hi {username} !</span>
            <span className="">Welcome to VoteHub</span>
          </div>

          <span className="font-semibold text-xl">Your account has been loaded successfully</span>

          <span className="font-whiskygirls text-4xl text-primary2">Votes are Open</span>
          <span className="font-semibold text-xl">By Clicking Continue, You Agree to Choose a post and vote your Candidate</span>

          <button type="button" onClick={()=>{routeToCategories()}} className={`w-[500px] p-3 text-white text-[25px] bg-primary2 hover:bg-primary1 rounded-full drop-shadow-lg shadow-lg`}>
              CONTINUE
          </button>
        </div>

      </main>
    )
}