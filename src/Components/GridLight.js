import { useState } from "react";

const GridLight = () => {
  const [name, setName] = useState("");
  const [todo, setTodo] = useState([]);
  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleSet = () => {
    setTodo([...name]);
    setName("");
  };
  return (
    <div>
      <input type="text" value={name} onChange={handleNameChange} />
      <p>Hai I am At Grid Light...{todo}</p>
      <button onClick={handleSet}>Reset</button>
    </div>
  );
};

export default GridLight;
