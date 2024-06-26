'use client'
import Image from "next/image";
import { slogan, currentBureau, currentYear } from "@/constant/appInfo"
import { CurrentMemberCard, Footer, CustomButton } from "@/components";
import BureauMemberType from "@/types/bureauMember";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter()

  return (
    <main className="h-screen w-screen bg-[url('/assets/img/bureau/bureau2022-23.jpg')] bg-no-repeat bg-cover overflow-y-auto overflow-x-hidden flex flex-col">

      <div className={`w-screen h-screen px-8 py-8 bg-primary1Trans flex flex-row justify-center items-center`}>
        <div className="w-full h-screen flex flex-col gap-8 justify-center">
          <Image src='/assets/img/votehub.png' alt="VoteHub" width={500} height={500} className="w-[200px] drop-shadow-2xl"/>
          <Image src='/assets/img/clubgi.png' alt="Club GI" width={500} height={500} className="w-[300px]"/>
          <span className="text-white uppercase text-[30px] text-left">{slogan}</span>
          <CustomButton
            label="Login"
            width={200}
            action={()=>{router.push('/auth')}}
          />
        </div>
        <div className="w-full h-screen relative flex justify-end items-center">
          <Image src='/assets/img/enspy/logo.png' width={400} height={400} alt="Bureau" className="w-[200px] aspect-square absolute drop-shadow-lg shadow-md z-10 top-[320px] right-[200px]"/>
          <Image src='/assets/img/enspy/img2.jpg' width={400} height={400} alt="Bureau" className="w-[250px] aspect-video absolute drop-shadow-lg shadow-md top-[280px] right-[310px] rounded-3xl"/>
          <Image src='/assets/img/enspy/img3.jpg' width={400} height={400} alt="Bureau" className="w-[250px] aspect-video absolute drop-shadow-lg shadow-md top-[250px] right-10 rounded-3xl"/>
          <Image src='/assets/img/enspy/img1.jpg' width={400} height={400} alt="Bureau" className="w-[250px] aspect-video absolute drop-shadow-lg shadow-md top-[450px] right-[350px] rounded-3xl"/>
          <Image src='/assets/img/enspy/img4.jpg' width={400} height={400} alt="Bureau" className="w-[250px] aspect-video absolute drop-shadow-lg shadow-md top-[480px] right-10 rounded-3xl"/>
        </div>
      </div>

      <div className="w-full pt-[200px]">
        <div className={`w-full bg-white flex flex-col gap-4 items-center px-8 py-5`}>
          <span className="font-whiskygirls text-[50px] text-center">Bureau Club GI COPA {currentYear}</span>
          <div className="w-full flex flex-wrap justify-center items-center gap-5">
              {
                currentBureau.map((member:BureauMemberType, index:number)=>{
                  return (<CurrentMemberCard
                    key={index}
                    info={member}
                  />)
                })
              }
          </div>
        </div>
      </div>

      <Footer/>
    </main>
  )
}
