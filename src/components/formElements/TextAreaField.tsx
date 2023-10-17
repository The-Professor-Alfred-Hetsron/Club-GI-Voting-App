'use client'

import React, {useState} from 'react'
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
    <textarea rows={4} cols={50} value={inputValue} required placeholder={props.label} onChange={(e)=>updateValue(e.target.value)} className='w-full p-2 border border-primary3 placeholder:text-priborder-primary3 focus:border-primary3 valid:border-primary3 focus:placeholder:text-primary3 bg-stone-50 text-black rounded-[5px] outline-none'>
    </textarea>
  )
}

export default TextAreaField