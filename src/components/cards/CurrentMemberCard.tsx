'use client'
import React from 'react'

import BureauMemberType from '@/types/bureauMember'
import Image from 'next/image'

function CurrentMemberCard(props:{info:BureauMemberType}) {
  return (
    <div className='w-[300px] h-[300px] py-4 px-2 bg-white rounded-lg hover:drop-shadow-lg flex flex-col gap-2 justify-between items-center text-center text-primary4'>
        <Image src={props.info.image} alt={props.info.position} width={600} height={600} className='w-[150px] aspect-square rounded-full border-[5px] border-primary2'/>
        <span className="font-bold">{props.info.name}</span>
        <span className="font-bold text-primary3">{props.info.level}</span>
        <span className="font-semibold">{props.info.position}</span>
    </div>
  )
}

export default CurrentMemberCard