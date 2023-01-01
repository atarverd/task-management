import { Card,Text, CardBody,useColorMode, CardFooter, Stack, Button, ButtonGroup, Divider, Heading, Box, Tag, TagLabel, Flex } from '@chakra-ui/react'
import { useNavigate } from "react-router-dom";
import { deleteBoard } from 'features/boardSlice';
import { useDispatch } from 'react-redux';

type TProp={
    boardName:string;
    boardId:string;    
    boardDescription:string;
    category:string;
}
export const BoardCard = ({boardName,boardId,boardDescription,category}:TProp) => {

    const dispatch=useDispatch()
    const navigate=useNavigate()
    const { colorMode } = useColorMode();

  return (
    <Card maxW='sm' bg={colorMode === 'light'?'gray.200':'gray.700'}>
  <CardBody onClick={()=>navigate('/board/'+boardId)}>
    <Box
        h={['150px','300px']}
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
      <Button  colorScheme='red' onClick={()=>dispatch(deleteBoard({boardId}))}>
        Delete
      </Button>
    </ButtonGroup>
  </CardFooter>
</Card>
  )
}
