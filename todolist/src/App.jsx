import { useState } from "react";
import "./App.css";
import InputTodo from "./components/InputTodo";
import ButtonTodo from "./components/ButtonTodo";
import Notes from "./components/Notes";
import Multiple from "./components/Multiple"

const log ="log"

const Id = () => Math.floor(Math.random() * 1000);
function App() {
  const [name, setName] = useState("");
  const[gender,setGender] = useState("");
  const [list, setList] = useState([]);
 
  const handleOnchange = ({ target: { value } }) =>setName(value);
  const handleOnselect= ({target:{value}})=>setGender(value);
  
  const newData = { name, id: Id(),gender };
  const handleOnsubmit = () => {
  setGender("");
    setName("");
    setList([...list, newData]);
  };
  const handleDelete = (id) =>setList((notes) => notes.filter((n) => n.id !== id));

  return (
    <div className="inner">
       <img class="image-1" src="https://colorlib.com/etc/regform/colorlib-regform-26/images/image-1.png" alt=""></img>
      <h1>wellcome</h1>
      <InputTodo name={name} handleOnchange={handleOnchange} />
      <Multiple  value={gender}  handleOnselect={handleOnselect} handleOnsubmit={handleOnsubmit} />
      <ButtonTodo handleOnsubmit={handleOnsubmit}  name={name}  />
      <Notes handleDelete={handleDelete} list={list} />
    </div>
  );
}

export default App;
