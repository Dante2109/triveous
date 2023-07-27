// 'use client'
import { Box, Button, Flex, Heading, SimpleGrid} from '@chakra-ui/react';
import React, { useContext, useEffect, useState } from 'react';
import img from "../../Assets/Images/hamburger.png" 
import Image from 'next/image';
import SingleCard from '../../../components/SingleCard';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { AuthContext } from '../../../components/PrivateAuth/page';
function Page() {
  const [news, setNews] = useState([]);
  const [size,setSize]=useState([1,2,3])
  const {authUser}=useContext(AuthContext)
  const router=useRouter()
  const getNews = async () => {
    try {
      let data = await fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=dcb8d43ac2d44fe9a1f5c115ab467a49");
      data = await data.json();

      setNews(data.articles);
      return data;

    } catch (error) {
      console.log(error);
      return error;
    }
  };
  const push=(content)=>{
    router.push(content)
  }
  useEffect(() => {
    getNews();
  }, []);


console.log(authUser.email)
  return (
    <Box>
      <Flex alignItems={"center"} justifyContent={"space-between"} p="20px">
        <Heading as="h1">News App</Heading>
        <Flex alignItems={"center"} gap="10px">
        <Button><Link href={"/"}>{authUser.email}</Link></Button>
             <Image alt="hamburger Icon" src={img} objectFit="contain" style={{height:"20px",width:"20px"}} ></Image>
            </Flex>
      </Flex>
      <Button marginLeft={"50%"} mb={"10px"} transform="translateX(-50%)" onClick={()=>{size[2]!==3?setSize([1,2,3]):setSize([1,2])}}>Change View</Button>
      <SimpleGrid columns={size} justifyItems={"center"} spacingX={"20px"} spacingY={"40px"} p="10px" backgroundColor={"#cccccc"}>
         {news?.map((el,i)=><SingleCard key={i} {...el} push={push}>hello</SingleCard>)}
      </SimpleGrid>
    </Box>
  );
}

export default Page;
