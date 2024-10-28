

// // export default LoginPage;
// import React, { useState } from "react";
// import axios from "axios"; // axios 직접 사용
// import Header from "../base/BaseHeader";
// import Menu from "../base/BaseMenu";
// import { useNavigate } from "react-router-dom";

// const LoginPage = () => {
//   const [formData, setFormData] = useState({
//     id: '',
//     password: ''
//   });

//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
  
//     console.log("로그인 요청 데이터:", formData);
  
//     try {
//       const res = await axios.post("http://localhost:4000/login", {
//         id: formData.id,
//         password: formData.password
//       },{
//         withCredentials: true
//       });

//       // 서버 응답에서 헤더 확인
//       const accessToken = res.headers['authorization'];  
//       const refreshToken = res.headers['refresh-token'];

//       console.log("받은 JWT 토큰:", accessToken);
//       console.log("받은 리프레시 토큰:", refreshToken);
  
//       if (accessToken && refreshToken) {
//         localStorage.setItem("accessToken", accessToken); 
//         localStorage.setItem("refreshToken", refreshToken); 
//         navigate("/main");
//       } else {
//         alert("로그인 실패: 서버에서 토큰을 받지 못했습니다.");
//       }
//     } catch (error) {
//       console.error("로그인 중 오류가 발생했습니다!", error);
//       if (error.response && error.response.status === 403) {
//         alert("접근이 거부되었습니다. 자격 증명을 다시 확인하세요.");
//       } else {
//         alert("서버에 문제가 발생했습니다. 나중에 다시 시도하세요.");
//       }
//     }
//   };

//   return (
//     <>
//       <Menu />
//       <Header />
//       <div style={{ display: "flex", justifyContent: "center", padding: "20px", marginLeft: "550px" }}>
//         <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", width: "100%" }}>
//           <h2 style={{ marginLeft: "100px" }}>로그인</h2>
//           <div style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
//             <label style={{ width: '90px', marginRight: '10px' }}>아이디:</label>
//             <input
//               type="text"
//               name="id"
//               placeholder="아이디"
//               value={formData.id}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
//             <label style={{ width: '90px', marginRight: '10px' }}>비밀번호:</label>
//             <input
//               type="password"
//               name="password"
//               placeholder="비밀번호"
//               value={formData.password}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <button type="submit" style={{ margin: '10px', padding: '10px 20px', width: "90%" }}>로그인</button>
//           <button type="button" style={{ margin: '10px', padding: '10px 20px', width: "90%" }}>아이디 찾기</button>
//           <button type="button" style={{ margin: '10px', padding: '10px 20px', width: "90%" }}>비밀번호 찾기</button>
//         </form>
//       </div>
//     </>
//   );
// };

// export default LoginPage;


// 1025
// import React, { useState } from "react";
// import axios from "axios"; // axios 직접 사용
// import Header from "../base/BaseHeader";
// import Menu from "../base/BaseMenu";
// import { useNavigate } from "react-router-dom";

// const LoginPage = () => {
//   // 로그인 폼 데이터 상태
//   const [formData, setFormData] = useState({
//     id: '',
//     password: ''
//   });

//   const navigate = useNavigate();

//   // input 값이 변경될 때 상태 업데이트
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({ ...prev, [name]: value }));
//   };

//   // 로그인 폼 제출 시 처리
//   const handleSubmit = async (e) => {
//     e.preventDefault();
  
//     console.log("로그인 요청 데이터:", formData);
  
//     try {
//       // 로그인 API 호출
//       const res = await axios.post("http://localhost:4000/login", {
//         id: formData.id,
//         password: formData.password
//       }, {
//         withCredentials: true  // 쿠키 전송 허용
//       });

//       // 서버 응답에서 헤더 확인 (accessToken)
//       const accessToken = res.headers['authorization'];  // 헤더에서 accessToken 가져옴

//       console.log("받은 JWT Access Token:", accessToken);

//       // accessToken이 존재하는 경우 로컬스토리지에 저장
//       if (accessToken) {
//         localStorage.setItem("accessToken", accessToken); 
//         navigate("/main");  // 로그인 성공 시 메인 페이지로 이동
//       } else {
//         alert("로그인 실패: 서버에서 Access Token을 받지 못했습니다.");
//       }
//     } catch (error) {
//       console.error("로그인 중 오류가 발생했습니다!", error);
//       // 서버에서 403 오류가 발생한 경우
//       if (error.response && error.response.status === 403) {
//         alert("접근이 거부되었습니다. 자격 증명을 다시 확인하세요.");
//       } else {
//         alert("서버에 문제가 발생했습니다. 나중에 다시 시도하세요.");
//       }
//     }
//   };

//   return (
//     <>
//       <Menu />
//       <Header />
//       <div style={{ display: "flex", justifyContent: "center", padding: "20px", marginLeft: "550px" }}>
//         <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", width: "100%" }}>
//           <h2 style={{ marginLeft: "100px" }}>로그인</h2>
//           <div style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
//             <label style={{ width: '90px', marginRight: '10px' }}>아이디:</label>
//             <input
//               type="text"
//               name="id"
//               placeholder="아이디"
//               value={formData.id}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
//             <label style={{ width: '90px', marginRight: '10px' }}>비밀번호:</label>
//             <input
//               type="password"
//               name="password"
//               placeholder="비밀번호"
//               value={formData.password}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <button type="submit" style={{ margin: '10px', padding: '10px 20px', width: "90%" }}>로그인</button>
//           <button type="button" style={{ margin: '10px', padding: '10px 20px', width: "90%" }}>아이디 찾기</button>
//           <button type="button" style={{ margin: '10px', padding: '10px 20px', width: "90%" }}>비밀번호 찾기</button>
//         </form>
//       </div>
//     </>
//   );
// };

// export default LoginPage;



//1025 api 개선


// LoginPage.js

import React, { useState } from "react";
import api from "../axios/axiosInstance"; // 인터셉터가 설정된 Axios 인스턴스 가져오기
import Header from "../base/BaseHeader";
import Menu from "../base/BaseMenu";
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

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    console.log("로그인 요청 데이터:", formData);
  
    try {
      // 로그인 API 호출
      const res = await api.post("/login", formData);

      // 서버 응답에서 헤더 확인 (accessToken)
      const accessToken = res.headers['authorization'];  

      console.log("받은 JWT Access Token:", accessToken);
  
      if (accessToken) {
        localStorage.setItem("accessToken", accessToken); 
        navigate("/main");  // 로그인 성공 시 메인 페이지로 이동
      } else {
        alert("로그인 실패: 서버에서 토큰을 받지 못했습니다.");
      }
    } catch (error) {
      console.error("로그인 중 오류가 발생했습니다!", error);
      if (error.response && error.response.status === 403) {
        alert("접근이 거부되었습니다. 자격 증명을 다시 확인하세요.");
      } else {
        alert("서버에 문제가 발생했습니다. 나중에 다시 시도하세요.");
      }
    }
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