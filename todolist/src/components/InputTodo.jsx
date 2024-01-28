const InputTodo = ({ name, handleOnchange }) => {
  return(
    <>
    <label htmlFor="">Name</label>
   <input type="text" value={name} onChange={handleOnchange} />
   </>
)};
export default InputTodo;
