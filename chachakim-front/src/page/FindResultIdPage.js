import React from "react";
import Header from "../base/BaseHeader.js";
import Menu from "../base/BaseMenu.js";

const FindResultIdPage = () => {
  const userId = 'chachakim';  // 예시로 설정된 사용자 ID

  return (
    <>
      <Menu />
      <Header />
      <div style={{ display: "flex", justifyContent: "center", padding: "20px", marginLeft: "450px" }}>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%" }}>
          <h2 style={{marginLeft:  "30px"}}>아이디 찾기 결과</h2>
          <p>회원님의 아이디는 <strong>{userId}</strong>입니다.</p>
          <div style={{ marginTop: '20px' }}>
            <button onClick={() => window.location.href = '/login'} style={{ margin: '10px', padding: '10px 20px',width: "90%" }}>로그인하기</button>
            <button onClick={() => window.location.href = '/reset-password'} style={{ margin: '10px', padding: '10px 20px',width: "90%" }}>비밀번호 찾기</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FindResultIdPage;
