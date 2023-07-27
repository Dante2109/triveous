import { auth } from '@/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import React, { createContext,useEffect,useState } from 'react';

export const AuthContext =createContext({})

export const AuthContextProvider=({children})=>{
  const [User,SetUser]=useState(
false
  )
  const [authUser,setAuthUser]=useState(null)
  useEffect(()=>{
    const authentication=onAuthStateChanged(auth,(user)=>{
        if(user){
            setAuthUser(user)
            SetUser(true)
        }
        else{
            setAuthUser(null)
            SetUser(false)
        }
    })
    return()=>{
      authentication()
    }
},[])
  return <AuthContext.Provider value={{User,SetUser,authUser,setAuthUser}}>{children}</AuthContext.Provider>
}

export default AuthContextProvider;
