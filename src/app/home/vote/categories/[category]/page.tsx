'use client'

import { useState } from "react"
import { candidatesInfos } from "@/constant/adminConfig"
import { CandidatesVoteCard } from "@/components"
import VoteMemberType from "@/types/voteCard"
import { useRouter, usePathname } from "next/navigation";

export default function Category({params}:{params: {category:string}}) {
  const router = useRouter()
  const pathname = usePathname()
  const category = decodeURI(params.category)
  const [ candidateList, setCandidateList ] = useState<Array<VoteMemberType>>(candidatesInfos)
  
  const submitVote = (candidate:string) =>{
    router.push(`${pathname}/${candidate}`)
  }
  return (
      <main className="w-full flex flex-col gap-2 px-10 py-4 items-center">
        <span className="w-full text-center font-prototype text-4xl">Vote for the &apos;{category}&apos; Representative</span>

        <div className="w-full p-4 flex flex-col gap-2">
          <span className="text-xl">Choose your Preferred candidate</span>
          <div className="w-full p-2 flex flex-wrap gap-5">
            {
              candidateList?.map((member:VoteMemberType, index:number)=>{
                return <CandidatesVoteCard
                          key={index}
                          data={member}
                          action={submitVote}
                        />
              })
            }
          </div>
        </div>
      </main>
    )
}