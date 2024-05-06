import React, { useState } from "react";
import Header from "../base/BaseHeader.js";
import Menu from "../base/BaseMenu.js";

const LoginPage = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // 폼 데이터를 콘솔에 출력
    // 여기에 로그인 검증 로직을 추가하면 됩니다.
  };

  return (
    <>
      <Menu />
      <Header />
      <div style={{ display: "flex", justifyContent: "center", padding: "20px", marginLeft: "450px" }}>
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", width: "50%" }}>
          <div style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
            <label style={{ width: '120px', marginRight: '10px' }}>아이디:</label>
            <input
              type="text"
              name="username"
              placeholder="아이디"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>
          <div style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
            <label style={{ width: '120px', marginRight: '10px' }}>비밀번호:</label>
            <input
              type="password"
              name="password"
              placeholder="비밀번호"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
         
            <button type="button" >로그인</button> <button type="button" >아이디 찾기</button>  <button type="button" >비밀번호 찾기</button>
            
           
         
        </form>
      </div>
    </>
  );
};

export default LoginPage;
