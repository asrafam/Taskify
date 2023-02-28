import "./App.css";
import { Box } from "@mui/material";
import SearchhBox from "./components/SearchBox";
import { useEffect, useState } from "react";
import { Todo} from "./components/model";
import Todos from "./Todos";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);
  const [user , setUser] = useState<Object>({})


  // const handleAdd = (e : React.ChangeEvent<HTMLInputElement>)=>{
  // e.preventDefault();
  // }

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      setTodos([...todos, { id: Date.now(), todo: todo, isDone: false }]);
      setTodo("");
    }
  };

  return (
    <Box className="App">
      <span className="heading">Taskify</span>
      <SearchhBox todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <Todos todos={todos} setTodos={setTodos} />
    </Box>
  );
};

export default App;
