'use client'

import DefaultBureau from '@/types/defaultBureauMember'
import Image from 'next/image'
import React from 'react'

const BureauMemberCard = (props:{data:DefaultBureau}) => {
  return (
    <div className='min-w-[200px] min-h-[220px] py-4 px-2 snap-start snap-always bg-white rounded-lg hover:drop-shadow-lg flex flex-col justify-between items-center text-center text-primary4'>
        <Image src='/assets/img/bureau/defaultMember.png' alt={props.data.position} width={600} height={600} className='w-[100px] aspect-square rounded-full border-[5px] border-primary1'/>
        <span className={`font-bold ${props.data.level === '3GI'?'text-primary2':'text-primary3'}`}>{props.data.level}</span>
        <span className="font-semibold text-sm">{props.data.position}</span>
    </div>
  )
}

export default BureauMemberCard