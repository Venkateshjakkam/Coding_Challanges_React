import React, { useState, useEffect, useRef } from "react";
import "./SelectedInput.css";

const SelectedInput = () => {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);

  const inputRef = useRef(null);

  useEffect(() => {
    getUserData();
  }, []);

  async function getUserData() {
    try {
      const response = await fetch(`https://dummyjson.com/users`);
      const userData = await response.json();
      setData(userData.users);
      setFilteredData(userData.users);
    } catch (err) {
      console.error(err);
    }
  }

  const handleChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    const filtered = data.filter((user) =>
      user.username.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredData(filtered);
    setActiveIndex(0);
  };

  const handleSelect = (user) => {
    if (!selectedUsers.some((u) => u.id === user.id)) {
      setSelectedUsers([...selectedUsers, user]);
    }
    setSearchTerm("");
    setFilteredData(data);
    inputRef.current.focus();
  };

  const handleRemove = (userId) => {
    setSelectedUsers(selectedUsers.filter((user) => user.id !== userId));
  };

  const handleKeyDown = (e) => {
    if (e.key === "ArrowDown" && filteredData.length > 0) {
      e.preventDefault();
      setActiveIndex((prev) =>
        prev < filteredData.length - 1 ? prev + 1 : prev
      );
    } else if (e.key === "ArrowUp" && filteredData.length > 0) {
      e.preventDefault();
      setActiveIndex((prev) => (prev > 0 ? prev - 1 : 0));
    } else if (e.key === "Enter" && filteredData[activeIndex]) {
      e.preventDefault();
      handleSelect(filteredData[activeIndex]);
    } else if (
      e.key === "Backspace" &&
      searchTerm === "" &&
      selectedUsers.length > 0
    ) {
      handleRemove(selectedUsers[selectedUsers.length - 1].id);
    }
  };

  return (
    <div className="multiSelectContainer">
      <div className="pillWrapper">
        {selectedUsers.map((user) => (
          <div key={user.id} className="pill">
            <img src={user.image} alt={user.username} />
            <span>{user.username}</span>
            <button onClick={() => handleRemove(user.id)}>×</button>
          </div>
        ))}

        <input
          ref={inputRef}
          type="text"
          value={searchTerm}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          placeholder="Search usernames..."
        />
      </div>

      {searchTerm && filteredData.length > 0 && (
        <div className="dropdownContainer">
          {filteredData.map((user, index) => {
            if (selectedUsers.some((u) => u.id === user.id)) return null;
            return (
              <div
                key={user.id}
                className={`mainSelectedDiv ${
                  index === activeIndex ? "active" : ""
                }`}
                onClick={() => handleSelect(user)}
              >
                <div className="flexSelectedDiv">
                  <p>{user.username}</p>
                  <img src={user.image} alt={user.username} />
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default SelectedInput;
