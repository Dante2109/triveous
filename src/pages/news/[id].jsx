// import { useRouter } from 'next/navigation';
// `use client`
// import React from 'react';
import img from "../../Assets/Images/hamburger.png" 
import { Box,Heading,Flex, Text, Link } from "@chakra-ui/react";
import { Image as Image2 } from "@chakra-ui/react";
import Image from "next/image";
const SingleNews = ({data}) => {
  console.log(data)
    return (
      <Box>
        <Flex alignItems={"center"} justifyContent={"space-between"} p="20px" boxShadow="rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;">
        <Heading as="h1">News App</Heading>
          <Image alt="hamburger Icon" src={img} objectFit="contain" style={{height:"20px",width:"20px"}} ></Image>
        </Flex>
        <Box my="50px" py="50px" w="100%" bgColor="#aca7a6" boxShadow="rgba(14box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;9, 157, 165, 0.2) 0px 8px 24px;">
          <Flex flexDir={"column"} gap="30px" w="90%" margin={"auto"} bgColor="#aca7a6">

          <Heading  size={["lg","xl","2xl"]} >{data.title}</Heading>
          <Box>
          <Image2   margin="auto" w="100%" objectFit={"cover"} h="60vh" src={data.urlToImage}></Image2>
          <Text  _after={{content:`"Published at: ${data.publishedAt.split("T")[0]}"`,display:"block",textAlign:"right",fontSize:"15px",color:"black"}}></Text>
          </Box>
          <Heading size={["sm","md","lg"]}>{data.content}</Heading>
          <Link href={data.url}>Follow the link for full news</Link>
        </Flex>
          </Box>
      </Box>
    );
  }
  
  
  export async function getServerSideProps(context){
    const id=context.params.id
    let data= await fetch(`https://newsapi.org/v2/everything?q=${id}&apiKey=b40e4eca05bf41fc857e110bc4a52f97`);
    data=await data.json();
    return {
        props:{
            data:data.articles[0]
        }
    }
    
}
export default SingleNews;