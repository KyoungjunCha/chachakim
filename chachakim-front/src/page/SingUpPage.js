import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../base/BaseHeader.js";
import Menu from "../base/BaseMenu.js";

const SignupPage = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    nickname: '',
    phone: '',
    address: '',
    detailAddress: '',
    photo: null,
    gender: '',
    birthDate: ''
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, photo: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const handleSignUp = () => {
    navigate("/main");
  };

  const labels = {
    username: "아이디",
    password: "비밀번호",
    nickname: "닉네임",
    phone: "전화번호",
    address: "주소",
    detailAddress: "상세주소",
    photo: "사진",
    gender: "성별",
    birthDate: "생년월일"
  };

  return (
    <>
      <Menu />
      <Header />
      <div style={{ display: "flex", justifyContent: "center", padding: "20px", marginLeft: "550px" }}>
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", width: "90%"}}>
          <h2 style={{ width: '100%', textAlign: 'center' }}>회원가입</h2> {/* 추가된 제목 */}
          {Object.entries(formData).map(([key, value]) => (
            <div key={key} style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
              <label style={{ width: '120px', marginRight: '10px', marginTop: '10px' }}>
                {labels[key]}:
              </label>
              <input
                type={key === 'password' ? 'password' : key === 'photo' ? 'file' : key === 'birthDate' ? 'date' : 'text'}
                name={key}
                placeholder={labels[key]}
                value={value}
                onChange={handleChange}
                required
              />
            </div>
          ))}
          <button type="submit" onClick={handleSignUp} style={{ width: '100%', padding: '10px' }}>회원가입</button>
        </form>
      </div>
    </>
  );
};

export default SignupPage;
