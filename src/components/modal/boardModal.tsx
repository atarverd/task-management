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
  import { newBoard } from "../../features/boardSlice";
import { useDispatch } from "react-redux";
import { useState } from 'react';
  
const categoryArr=['education','personal','work']
  export const BoardModal = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [boardInfo,setBoardInfo]=useState({})
    const dispatch=useDispatch()
    const addBoard=()=>{
        dispatch(newBoard({...boardInfo}))
        onClose()
    }
    const handleBoardInfo=(e:any)=>{
        console.log(e)
        setBoardInfo(old=>({...old,[e.target.id]:e.target.value}))
    }

    return (
        <>
        <Button colorScheme='messenger' size='sm' onClick={onOpen}>Add board</Button>
  
        <Modal onClose={onClose} isOpen={isOpen} isCentered>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Create</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
                <Input placeholder='Board Name'  onChange={handleBoardInfo} id='boardName' m='10px'/>
                <Input placeholder='Board Description'  onChange={handleBoardInfo} id='boardDescription' m='10px'/>
                <Select placeholder='Select option' onChange={handleBoardInfo} id='category' m='10px'>
                {categoryArr.map(c=><option value={c} >{c}</option>)}
            </Select>
            </ModalBody>
            <ModalFooter>
                <Button onClick={addBoard} colorScheme='messenger' m='10px'>Add</Button>
                <Button onClick={onClose} colorScheme='red' m='10px'>Close</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }
  