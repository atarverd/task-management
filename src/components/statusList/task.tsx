import { Box,Button,useColorMode,Text } from '@chakra-ui/react'
import { useDispatch } from 'react-redux';
import { deleteTask} from '../../features/boardSlice';
import { AppDispatch } from '../../store/store';
import { useParams } from 'react-router';
import { ModalInput } from 'components/modal';
type TProp={
    title:string;
    boardTitle:string;
    id:string
}

export const Task = ({title,boardTitle,id}:TProp) => {
    const {id:boardId}=useParams()
    const { colorMode } = useColorMode();
    const dispatch: AppDispatch = useDispatch();
    

  return (
    <Box bg={colorMode === 'light'?'gray.300':'teal.900'} borderRadius='8px' p='8px' my='24px' mx='10%'>
        <Text p='5px'>{title}</Text>
        <ModalInput boardId={boardId} boardName={boardTitle} id={id} title={title}/>
        
        <Button ml='5px' size='sm' mt='5px' minW='70px' colorScheme='red' onClick={()=>dispatch(deleteTask({boardId,boardTitle,id}))}>Delete</Button>
    </Box>
  )
}
