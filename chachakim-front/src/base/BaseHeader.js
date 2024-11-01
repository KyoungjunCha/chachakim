// import React from "react";
// import PropTypes from "prop-types";
// import { useNavigate } from "react-router-dom";
// import "./BaseHeader.css";

// const Header = () => {
//   const navigate = useNavigate();
//   const [searchData, setSearchData] = React.useState("");

//   const isLoggedIn = Boolean(localStorage.getItem("accessToken"));

//   const handleLogout = () =>{
//     localStorage.removeItem("accessToken");
    
//   }

//   const renderBody = () => {
//     return (
//       <div className="BaseHeader-container">
//         <label
//           className="BaseHeader-Title"
//           onClick={() => {
//             navigate("/main");
//           }}
//         >
//           설문조사 사이트
//         </label>
//         <div className="BaseHeader-search-container">
//           <input 
//             placeholder="검색" 
//             className="BaseHeader-search-input"
//             value={searchData}
//             onChange={(e)=>{setSearchData(e.target.value)}}></input>
//           <button 
//             onClick={()=>{navigate(`/search/${searchData}`, {state : {display : "searchPage"}})}}
//             className="BaseHeader-search-button">검색</button>
//         </div>
//         <label className="BaseHeader-username">name</label>
//         <label className="BaseHeader-signup" onClick={() => { navigate("/login");}} >Login</label> {/* 관호 작성  */}
//         <label className="BaseHeader-login" onClick={() => { navigate("/SignupPage");}} >SignUp</label> {/* 관호 작성  */}
//         <label className="BaseHeader-login" onClick={() => { navigate("/MyTakeVSPageTest");}} >MyTakeVSPageTest</label> {/* 관호 작성  */}
//       </div>
//     );
//   };

//   return renderBody();
// };

// export default Header;



//1030
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./BaseHeader.css";
import axios from "axios";

const Header = () => {
  const navigate = useNavigate();
  const [searchData, setSearchData] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");

  useEffect(() => {
    const checkLoginStatus = () => {
      const accessToken = localStorage.getItem("accessToken");
      setIsLoggedIn(Boolean(accessToken));  // accessToken이 존재하면 로그인 상태로 설정

      const storedUsername = localStorage.getItem("username");
      if (storedUsername) {
        setUsername(storedUsername);
      }
    };

    checkLoginStatus();

    // 토큰 변경 감지
    window.addEventListener("storage", checkLoginStatus);

    return () => {
      window.removeEventListener("storage", checkLoginStatus);
    };
  }, []);

  const handleLogout = async () => {
    try {
      // 로그아웃 요청
      await axios.post("http://localhost:4000/logout", {}, { withCredentials: true });
  
      // 성공 시 로컬 스토리지에서 토큰 삭제 및 상태 업데이트
      localStorage.removeItem("accessToken");
      localStorage.removeItem("username"); // 필요 시 추가
      setIsLoggedIn(false);
      setUsername("");
      navigate("/login");  // 로그아웃 후 로그인 페이지로 이동
    } catch (error) {
      console.error("로그아웃 중 오류가 발생했습니다!", error);
    }
  };

  return (
    <div className="BaseHeader-container">
      <label
        className="BaseHeader-Title"
        onClick={() => {
          navigate("/main");
        }}
      >
        설문조사 사이트
      </label>
      <div className="BaseHeader-search-container">
        <input
          placeholder="검색"
          className="BaseHeader-search-input"
          value={searchData}
          onChange={(e) => {
            setSearchData(e.target.value);
          }}
        />
        <button
          onClick={() => {
            navigate(`/search/${searchData}`, {
              state: { display: "searchPage" },
            });
          }}
          className="BaseHeader-search-button"
        >
          검색
        </button>
      </div>
      {isLoggedIn ? (
        <>
          <label className="BaseHeader-username">{username}</label>
          <label className="BaseHeader-login" onClick={handleLogout}>
            Logout
          </label>
          <label
            className="BaseHeader-signup"
            onClick={() => {
              navigate("/profile");
            }}
          >
            My Profile
          </label>
        </>
      ) : (
        <>
          <label
            className="BaseHeader-signup"
            onClick={() => {
              navigate("/login");
            }}
          >
            Login
          </label>
          <label
            className="BaseHeader-login"
            onClick={() => {
              navigate("/SignupPage");
            }}
          >
            SignUp
          </label>
        </>
      )}
    </div>
  );
};

export default Header;
