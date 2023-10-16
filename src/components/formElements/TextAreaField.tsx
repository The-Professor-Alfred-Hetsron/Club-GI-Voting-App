'use client'

import React, {useState, useEffect} from 'react'
import '@/styles/formElements.css'

interface PropsTypes {
  defaultValue?: string,
  label: string,
  setNewValue: Function
}
function TextAreaField(props:PropsTypes) {
    const [inputValue, setInputValue] = useState(props.defaultValue?props.defaultValue:"")

    const updateValue = (value:string)=>{
      setInputValue(value)
      props.setNewValue(value)
    }

  return (
    <textarea rows={4} cols={50} value={inputValue} required placeholder={props.label} onChange={(e)=>updateValue(e.target.value)} className='w-full p-2 border border-[#0B5DA7] placeholder:text-[#0B5DA7] focus:border-[#4285F4] valid:border-[#4285F4] focus:placeholder:text-[#4285F4] bg-stone-50 text-black rounded-[5px] outline-none'>
      {inputValue}
    </textarea>
  )
}

export default TextAreaField