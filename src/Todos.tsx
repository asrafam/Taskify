import { Todo } from "./components/model";
import { useEffect } from "react";
import SingleToDo from "./SingleToDo";

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const Todos: React.FC<Props> = ({ todos, setTodos }: Props) => {

  useEffect(() => {}, [todos]);

  return (
    <>
      {todos.map((todo) => (
        <SingleToDo 
        todo={todo}
        todos={todos}
        setTodos={setTodos}/>
      ))}
    </>
  );
};

export default Todos;
