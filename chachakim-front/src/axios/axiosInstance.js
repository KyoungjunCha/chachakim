import axios from 'axios';

// Axios 인스턴스 생성
const axiosInstance = axios.create({
  baseURL: "http://localhost:4000",
  headers: {
    "Content-Type": "application/json",
  },
});

// 요청 인터셉터 설정
axiosInstance.interceptors.request.use(
  config => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`; // Authorization 헤더에 JWT 토큰 추가
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

// 응답 인터셉터 설정
axiosInstance.interceptors.response.use(
  response => {
    return response;
  },
  async error => {
    const originalRequest = error.config;

    if (error.response && error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      const refreshToken = localStorage.getItem("refreshToken");

      if (refreshToken) {
        try {
          // 리프레시 토큰이 설정된 경우 새 액세스 토큰을 요청하지 않고 직접 기존 요청을 다시 시도
          const res = await axiosInstance.post('/login', {}, {
            headers: {
              'Authorization': `Bearer ${refreshToken}` // 리프레시 토큰으로 인증
            }
          });

          if (res.status === 200) {
            let newAccessToken = res.headers['authorization'] || res.data.accessToken; // 새로운 액세스 토큰
            if (newAccessToken && newAccessToken.startsWith('Bearer ')) {
              newAccessToken = newAccessToken.split(' ')[1];
            }

            localStorage.setItem("accessToken", newAccessToken); // 새로운 액세스 토큰 저장

            // 헤더를 업데이트하여 원래의 요청을 다시 실행
            originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
            return axiosInstance(originalRequest);
          }
        } catch (err) {
          console.error("리프레시 토큰을 사용한 인증 실패", err);
          localStorage.removeItem("accessToken");
          localStorage.removeItem("refreshToken");
          window.location.href = "/login"; // 로그아웃 처리
        }
      } else {
        window.location.href = "/login"; // 리프레시 토큰이 없는 경우 로그아웃 처리
      }
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
