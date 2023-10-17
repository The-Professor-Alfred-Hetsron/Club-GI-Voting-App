'use client'

import { bureauInfo } from "@/constant/appInfo"
import { BureauMemberCard } from "@/components"

import React from 'react'
import DefaultBureau from "@/types/defaultBureauMember"

const BureauCarousel = (props:{currentPost:string}) => {
  return (
    <div className="relative w-full h-[300px]">
        <div className="snap-mandatory snap-x py-4 px-8 overflow-x-scroll overflow-y-hidden flex flex-row gap-2 items-start">
            <div className="snap-center shrink-0">
            </div>
            {
                bureauInfo.map((member:DefaultBureau, index:number)=>{
                const bool = member.position === props.currentPost
                return <BureauMemberCard
                        key={index}
                        data={member}
                        active={bool}
                        />
                })
            }
        </div>
    </div>
  )
}

export default BureauCarousel