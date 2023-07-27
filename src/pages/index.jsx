// 'use client'
import { Text ,Box, Flex, Heading, Input, Button} from '@chakra-ui/react';
import React, { useContext, useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { login, register } from '../Redux/action';
// import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword,onAuthStateChanged, signOut } from "firebase/auth";

import Image from "next/image";
import img from "../Assets/Images/hamburger.png" 


import { auth } from '@/firebase';
import Link from 'next/link';
import { AuthContext } from '../../components/PrivateAuth/page';
export const logout=()=>{
    signOut(auth).then((res)=>{
        console.log("Signed out successfully")
    }).catch(err=>console.log(err))
}
const Login = () => {
    // const dispatch=useDispatch()
    const {User,SetUser,authUser,setAuthUser}=useContext(AuthContext)
    const loading=false
    const init={
        email:"",
        password:""
    }
    const init2={
        email:"",
        password:"",
        cpassword:"",
    }
    const [log,setLog]=useState(init)
    const [reg,setreg]=useState(init2)
    const [state,setState]=useState(false)
    const change=(e)=>{
        setLog({...log,[e.target.name]:e.target.value})
    }
    const changereg=(e)=>{
        setreg({...reg,[e.target.name]:e.target.value})
    }

    

    const logins=()=>{
        if(log.email!="" &&  log.password!="" ){
            signInWithEmailAndPassword(auth, log.email, log.password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user)
                // ...
            })
            .catch((error) => {
                console.log(error)
                const errorCode = error.code;
                const errorMessage = error.message;
            });
        }else{
            alert("please fill all the details")
        }
    }
    const regists=()=>{
        console.log("Afd")
        if(reg.email==="" || reg.password==="" || reg.cpassword!=reg.password ) return
            createUserWithEmailAndPassword(auth, reg.email, reg.password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user)
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
            });
    }
 

  return (
    <>
    <Flex alignItems={"center"} justifyContent={"space-between"} p="20px">
        <Heading as="h1">News App</Heading>
          <Flex alignItems={"center"} gap="10px">
            <Button><Link href={"/news"}>News</Link></Button>
             <Image alt="hamburger Icon" src={img} objectFit="contain" style={{height:"20px",width:"20px"}} ></Image>
            </Flex>
      </Flex>
    <Box width={"500px"} m="auto" boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px" mt="200px" p="10px">
        {authUser?<>
            <Heading textAlign={"center"} my="10px" size="md">Signed in as :{authUser.email}</Heading>
            <Button margin={"auto"} display={"block"} onClick={logout}>Logout</Button>
        </>:<>
        <Flex justifyContent={"space-evenly"}>
            <Box bgColor={state?"white":"black"} p="10px" color={state?"black":"white"} cursor="pointer" onClick={()=>setState(!state)}><Heading size="md">Login</Heading></Box>
            <Box bgColor={state?"black":"white"} p="10px" color={state?"white":"black"} cursor="pointer" onClick={()=>setState(!state)}><Heading size="md">Sign Up</Heading></Box>
        </Flex>
        {!state?<Flex width="80%" m="auto" flexDir={"column"} p="10px" gap="5px">     
                <Input placeholder='email' type='email' onChange={change} value={log.email} name="email" ></Input>
                <Input placeholder='password' type="password"onChange={change} value={log.password} name="password" ></Input>
                <Button onClick={logins} disabled={loading}>{loading?"...Logging":"Login"}</Button>
        </Flex>:<Flex width="80%" m="auto" flexDir={"column"} p="10px" gap="5px">
        <Input placeholder='email' type="email" onChange={changereg} value={reg.email} name="email" ></Input>
        <Input placeholder='password' type="password"onChange={changereg} value={reg.password} name="password" ></Input>
        <Input placeholder='Confirm password' type="password" onChange={changereg} value={reg.cpassword} name="cpassword" ></Input>
        <Button onClick={regists} disabled={loading}>{loading?"...Registering":"Register"}</Button>
            </Flex> }</>}
        
        
    </Box>
        </>
  );
}

export default Login;
