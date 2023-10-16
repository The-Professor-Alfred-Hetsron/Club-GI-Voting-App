'use client'

import { InputField, BgBlurLoginImg } from "@/components"
import Image from "next/image";
import { useState, useEffect } from 'react'
import { loginErrorMsg, loginBluImg } from "@/constant/appInfo";
import { LoginBgBlurImageType } from "@/types/loginbgblurImg"
import '@/styles/loginForm.css'

export default function Auth() {
    const [ pseudo, setPseudo ] = useState<string>("")
    const [ matricule, setMatricule ] = useState<string>("")
    const [ valid, setValid ] = useState<boolean>(false)
    const [ error, setError ] = useState<boolean>(false)
    const [ isSignUp, setIsSignUp ] = useState<boolean>(false)

    const initialiseParams = () =>{
      setPseudo("")
      setMatricule("")
      setValid(false)
      setError(false)
      setIsSignUp(!isSignUp)
    }

    const validateInput = (pseudoValue:string, matriculeValue:string) =>{
      const pseudoValid = pseudoValue.match(
        /^[a-zA-Z\d](?:[a-zA-Z\d]|-(?=[a-zA-Z\d])){0,38}$/g
      );
      const matValid = matriculeValue.match(
        /^(1[89]|20|21|22)[Pp]\d{3}$/g
      );
      return {pseudoMatch:pseudoValid, matriculeMatch:matValid}
    }

    const submitLogin = (event: React.FormEvent<HTMLFormElement>) =>{
        event.preventDefault()
        if (valid) {
          const {pseudoMatch, matriculeMatch} = validateInput(pseudo, matricule)
          if(pseudoMatch && matriculeMatch){
            setError(false)
            console.log("Login");
          }
          else{
            setError(true)
          }
        }
    }

    const submitSignUp = (event: React.FormEvent<HTMLFormElement>) =>{
      event.preventDefault()
      if (valid) {
        const {pseudoMatch, matriculeMatch} = validateInput(pseudo, matricule)
          if(pseudoMatch && matriculeMatch){
            setError(false)
            console.log("SignUp");
          }
          else{
            setError(true)
          }
      }
  }

    useEffect(()=>{
      if(pseudo!=="" && matricule!==""){
        setValid(true)
      }else{
        setValid(false)
      }
    },[pseudo,matricule])
    return (
      <main className="h-screen w-screen relative bg-primary1 flex flex-col items-center justify-center overflow-hidden">

          <div className="w-screen h-screen absolute">
            <div className={`${'w-[500px] top-[50px] left-[10px] rotate-[-15deg]'} absolute aspect-video rounded-2xl z-[1px]`}>
              <Image src={'/assets/img/login/ml.jpg'} alt="Club GI" width={500} height={500} className="w-full aspect-video rounded-2xl z-[1px] absolute"/>
              <div className="w-full h-full rounded-2xl absolute z-[2px] img1"></div>
            </div>
            <div className={`${'w-[400px] bottom-[80px] left-[400px] rotate-[12deg]'} absolute aspect-video rounded-2xl z-[1px]`}>
              <Image src={'/assets/img/login/soft1.jpeg'} alt="Club GI" width={500} height={500} className="w-full aspect-video rounded-2xl z-[1px] absolute"/>
              <div className="w-full h-full rounded-2xl absolute z-[2px] img1"></div>
            </div>
            <div className={`${'w-[390px] top-[100px] left-[580px] rotate-[10deg]'} absolute aspect-video rounded-2xl z-[1px]`}>
              <Image src={'/assets/img/login/soft2.webp'} alt="Club GI" width={500} height={500} className="w-full aspect-video rounded-2xl z-[1px] absolute"/>
              <div className="w-full h-full rounded-2xl absolute z-[2px] img1"></div>
            </div>
            <div className={`${'w-[470px] bottom-[10px] left-[-70px] rotate-[-20deg]'} absolute aspect-video rounded-2xl z-[1px]`}>
              <Image src={'/assets/img/login/uiux2.jpg'} alt="Club GI" width={500} height={500} className="w-full aspect-video rounded-2xl z-[1px] absolute"/>
              <div className="w-full h-full rounded-2xl absolute z-[2px] img1"></div>
            </div>
            <div className={`${'w-[400px] bottom-[20px] right-[250px] rotate-[10deg]'} absolute aspect-video rounded-2xl z-[1px]`}>
              <Image src={'/assets/img/login/cyber.jpeg'} alt="Club GI" width={500} height={500} className="w-full aspect-video rounded-2xl z-[1px] absolute"/>
              <div className="w-full h-full rounded-2xl absolute z-[2px] img1"></div>
            </div>
            <div className={`${'w-[540px] top-[50px] right-[10px] rotate-[5deg]'} absolute aspect-video rounded-2xl z-[1px]`}>
              <Image src={'/assets/img/login/mlp.jpg'} alt="Club GI" width={500} height={500} className="w-full aspect-video rounded-2xl z-[1px] absolute"/>
              <div className="w-full h-full rounded-2xl absolute z-[2px] img1"></div>
            </div>
            <div className={`${'w-[350px] bottom-[200px] right-[400px] rotate-[-20deg]'} absolute aspect-video rounded-2xl z-[1px]`}>
              <Image src={'/assets/img/login/cyber2.jpeg'} alt="Club GI" width={500} height={500} className="w-full aspect-video rounded-2xl z-[1px] absolute"/>
              <div className="w-full h-full rounded-2xl absolute z-[2px] img1"></div>
            </div>
            <div className={`${'w-[350px] bottom-[100px] right-[10px] rotate-[20deg]'} absolute aspect-video rounded-2xl z-[1px]`}>
              <Image src={'/assets/img/login/uiux.webp'} alt="Club GI" width={500} height={500} className="w-full aspect-video rounded-2xl z-[1px] absolute"/>
              <div className="w-full h-full rounded-2xl absolute z-[2px] img1"></div>
            </div>
          </div>
        
        <div className={`w-[60%] h-[70%] z-10 border-2 border-white login ${isSignUp && 'right-panel-active'} relative overflow-hidden drop-shadow-3xl shadow-xl rounded-2xl flex flex-row`}>
          
          {/* Logo Section*/}
          <div className="w-1/2 h-full overlay-container px-8 bg-white drop-shadow-3xl shadow-xl flex flex-col justify-center items-center">
            <div className="w-full h-full overlay flex flex-col justify-center items-center gap-6">
              <Image src='/assets/img/votehub-primary.png' priority alt="Club GI" width={500} height={500} className="w-[200px] drop-shadow-2xl"/>
              
              {!isSignUp ?
              <div className="w-full overlay-panel overlay-left flex justify-center">
                <span className="text-center text-base font-semibold">Welcome, Every vote you cast is a step towards a brighter tech future. Let your voice be the code that transforms our Club.</span>
              </div>
              :<div className="w-full overlay-panel overlay-right flex justify-center">
                <span className="text-center text-base font-semibold">Hello User, Join the Tech Revolution at VoteHub Club GI</span>
              </div>}

              <Image src='/assets/img/clubgi2.png' alt="Club GI" width={500} height={500} className="w-[300px]"/>
            </div>
          </div>

          {/* Login Section*/}
          <form onSubmit={submitLogin} className={`w-1/2 h-full form-container sign-in-container px-8 backdrop-blur-xl  bg-white/30 flex flex-col justify-center items-center gap-5`}>
            <span className="text-white text-center text-[50px] font-bold font-prototype">Login</span>
            {error && <span className="text-googleRed text-center text-xl font-semibold">{loginErrorMsg}</span>}
            <span className="text-center text-white text-xl font-semibold">Enter your login credentials</span>
            <InputField defaultValue={pseudo} setNewValue={setPseudo} type="text" label="Pseudo"/>
            <InputField defaultValue={matricule} setNewValue={setMatricule} type="text" label="Matricule"/>
            <button type="submit" disabled={!valid} onClick={()=>{}} className={`w-[200px] p-3 ${!valid ? 'disabled:bg-[#B8BFCC] disabled:hover:border-none disabled:hover:text-white disabled:hover:bg-[#B8BFCC]':'hover:bg-white hover:text-primary2 hover:border-4 hover:border-primary2 hover:scale-105 hover:ease-in-out'} text-white text-[25px] bg-primary2 rounded-full drop-shadow-lg shadow-lg`}>
                Connect
            </button>
            <span className="text-white text-center">Don&apos;t have an account? <button type="button" onClick={initialiseParams} className="text-primary3">Sign up</button></span>
          </form>

          {/* SignUp Section*/}
          <form onSubmit={submitSignUp} className={`w-1/2 h-full form-container sign-up-container px-8 backdrop-blur-xl  bg-white/30 flex flex-col justify-center items-center gap-5`}>
            <span className="text-white text-center text-[50px] font-bold font-prototype">Create Account</span>
            {error && <span className="text-googleRed text-center text-xl font-semibold">{loginErrorMsg}</span>}
            <span className="text-center text-white text-xl font-semibold">Enter your credentials</span>
            <InputField defaultValue={pseudo} setNewValue={setPseudo} type="text" label="Pseudo"/>
            <InputField defaultValue={matricule} setNewValue={setMatricule} type="text" label="Matricule"/>
            <button type="submit" disabled={!valid} onClick={()=>{}} className={`w-[200px] p-3 ${!valid ? 'disabled:bg-[#B8BFCC] disabled:hover:border-none disabled:hover:text-white disabled:hover:bg-[#B8BFCC]':'hover:bg-white hover:text-primary2 hover:border-4 hover:border-primary2 hover:scale-105 hover:ease-in-out'} text-white text-[25px] bg-primary2 rounded-full drop-shadow-lg shadow-lg`}>
                Register
            </button>
            <span className="text-white text-center">Have an account already? <button type="button" onClick={initialiseParams} className="text-primary3">Login</button></span>
          </form>

        </div>

      </main>
    )
  }
  