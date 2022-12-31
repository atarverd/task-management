import { Card,Text, CardBody, CardFooter, Stack, Button, ButtonGroup, Divider, Heading, Box, Tag, TagLabel, Flex } from '@chakra-ui/react'
import { useNavigate } from "react-router-dom";

type TProp={
    boardName:string;
    boardId:string;    
    boardDescription:string;
    category:string;
}
export const BoardCard = ({boardName,boardId,boardDescription,category}:TProp) => {
    const navigate=useNavigate()
  return (
    <Card maxW='sm' onClick={()=>navigate('/board/'+boardId)}>
  <CardBody>
    <Box
        h='300px'
        borderRadius='8px'
      bgImage={'https://source.unsplash.com/random/300×300/?'+category} bgPosition='center'
					bgRepeat='no-repeat' objectFit='fill' pt='150px' backgroundSize='cover'
    ></Box>
    
    <Stack mt='6' spacing='3' float='left' textAlign='left' w='100%'>
      <Flex justifyContent='space-around'>
      <Heading size='md'>
            {boardName}
        </Heading>
        <Tag size='lg' colorScheme='green' borderRadius='full' mt='10px' >
            <TagLabel>{category}</TagLabel>
        </Tag>
        
        
      </Flex>
      <Text>
        Description: {boardDescription}
      </Text>
    </Stack>
    
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      <Button  colorScheme='red'>
        Delete
      </Button>
    </ButtonGroup>
  </CardFooter>
</Card>
  )
}
