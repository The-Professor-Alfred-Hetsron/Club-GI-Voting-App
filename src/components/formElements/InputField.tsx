'use client'

import React, {useState} from 'react'
import '@/styles/formElements.css'

interface PropsTypes{
  defaultValue?: string | number,
  type: string,
  setNewValue:Function,
  label: string,
  disabled?: boolean,
  minValue?: number,
  maxValue?: number
}
function InputField(props:PropsTypes) {
    const [inputValue, setInputValue] = useState(props.defaultValue?props.defaultValue:(props.type === "number"?0:""))

    const updateValue = (value:string|number)=>{
      setInputValue(value)
      props.setNewValue(value)
    }

  return (
    <>
        {props.type === "number"?
          <div className="inputBox">
            <input required value={inputValue} type="number" min={props.minValue} max={props.maxValue} maxLength={1} onChange={(e)=>updateValue(Number(e.target.value))}/>
            <span className='capitalize'>{props.label}</span>
          </div>
        :
        <div className="inputBox">
          <input required value={inputValue} type={props.type} disabled={props.disabled?props.disabled:false} onChange={(e)=>updateValue(e.target.value)}/>
          <span className='capitalize'>{props.disabled?"":props.label}</span>
        </div>
        }
    </>
  )
}

export default InputField