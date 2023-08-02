import {
  Box,
  Button,
  HStack,
  Heading,
  Input,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { AiFillFacebook, AiFillInstagram, AiOutlineGithub, AiOutlineSend, AiOutlineYoutube } from 'react-icons/ai';
const Footer = () => {
  return (
    <Box bgColor={'blackAlpha.900'} minH={'40'} color={'white'} p={'16'}>
      <Stack direction={['column', 'row']}>
        <VStack alignItems={"stretch"} w={"full"} p={"4"}>
          <Heading size={'md'} textTransform={'uppercase'} textAlign={["center","left"]}>
            Subscribe to letest update
          </Heading>
          <HStack borderBottom={"2px solid white"} py={"2"}>
            <Input placeholder={'Enter Email Here...'} border={"none"} focusBorderColor={"none"}/>
            <Button
              p={'0'}
              colorScheme={'purple'}
              variant={'outline'}
              borderRadius={'0 20px 20px 0'}
            >
              <AiOutlineSend size={25} />
            </Button>
          </HStack>
        </VStack>
          <VStack w={"full"} p={"2"} borderLeft={["none","1px solid white"]} borderRight={["none","1px solid white"]}>
          <Heading textTransform={"uppercase"} textAlign={"center"}> cool Chakra</Heading>
          <Text>All right received</Text>
          </VStack>
          <VStack w={"full"} p={"3"}>
        <Heading size={"md"} textTransform={"uppercase"}>
            Social Media  </Heading>
            <Button variant={"ghost"} colorScheme={"red"}><a href='https://youtube.com' rel="noreferrer" target='_blank'><AiOutlineYoutube size={30}/></a></Button>
            <Button variant={"ghost"} colorScheme={"pink"}><a href='https://instagram.com' rel="noreferrer" target='_blank'><AiFillInstagram size={30}/></a></Button>
            <Button variant={"ghost"} colorScheme={"blue"}><a href='https://facebook.com' rel="noreferrer" target='_blank'><AiFillFacebook size={30}/></a></Button>
            <Button variant={"ghost"} colorScheme={"white"}><a href='https://github.com' rel="noreferrer" target='_blank'><AiOutlineGithub size={30}/></a></Button>
    </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;
