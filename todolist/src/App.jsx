import { useState } from "react";
import "./App.css";
const log = "test"

const Id =  ()=>Math.floor(Math.random()*1000);
function App() {
  const [name, setName] = useState("");
  const [list,setList] =useState([]);
  const handleOnchange = ({target:{value}}) =>setName(value);
  const newData = {name,id:Id()}
const handleOnsubmit = ()=>{
  setName("");
  setList([...list,newData]);
}
const handleDelete = (id)=>setList((notes)=>notes.filter((n)=> n.id !== id ));

  return (
    <div>
      <input type="text" value={name} onChange={handleOnchange} />
      <button onClick={handleOnsubmit}>save</button>
      {list.map(({id,name})=>(
        <ul key={id}>
          <li>{name}</li>
          <button onClick={()=>handleDelete(id)}>X</button>
        </ul>

      ))}

    </div>
  )
}

export default App;
