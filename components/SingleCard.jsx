import { Box,Flex,Image,Text} from '@chakra-ui/react';
import { transform } from 'framer-motion';
// import Image from 'next/image';
import React from 'react';

const SingleCard = (props) => {

  return (
    
      <Box onClick={()=>{props.push(`news/${props.title}`)}}_hover={{transform:"scale(1.05)"}} transition={".2s ease-in"} borderRadius="6px" backgroundColor={"white"} w="100%" boxShadow="rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px">
        <Image borderRadius="6px 6px 0px 0px" src={props.urlToImage}  objectFit={"cover"} loading='lazy' w="100%" h="300px"  ></Image>
        <Box p="10px">
        <Flex justifyContent={"space-between"} >
          <Text fontWeight={800}>{props.title}</Text>
          <Text w="30%" fontSize={"13px"} textAlign={"end"}>{props.publishedAt.split("T")[0]}</Text>
          </Flex>
          <br />
          <Text textOverflow={"ellipsis"}>{props.content}</Text>
        </Box>
      </Box>
    
  );
}

export default SingleCard;
