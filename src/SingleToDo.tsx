import { Box, TextField } from "@mui/material";
import { Todo } from "./components/model";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import DoneIcon from "@mui/icons-material/Done";
import React, { useState } from "react";

interface Props {
    todo : Todo;
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  }

const SingleToDo : React.FC<Props> = ({ todo , todos , setTodos} : Props) => {

    const [edit , setEdit ] = useState<Boolean>(false);


    const handleDelete = (id: number) => {
      const filter = todos.filter((todo) => todo.id !== id);
      setTodos(filter);
    };
  

    const handleDone = (id: number) => {
      const done: Todo[] = todos.map((todo) =>
        todo.id === id ? { id: todo.id, todo: todo.todo, isDone: true } : todo
      );
      setTodos(done)
    };
  
    const handleEdit = (id: number) => {
      edit ? setEdit(false) : setEdit(true)
    };

    const handleChange = (id: number , e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const done: Todo[] = todos.map((todo) =>
        todo.id === id ? { id: todo.id, todo: e.currentTarget.value , isDone: todo.isDone } : todo
      );
      setTodos(done)
    };

    const handleSubmit =(e : React.FormEvent)=>{
      e.preventDefault();
      setEdit(false)
    }


    return <Box
    sx={{
      display: "flex",
      width: "50%",
      backgroundColor: "yellow",
      margin: "1rem",
      padding: "1rem",
      justifyContent: "space-between",
    }}
    key={todo.id}
  >
    {edit && !todo.isDone ? 
    <form onSubmit={handleSubmit}>
         <TextField
         sx={{backgroundColor:"white"}}
        value={todo.todo}
        onChange={(event)=>handleChange(todo.id , event )}
        /> 
    </form>
   
    :
    <Box sx={{ textDecoration: todo.isDone ? "line-through" : "none" , fontWeight:"bold" }}>
      {todo.todo}
    </Box>}
    <Box>
      { !todo.isDone ? <EditIcon onClick={() => handleEdit(todo.id)} /> : null}
      <DeleteIcon onClick={() => handleDelete(todo.id)} />
      <DoneIcon onClick={() => handleDone(todo.id)} />
    </Box>
  </Box>
}
 
export default SingleToDo;