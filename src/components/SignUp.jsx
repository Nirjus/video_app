import { Avatar, Button, Container, Heading, Input, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const SignUp = () => {
  return (
    <Container maxW={'container.xl'} h={'100vh'} p={'16'}>
      <form action="">
        <VStack
          alignItems={'stretch'}
          spacing={'8'}
          w={["full" ,"96"]}
          m={'auto'}
          my={'16'}
        >
          <Heading alignSelf={"center"}>COOL CHAKRA</Heading>
          <Avatar alignSelf={"center"} boxSize={"32"}/>
          <Input
            required
            placeholder={'Name'}
            type={'name'}
            focusBorderColor={'purple.500'}
          />
          <Input
            required
            placeholder={'Email'}
            type={'email'}
            focusBorderColor={'purple.500'}
          />
          <Input
            required
            placeholder={"password"}
            type={"password"}
            focusBorderColor={'purple.500'}
          />

          <Button colorScheme={"purple"} type={"submit"}> 
           Sign Up
          </Button>

          <Text textAlign={"right"}>Allready Sign Up?{" "}
          <Button variant={"link"} colorScheme={"purple"}>
            <Link to={"/logIn"}>Log In</Link>
          </Button>  </Text>
        </VStack>
      </form>
    </Container>
  )
}

export default SignUp