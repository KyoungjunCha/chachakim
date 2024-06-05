import React, { useEffect, useState } from "react";
import axios from "axios";

const MyTakeVSPageTest = () => {
  const [notice, setNotice] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log("useEffect called"); // useEffect가 호출될 때마다 로그 출력
    axios.get("/notice/delete")
      .then((res) => {
        console.log(res.data); // 반환된 데이터를 콘솔에 출력
        setNotice(res.data);
      })
      .catch((err) => {
        setError(err.toString());
      });
  }, []); // 의존성 배열이 빈 배열이면 마운트 시에만 실행됩니다.

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
