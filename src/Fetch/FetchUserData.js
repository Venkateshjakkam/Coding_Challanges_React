import React, { useEffect, useState } from "react";

const FetchUserData = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    userData();
  }, [loading]);
  async function userData() {
    try {
      let fetchData = await fetch("https://jsonplaceholder.typicode.com/users");
      let response = await fetchData.json();
      setData(response);
      console.log(response);
    } catch (err) {
      console.log("error message:", err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <p>FetchUserData</p>
      {loading ? (
        <p>Loading...</p>
      ) : (
        data.map((item, index) => {
          return (
            <div key={index}>
              <p>{item.name}</p>
            </div>
          );
        })
      )}
    </div>
  );
};

export default FetchUserData;
