const ButtonTodo = ({ handleOnsubmit,name }) => {
  return <button disabled={!name} onClick={handleOnsubmit}>save</button>;
};
export default ButtonTodo;
