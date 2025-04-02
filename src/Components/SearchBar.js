import React, { useState, useEffect } from "react";

const SearchTitles = () => {
  const [titles, setTitles] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchTitles = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/todos"
        );
        const data = await response.json();
        setTitles(data.map((todo) => todo.title));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchTitles();
  }, []);

  const filteredTitles = titles.filter((title) =>
    title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDelet = () => {
    setSearchTerm("");
  };

  // const handleIndDel = () => {

  // }

  return (
    <div style={{ textAlign: "center", margin: "10px" }}>
      <h2>Search Titles</h2>
      <input
        type="text"
        placeholder="Search for a title..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ width: "50%", padding: "10px", borderRadius: "5px" }}
      />

      {searchTerm && (
        <span
          onClick={handleDelet}
          style={{
            cursor: "pointer",
            position: "absolute",
            right: "390px",
            top: "80px",
          }}
        >
          X
        </span>
      )}

      <div
        style={{
          borderLeft: "1px solid #ddd",
          borderRight: "1px solid #ddd",
          borderBottom: "1px solid #ddd",
          borderRadius: "10px",
          width: "50%",
          textAlign: "center",
          marginLeft: "375px",
        }}
      >
        {searchTerm && (
          <ul style={{ listStyleType: "none", padding: 0 }}>
            {filteredTitles
              .map((title, index) => (
                <div>
                  <span
                    onClick={handleDelet}
                    style={{ cursor: "pointer", marginLeft: "650px" }}
                  >
                    X
                  </span>
                  <li
                    key={index}
                    style={{
                      padding: "5px",
                      textAlign: "left",
                      marginLeft: "20px",
                    }}
                  >
                    {title}
                  </li>
                </div>
              ))
              .splice(0, 4)}
          </ul>
        )}
      </div>
    </div>
  );
};

export default SearchTitles;
