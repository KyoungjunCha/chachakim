import React, { useState } from "react";
import axios from "axios";
import Header from "../base/BaseHeader.js";
import Menu from "../base/BaseMenu.js";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [formData, setFormData] = useState({
    id: '',
    password: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("로그인 요청 데이터:", formData);

    axios.post("http://localhost:4000/user/login", {
      id: formData.id,
      password: formData.password
    })
    .then(response => {
      console.log("서버 응답:", response.data); // 서버 응답을 콘솔에 출력
      if (response.data) {
        navigate("/home");
      } else {
        alert("로그인 실패");
      }
    })
    .catch(error => {
      console.error("There was an error!", error);
    });
  };

  return (
    <>
      <Menu />
      <Header />
      <div style={{ display: "flex", justifyContent: "center", padding: "20px", marginLeft: "550px" }}>
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", width: "100%" }}>
          <h2 style={{ marginLeft: "100px" }}>로그인</h2>
          <div style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
            <label style={{ width: '90px', marginRight: '10px' }}>아이디:</label>
            <input
              type="text"
              name="id"
              placeholder="아이디"
              value={formData.id}
              onChange={handleChange}
              required
            />
          </div>
          <div style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
            <label style={{ width: '90px', marginRight: '10px' }}>비밀번호:</label>
            <input
              type="password"
              name="password"
              placeholder="비밀번호"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" style={{ margin: '10px', padding: '10px 20px', width: "90%" }}>로그인</button>
          <button type="button" style={{ margin: '10px', padding: '10px 20px', width: "90%" }}>아이디 찾기</button>
          <button type="button" style={{ margin: '10px', padding: '10px 20px', width: "90%" }}>비밀번호 찾기</button>
        </form>
      </div>
    </>
  );
};

export default LoginPage;
