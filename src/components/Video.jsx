import { Button, Heading, Stack, Text, VStack } from '@chakra-ui/react';
import React, { useState } from 'react';

const Video = () => {
    const videoArray = [
        "https://www.youtube.com/embed/7PIji8OubXU",
        "https://www.youtube.com/embed/es4x5R-rV9s",
        "https://www.youtube.com/embed/-0F7iua-37Y",
        "https://www.youtube.com/embed/bDJKs6r___g",
        "https://www.youtube.com/embed/I7Fq4Pmymnc",
        "https://www.youtube.com/embed/zo9dJFo8H8g",
        "https://www.youtube.com/embed/wjc97zpkBO4",
        "https://www.youtube.com/embed/YFhwEJosUsU",
        "https://www.youtube.com/embed/yDfWUoICb-A",
        "https://www.youtube.com/embed/eoTpdTU8nTA" 
      ];

      const [videoSrc, setVideoSrc] = useState(videoArray[6]);
  return (
    <Stack direction={['column', 'row']} h={'100vh'}>
      <VStack w={'full'}>
        <iframe
          width={"100%"}
          height={"100%"}
          src={videoSrc}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
        <VStack
          alignItems={'flex-start'}
          p={'8'}
          width={'full'}
          overflowY={"scroll"}
        >
          <Heading borderRadius={"10px"} p={"2"} bgColor={"purple.400"} color={"white"}>Sample Videos</Heading>
          <Text fontWeight={"bold"}>Demo description, for testing development purpose</Text>
        </VStack>
      </VStack>
      <VStack
        w={['full', 'xl']}
        alignItems={'stretch'}
        p={'8'}
        spacing={'8'}
        overflowY={'auto'}
      >
      {
        videoArray.map((item,index) => (
            <Button variant={"ghost"} colorScheme={'purple'} onClick={() => setVideoSrc(item)}> 
            Video {index+1}
          </Button>
        ))
      }
      </VStack>
    </Stack>
  );
};

export default Video;
