import React, { useState, useEffect } from "react";

function AdvanceSearch() {
  const [title, setTitle] = useState([]);
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearch(search);
    }, 3000);

    return () => clearTimeout(handler);
  }, [search]);

  useEffect(() => {
    async function filterSearch() {
      try {
        let response = await fetch(
          `https://jsonplaceholder.typicode.com/users?q=${search}`
        );
        let data = await response.json();
        let filteredData = data.filter((user) =>
          user.name.toLowerCase().includes(debouncedSearch.toLowerCase())
        );
        setTitle(filteredData);
      } catch (err) {
        console.log("You have an error:", err);
      }
    }

    if (debouncedSearch) {
      filterSearch();
    } else {
      setTitle([]);
    }
  }, [debouncedSearch]);

  return (
    <div>
      <h1>I am in AdvanceSearch</h1>
      <input
        type="text"
        placeholder="Search users..."
        onChange={(e) => setSearch(e.target.value)}
      />
      {title.map((item) => (
        <h2 key={item.id}>{item.name}</h2>
      ))}
    </div>
  );
}

export default AdvanceSearch;
