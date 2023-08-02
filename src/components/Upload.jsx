import { Button, Container, HStack, Input, VStack,Image } from '@chakra-ui/react'
import React from 'react'
import { AiOutlineCloudUpload } from 'react-icons/ai'
import img from "../assets/happy moment.jpg"
const Upload = () => {
  return (
    <Container maxW={"container.xl"} h={"100vh"} p={"16"}>
      <VStack color={"purple.500"} h={"full"} justifyContent={"center"}>
        <Image src={img} borderRadius={"10%"} position={"absolute"} height={"80vh"} />
       <Button size={"20vmax"} colorScheme={"purple"} borderRadius={"50%"} > <AiOutlineCloudUpload size={"20vmax"}/></Button>
        <form>
            <HStack>
                <Input  required type={"file"} css={{
                    "&::file-selector-button":{
                        border:"none",
                        width:"calc(100% + 36px)",
                        height:"100%",
                        marginLeft:"-18px",
                        color:"purple",
                        backgroundColor:"white",
                        cursor:"pointer"
                    }
                }}></Input>
                <Button colorScheme={"purple"} type={"submit"}>Upload</Button>
            </HStack>
        </form>
      </VStack>
    </Container>
  )
}

export default Upload