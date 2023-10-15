import Image from "next/image";
import { slogan, appName } from "@/config/appconfig"
export default function Home() {
  return (
    <main className="sm:hidden h-screen w-screen relative bg-white overflow-hidden flex flex-col items-center justify-center">
      
      <div className="w-full h-full absolute bg-[url('/assets/img/bureau2022-23.jpg')] bg-no-repeat bg-cover flex flex-col justify-center items-center">
      </div>

      <div className="w-full h-full absolute p-8 bg-primary1Trans flex flex-row justify-center items-center">
        <div className="w-full h-full flex flex-col gap-8 justify-center">
          <span className="text-white text-[50px] font-bold">{appName}</span>
          <span className="text-white uppercase text-[30px] text-left">{slogan}</span>
          <button className="w-[200px] p-3 text-white text-[25px] bg-primary3 rounded-full drop-shadow-lg shadow-lg hover:bg-white hover:text-primary3 hover:border-4 hover:border-primary3 hover:scale-105 hover:ease-in-out">
            Login
          </button>
        </div>
        <div className="w-full h-full relative flex justify-end items-center pr-10">
          <Image src='/assets/img/enspy/logo.png' width={400} height={400} alt="Bureau" className="w-[200px] aspect-square absolute drop-shadow-lg shadow-md z-10 top-[320px] right-[200px]"/>
          <Image src='/assets/img/enspy/img2.jpg' width={400} height={400} alt="Bureau" className="w-[250px] aspect-video absolute drop-shadow-lg shadow-md top-[280px] right-[310px] fancy-topleft"/>
          <Image src='/assets/img/enspy/img3.jpg' width={400} height={400} alt="Bureau" className="w-[250px] aspect-video absolute drop-shadow-lg shadow-md top-[250px] right-10 fancy-topright"/>
          <Image src='/assets/img/enspy/img1.jpg' width={400} height={400} alt="Bureau" className="w-[250px] aspect-video absolute drop-shadow-lg shadow-md top-[450px] right-[350px] fancy-bottomleft"/>
          <Image src='/assets/img/enspy/img4.jpg' width={400} height={400} alt="Bureau" className="w-[250px] aspect-video absolute drop-shadow-lg shadow-md top-[480px] right-10 fancy-bottomright"/>
        </div>
      </div>
    </main>
  )
}
