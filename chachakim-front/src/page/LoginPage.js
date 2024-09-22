// import React, { useState } from "react";
// import axiosInstance from "../axios/axiosInstance";
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
//       const res = await axiosInstance.post("/login", {
//         id: formData.id,
//         password: formData.password
//       });

//       // 서버 응답에서 헤더 확인
//       const accessToken = res.headers['Authorization'];  
//       const refreshToken = res.headers['Refresh-Token'];

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
import React, { useState } from "react";
import axios from "axios"; // axios 직접 사용
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
      const res = await axios.post("http://localhost:4000/login", {
        id: formData.id,
        password: formData.password
      });

      // 서버 응답에서 헤더 확인
      const accessToken = res.headers['authorization'];  
      const refreshToken = res.headers['refresh-token'];

      console.log("받은 JWT 토큰:", accessToken);
      console.log("받은 리프레시 토큰:", refreshToken);
  
      if (accessToken && refreshToken) {
        localStorage.setItem("accessToken", accessToken); 
        localStorage.setItem("refreshToken", refreshToken); 
        navigate("/main");
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