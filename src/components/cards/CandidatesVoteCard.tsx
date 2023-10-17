'use client'

import React from 'react'
import Image from 'next/image'
import VoteMemberType from '@/types/voteCard'

interface PropsTypes{
    data:VoteMemberType,
    action:Function
}

const CandidatesVoteCard = (props:PropsTypes) => {
  return (
    <div className='w-[80%] p-4 hover:scale-105 hover:ease-in-out duration-400 rounded-lg bg-lightBlue backdrop-blur-xl border border-primary2 drop-shadow-lg flex flex-col gap-2'>
        <div className="w-full p-2 flex flex-row gap-2">
            <Image src={props.data.image} alt={props.data.name} width={600} height={600} className='w-[150px] aspect-square rounded-full border-[5px] border-primary2'/>
            <div className="w-full h-full p-2 flex flex-col gap-2">
                <span className="font-prototype text-left text-3xl">{props.data.name}</span>
                <span className="h-full text-justify text-xl">{props.data.manifesto}</span>
            </div>
        </div>
        <div className="w-full p-2 flex flex-row gap-2">
            <button type="button" onClick={()=>{props.action(props.data.name)}} className={`w-full p-2 text-white text-[20px] bg-primary2 hover:bg-primary1 rounded-full drop-shadow-lg shadow-lg`}>
                VOTE
            </button>
        </div>
    </div>
  )
}

export default CandidatesVoteCard