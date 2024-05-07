import React, { useState } from "react";
import Header from "../base/BaseHeader.js";
import Menu from "../base/BaseMenu.js";

const FindPwPage = () => {
  const [userId, setUserId] = useState('');
  const [phone, setPhone] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [codeSent, setCodeSent] = useState(false);
  const [passwordReset, setPasswordReset] = useState(false);

  const handleUserIdChange = (e) => {
    setUserId(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handleVerificationCodeChange = (e) => {
    setVerificationCode(e.target.value);
  };

  const sendVerificationCode = (e) => {
    e.preventDefault();
    setCodeSent(true);
    alert("인증번호가 발송되었습니다.");
  };

  const verifyCodeAndResetPassword = (e) => {
    e.preventDefault();
    setPasswordReset(true);
    alert("인증번호가 확인되었습니다. 비밀번호를 재설정해주세요.");
  };

  return (
    <>
      <Menu />
      <Header />
      <div style={{ display: "flex", justifyContent: "center", padding: "20px", marginLeft: "450px" }}>
        <form style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", width: "50%" }}>
          <div style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
            <label style={{ width: '75px', marginRight: '10px' }}>아이디:</label>
            <input
              type="text"
              name="userId"
              placeholder="아이디 입력"
              value={userId}
              onChange={handleUserIdChange}
              required
              style={{ flex: 1 }}
            />
          </div>
          <div style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
            <label style={{ width: '120px', marginRight: '10px' }}>전화번호:</label>
            <input
              type="tel"
              name="phone"
              placeholder="전화번호 입력"
              value={phone}
              onChange={handlePhoneChange}
              required
              style={{ flex: 1 }}
            />
            <button onClick={sendVerificationCode} style={{ marginLeft: '10px' }}>인증번호 발송</button>
          </div>
          {codeSent && (
            <div style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
              <label style={{ width: '120px', marginRight: '10px' }}>인증번호:</label>
              <input
                type="text"
                placeholder="인증번호 입력"
                value={verificationCode}
                onChange={handleVerificationCodeChange}
                required
                style={{ flex: 1 }}
              />
              <button onClick={verifyCodeAndResetPassword} style={{ marginLeft: '10px' }}>인증번호 확인</button>
            </div>
          )}
          {passwordReset && (
            <div style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
              <label style={{ width: '120px', marginRight: '10px' }}>새 비밀번호:</label>
              <input
                type="password"
                placeholder="새 비밀번호 입력"
                required
                style={{ flex: 1 }}
              />
              <button style={{ marginLeft: '10px' }}>비밀번호 재설정</button>
            </div>
          )}
        </form>
      </div>
    </>
  );
};

export default FindPwPage;
