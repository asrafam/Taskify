import { InputAdornment, TextField  } from "@mui/material";
import Button from "@mui/material/Button";

interface Props{
    todo : string,
    setTodo : React.Dispatch<React.SetStateAction<string>>,
    handleAdd : (e: React.FormEvent) => void
}

const SearchhBox : React.FC<Props> = ({todo , setTodo , handleAdd }:Props) => {
  return (
    <form style={{width:"60%"}} onSubmit={handleAdd}>
      <TextField
        sx={{ width: "100%" , transition : "0.2s"}}
        className="inputRounded"
        placeholder="Enter a Task"
        variant="outlined"
        value={todo}
        onChange={(e)=>setTodo(e.target.value)}
        InputProps={{
            startAdornment : (<InputAdornment position="start"></InputAdornment>),
            endAdornment:(<Button  sx={{ border: "none", borderRadius: '50px' , height:"7vh" , width:"3vw" , margin:1 }}  variant="contained" type="submit">Go</Button>)
        }}
      />
      
    </form>
  );
};

export default SearchhBox;
