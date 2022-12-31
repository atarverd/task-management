import { Box, Button, Flex } from "@chakra-ui/react";
import { StatusList } from "../../components/statusList";
import { RootState } from "store/store";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { useNavigate } from 'react-router-dom'



export const Board = () => {
    const {id}=useParams()
    const navigate=useNavigate()
    


    const {board}= useSelector((state:RootState)=>state)
    const currBoard=board.find(b=>b.boardId===id)?.boardTasks
    // console.log(board)
    return (
     <Box>
        <Button onClick={()=>navigate(-1)}>Back</Button>
        <Flex justifyContent='space-around'>
          {currBoard && Object.entries(currBoard).map(el=><StatusList boardTitle={el[0]} boardTask={el[1]}/>)}
        </Flex>
     </Box>
    );
}
