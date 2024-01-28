const InputTodo = ({ name, handleOnchange }) => {
  return(
    <>
    
   <input className="formcontrol"  placeholder="Name" type="text" value={name} onChange={handleOnchange} />
   </>
)};
export default InputTodo;
