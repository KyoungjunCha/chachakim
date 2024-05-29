import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../base/BaseHeader.js";
import Menu from "../base/BaseMenu.js";

const MyPage = () => {
  const userInfo = {
    username: "ckrhksgh",
    email: "ckrhksgh555@naver.com",
    phone: "010-2090-9807",
    birthDate: "1998.12.21",
    gender: "남자"
  };

  const navigate = useNavigate();

  // 회원 탈퇴 처리 함수
  const handleDeleteAccount = () => {
    if (window.confirm("정말로 회원탈퇴를 하시겠습니까?")) {
      alert("회원 탈퇴가 완료되었습니다.");
      // 회원 탈퇴 로직을 구현 (API 호출 등)
      navigate("/main");
    }
  };
  const ChangePwPage = () => {
    navigate("/ChangePwPage");
  };

  // 내가 작성한 글 페이지로 이동
  const handleMyTakeVSPage = () => {
    navigate("/MyTakeVSPage");
  };

  const handleMyTakeSurveyPage = () => {
    navigate("/MyTakeSurveyPage");
  };



  return (
    <>
      <Menu />
      <Header />
      <div style={{ display: "flex", justifyContent: "center", padding: "20px", marginLeft: "550px" }}>
        
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "90%" }}>
          <h2>기본 회원정보</h2>
          <div style={{ display: 'flex', justifyContent: 'flex-start', width: '100%', marginBottom: '20px' }}>
            <div style={{ width: '150px', fontWeight: 'bold' }}>아이디:</div>
            <div>{userInfo.username}</div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'flex-start', width: '100%', marginBottom: '20px' }}>
            <div style={{ width: '150px', fontWeight: 'bold' }}>이메일:</div>
            <div>{userInfo.email}</div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'flex-start', width: '100%', marginBottom: '20px' }}>
            <div style={{ width: '150px', fontWeight: 'bold' }}>전화번호:</div>
            <div>{userInfo.phone}</div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'flex-start', width: '100%', marginBottom: '20px' }}>
            <div style={{ width: '150px', fontWeight: 'bold' }}>생년월일:</div>
            <div>{userInfo.birthDate}</div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'flex-start', width: '100%', marginBottom: '20px' }}>
            <div style={{ width: '150px', fontWeight: 'bold' }}>성별:</div>
            <div>{userInfo.gender}</div>
          </div>
          <button onClick={handleDeleteAccount} style={{ margin: '10px', padding: '10px 20px',width: "90%" }}>회원 탈퇴</button>
          <button onClick={ChangePwPage} style={{ margin: '10px', padding: '10px 20px',width: "90%" }}>비밀번호 변경</button>
          <button onClick={handleMyTakeVSPage} style={{ margin: '10px', padding: '10px 20px', width: "90%" }}>내가 참여한 VS</button>
          <button onClick={handleMyTakeSurveyPage} style={{ margin: '10px', padding: '10px 20px', width: "90%" }}>내가 참여한 설문조사</button>
        </div>
      </div>
    </>
  );
};

export default MyPage;
