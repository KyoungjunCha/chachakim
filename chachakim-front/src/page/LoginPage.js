import React, { useState } from "react";
import axios from "axios";
import Header from "../base/BaseHeader.js";
import Menu from "../base/BaseMenu.js";

const LoginPage = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const [message, setMessage] = useState(""); // 상태 추가

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:4000/user/login", {
      id: formData.username,
      password: formData.password,
    })
      .then(response => {
        console.log(response.data); // 서버 응답을 콘솔에 출력
        localStorage.setItem('token', response.data.jwt); // JWT 토큰을 로컬 스토리지에 저장
        setMessage("환영합니다."); // 로그인 성공 시 메시지 설정
      })
      .catch(error => {
        console.error("There was an error!", error);
        setMessage("아이디나 비밀번호가 일치하지 않습니다."); // 로그인 실패 시 메시지 설정
      });
  };

  return (
    <>
      <Menu />
      <Header />
      <div style={{ display: "flex", justifyContent: "center", padding: "20px", marginLeft: "550px" }}>
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", width: "100%" }}>
          <h2 style={{ marginLeft: "100px" }}>로그인</h2>
          {message && <p>{message}</p>} {/* 메시지가 있을 경우 화면에 표시 */}
          <div style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
            <label style={{ width: '90px', marginRight: '10px' }}>아이디:</label>
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
