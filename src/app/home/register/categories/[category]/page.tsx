'use client'
import { useState, useEffect } from "react"
import { InputField, TextAreaField } from "@/components"
import { HiPlus } from "react-icons/hi";
import InputImageField from "@/components/formElements/InputImageField"
import { useRouter } from "next/navigation";
import Image from 'next/image'


export default function Category({params}:{params: {category:string}}) {
  const category = params.category
  const router = useRouter()


  const [ name, setName ] = useState<string>("")
  const [ manifesto, setManifesto ] = useState<string>("")
  const [ image, setImage ] = useState<string | ArrayBuffer | undefined>()
  const [ valid, setValid ] = useState<boolean>(false)

  const initialiseParams = () =>{
    setName("")
    setManifesto("")
    setImage("")
    setValid(false)
  }
  const submitCandidature = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if(valid){
      discardInfo()
    }
  }
  const discardInfo = () =>{
    initialiseParams()
    router.push("/home/register/categories")
  }

  useEffect(()=>{
    if(name!=="" && manifesto!=="" && image!==""){
      setValid(true)
    }
  },[name,manifesto,image])

    return (
      <main className="w-full h-full flex flex-col px-10 py-4 items-center">
        
        <Image src='/assets/img/background/voting3.png' alt="Background" width={600} height={600} className='w-[400px] absolute right-4 z-0'/>
        <Image src='/assets/img/background/voting2.png' alt="Background" width={600} height={600} className='w-[500px] absolute left-0 z-0'/>

        <form onSubmit={submitCandidature} className="w-[70%] h-full rounded-xl drop-shadow-lg border border-primary1 bg-lightBlue/60 backdrop-blur-sm flex flex-col gap-2 p-8">
          <span className="w-full text-center font-prototype text-3xl">{category}</span>
            
          <div className="w-full h-full flex flex-row gap-4">
            <div className="w-full h-full flex flex-col justify-center items-center">
              <span className="w-full border-b border-grayToneStroke text-left">Candidate Image</span>
              <div className="w-full h-full flex pt-8 justify-center">
                <InputImageField
                    label = "Candidate Image"
                    icon = {<HiPlus size={32}/>}
                    previewImage={image}
                    setPreviewImage = {setImage}
                  />
              </div>
            </div>

            <div className="w-full h-full flex flex-col">
              <span className="border-b border-grayToneStroke">Candidate Information</span>
              <div className="w-full h-full flex flex-col justify-evenly">
                <InputField defaultValue={name} setNewValue={setName} type="text" label="Name and Surname"/>
                <TextAreaField defaultValue={manifesto} setNewValue={setManifesto} label="Manifesto (Resumé)"/>
              </div>
            </div>
          </div>

          <div className="w-full flex flex-row justify-end gap-2">
            <button type="button" onClick={discardInfo} className={`w-[200px] p-2 text-white text-[20px] bg-googleRed rounded-full drop-shadow-lg shadow-lg`}>
                Discard
            </button>
            <button type="submit" className={`w-[200px] p-2 text-white text-[20px] bg-primary2 hover:bg-primary1 rounded-full drop-shadow-lg shadow-lg`}>
                Publish
            </button>
          </div>

        </form>

      </main>
    )
}
  