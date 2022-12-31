import React, { useState } from 'react'
import { Box, Button, Input, Text, useColorMode,} from '@chakra-ui/react'
import { Task } from './task'
import { AppDispatch } from '../../store/store'
import { addTask } from '../../features/boardSlice'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router'

type TTask={
  title:string;
  id:string;
}

type TProps={
  boardTitle:string;
  boardTask:TTask[]
}

export const StatusList = ({boardTitle,boardTask}:TProps) => {
  const { colorMode } = useColorMode();
  const [newTask,setNewTask]=useState('')
  const [isAddingNew,setIsAddingNew]=useState(false)
  const dispatch: AppDispatch = useDispatch();
  const {id}=useParams()
  const addTasks=()=>{
      if(newTask){
        dispatch(addTask({boardTitle,newTask,id}))
        setNewTask('')
      }
      setIsAddingNew(false)
  }


  return (
    <Box bg={colorMode === 'light'?'gray.200':'gray.900'} minW='25%' textAlign='center'  p='20px' m='20px' borderRadius='15px'>
        <Text>{boardTitle}</Text>
        {boardTask.map(t=><Task title={t.title} boardTitle={boardTitle} id={t.id}/>)}
        {!isAddingNew?<>
        <Button  colorScheme='messenger' onClick={()=>setIsAddingNew(true)}>New Task</Button>
        </>
        :<>
        <Input onChange={(e)=>setNewTask(e.target.value)} />
        <Button colorScheme='messenger' onClick={addTasks} m='10px'>Add</Button>
        <Button colorScheme='red' onClick={()=>setIsAddingNew(false)} m='10px'>Cancel</Button>
        </>}
    </Box>
  )

}
