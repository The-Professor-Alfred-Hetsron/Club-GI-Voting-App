'use client'

import { BureauCarousel, CurrentPostCard } from "@/components"
import { useRouter, usePathname } from "next/navigation";
import { currentPost } from "@/constant/adminConfig";
import Image from 'next/image'

export default function Categories() {
    const router = useRouter()
    const pathname = usePathname()

    const routeToCategory = (category:string) =>{
      router.push(`${pathname}/${category}`)
    }
    return (
      <main className="h-full w-full relative flex flex-col">
        
        <Image src='/assets/img/background/voting3.png' alt="Background" width={600} height={600} className='w-[400px] absolute left-0 z-0'/>
        <Image src='/assets/img/votehub-primary.png' alt="Background" width={600} height={600} className='w-[300px] absolute left-[520px] z-0'/>
        <Image src='/assets/img/background/voting2.png' alt="Background" width={600} height={600} className='w-[500px] absolute right-4 z-0'/>

        <div className="flex flex-col z-10">
          <div className="w-full h-full py-6 bg-primary1Trans flex flex-col gap-2 justify-center items-center">
            <span className="text-white font-prototype text-2xl">Current Post To Vote</span>
            <CurrentPostCard currentPost={currentPost} action={routeToCategory} label="VOTE NOW"/>
          </div>
          
          <div className="w-full relative px-10 pt-4 flex flex-col items-center gap-3">
            <span className="text-xl font-whiskygirls text-center">Club GI Bureau Post Presentation</span>
            
            {/* Carousel */}
            <BureauCarousel currentPost={currentPost}/>
          </div>
        </div>

      </main>
    )
}