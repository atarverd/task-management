import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';
type TTask={
    title:string;
    id:string;
  }
type TState={
    boardId:string;
    boardName:string;
    boardDescription:string;
    category:string;
    boardTasks:{ 
        todo:TTask[];
        doing:TTask[];
        done:TTask[];
    }
}
const boardTasks={
    todo:[],
    doing:[],
    done:[]
}

const initialState:TState[]=[{boardId:'1',boardDescription:'',boardName:'js',category:'education',boardTasks:{
    todo:[{title:'thing 1', id:'0'},{title:'thing 2', id:'1'},{title:'thing 3', id:'2'}],
    doing:[{title:'thing 1', id:'0'},{title:'thing 2', id:'1'},{title:'thing 3', id:'2'}],
    done:[{title:'thing 1', id:'0'},{title:'thing 2', id:'1'},{title:'thing 3', id:'2'}]
}}]

const boardSlice = createSlice({
    name:'board',
    initialState,
    reducers:{
        addTask:(state,action)=>{
            state.map(board=>{
                if(board.boardId===action.payload.id){
                    //@ts-ignore
                    board.boardTasks[action.payload.boardTitle].push({title:action.payload.newTask, id:uuidv4()})
                }
                return board;
            })
        },
        moveTask:(state,action)=>{
            //@ts-ignore
            
            let task=state.find(b=>b.boardId===action.payload.boardId)?.boardTasks[action.payload.oldBoard].find(task=>task.id===action.payload.id)
            console.log(task)
            state.map(board=>{
                if(board.boardId===action.payload.boardId){
                    //@ts-ignore
                    board.boardTasks[action.payload.oldBoard]=board.boardTasks[action.payload.oldBoard].filter(task=>task.id!==action.payload.id)
                    //@ts-ignore
                    board.boardTasks[action.payload.newBoard].push(task)
                }
                return board;
            })
        },
        deleteTask:(state,action)=>{
            state.map(board=>{
                if(board.boardId===action.payload.boardId){
                    //@ts-ignore
                    board.boardTasks[action.payload.boardTitle]=board.boardTasks[action.payload.boardTitle].filter((task:TTask)=>task.id!==action.payload.id)
                }
                return board;
            })
        },
        editTask:(state,action)=>{
            state.map(board=>{
                if(board.boardId===action.payload.boardId){
                    //@ts-ignore
                    board.boardTasks[action.payload.boardName]=board.boardTasks[action.payload.boardName].map(task=>{
                        if(task.id===action.payload.id){
                            task.title=action.payload.newTitle
                            console.log(task.title)
                        }
                        return task
                    })
                }
                return board
            })
        },
        newBoard:(state,action)=>{
            state.push({
                boardId: uuidv4(),
                boardName: action.payload.boardName, 
                category: action.payload.category, 
                boardTasks,
                boardDescription: action.payload.boardDescription,
            })
        }

    }
})

export const {addTask,moveTask,deleteTask,newBoard,editTask}=boardSlice.actions

export default boardSlice.reducer 