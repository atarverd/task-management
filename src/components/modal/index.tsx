import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    useDisclosure,
    Input,
    Select
  } from '@chakra-ui/react'
import { editTask,moveTask } from 'features/boardSlice'
import { useState } from 'react';
import { useDispatch } from 'react-redux';

const statuses=['todo','doing','done']

type TProp={
    boardName:string;
    boardId?:string;
    id:string;
    title:string;
}

export const ModalInput = ({boardName,boardId,id,title}:TProp) => {
    const dispatch=useDispatch()
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [newTitle,setNewTitle]=useState(title)
    const [isMoved,setIsMoved]=useState(false)
    const [newBoard,setNewBoard]=useState('')


    const move=()=>{
        dispatch(moveTask({oldBoard:boardName,newBoard,id,boardId}))
        setIsMoved(false)
    }

    const edit=()=>{
        if(newTitle!==title){
            dispatch(editTask({boardName,boardId,newTitle,id}))
        }
        if(isMoved){
            move()
        }
        onClose()
    }
    const handleMove=(e:any)=>{
        setNewBoard(e.target.value)
        setIsMoved(true)
    }

  return (
    <>
      <Button  size='sm' colorScheme='blue' onClick={onOpen}>Edit</Button>

      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Input onChange={(e)=>setNewTitle(e.target.value)} defaultValue={title} m='10px'/>
            <Select placeholder='Select option' onChange={handleMove} m='10px'>
                {statuses.map(s=><option value={s} selected={s===boardName}>{s}</option>)}
            </Select>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose} colorScheme='messenger' m='10px'>Close</Button>
            <Button onClick={edit} colorScheme='red' m='10px'>Save</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
