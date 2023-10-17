'use client'

import { bureauInfo } from "@/constant/appInfo"
import { BureauMemberCard, CurrentPostCard } from "@/components"
import { useRouter, usePathname } from "next/navigation";
import DefaultBureau from "@/types/defaultBureauMember"

export default function Categories() {
    const router = useRouter()
    const pathname = usePathname()
    const currentPost = 'PRESIDENT'

    const routeToCategory = (category:string) =>{
      router.push(`${pathname}/${category}`)
    }
    return (
      <main className="h-full w-full flex flex-col">
        
        <div className="w-full h-full py-6 bg-primary1Trans flex flex-col gap-2 justify-center items-center">
          <span className="text-white font-prototype text-2xl">Current Post Registration</span>
          <CurrentPostCard currentPost={currentPost} action={routeToCategory}/>
        </div>
        
        <div className="w-full relative px-10 pt-4 flex flex-col items-center gap-3">
          <span className="text-xl font-whiskygirls text-center">Club GI Bureau Post Presentation</span>
          
          {/* Carousel */}
          <div className="relative w-full h-[300px]">
            <div className="snap-mandatory snap-x py-4 px-8 overflow-x-scroll overflow-y-hidden flex flex-row gap-2 items-start">
              <div className="snap-center shrink-0">
              </div>
                {
                  bureauInfo.map((member:DefaultBureau, index:number)=>{
                    return <BureauMemberCard
                            key={index}
                            data={member}
                            />
                  })
                }
            </div>
          </div>
        </div>

      </main>
    )
}