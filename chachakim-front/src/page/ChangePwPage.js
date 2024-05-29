import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../base/BaseHeader.js";
import Menu from "../base/BaseMenu.js";

const ChangePwPage = () => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [presentPassword, setPresentPassword] = useState('');

  const navigate = useNavigate();

  const handlePresentPasswordChange = (e) => {
    setPresentPassword(e.target.value);
  };

  const handleNewPasswordChange = (e) => {
    setNewPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const resetPassword = (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      alert("비밀번호가 일치하지 않습니다. 다시 입력해 주세요.");
    } else {
      alert("비밀번호가 성공적으로 변경되었습니다.");
      navigate("/main");
    }
  };

  return (
    <>
      <Menu />
      <Header />
      <div style={{ display: "flex", justifyContent: "center", padding: "20px", marginLeft: "450px" }}>
      
        <form style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", width: "85%" }}>
        <h2 style = {{marginLeft: "100px"}}>비밀번호 변경</h2>
        <div style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
            <label style={{ width: '120px', marginRight: '10px' }}>현재 비밀번호:</label>
            <input
              type="password"
              placeholder="현재 비밀번호 입력"
              value={presentPassword}
              onChange={handlePresentPasswordChange}
              required
            />
          </div>

          <div style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
            <label style={{ width: '120px', marginRight: '10px' }}>새 비밀번호:</label>
            <input
              type="password"
              placeholder="새 비밀번호 입력"
              value={newPassword}
              onChange={handleNewPasswordChange}
              required
            />
          </div>

          <div style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
            <label style={{ width: '120px', marginRight: '10px' }}>비밀번호 확인:</label>
            <input
              type="password"
              placeholder="새 비밀번호 확인"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
              required
            />
          </div>
          <button onClick={resetPassword} style={{ marginLeft: '10px' }}>비밀번호 변경</button>
        </form>
      </div>
    </>
  );
};

export default ChangePwPage;
