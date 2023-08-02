import React from 'react';
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton ,
  Button ,
  useDisclosure,
  VStack,
  HStack,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { BiMenuAltLeft } from 'react-icons/bi';
const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button 
        position={'fixed'}
        top={'16px'}
        left={'4'}
        colorScheme={'purple'}
        p={'0'}
        w={'10'}
        h={'10'}
        borderRadius={'full'}
        zIndex={"sticky"}
        onClick={onOpen}
      >
        <BiMenuAltLeft size={'20'} />
      </Button >
      <Drawer isOpen={isOpen} placement='left' onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
           <DrawerCloseButton />
           <DrawerHeader>Cool chakra</DrawerHeader>
           <DrawerBody>
            <VStack alignItems={"flex-start"}>
                <Button onClick={onClose}  colorScheme={"purple"} variant={"outline"}><Link to={"/"}>Home</Link></Button >
                <Button onClick={onClose} colorScheme={"purple"} variant={"outline"}><Link to={"/videos"}>Videos</Link></Button >
                <Button onClick={onClose} colorScheme={"purple"} variant={"outline"}><Link to={"/videos?category=free"}>Free Videos</Link></Button >
                <Button onClick={onClose} colorScheme={"purple"} variant={"outline"}><Link to={"/upload"}>Upload Video</Link></Button >
            </VStack>
            <HStack position={"absolute"} bottom={"10"} left={"0"} width={"full"} justifyContent={"space-evenly"}>
                <Button onClick={onClose} colorScheme={"purple"}><Link to={"/logIn"}>Log In</Link></Button >
                <Button onClick={onClose} colorScheme={"purple"} variant={"outline"}><Link to={"/signUp"}>Sign Up</Link></Button >
            </HStack>
           
           </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Header;
