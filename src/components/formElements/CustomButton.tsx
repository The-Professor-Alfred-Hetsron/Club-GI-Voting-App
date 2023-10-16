import React from 'react'

interface propsTypes {
    label: string,
    width: number,
    action: Function,
    disabled?: boolean | false
}
function CustomButton(props:propsTypes) {
  return (
    <button onClick={()=>{props.action()}} className={`w-[${props.width}px] p-3 text-white text-[25px] bg-primary3 rounded-full drop-shadow-lg shadow-lg hover:bg-white hover:text-primary3 hover:border-4 hover:border-primary3 hover:scale-105 hover:ease-in-out`}>
        {props.label}
    </button>
  )
}

export default CustomButton