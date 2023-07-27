import React, { useContext, useEffect } from 'react';
import { AuthContext } from './page';
import { useRouter } from 'next/router';
const PrivateRoute = ({children}) => {
    const {User}=useContext(AuthContext)
    const router=useRouter()
    useEffect(()=>{
        if(!User){
            router.push("/")
        }
    },[router,User])
  return (User?children:null)
}

export default PrivateRoute;

