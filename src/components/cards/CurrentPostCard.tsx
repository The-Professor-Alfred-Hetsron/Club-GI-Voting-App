'use client'

import React from 'react'
import Image from 'next/image'

const CurrentPostCard = (props:{currentPost:string, action:Function, label:string}) => {
  return (
    <div className='py-4 px-8 rounded-xl bg-white/60 backdrop-blur-sm flex flex-col justify-center gap-2'>
        <span className="text-center font-prototype text-xl">{props.currentPost}</span>
        <div className="flex flex-row gap-2">
            <Image src='/assets/img/bureau/defaultMember.png' alt={props.currentPost} width={600} height={600} className='w-[100px] aspect-square rounded-full border-[5px] border-primary1'/>
            <div className="flex flex-col justify-center">
                <span className="font-prototype">Nom Prenom</span>
                <span className="">Manifesto - Resumé</span>
            </div>
        </div>
        <button type="button" onClick={()=>{props.action(props.currentPost)}} className={`w-full p-2 uppercase text-white text-[20px] bg-primary2 hover:bg-primary1 rounded-full drop-shadow-lg shadow-lg`}>
            {props.label}
        </button>
    </div>
  )
}

export default CurrentPostCard