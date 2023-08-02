import { Box, Container, Heading, Image, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../assets/VR i amge.jpg';
import img2 from '../assets/joystick1.jpg';
import img3 from '../assets/joystick2.jpg';
import img4 from '../assets/Neon Sun.jpg';
import img5 from '../assets/detective.png';
const Home = () => {
  return (
    <Box> 
        <MyCarousel/> 
        <Container maxWidth={"container.xl"} minH={"100vh"} p={"16"}>
        <Heading textTransform={"uppercase"} py={"2"} w={"fit-content"} borderBottom={"2px solid"} m={"auto"}>Srvices</Heading>
        <Stack h={"full"} p={"4"} alignItems={"center"} direction={["column","row"]}>
       <Image src={img5} h={["40","400"]} filter={"hue-rotate(-100deg)"}/>

       <Text letterSpacing={"widest"} lineHeight={"190%"} p={["4","16"]} textAlign={'center'}> 
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Est optio minus facere. Culpa repellendus tempore velit rem totam nisi reprehenderit amet ipsum, officia suscipit architecto aperiam. Officia eos repellendus consequatur.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga odit vel qui corporis fugit quasi similique, praesentium sapiente perferendis dicta aspernatur quis minima, quisquam sed voluptatum asperiores maxime fugiat. At.
       </Text>
        </Stack>
        </Container>
    </Box>
     
  );
};
const headingOptions={
    position:"absolute",
    top:"50%",
    left:"25%",
    padding:"4px",
    textTransform:"uppercase"
}
const MyCarousel = () => (
  <Carousel
    autoPlay
    infiniteLoop
    interval={1000}
    showStatus={false}
    showThumbs={false}
    showArrows={false}
  >
    <Box w={'full'} h={'100vh'}>
      <Image src={img1} alt="VR image" h={"full"} w={"full"} objectFit={"cover"}/>
      <Heading bgColor={'blackAlpha.100'} size={"4xl"} color={"white"} {...headingOptions}>
        Future Technology
      </Heading>
    </Box>
    <Box w={'full'} h={'100vh'}>
      <Image src={img2} alt="Joystick" h={"full"} w={"full"} objectFit={"cover"}/>
      <Heading bgColor={'blackAlpha.600'} size={"3xl"} color={'white'} {...headingOptions}>
        Watch the future
      </Heading>
    </Box>
    <Box w={'full'} h={'100vh'}>
      <Image src={img3} alt="Joystick" h={"full"} w={"full"} objectFit={"cover"}/>
      <Heading bgColor={'blackAlpha.600'} size={"4xl"} color={'white'} {...headingOptions}>
        gaming is future
      </Heading>
    </Box>
    <Box w={'full'} h={'100vh'}>
      <Image src={img4} alt="Joystick" h={"full"} w={"full"} objectFit={"cover"}/>
      <Heading bgColor={'whiteAlpha.600'} size={"4xl"} color={"black"} {...headingOptions}>
        neon Sun Cool
      </Heading>
    </Box>
  </Carousel>
);

export default Home;
