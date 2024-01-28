const Notes = ({ handleDelete,list}) => {
  return (
    <div>
      {list.map(({ id, name,gender }) => (
        <ul key={id}>
          <li>{name}</li>
          <li>{gender}</li>
          <button onClick={() => handleDelete(id)}>X</button>
        </ul>
      ))}
    </div>
  );
};
export default Notes;
