import axios from 'axios';

// Axios 인스턴스 생성
const axiosInstance = axios.create({
  baseURL: "http://localhost:4000",
  headers: {
    "Content-Type": "application/json",
  },
});

// 0717
// 요청 인터셉터 설정
axiosInstance.interceptors.request.use(
  config => {
    const token = localStorage.getItem("jwtToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);



// axiosInstance.interceptors.request.use(
//   (config) => {
//     const csrfTokenMeta = document.querySelector("meta[name='_csrf']");
//     const csrfToken = csrfTokenMeta ? csrfTokenMeta.getAttribute("content") : null;

//     if (csrfToken) {
//       console.log("CSRF Token:", csrfToken);
//       config.headers["X-XSRF-TOKEN"] = csrfToken;
//     } else {
//       console.error("CSRF 토큰을 찾을 수 없습니다.");
//     }
    
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
//);

export default axiosInstance;
