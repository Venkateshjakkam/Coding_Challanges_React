import { useState } from "react";

export default function TodoList() {
  const [todo, setTodo] = useState("");
  const [updateTodo, setUpdateTodo] = useState([]);
  const [isEdit, setIsEdit] = useState(null);

  const handleAdd = (e) => {
    setTodo(e.target.value);
  };

  const handleUpdate = () => {
    if (todo === "") {
      return;
    }
    if (isEdit !== null) {
      const updatedTodos = updateTodo.map((item, index) =>
        index === isEdit ? todo : item
      );
      setUpdateTodo(updatedTodos);
      setIsEdit(null);
    } else {
      setUpdateTodo([...updateTodo, todo]);
    }
    setTodo("");
  };

  const handleEdit = (index) => {
    setTodo(updateTodo[index]);
    setIsEdit(index);
  };

  const handleDelete = (index) => {
    const newTodos = updateTodo.filter((item, i) => i !== index);
    setUpdateTodo(newTodos);
  };

  const handleUpArrow = (index) => {
    if (index === 0) return;
    const newTodosUp = [...updateTodo];

    [newTodosUp[index], newTodosUp[index - 1]] = [
      newTodosUp[index - 1],
      newTodosUp[index],
    ];
    setUpdateTodo(newTodosUp);
  };

  const handleDownArrow = (index) => {
    if (index === updateTodo.length - 1) return;
    const newTodosDown = [...updateTodo];

    [newTodosDown[index], newTodosDown[index + 1]] = [
      newTodosDown[index + 1],
      newTodosDown[index],];
    setUpdateTodo(newTodosDown);
  };

  return (
    <div className="App">
      <input type="text" onChange={handleAdd} value={todo} />
      <button onClick={handleUpdate}>
        {isEdit !== null ? "Update" : "Add"}
      </button>
      {updateTodo.map((value, index) => {
        return (
          <div key={index} style={{ margin: "10px 0" }}>
            <p style={{ display: "inline", marginRight: "10px" }}>{value}</p>
            <button onClick={() => handleEdit(index)}>Edit</button>
            <button onClick={() => handleDelete(index)}>Delete</button>

            {index !== 0 && (
              <button onClick={() => handleUpArrow(index)}> &#129145; </button>
            )}

            {index !== updateTodo.length - 1 && (
              <button onClick={() => handleDownArrow(index)}>&#129147;</button>
            )}
          </div>
        );
      })}
    </div>
  );
}
