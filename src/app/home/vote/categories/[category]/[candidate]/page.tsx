'use client'
import { useRouter } from "next/navigation";
import { Confetti } from "@/components";

export default function Category({params}:{params: {category:string, candidate: string}}){
    const category = decodeURI(params.category)
    const candidate = decodeURI(params.candidate)
    const router = useRouter()


    const routeToCategories = () =>{
        router.push(`/home/vote/categories`)
    }

    return (
        <main className="w-full h-full relative px-10 flex flex-col items-center justify-center gap-10">
            <Confetti/>

            <div className="w-full h-full absolute z-10 flex flex-col items-center justify-evenly">
                <div className="flex flex-col drop-shadow-lg px-20 gap-4 text-black font-prototype text-5xl text-center">
                    <span className="">Thank you!</span>
                    <span className="">Your vote for <span className="text-primary3">{candidate}</span> as the <span className="text-primary3">{category}</span> Representative has been submitted Successfully</span>
                </div>

                <button type="button" onClick={()=>{routeToCategories()}} className={`w-[500px] p-3 text-white text-[25px] bg-primary2 hover:bg-primary1 rounded-full drop-shadow-lg shadow-lg`}>
                    BACK TO VOTE
                </button>
            </div>

            <svg className="absolute bottom-0 z-[-10px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#22AFF1" fillOpacity="1" d="M0,64L21.8,80C43.6,96,87,128,131,154.7C174.5,181,218,203,262,213.3C305.5,224,349,224,393,186.7C436.4,149,480,75,524,80C567.3,85,611,171,655,208C698.2,245,742,235,785,245.3C829.1,256,873,288,916,272C960,256,1004,192,1047,186.7C1090.9,181,1135,235,1178,234.7C1221.8,235,1265,181,1309,165.3C1352.7,149,1396,171,1418,181.3L1440,192L1440,320L1418.2,320C1396.4,320,1353,320,1309,320C1265.5,320,1222,320,1178,320C1134.5,320,1091,320,1047,320C1003.6,320,960,320,916,320C872.7,320,829,320,785,320C741.8,320,698,320,655,320C610.9,320,567,320,524,320C480,320,436,320,393,320C349.1,320,305,320,262,320C218.2,320,175,320,131,320C87.3,320,44,320,22,320L0,320Z"></path></svg>
        </main>
    )
}