'use client'

import { addImage } from '@/hooks/myhooks'
import Image from 'next/image'
import { Dispatch, SetStateAction } from 'react'

interface propsTypes {
  label: string,
  icon?: React.JSX.Element,
  previewImage: string | ArrayBuffer | undefined,
  setPreviewImage?: Dispatch<SetStateAction<string | ArrayBuffer | undefined>>,
  isPreviewOnly?:boolean,
  openCarousel?:Function
}

function InputImageField(props:propsTypes) {

  return (
    <>
      {!props.isPreviewOnly?
        <div className={`w-[70%] aspect-square relative rounded-full bg-slate-300 ${!props.previewImage && 'border-2 border-slate-500 border-dashed'}`}>
          <div className={`w-full aspect-square rounded-full flex flex-col gap-1 ${props.previewImage? 'bg-[rgba(0,0,0,0.5)] text-white':'bg-slate-300 text-black'} justify-center items-center absolute`}>
              {!props.previewImage && props.icon}
              <span className={`text-center text-[16px] ${props.previewImage?'font-bold':'font-normal'} leading-normal tracking-wide`}>{props.label}</span>
              {props.previewImage && <span className='text-base font-normal leading-normal tracking-wide'>Click to Change</span>}
          </div>
          <input onChange={(e)=>{props.setPreviewImage?addImage(e,props.setPreviewImage):null}} className='w-full h-full absolute rounded-2xl file:text-transparent file:hover:cursor-pointer file:border-0 file:w-full file:aspect-square file:bg-transparent' type="file" accept="image/*" required/>
          {props.previewImage && (
              <Image className="w-full aspect-square rounded-full" src={`${props.previewImage}`} alt={props.label} width={500} height={500}/>
          )}
      </div>
      :
      <div className='flex flex-col justify-center items-center gap-1'>
        <button onClick={()=>{props.openCarousel?props.openCarousel():null}} className='w-[300px] h-[200px] rounded-lg relative'>
          <Image className="w-full aspect-square rounded-full border-2 border-[#2D3A96]" src={`${props.previewImage}`} alt={props.label} fill/>
        </button>
        <span className='text-center text-slate-500 text-xl font-light tracking-tight'>{props.label}</span>
      </div>
      }
    </>
    
  )
}

export default InputImageField