import { RootState } from "../../store/store";
import { useSelector } from "react-redux";
import { Box, Grid, SimpleGrid } from "@chakra-ui/react";
import { BoardCard } from "components/boardCard";

import { BoardModal } from "components/modal/boardModal";
export const BoardList = () => {
   
   
    const {board}= useSelector((state:RootState)=>state)

  return (
    <Box textAlign='center' m='2%'>
        <Grid templateColumns={['repeat(1, 1fr)','repeat(2, 1fr)','repeat(3, 1fr)']} gap={6} mb='2%'>
            {board.map(b=><SimpleGrid><BoardCard boardDescription={b.boardDescription} category={b.category} boardId={b.boardId} boardName={b.boardName}/></SimpleGrid>)}
        </Grid>
        <BoardModal/>
    </Box>
  )
}
