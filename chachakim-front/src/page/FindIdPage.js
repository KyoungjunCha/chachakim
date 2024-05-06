import React, { useState } from "react";
import Header from "../base/BaseHeader.js";
import Menu from "../base/BaseMenu.js";

const FindIdPage = () => {
  const [phone, setPhone] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [codeSent, setCodeSent] = useState(false);

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handleVerificationCodeChange = (e) => {
    setVerificationCode(e.target.value);
  };

  const sendVerificationCode = (e) => {
    e.preventDefault();
    setCodeSent(true);
    // 이 부분에 실제 인증번호를 보내는 로직을 구현
    alert("인증번호가 발송되었습니다.");
  };

  const verifyCodeAndFindId = (e) => {
    e.preventDefault();
    // 인증번호 확인 후 아이디 찾기 로직 구현
    alert("아이디를 찾는 로직을 구현해야 합니다.");
  };

  return (
    <>
      <Menu />
      <Header />
      <div style={{ display: "flex", justifyContent: "center", padding: "20px", marginLeft: "450px" }}>
        <form style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", width: "50%" }}>
          <div style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
            <label style={{ width: '120px', marginRight: '10px' }}>
              전화번호:
            </label>
            <input
              type="tel"
              name="phone"
              placeholder="전화번호 입력"
              value={phone}
              onChange={handlePhoneChange}
              required
            />
            <button onClick={sendVerificationCode} style={{ marginLeft: '10px' }}>인증번호 발송</button>
          </div>
          {codeSent && (
            <div style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
              <label style={{ width: '120px', marginRight: '10px' }}>
                인증번호:
              </label>
              <input
                type="text"
                placeholder="인증번호 입력"
                value={verificationCode}
                onChange={handleVerificationCodeChange}
                required
              />
              <button onClick={verifyCodeAndFindId} style={{ marginLeft: '10px' }}>인증번호 확인</button>
            </div>
          )}
        </form>
      </div>
    </>
  );
};

export default FindIdPage;
