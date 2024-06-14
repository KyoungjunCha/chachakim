import React, { useEffect, useState } from "react";
import axios from "axios";

const MyTakeVSPageTest = () => {
  const [notice, setNotice] = useState(null);
  const [error, setError] = useState(null);

  const apiUrl = '/api';

  useEffect(() => {
    console.log("useEffect called");

    axios.get(`${apiUrl}/notices/2`)
      .then((res) => {
        console.log("Response data:", res.data);
        setNotice(res.data);
      })
      .catch((err) => {
        console.error("Error occurred:", err);
        setError(err.toString());
      });
  }, []);

  return (
    <div style={{ fontSize: "25px", textAlign: "center", marginTop: "100px" }}>
      리액트랍니다다다다다
      {error ? (
        <div>Error: {error}</div>
      ) : (
        notice && (
          <div>
            <h1>{notice.title}</h1>
            <p>{notice.content}</p>
          </div>
        )
      )}
    </div>
  );
};

export default MyTakeVSPageTest;
