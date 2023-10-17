export const nameInitials = (value:string) =>{
    const temp = value?.trim()
    if(temp === undefined || temp === ""){
       return ""
    }
    const tempArray = temp.toUpperCase().split("-")
    return `${tempArray[0][0]}${(tempArray.length === 1)?"":tempArray[tempArray.length-1][0]}`
  }


import {Dispatch, SetStateAction} from 'react'
  export const addImage = (event: React.ChangeEvent<HTMLInputElement>, setImage:Dispatch<SetStateAction<string | ArrayBuffer | undefined>>) => {
   const selectedFiles = event.target.files as FileList;
   const data = new FileReader()
   data.addEventListener("load", () =>{
       setImage(data.result? data.result: undefined)
   })
   data.readAsDataURL(selectedFiles?.[0])
}